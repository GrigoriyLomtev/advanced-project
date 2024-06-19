import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
  List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import styles from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
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
    target,
  } = props;
  const { t } = useTranslation();

  const isList = view === ArticleView.LIST;

  const itemsPerRow = isList ? 1 : 3;
  const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({
    index, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let index = fromIndex; index < toIndex; index += 1) {
      items.push(
        <ArticleListItem
          target={target}
          article={articles[index]}
          view={view}
          key={articles[index].id}
          className={styles.card}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={styles.row}
      >
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.block, {}, [className, styles[view]])}>
        <Text size={TextSize.L} title={t('Articles not found')} />
      </div>
    );
  }

  return (
    <WindowScroller
      onScroll={() => console.log('scroll')}
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height, width, registerChild, scrollTop, onChildScroll, isScrolling,
      }) => (
        <div
          ref={registerChild}
          className={classNames(styles.block, {}, [className, styles[view]])}
        >
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isList ? 700 : 330}
            // eslint-disable-next-line i18next/no-literal-string, react/no-unstable-nested-components
            rowRenderer={rowRender}
            width={width ? width - 80 : 700}
            autoHeight
            scrollTop={scrollTop}
            onScroll={onChildScroll}
            isScrolling={isScrolling}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>

  // <div className={classNames(styles.block, {}, [className, styles[view]])}>
  //   {articles.length > 0
  //     ? articles.map(renderArticle)
  //     : null}
  //   {isLoading && getSkeletons(view)}
  // </div>
  );
});
