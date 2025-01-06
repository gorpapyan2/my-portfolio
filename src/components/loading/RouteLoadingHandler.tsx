import { useRouteLoading } from '../../hooks/useRouteLoading';

interface RouteLoadingHandlerProps {
  children: React.ReactNode;
}

export function RouteLoadingHandler({ children }: RouteLoadingHandlerProps) {
  useRouteLoading();
  return <>{children}</>;
}