import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { SideBarItemsList } from '../../model/items';
import styles from './SideBar.module.scss';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => setIsCollapsed((prev) => !prev);

  const itemsList = useMemo(() => SideBarItemsList.map((item) => (
    <SideBarItem
      item={item}
      collapsed={isCollapsed}
      key={item.path}
    />
  )), [isCollapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.block, { [styles.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={handleToggle}
        className={styles.collapseBtn}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        {itemsList}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher className={styles.themeSwitcher} />
        <LangSwitcher
          short={isCollapsed}
          className={styles.langSwitcher}
        />
      </div>
    </div>
  );
});
