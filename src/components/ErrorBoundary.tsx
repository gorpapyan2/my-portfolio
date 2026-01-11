import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorScreen } from './loading/ErrorScreen';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || 'An unexpected error occurred';
      return (
        <ErrorScreen
          title={undefined} // Will use translation key from ErrorScreen
          message={errorMessage}
          onRetry={() => this.setState({ hasError: false })}
          retryText={undefined} // Will use translation key from ErrorScreen
        />
      );
    }

    return this.props.children;
  }
}
