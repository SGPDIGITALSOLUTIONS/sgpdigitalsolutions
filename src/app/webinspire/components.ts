import dynamic from 'next/dynamic';

// Lazy load components that aren't needed immediately
export const DynamicDropzone = dynamic(() => import('react-dropzone').then(mod => mod.Dropzone), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

// Export other components as needed 