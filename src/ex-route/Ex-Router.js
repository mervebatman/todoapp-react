import * as React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const ProtectedRoute = React.lazy(() => import('./Ex-ProtectedRoute'));

// const Home = React.lazy(() => import('pages/Views/Home'));
const Login = React.lazy(() => import('pages/Views/ExLogin'));
const SignUp = React.lazy(() => import('pages/Views/ExSignUp'));
const PreSignUp = React.lazy(() => import('pages/Views/ExPreSignUp'));
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
        <Route
          path="/ex-login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/ex-signup"
          element={
            <React.Suspense fallback={<>...</>}>
              <PreSignUp />
            </React.Suspense>
          }
        />
        <Route
          path="/ex-signup-user"
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<>...</>}>
                <SignUp />
              </React.Suspense>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
