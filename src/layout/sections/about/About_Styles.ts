import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import { TitleSection } from "../../../components/TitleSection"

const About = styled.section`
`

const PhotoFrapper = styled.div`
  margin: 0 60px 60px 0;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 388px;
    height: 432px;
    border: 200px solid transparent; 
    border-right: 200px solid ${Theme.colors.fontLight}; 
    border-bottom: 200px solid ${Theme.colors.fontLight};
    position: absolute;
    bottom: -50px;
    right: -50px;
    z-index: -1;

    @media ${Theme.media.mobile} {
      height: 336px;
      width: 302px;
      border: 150px solid transparent; 
      border-right: 150px solid ${Theme.colors.fontLight}; 
      border-bottom: 150px solid ${Theme.colors.fontLight};
      bottom: -38px;
      right: -38px;
    }
  }

  @media ${Theme.media.tablet} {
    margin-right: 0;
  }
`
const Photo = styled.img`
  object-fit: cover;
  height: 452px;
  width: 360px;
  border-radius: 20px;

  @media ${Theme.media.mobile} {
    width: 280px;
    height: 352px;    
  }

`
const TextWrapper = styled.div`
max-width: 572px;
width: 100%;

h2 {
  text-align: left;
}
@media ${Theme.media.tablet} {
  ${TitleSection} {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
  }
}
`
const ButtonWrapper = styled.div`
  button + button {
  margin-left: 38px;
} 

  @media ${Theme.media.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${Theme.media.mobile} {
    flex-direction: column;
    align-items: center;

    button + button {
    margin-left: 0;
    margin-top: 28px;
    } 
  }
`

const AboutText = styled.p`
${font({PxMax: 24, PxMin: 18, fw: 400, ls: 1.44})}
  margin: 16px 0 48px;

  @media ${Theme.media.tablet} {
    max-width: 480px;
    width: 100%;
    margin: 16px auto 48px;
  }
`


export const S = {
  About,
  PhotoFrapper,
  Photo,
  TextWrapper,
  AboutText,
  ButtonWrapper
}