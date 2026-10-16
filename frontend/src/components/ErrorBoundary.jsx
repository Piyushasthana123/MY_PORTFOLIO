import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <h2 className="text-xl font-bold text-[var(--accent)]">
            Something went wrong while rendering this section
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            {this.state.error?.message || "An unexpected error occurred."}
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            className="btn-primary mt-4 rounded-lg px-4 py-2 text-xs font-semibold uppercase"
          >
            Retry Section
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
