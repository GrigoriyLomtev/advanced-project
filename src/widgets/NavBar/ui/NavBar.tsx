import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo((props: NavBarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(styles.block, {}, [className])}>
        <Text
          variant={TextVariant.INVERTED}
          title="Gri Blog App"
          className={styles.appName}
        />
        <AppLink
          variant={AppLinkVariant.INVERTED}
          to={RoutePath.article_create}
          className={styles.createBtn}
        >
          {t('Create new article')}
        </AppLink>
        <Dropdown
          items={[
            {
              content: t('Profile'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('logout'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
          className={styles.dropdown}
          direction="bottom left"
        />
        {/* <Button
          variant={ButtonVariant.CLEAR_INVERTED}
          className={styles.navLinks}
          onClick={onLogout}
        >
          {t('logout')}
        </Button> */}
      </header>
    );
  }

  return (
    <header className={classNames(styles.block, {}, [className])}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={styles.navLinks}
        onClick={onShowModal}
      >
        {t('login')}
      </Button>
      {isAuthModal
      && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
