import { useTranslation } from 'react-i18next';

interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  const { t } = useTranslation();

  return (
    <div>
      {t('MainPage')}
    </div>
  );
}
