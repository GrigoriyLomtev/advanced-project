import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <Link to={"/"}> main </Link>
        <Link to={"/about"}> about </Link>
        <button onClick={toggleTheme}>toggle</button>
        <Suspense fallback={"loading.."}>
          <Routes>
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/"} element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
