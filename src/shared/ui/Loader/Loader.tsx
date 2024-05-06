import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
  className?:string
}
export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.ldsRing, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
