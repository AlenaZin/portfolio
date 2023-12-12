import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
  width: 220px;
  height: 65px;
  border-radius: 18px;
  background-color: ${Theme.colors.accent};
  color: ${Theme.colors.fontLight};
  font-size: 20px;
  transition-duration: 0.4s;
  overflow: hidden;
  position: relative;

  &::after {
  content: "";
    display: block;
    position: absolute;
    border-radius: 18px;
    padding-top: 66px;
    padding-left: 220px;
    margin-left: 0px;
    margin-top: -45px;
    opacity: 0;
    background: ${Theme.colors.primaryBg};
    transition: all 0.5s
}

&.revers {
    background-color: transparent;
    color: ${Theme.colors.accent};
    border: 1px solid ${Theme.colors.accent};
    
    &::after {
      background: ${Theme.colors.accent};
    }
  }

  &:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

`

