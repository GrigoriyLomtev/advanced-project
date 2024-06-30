import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './ArticleListItem.module.scss';
import {
  Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleView } from 'entities/Article/model/consts/articleConsts';
import { ArticleBlockType } from 'entities/Article/model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className, article, view, target,
  } = props;
  const { t } = useTranslation();
  const [isHover, bindHover] = useHover();

  const types = <Text text={article.type.join(', ')} className={styles.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
      <div className={classNames(styles.block, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <img src={article.img} alt={article.title} className={styles.img} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />}
          <div className={styles.footer}>
            <AppLink
              target={target}
              to={RoutePath.article_details + article.id}
            >
              <Button variant={ButtonVariant.OUTLINE}>
                {t('read more...')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      {...bindHover}
      className={classNames(styles.block, {}, [className, styles[view]])}
    >
      <Card>
        <div className={styles.imageWrapper}>
          <img src={article.img} alt={article.title} className={styles.img} />
          <Text className={styles.date} text={article.createdAt} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text title={article.title} className={styles.title} />
      </Card>
    </AppLink>
  );
});
