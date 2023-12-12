import styled, { css } from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Link } from "react-scroll";


// Menu

const MenuItem = styled.li`
`;
const NavLink = styled(Link)`
  color: ${Theme.colors.fontLight};
  font-size: 24px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 6px;
    border-radius: 3px;
    background-color: ${Theme.colors.fontLight};

    position: absolute;
    left: 0;
    bottom: -8px;
    transform: scale(0);
    transition: ${Theme.animation.transition};
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
`;

// Mobile Menu

const MobileMenu = styled.nav`  
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 24px;
  height: 30px;
  right: 35px;
  top: 30px;
  z-index: 9999999;

  span {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 1px;
    background-color: ${Theme.colors.fontLight};
    position: absolute;
    left: 0;
    top: -8x;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      border-radius: 1px;
      background-color: ${Theme.colors.fontLight};
      position: absolute;
      transform: translateY(-6px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
          background-color: ${Theme.colors.accent};
          position: fixed;
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      border-radius: 1px;
      background-color: ${Theme.colors.fontLight};
      position: absolute;
      transform: translateY(6px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          background-color: ${Theme.colors.accent};
          position: fixed;
        `}
    }
  }
`;
const MobileMenuPopup = styled.nav<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: ${Theme.colors.fontLight};
  opacity: 0.9;
  display: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  a {
    color: ${Theme.colors.accent};

      &:hover {
        &::before {
          background-color: ${Theme.colors.accent};
        }
      }
    }

  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 2s ease-in-out;
  }

  ${props => props.isOpen && css<{isOpen: boolean}>`
  transform: translateY(0);
  
  & ul {
    gap: 40px;
  }
`}
`;


// Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    gap: 52px;
    display: flex;
  }
`;

export const S = {
  MenuItem,
  NavLink,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  DesktopMenu
}