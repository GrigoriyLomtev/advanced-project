import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
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
        className={styles.collapseBtn}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink
          className={styles.item}
          variant={AppLinkVariant.INVERTED}
          to={RoutePath.main}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>
            {t('navBar.toMainPage')}
          </span>
        </AppLink>
        <AppLink
          className={styles.item}
          variant={AppLinkVariant.INVERTED}
          to={RoutePath.about}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>
            {t('navBar.toAboutPage')}
          </span>
        </AppLink>
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
}
