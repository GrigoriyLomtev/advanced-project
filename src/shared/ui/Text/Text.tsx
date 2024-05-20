import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextVariant {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'sizeM',
  L = 'sizeL',
}

interface TextProps {
  className?: string
  title?:string
  text?: string
  variant?: TextVariant
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className, text, title, variant = TextVariant.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.block, {}, [
      className,
      styles[variant],
      styles[align],
      styles[size],
    ])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
