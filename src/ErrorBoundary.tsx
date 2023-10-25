import React, { Component, ErrorInfo, ReactNode } from "react";
// import ErrorPage from './pages/common/ErrorPage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): any {
    if (this.state.hasError) {
      console.log("this.state", this.state);

      return <div>에러입니다</div>;
      //   return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
