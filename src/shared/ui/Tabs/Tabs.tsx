import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo, useCallback } from 'react';
import styles from './Tabs.module.scss';
import { Card, CardVariant } from '../Card/Card';

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className, onTabClick, tabs, value,
  } = props;

  const clickHandle = useCallback((tab:TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(styles.block, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          variant={tab.value === value ? CardVariant.NORMAL : CardVariant.OUTLINE}
          className={styles.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
