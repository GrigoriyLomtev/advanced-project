import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?:string
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(styles.block, {}, [className])}>ArticleTextBlockComponent</div>;
};
