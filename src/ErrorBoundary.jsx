import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.state.error = error;
        this.state.errorInfo = errorInfo;
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-red-500 p-10 font-mono">
                    <h1 className="text-3xl mb-4">Something went wrong.</h1>
                    <div className="bg-gray-900 p-4 rounded overflow-auto border border-red-900">
                        <h2 className="text-xl mb-2">Error:</h2>
                        <pre className="whitespace-pre-wrap">{this.state.error && this.state.error.toString()}</pre>
                        <br />
                        <h2 className="text-xl mb-2">Stack:</h2>
                        <pre className="whitespace-pre-wrap">{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
