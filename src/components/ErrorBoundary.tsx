import React, { Component, ErrorInfo, ReactNode } from 'react';

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
      return (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#ff4444', 
          color: 'white',
          fontFamily: 'monospace',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1>Something went wrong!</h1>
          <details style={{ marginTop: '20px', maxWidth: '800px' }}>
            <summary>Error Details</summary>
            <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
              {this.state.error?.stack}
            </pre>
          </details>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#ff4444',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
