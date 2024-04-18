import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar(props: NavBarProps) {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.block, {}, [className])}>
      <div className={styles.navLinks}>
        <AppLink variant={AppLinkVariant.INVERTED} to="/">
          {t('navBar.toMainPage')}
        </AppLink>
        <AppLink variant={AppLinkVariant.INVERTED} to="/about">
          {t('navBar.toAboutPage')}
        </AppLink>
      </div>
    </div>
  );
}
