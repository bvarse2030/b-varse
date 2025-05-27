'use client'; // This directive makes the component a Client Component

import { useSession } from 'next-auth/react';
export default function AuthCheckingComponent({ redirectUrl = '/' as string, children = null as React.ReactNode | null }) {
  const sessionData = useSession();
  const { status } = sessionData || {};

  if (status === 'loading') {
    return <p>Loading session...</p>;
  }
  if (status === 'authenticated' && children) {
    return children;
  }

  return null;
}
