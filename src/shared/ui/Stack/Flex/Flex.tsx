import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  between: styles.justifyBetween,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  start: styles.justifyStart,
};
const alignClasses: Record<FlexAlign, string> = {
  center: styles.alignCenter,
  end: styles.alignEnd,
  start: styles.alignStart,
};
const directionClasses: Record<FlexDirection, string> = {
  column: styles.directionColumn,
  row: styles.directionRow,
};
const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
};

export interface FlexProps extends HTMLAttributes<HTMLElement> {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  max?: boolean
  component?: ElementType
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap,
    max,
    component: ComponentWrapper = 'div',
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [styles.maxWidth]: max,
  };

  return (
    <ComponentWrapper
      className={classNames(
        styles.block,
        mods,
        classes,
      )}
      {...otherProps}
    >
      {children}
    </ComponentWrapper>
  );
};
