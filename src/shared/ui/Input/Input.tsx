import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, InputHTMLAttributes, memo,
  useEffect,
  useRef,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly' >

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div className={classNames(styles.block, mods, [className])}>
      <input
        ref={inputRef}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        readOnly={readonly}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </div>
  );
});
