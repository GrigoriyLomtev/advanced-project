import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

export function NotFoundPage() {
  const { t } = useTranslation();
  return <div className={styles.block}>{ t('PageNotFound')}</div>;
}
