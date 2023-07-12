'use client';
import { ReactNode, useEffect, useState } from 'react';

import { AppLoader } from './main/ui/AppLoader';

export const Loader = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10);
  });

  if(loading) return <AppLoader/>

  return <>{children}</>
};
