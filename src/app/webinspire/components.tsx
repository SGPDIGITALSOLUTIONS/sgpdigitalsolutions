import dynamic from 'next/dynamic';
import React from 'react';

// Lazy load components that aren't needed immediately
export const DynamicDropzone = dynamic(
  () => import('react-dropzone'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
); 