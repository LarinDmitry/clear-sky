import React, {Suspense, useEffect} from 'react';
import {RouterProvider} from 'react-router';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {ErrorBoundary} from 'react-error-boundary';
import ReactGA from 'react-ga4';
import {router} from 'components/GeneralComponents/Routers';
import ErrorFallback from 'components/GeneralComponents/ErrorFallback';
import {reduxStore} from 'services/reduxStore';
import MainTheme from 'theme/index';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-5ZBF3DEV81');
  }, []);

  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={MainTheme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
