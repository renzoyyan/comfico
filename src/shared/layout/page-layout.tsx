import React, { PropsWithChildren } from 'react';
import { Footer, Navbar } from '../components/partials';

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
