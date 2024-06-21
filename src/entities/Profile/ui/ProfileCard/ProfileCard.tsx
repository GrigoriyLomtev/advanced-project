import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?:string)=>void
  onChangeLastname?: (value?:string)=>void
  onChangeAge?: (value?:string)=>void
  onChangeCity?: (value?:string)=>void
  onChangeCountry?: (country?:Country)=>void
  onChangeCurrency?: (currency?: Currency) => void
  onChangeUsername?: (value?:string)=>void
  onChangeAvatar?: (value?:string)=>void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeCurrency,
    onChangeUsername,
    onChangeAvatar,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        max
        justify="center"
        className={classNames(styles.block, {}, [className, styles.loading])}
      >
        <Loader />
      </HStack>
    );
  }
  if (error) {
    return (
      <HStack
        max
        justify="center"
        className={classNames(styles.block, {}, [className, styles.error])}
      >
        <Text
          align={TextAlign.CENTER}
          variant={TextVariant.ERROR}
          title={t('errorOccurredProfileData')}
          text={t('tryRefreshPage')}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <VStack
      max
      gap="8"
      className={classNames(styles.block, mods, [className])}
    >
      {data?.avatar
          && (
            <HStack
              justify="center"
              max
              className={styles.avatarWrapper}
            >
              <Avatar src={data?.avatar} alt="" />
            </HStack>
          )}
      <Input
        readonly={readonly}
        onChange={onChangeFirstname}
        className={styles.input}
        value={data?.first}
        placeholder={t('YourFirstname')}
      />
      <Input
        readonly={readonly}
        onChange={onChangeLastname}
        className={styles.input}
        value={data?.lastname}
        placeholder={t('YourLastname')}
      />
      <Input
        readonly={readonly}
        onChange={onChangeAge}
        className={styles.input}
        value={data?.age}
        placeholder={t('YourAge')}
      />
      <Input
        readonly={readonly}
        onChange={onChangeCity}
        className={styles.input}
        value={data?.city}
        placeholder={t('YourCity')}
      />
      <Input
        readonly={readonly}
        onChange={onChangeUsername}
        className={styles.input}
        value={data?.username}
        placeholder={t('EnterTheUserName')}
      />
      <Input
        readonly={readonly}
        onChange={onChangeAvatar}
        className={styles.input}
        value={data?.avatar}
        placeholder={t('EnterTheLinkToTheAvatar')}
      />
      <CurrencySelect
        className={styles.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={styles.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
