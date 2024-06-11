import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

const SelectComponent = <T extends string>(props: SelectProps<T>) => {
  const {
    className, label, options, onChange, value, readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      value={opt.value}
      key={opt.value}
      className={styles.option}
    >
      {opt.content}
    </option>
  )), [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(styles.block, mods, [className])}>
      {label && <span className={styles.label}>{label}</span>}
      <select
        disabled={readonly}
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};

const typedMemo: <T>(c: T) => T = memo;
export const Select = typedMemo(SelectComponent);
