import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum VariantButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantButton;
}

export function Button(props: ButtonProps) {
  const { className, children, variant, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(styles.btn, {}, [className, styles[variant]])}
    >
      {children}
    </button>
  );
}
