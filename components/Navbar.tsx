import NextLink from 'next/link';
import styled from 'styled-components';
import { SingleNavItem, NavItems } from 'types';
import Container from './Container';
import Logo from './Logo';

type NavbarProps = { items: NavItems };
// type ScrollingDirections = "up" | "down" | "none";
// type NavbarcontainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
  return (
    <>
      <NavbarContainer>
        <Content>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <NavItemList>
            {items.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavItemList>
        </Content>
      </NavbarContainer>
    </>
  );
}

function NavItem({ href, title, underlined }: SingleNavItem) {
  return (
    <NavItemWrapper underlined={underlined}>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </NavItemWrapper>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: var(--height-navbar);
  z-index: var(--z-navbar);
  position: sticky;

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.a`
  display: flex;
  height: var(--height-logo);
  text-decoration: none;

  color: rgb(var(--logoColor));
`;

const NavItemList = styled.div`
  display: flex;
  list-style: none;
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  text-decoration-line: ${(p) => (p.underlined ? 'underline' : 'none')};
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  a {
    display: flex;
    text-decoration: none;
    letter-spacing: 0.025em;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:is(:last-child) {
    font-weight: bold;
  }
`;
