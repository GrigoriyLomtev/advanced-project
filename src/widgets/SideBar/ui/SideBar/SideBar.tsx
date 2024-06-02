import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import styles from './SideBar.module.scss';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sideBarItemsList = useSelector(getSideBarItems);

  const handleToggle = () => setIsCollapsed((prev) => !prev);

  const itemsList = useMemo(() => sideBarItemsList.map((item) => (
    <SideBarItem
      item={item}
      collapsed={isCollapsed}
      key={item.path}
    />
  )), [isCollapsed, sideBarItemsList]);

  return (
    <aside
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
    </aside>
  );
});
