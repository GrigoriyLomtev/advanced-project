import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar(props: SideBarProps) {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(styles.block, { [styles.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={handleToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher className={styles.themeSwitcher} />
        <LangSwitcher className={styles.langSwitcher} />
      </div>
    </div>
  );
}
