import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

interface AppRouterProps {}

export const AppRouter = memo((props: AppRouterProps) => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig)
    // .filter((route) => (isAuth ? route : !route.authOnly)), [isAuth]);
    .filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    }), [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
});
