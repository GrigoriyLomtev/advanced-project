import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?:string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value:string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value:string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <Text title={t('authForm')} />
      {error && (
        <Text text={t('invalidUserAuth')} variant={TextVariant.ERROR} />
      )}
      <Input
        autofocus
        placeholder={t('enterUsername')}
        className={styles.input}
        type="text"
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('enterPassword')}
        className={styles.input}
        type="text"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        disabled={isLoading}
        variant={ButtonVariant.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoginClick}
      >
        {t('login')}
      </Button>
    </div>
  );
});
