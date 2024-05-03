// import styles from "./AboutPage.module.scss";
import { useTranslation } from 'react-i18next';

interface IAboutPage {}

const AboutPage = (props: IAboutPage) => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('AboutPage')}
    </div>
  );
};

export default AboutPage;
