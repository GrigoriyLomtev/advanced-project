import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?:string
}

export function LoginForm(props: LoginFormProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <Input
        autofocus
        placeholder={t('enterUsername')}
        className={styles.input}
        type="text"
      />
      <Input placeholder={t('enterPassword')} className={styles.input} type="text" />
      <Button className={styles.loginBtn}>{t('login')}</Button>
    </div>
  );
}
