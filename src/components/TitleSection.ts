import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { font } from "../styles/Common";


export const TitleSection = styled.h2`
  ${font({PxMax: 48, PxMin: 28, ff: "Nunito, sans-serif", fw: 700, lh: 42})};
  text-align: center;
`