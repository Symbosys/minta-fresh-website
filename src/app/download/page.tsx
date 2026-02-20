'use client';

import { useEffect } from 'react';

export default function DownloadPage() {
  useEffect(() => {
    const downloadAPK = () => {
      const link = document.createElement('a');
      link.href = '/app-release.apk';
      link.download = 'minta-fresh.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadAPK();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold bg-black text-black">hello world</h1>
    </div>
  );
}
