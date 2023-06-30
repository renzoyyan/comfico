import React, { PropsWithChildren } from 'react';
import { Footer, Navbar } from '../ui/partials';

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
