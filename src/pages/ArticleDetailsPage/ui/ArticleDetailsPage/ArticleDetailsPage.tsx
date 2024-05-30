import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import styles from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
  className?:string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text:string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(styles.block, {}, [className])}>
        <Text variant={TextVariant.ERROR} title={t('ArticleNotFound')} />
      </div>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.block, {}, [className])}>
        <Button onClick={onBackToList} variant={ButtonVariant.OUTLINE}>
          {t('Back to the list')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
