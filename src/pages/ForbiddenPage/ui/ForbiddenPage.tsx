import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface IForbiddenPage {}

const ForbiddenPage = (props: IForbiddenPage) => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('ForbiddenPage')}
    </Page>
  );
};

export default ForbiddenPage;
