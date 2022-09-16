import NextLink from 'next/link';
import styled from 'styled-components';
import { NavItem, NavItems } from 'types';

type NavbarProps = { items: NavItems };
// type ScrollingDirections = "up" | "down" | "none";
// type NavbarcontainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
  return (
    <>
      <NavItemList>
        {items.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </NavItemList>
    </>
  );
}

function NavItem({ href, title, underlined }: NavItem) {
  return (
    <NavItemWrapper underlined={underlined}>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </NavItemWrapper>
  );
}

const NavItemList = styled.div`
  display: flex;
  list-style: none;
`;

const NavItemWrapper = styled.li<Partial<NavItem>>`
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
