import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export enum VariantButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantButton;
}

export function Button(props: ButtonProps) {
  const {
    className, children, variant, ...otherProps
  } = props;
  return (
    <button
      type="button"
      {...otherProps}
      className={classNames(styles.btn, {}, [className, styles[variant]])}
    >
      {children}
    </button>
  );
}
