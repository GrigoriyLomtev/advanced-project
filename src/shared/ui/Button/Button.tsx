import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import styles from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = ButtonVariant.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      disabled={disabled}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      className={classNames(styles.btn, mods, [className, styles[variant], styles[size]])}
    >
      {children}
    </button>
  );
});
