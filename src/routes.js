import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { lazy } from "react";


const Main = lazy(() => import("./pages/main/Main"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} />

    </>
  ),
);

export default router;