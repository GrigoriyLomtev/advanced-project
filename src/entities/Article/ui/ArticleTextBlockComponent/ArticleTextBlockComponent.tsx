import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.block, {}, [className])}>
      {block.title
        && <Text title={block.title} className={styles.title} />}

      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          text={paragraph}
          className={styles.paragraph}
        />
      ))}

    </div>
  );
});
