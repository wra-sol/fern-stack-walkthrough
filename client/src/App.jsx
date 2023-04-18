import React, {useState, useEffect, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageLayout from './contexts/PageLayout';
import {AuthProvider} from './contexts/AuthProvider';
import PrivatePage from './contexts/PrivatePage';
import {QueryClient, QueryClientProvider} from 'react-query';
const App = () => {
  const [routes, setRoutes] = useState ([]);
	const queryClient = new QueryClient();

  useEffect (() => {
    function loadPages () {
      const context = import.meta.globEager ('./pages/*.jsx');
      const routeList = [];
      for (const path in context) {
        const module = context[path];
        const pageName = path.replace ('./pages/', '').replace ('.jsx', '');
        const routePath = pageName === 'Home'
          ? '/'
          : `/${pageName.toLowerCase ()}`;
        const isPrivate = pageName === 'Dashboard'; // Set isPrivate to true for Dashboard or other private pages
        const route = {
          path: routePath,
          component: module.default,
          pageName,
          isPrivate,
        };
        routeList.push (route);
      }
      setRoutes (routeList);
    }
    loadPages ();
  }, []);
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <PageLayout routes={routes}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routes.map (
                  (route, index) =>
                    route.isPrivate
                      ? <Route
                          key={index}
                          path={route.path}
                          element={<PrivatePage component={route.component} />}
                        />
                      : <Route
                          key={index}
                          path={route.path}
                          element={<route.component />}
                        />
                )}
              </Routes>
            </Suspense>
          </PageLayout>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  );
};
export default App;
