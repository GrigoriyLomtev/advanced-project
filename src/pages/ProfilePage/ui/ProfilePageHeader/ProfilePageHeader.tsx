import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?:string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={styles.btnsWrapper}>
          {readonly ? (
            <Button onClick={onEdit} className={styles.editBtn} variant={ButtonVariant.OUTLINE}>
              {t('Edit')}
            </Button>
          )
            : (
              <>
                <Button onClick={onCancelEdit} className={styles.editBtn} variant={ButtonVariant.OUTLINE_RED}>
                  {t('Cancel')}
                </Button>
                <Button onClick={onSave} className={styles.saveBtn} variant={ButtonVariant.OUTLINE}>
                  {t('Save')}
                </Button>
              </>
            )}
        </div>
      ) }
    </div>
  );
};
