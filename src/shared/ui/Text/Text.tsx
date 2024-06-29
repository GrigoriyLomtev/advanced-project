import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextVariant {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
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

  'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = TextVariant.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  return (
    <div className={classNames(styles.block, {}, [
      className,
      styles[variant],
      styles[align],
      styles[size],
    ])}
    >
      {title && (
        <p
          data-testid={`${dataTestId}.Title`}
          className={styles.title}
        >
          {title}
        </p>
      )}
      {text && (
        <p
          data-testid={`${dataTestId}.Paragraph`}
          className={styles.text}
        >
          {text}
        </p>
      )}
    </div>
  );
});
