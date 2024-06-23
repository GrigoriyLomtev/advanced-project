import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

interface MainPageProps { }

const MainPage = (props: MainPageProps) => {
  const { t } = useTranslation();

  return (
    <Page>
      <BugButton />
      {t('MainPage')}
      <div>qwerwqer</div>
      <div>qwerwqer</div>
      <HStack>
        <div>asdasdasd</div>
        <ListBox
          defaultValue="Выберите значение"
          onChange={(value: string) => { }}
          value={undefined}
          items={[
            { value: '1', content: '123' },
            { value: '2', content: '2222', disabled: true },
            { value: '3', content: '333333333' },
          ]}
        />
      </HStack>
      <div>qwerwqer</div>
      <div>qwerwqer</div>
      <div>qwerwqer</div>
    </Page>
  );
};

export default MainPage;
