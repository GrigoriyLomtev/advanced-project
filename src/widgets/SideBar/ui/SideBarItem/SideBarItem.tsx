import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/items';

interface SideBarItemProps {
  item: SideBarItemType
  collapsed: boolean
}

export const SideBarItem = memo((props: SideBarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  return (
    <AppLink
      className={classNames(
        styles.item,
        { [styles.collapsed]: collapsed },
        [],
      )}
      variant={AppLinkVariant.INVERTED}
      to={item.path}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
