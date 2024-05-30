import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import styles from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view:ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton
      className={styles.card}
      key={index}
      view={view}
    />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.GRID,
    isLoading,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(styles.block, {}, [className, styles[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article:Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={styles.card}
      key={article.id}
    />
  );

  return (
    <div className={classNames(styles.block, {}, [className, styles[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
