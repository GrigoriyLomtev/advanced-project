import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import styles from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
  label? : string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': styles.optionsTopLeft,
  'top right': styles.optionsTopRight,
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
};

export const ListBox = (props: ListBoxProps) => {
  const {
    className, items, defaultValue, value, onChange, readonly, direction = 'bottom right', label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && <span>{label}</span>}
      <HListBox
        as="div"
        disabled={readonly}
        className={classNames(styles.block, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          disabled={readonly}
          className={styles.trigger}
        >
          <Button
            disabled={readonly}
          >
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(styles.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(styles.item, {
                    [styles.active]: active,
                    [styles.selected]: selected,
                    [styles.disabled]: item.disabled,
                  }, [])}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>

  );
};
