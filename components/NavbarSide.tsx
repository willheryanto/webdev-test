import NextLink from 'next/link';
import styled from 'styled-components';
import { SingleNavItem, NavItems } from 'types';
import Container from './Container';

type NavbarProps = { items: NavItems };

export default function NavbarSide({ items }: NavbarProps) {
  return (
    <>
      <NavbarContainer>
        <Content>
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
  flex-direction: column;
  position: fixed;
  top: 0;
  padding: 1.5rem 0;
  width: 7.5%;
  height: 100vw;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  top: var(--height-navbar);
  justify-content: flex-start;
  align-items: center;
`;

const NavItemList = styled.div`
  list-style: none;
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  text-decoration-line: ${(p) => (p.underlined ? 'underline' : 'none')};
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:hover {
    background-color: ${(p) => (p.underlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.underlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)')};
    letter-spacing: 0.025em;
    text-decoration: none;
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
