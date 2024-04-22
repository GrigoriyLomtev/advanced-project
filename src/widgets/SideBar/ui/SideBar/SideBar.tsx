import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar(props: SideBarProps) {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => setIsCollapsed((prev) => !prev);
  const { t } = useTranslation();

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
      >
        {t('toggle')}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher className={styles.themeSwitcher} />
        <LangSwitcher className={styles.langSwitcher} />
      </div>
    </div>
  );
}
