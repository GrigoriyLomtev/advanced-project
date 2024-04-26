import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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
}

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    variant,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
  };

  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      className={classNames(styles.btn, mods, [className, styles[variant], styles[size]])}
    >
      {children}
    </button>
  );
}
