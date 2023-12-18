import React, { Component } from "react";
import Button from "../Button";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 flex items-center justify-center flex-col gap-4">
          <h2 className="text-center">Something went wrong.</h2>
          <Button
            text={"Reload page"}
            handleClick={() => window.location.reload()}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
