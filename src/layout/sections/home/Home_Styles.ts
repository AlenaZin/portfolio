import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { changeSize, font } from "../../../styles/Common";

const Home = styled.section`

  
`
const TextWrapper = styled.div`
  max-width: 480px;
  width: 100%;
  margin-top: 80px;

  @media ${Theme.media.tablet} {
    div {
      text-align: center;
    }
  }
`
const SmallText = styled.small`
  font-size: 28px;
`
const Name = styled.h2`
  ${font({PxMax: 50, PxMin: 32, fw: 700, ff: "Nunito, sans-serif"})};

  span {
    color: ${Theme.colors.accent};
  }

`
const HomeText = styled.p`
  ${font({PxMax: 24, PxMin: 18, fw: 400, ls: 1.44})};
  margin-top: 10px;
  margin-bottom: ${changeSize({PxMax: 40, PxMin: 25, Vmax: 1200, Vmin: 375})};
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 620px;
    height: 692px;
    border: 250px solid transparent; 
    border-right: 250px solid rgba(251, 63, 92, 0.50); 
    border-bottom: 250px solid rgba(251, 63, 92, 0.50);
    position: absolute;
    bottom: -80px;
    right: -150px;
    z-index: -1;

    @media screen and (max-width: 1340px) {
      width: 590px;
      bottom: -48px;
      right: -80px;
    } 

    @media screen and (max-width: 600px) {
      height: 376px;
      width: 306px;
      bottom: -30px;
      right: -66px;
      border: 100px solid transparent; 
      border-bottom: 100px solid rgba(251, 63, 92, 0.50);
      border-right: 100px solid rgba(251, 63, 92, 0.50); 
    }
  };

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-right: 80px;
  };
  @media ${Theme.media.mobile} {
    margin-top: -20px;
  }

`
const Photo = styled.img`
  width: 432px;
  height: 540px;
  object-fit: cover;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    height: 301px;
    width: 240px;
  };
`


export const S = {
  Home,
  TextWrapper,
  SmallText,
  Name,
  HomeText,
  PhotoWrapper,
  Photo,
}