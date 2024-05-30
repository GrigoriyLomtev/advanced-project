import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode, memo } from 'react';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={classNames(styles.block, {}, [className])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </div>
  );
});
