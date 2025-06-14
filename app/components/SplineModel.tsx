'use client';

import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export default function SplineModel() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );                        
  }

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center bg-transparent pointer-events-none overflow-hidden">
      <Spline 
        scene="https://prod.spline.design/MipS1PMs5AGtPZbI/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          background: 'transparent',
          pointerEvents: 'none',
          transform: 'scale(1.5)',
          transformOrigin: 'center'
        }}
      />
    </div>
  );
} 