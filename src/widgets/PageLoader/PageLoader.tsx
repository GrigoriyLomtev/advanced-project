import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?:string
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <Loader />
    </div>
  );
};
