import React from 'react';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-h-screen w-full bg-gray-100 font-sans ">
      <div className="flex min-h-screen w-full max-w-7xl items-center justify-center p-4 font-sans mx-auto">
        {children}
      </div>
    </main>
  );
};
