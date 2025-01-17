import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollPositionByPath, scrollRestorationActions } from 'features/ScrollRestoration';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import styles from './Page.module.scss';

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID';

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector(
    (state: StateSchema) => getScrollPositionByPath(
      state,
      pathname,
    ),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    // console.log('Scroll position from top:', e.currentTarget.scrollTop);
    dispatch(scrollRestorationActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, 300);

  return (
    <main
      ref={wrapperRef}
      className={classNames(styles.block, {}, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null}
    </main>
  );
};
