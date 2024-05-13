import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const {
    className, alt, src, size,
  } = props;

  const inlineStyles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={inlineStyles}
      className={classNames(styles.block, {}, [className])}
    />
  );
};
