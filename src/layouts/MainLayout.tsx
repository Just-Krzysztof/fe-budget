import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-gray-50 p-4 font-sans text-gray-900 sm:p-6 md:p-8">
      <div className="mx-auto max-w-screen-xl">{children}</div>
    </main>
  );
}
