import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
  background-color: ${Theme.colors.accent};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1040px;
  width: 100%;
  margin: 60px 0 30px;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 70px;
    padding: 0 20px;
  }
`
const ContactItem = styled.li`
  position: relative;
  & + & {
    margin-left: 44px;

    &::after {
      content: "";
      display: inline-block;
      width: 4px;
      height: 34px;
      background-color: ${Theme.colors.fontLight};
      position: absolute;
      top: -6px;
      left: -24px;

      @media screen and (max-width: 990px) {
        display: none;
      }
    }
    @media screen and (max-width: 990px) {
      margin-left: 0;
    }
  }
`
const ContactLink = styled.a`
  font-family: Nunito, sans-serif;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  color: ${Theme.colors.fontLight};
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 990px) {
    margin-bottom: 30px;
  }
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${Theme.animation.transition};

  &:hover {
    transform: scale(1.5);
  }
`
const Copyright = styled.small`
  color: ${Theme.colors.fontLight};
  font-family: Poppins sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0 15px;
`

export const S = {
  Footer,
  ContactList,
  ContactItem,
  ContactLink,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright
}