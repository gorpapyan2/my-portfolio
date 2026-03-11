import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';
import { LoadingProvider } from '../context/LoadingContext';
import { RouteLoadingHandler } from './loading/RouteLoadingHandler';

export function RootLayout() {
  return (
    <LoadingProvider>
      <ScrollToTop />
      <RouteLoadingHandler>
        <Outlet />
      </RouteLoadingHandler>
    </LoadingProvider>
  );
}
