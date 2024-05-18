import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className, border, height, width,
  } = props;

  const inlineStyles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return <div style={inlineStyles} className={classNames(styles.block, {}, [className])} />;
});
