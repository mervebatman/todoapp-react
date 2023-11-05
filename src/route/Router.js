import * as React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NotFound = React.lazy(() => import('pages/Views/404'));
const Todo = React.lazy(() => import('pages/Views/Todo'));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <React.Suspense fallback={<>...</>}>
              <NotFound />
            </React.Suspense>
          }
        />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Todo />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
