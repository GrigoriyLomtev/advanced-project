import { classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, InputHTMLAttributes, memo,
  useEffect,
  useRef,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' >

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <input
        ref={inputRef}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </div>
  );
});
