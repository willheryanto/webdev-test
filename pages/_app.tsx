import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from 'components/Navbar';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Home', href: '/' },
  { title: 'Features', href: '/features' },
  { title: 'Contact', href: '/contact' },
  { title: 'About Us', href: '/about-us', underlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar items={navItems} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
