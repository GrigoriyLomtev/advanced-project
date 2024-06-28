// import styles from "./AdminPanelPage.module.scss";
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface IAdminPanelPage {}

const AdminPanelPage = (props: IAdminPanelPage) => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Admin board')}
    </Page>
  );
};

export default AdminPanelPage;
