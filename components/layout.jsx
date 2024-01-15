import Head from 'next/head';

import Header from './header';
import FrameJob from './frameJob';
import Footer from './footer';
export const siteTitle = "Login Signup Nextjs";

export default function Layout({ pageTitle, children }) {
  const title = "Login Signup Nextjs";
  return (
    <div>
      <Header />
      <FrameJob />

      {children}


      {/* <Footer /> */}
    </div>
  );
}