import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode, memo } from 'react';
import styles from './Card.module.scss';

export enum CardVariant {
  NORMAL = 'normal',
  OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariant
}

export const Card = memo((props: CardProps) => {
  const {
    className, children, variant = CardVariant.NORMAL, ...otherProps
  } = props;

  return (
    <div
      className={classNames(styles.block, {}, [className, styles[variant]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </div>
  );
});
