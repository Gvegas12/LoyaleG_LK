/* eslint-disable no-console */
import React, { Suspense } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(
    error: Error
  ): Pick<ErrorBoundaryState, "hasError"> {
    // Update state so the next render will show the fallback UI.
    console.log("[ErrorBoundary --> getDerivedStateFromError]", error);

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render(): JSX.Element {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback="">"PageError"</Suspense>;
    }

    return <>{children}</>;
  }
}

export default ErrorBoundary;
