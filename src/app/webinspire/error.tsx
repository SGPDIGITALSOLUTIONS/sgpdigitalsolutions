'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-sgp-green">Something went wrong!</h2>
        <p className="text-white/80 mb-6">
          Don't worry, we're here to help. Try refreshing the page or click below to try again.
        </p>
        <button
          onClick={reset}
          className="bg-sgp-green/20 hover:bg-sgp-green text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 