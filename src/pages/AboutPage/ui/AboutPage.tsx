// import styles from "./AboutPage.module.scss";
import { useTranslation } from 'react-i18next';

interface IAboutPage {}

export default function AboutPage(props: IAboutPage) {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('AboutPage')}
    </div>
  );
}
