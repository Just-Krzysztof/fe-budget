import React from 'react';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 font-sans">
      {children}
    </main>
  );
};
