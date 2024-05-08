import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextVariant {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?:string
  text?: string
  variant?: TextVariant
}

export const Text = memo((props: TextProps) => {
  const {
    className, text, title, variant = TextVariant.PRIMARY,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.block, { [styles[variant]]: true }, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
