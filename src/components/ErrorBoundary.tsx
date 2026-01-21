'use client';

import { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error reporting service
    if (process.env.NODE_ENV === 'production') {
      console.error('Error caught by boundary:', error, errorInfo);
      
      // Send to error reporting service (Sentry, LogRocket, etc.)
      // Example: logErrorToService(error, errorInfo);
    } else {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-destructive/10 p-4">
                <AlertCircle className="h-12 w-12 text-destructive" />
              </div>
            </div>
            
            <h1 className="mb-4 text-2xl font-bold tracking-tight">
              Something went wrong
            </h1>
            
            <p className="mb-6 text-muted-foreground">
              We're sorry for the inconvenience. An unexpected error occurred.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 rounded-lg bg-muted p-4 text-left">
                <p className="mb-2 text-sm font-semibold">Error details:</p>
                <pre className="text-xs text-muted-foreground overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </div>
            )}
            
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={this.handleReset} variant="default" size="lg">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
