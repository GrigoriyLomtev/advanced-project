import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export function App() {
  const { theme, toggleTheme } = useTheme();

  // console.log(
  //   classNames(
  //     "styles.btn",
  //     {
  //       isDisabled: true,
  //       isHyebled: true,
  //       isHover: false,
  //     },
  //     ["styles.rounded", "styles.dark"]
  //   )
  // );

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        {/* <div className={`app ${theme}`}> */}
        <Link to={"/"}> main </Link>
        <Link to={"/about"}> about </Link>
        <button onClick={toggleTheme}>toggle</button>
        <Suspense fallback={"loading.."}>
          <Routes>
            <Route path={"/about"} element={<AboutPageAsync />} />
            <Route path={"/"} element={<MainPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
