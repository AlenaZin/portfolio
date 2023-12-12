import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Skills = styled.section`
  background-color: ${Theme.colors.secondaryBg};
  display: flex;
  z-index: -10;

`
const SkillTitle = styled.h3`
  ${font({PxMax: 28, PxMin: 18, ff: "Nunito, sans-serif", fw: 700})}
  margin-top: 50px;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  top: 50px;
  display: block;
  transform: scale(0);
  transition: 1s ease-in-out;
`

const SkillSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 30px 85px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 6px;
    border-radius: 3px;
    background-color: ${Theme.colors.fontDark};

    position: absolute;
    left: 50%;
    top: 105px;
    z-index: 1;
    transform: scale(1) translateX(-50%);   
    
    transition: .8s ease-in-out;
  }

  &:hover {
    h3 {
      transform: scale(1);
      }

    &::before {
      transform: scale(0);
    }  
  }
`


const Skill = styled.div`
    max-width: 15%;
    width: 100%;
  svg {
    position: relative;
  }

  @media ${Theme.media.tablet} {
    max-width: 30%;
  }

  @media ${Theme.media.mobile} {
    max-width: 50%;
  }
`

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: #FFF;

    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    transition: .6s ease-in-out;
  }

  &:hover {
    &::before {
      transform: rotate(45deg) translate(-60%, -60%) scale(1.2);
    }
  }
`

export const S = {
  Skills,
  SkillSWrapper,
  IconWrapper,
  Skill,
  SkillTitle
}