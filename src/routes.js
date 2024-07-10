import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { lazy } from 'react';

const RootLayout = lazy(() => import('./components/layout/RootLayout'));
const Main = lazy(() => import('./pages/main/Main'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Main />} />
      </Route>
    </>
  )
);

export default router;
