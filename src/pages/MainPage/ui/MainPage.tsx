import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface MainPageProps { }

const MainPage = (props: MainPageProps) => {
  const { t } = useTranslation();

  return (
    <Page>
      <BugButton />
      {t('MainPage')}
    </Page>
  );
};

export default MainPage;
