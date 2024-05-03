import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

interface MainPageProps { }

const MainPage = (props: MainPageProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t('MainPage')}
    </div>
  );
};

export default MainPage;
