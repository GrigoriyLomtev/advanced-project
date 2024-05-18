import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?:string
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(styles.block, {}, [className])}>ArticleCodeBlockComponent</div>;
};