import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return <Page className={styles.block}>{ t('PageNotFound')}</Page>;
};
