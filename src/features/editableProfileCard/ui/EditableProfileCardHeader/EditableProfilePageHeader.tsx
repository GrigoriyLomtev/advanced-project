import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?:string
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
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
    <HStack
      max
      justify="between"
      className={classNames('', {}, [className])}
    >
      <Text title={t('Profile')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              onClick={onEdit}
              variant={ButtonVariant.OUTLINE}
              data-testid="EditableProfileCardHeader.EditButton"
            >
              {t('Edit')}
            </Button>
          )
            : (
              <HStack gap="8">
                <Button
                  onClick={onCancelEdit}
                  variant={ButtonVariant.OUTLINE_RED}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('Cancel')}
                </Button>
                <Button
                  onClick={onSave}
                  variant={ButtonVariant.OUTLINE}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('Save')}
                </Button>
              </HStack>
            )}
        </div>
      ) }
    </HStack>
  );
};
