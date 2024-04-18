import { classNames } from 'shared/lib/classNames/classNames';
import Papich from 'shared/assets/icons/papich.gif';
import styles from './Loader.module.scss';

interface LoaderProps {
  className?:string
}
export function Loader(props: LoaderProps) {
  const { className } = props;

  const isPapich = true;
  const loader = isPapich
    ? <img className={styles.papichLoader} src={Papich} alt="" />
    : (
      <div className={classNames(styles.ldsRing, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
      </div>
    );

  return (
    loader
  );
}
