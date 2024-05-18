import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?:string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams <{id: string}>();

  if (!id) {
    return (
      <div className={classNames(styles.block, {}, [className])}>
        <Text variant={TextVariant.ERROR} title={t('ArticleNotFound')} />
      </div>
    );
  }
  return (
    <div className={classNames(styles.block, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
