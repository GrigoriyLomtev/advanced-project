// import styles from "./AboutPage.module.scss";
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

interface IAboutPage {}

const AboutPage = (props: IAboutPage) => {
  const { t } = useTranslation('about');

  return (
    <Page>
      {t('AboutPage')}
    </Page>
  );
};

export default AboutPage;
