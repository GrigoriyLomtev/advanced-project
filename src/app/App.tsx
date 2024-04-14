import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";

export function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <Suspense fallback={""}>
          <NavBar />
          <div className="content-page">
            <SideBar />
            <AppRouter />
          </div>
        </Suspense>
      </div>
    </>
  );
}
