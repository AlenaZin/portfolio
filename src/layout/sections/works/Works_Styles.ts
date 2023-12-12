import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Theme } from "../../../styles/Theme";


const Works = styled.section`
  ${TitleSection} {
    margin-bottom: 14px;
  }

  @media ${Theme.media.tablet} {
    ${TitleSection} {
      margin-bottom: 24px;
    }
  }
`;

const WorkCard = styled.div`
  width: 330px;
  flex-grow: 1;
  margin: 0 5px;
  padding: 60px 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Theme.media.tablet} {
    padding-top: 45px;
  }
`;
const Image = styled.img`
  width: 330px;
  height: 330px;
  object-fit: cover;
`
const Title = styled.h4`
  font-family: Nunito, sans-serif;
  font-weight: 600;
  line-height: 30px;
  font-size: 20px;
  margin: 25px 0 10px;
  text-align: left !important;
`
const Text = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
`

export const S = {
  Works,
  WorkCard,
  Image,
  Title,
  Text
}