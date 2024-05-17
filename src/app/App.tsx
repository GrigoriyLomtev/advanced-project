import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
