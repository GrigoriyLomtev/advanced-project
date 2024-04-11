import { lazy } from "react";

// export const MainPageAsync = lazy(() => import("./MainPage"));
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./MainPage") as any), 2000);
    })
);
