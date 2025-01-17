import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useGetArticleRecommendationsListQuery(3);

  if (isLoading || error || !articles) return null;

  return (
    <VStack max gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('We recommend it')}
      />
      <ArticleList
        target="_blank"
        articles={articles}
        virtualized={false}
      />
    </VStack>
  );
});
