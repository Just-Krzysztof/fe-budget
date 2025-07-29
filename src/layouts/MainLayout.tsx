import React from 'react';
import { SideBar } from './SideBar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-ful flex ">
      <SideBar></SideBar>
      <main className="bg-gray-50 p-4 w-full font-sans text-gray-900 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-[1650px]">{children}</div>
      </main>
    </div>
  );
};
