import React from "react";
import styled from "styled-components/macro";

import { COLORS, MEDIA_QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import UnstyledButton from "../UnstyledButton/UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>

          <MobileNavButton>
            <Icon id="shopping-bag" color={COLORS.gray[900]} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </MobileNavButton>
          <MobileNavButton>
            <Icon id="search" color={COLORS.gray[900]} />
            <VisuallyHidden>Search</VisuallyHidden>
          </MobileNavButton>
          <MobileNavButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" color={COLORS.gray[900]} />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </MobileNavButton>
        </Nav>
        <RightSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${MEDIA_QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;

    // allow for padding on buttons, needed for mobile accessibility
    padding-inline-end: ${32 - 4}px;
  }

  @media ${MEDIA_QUERIES.phoneAndDown} {
    padding-inline: 16px;

    // allow for padding on buttons, needed for mobile accessibility
    padding-inline-end: ${16 - 4}px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    margin-inline: 0;
    gap: 32px;
  }

  @media ${MEDIA_QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

const RightSide = styled(Side)`
  @media ${MEDIA_QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${MEDIA_QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNavButton = styled(UnstyledButton)`
  background-color: transparent;
  border: none;
  padding-inline: 4px;

  display: none;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    display: revert;
  }
`;

export default Header;
