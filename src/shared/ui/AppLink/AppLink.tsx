import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  variant?: AppLinkVariant;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    children,
    variant = AppLinkVariant.PRIMARY,
    to,
    className,
    ...otherProps
  } = props;

  return (
    <Link
      {...otherProps}
      to={to}
      className={classNames(styles.block, {}, [className, styles[variant]])}
    >
      {children}
    </Link>
  );
};
