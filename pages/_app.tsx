import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';
import Container from 'components/Container';
import { GlobalStyle } from 'components/GlobalStyles';
import Logo from 'components/Logo';
import Navbar from 'components/Navbar';
import NavbarSide from 'components/NavbarSide';
import { NavItems } from 'types';

const navItemsSide: NavItems = [
  { title: 'Our Clients', href: '/our-clients' },
  { title: 'Sign In', href: '/sign-in' },
  { title: 'Sign Up', href: '/sign-up' },
];

const navItemsTop: NavItems = [
  { title: 'Home', href: '/' },
  { title: 'Features', href: '/features' },
  { title: 'Contact', href: '/contact' },
  { title: 'About Us', href: '/about-us', underlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <GlobalStyle />

      <Navbar items={navItemsTop} />
      <NavbarSide items={navItemsSide} />
      <Component {...pageProps} />
    </>
  );
}

const NavbarContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MyApp;
