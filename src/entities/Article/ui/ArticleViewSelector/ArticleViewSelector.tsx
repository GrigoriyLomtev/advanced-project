import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import GridIcon from 'shared/assets/icons/articles-grid.svg';
import ListIcon from 'shared/assets/icons/articles-list.svg';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/consts/articleConsts';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView:ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(styles.block, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          variant={ButtonVariant.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            className={classNames('', { [styles.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
