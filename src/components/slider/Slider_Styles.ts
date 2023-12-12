import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { changeSize, font } from "../../styles/Common";

const Slider = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  max-width: 670px;
  width: 100%;  
`

const Slide = styled.div` 
  padding: ${changeSize({PxMax: 50, PxMin: 20, Vmax: 1200, Vmin: 375})};
  max-width: 700px;
  background-color: ${Theme.colors.primaryBg};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25% 0;
  position: relative;
  z-index: 0;
`
const IconWrapper = styled.div`
  width: 110px;
  height: 86px;
  position: absolute;
  z-index: 1;  
  top: ${changeSize({PxMax: 65, PxMin: 40, Vmax: 576, Vmin:375})};
  left: ${changeSize({PxMax: 65, PxMin: 40, Vmax: 576, Vmin:375})};

  @media ${Theme.media.mobile} {
    width: 40px;
    height: 35px;
    
    svg {
      width: 40px;
      height: 35px;
    }
  }
`

const Name = styled.h4`
  ${font({PxMax: 24, PxMin: 18, ff: "Poppins, sans-serif", fw: 600, lh: 26})};
  text-align: center;
  margin: 20px 0 4px;
`
const Photo = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 100%;
  object-fit: cover;

  @media ${Theme.media.mobile} {
    width: 74px;
    height: 74px;
  }
`
const SmallText = styled.small`
  ${font({PxMax: 18, PxMin: 14, ff: "Poppins, sans-serif", fw: 400, lh: 26, color: "#FE2C54"})};
  text-align: center;
`

const Text = styled.p`
  ${font({PxMax: 18, PxMin: 12, ff: "Poppins, sans-serif", fw: 400, lh: 26})}
  margin: 20px 0 12px;
  text-align: center;

  @media ${Theme.media.mobile} {
    margin: 5px 0 5px;
  }
`
const Star = styled.div`
display: flex;
  gap: 6px;
`
const Pagination = styled.div`
  margin-top: 30px;
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #F2F2F2;
    border-radius: 20px;

    & + span {
      margin-left: 10px;
    }

    &.active {
      background-color: #333;
    }
  }
`

export const S = {
  Slider,
  IconWrapper,
  Name,
  Photo,
  SmallText,
  Text,
  Star,
  Slide,
  Pagination
}