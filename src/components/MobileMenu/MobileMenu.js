/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Content aria-label="navigation">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Close Menu</VisuallyHidden>
        </CloseButton>
        <Spacer />
        <MainNav>
          <MainLink href="/sale">Sale</MainLink>
          <MainLink href="/new">New&nbsp;Releases</MainLink>
          <MainLink href="/men">Men</MainLink>
          <MainLink href="/women">Women</MainLink>
          <MainLink href="/kids">Kids</MainLink>
          <MainLink href="/collections">Collections</MainLink>
        </MainNav>
        <FooterNav>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </FooterNav>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  background-color: rgba(96, 100, 108, 0.8);
  width: 100%;
  height: 100dvh;
  position: absolute;
  top: 0;
  right: 0;
`;

const Content = styled(DialogContent)`
  width: 80%;
  height: 100vh;
  height: 100dvh;

  position: absolute;
  top: 0;
  right: 0;

  padding: 32px;

  background-color: white;

  display: flex;
  flex-direction: column;
  gap: ${64 / 16}rem;

  overflow: auto;
`;

const Spacer = styled.div`
  flex: 1;
`;

const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${16 / 16}rem;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${14 / 16}rem;

  flex: 1;
`;

const MainLink = styled.a`
  font-family: "Raleway", sans-serif;
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  width: fit-content;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;
  width: fit-content;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;

  padding: 22px;
`;

export default MobileMenu;
