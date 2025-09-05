'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('CitizenShield error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-white text-opacity-70 mb-6">
          We encountered an error while loading CitizenShield. This might be a temporary issue.
        </p>
        <button
          onClick={reset}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try again</span>
        </button>
        <p className="text-white text-opacity-50 text-xs mt-4">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}
