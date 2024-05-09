import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

interface ProfileCardProps {
  className?:string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Profile')} />
        <Button className={styles.editBtn} variant={ButtonVariant.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          className={styles.input}
          value={data?.first}
          placeholder={t('YourFirstname')}
        />
        <Input
          className={styles.input}
          value={data?.lastname}
          placeholder={t('YourLastname')}
        />
      </div>
    </div>
  );
};
