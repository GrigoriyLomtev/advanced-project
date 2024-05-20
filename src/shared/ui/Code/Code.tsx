import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import styles from './Code.module.scss';
import { Button, ButtonVariant } from '../Button/Button';

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.block, {}, [className])}>
      <Button onClick={onCopy} className={styles.copyBtn} variant={ButtonVariant.CLEAR}>
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
