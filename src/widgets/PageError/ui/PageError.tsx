import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?:string
}

export function PageError(props: PageErrorProps) {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <span>
        {t('PageError')}
      </span>
      <Button onClick={reloadPage}>
        {t('RefreshPage')}
      </Button>
    </div>
  );
}
