import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.BRAZIL, content: Country.BRAZIL },
  { value: Country.ENGLAND, content: Country.ENGLAND },
  { value: Country.FRANCE, content: Country.FRANCE },
  { value: Country.GERMANY, content: Country.GERMANY },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.UAE, content: Country.UAE },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value:string) => {
    if (onChange) {
      onChange(value as Country);
    }
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('SpecifyTheCountry')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />

  );
});
