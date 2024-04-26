import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar(props: NavBarProps) {
  const { className } = props;
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={styles.navLinks}
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      // eslint-disable-next-line i18next/no-literal-string
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Saepe dolorem consectetur blanditiis hic ve
        ro quisquam aliquid, dolor commodi reprehenderit placeat.
      </Modal>
    </div>
  );
}
