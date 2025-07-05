import dynamic from 'next/dynamic';

// Lazy load components that aren't needed immediately
export const DynamicDropzone = dynamic(() => import('react-dropzone'), {
  ssr: false
});

// Export other components as needed 