import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

interface AppRouterProps {}

export function AppRouter(props: AppRouterProps) {
  return (
    <>
      <Suspense fallback={"loading.."}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </Suspense>
    </>
  );
}
