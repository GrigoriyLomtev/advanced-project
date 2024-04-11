import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./AboutPage") as any), 2000);
    })
);
