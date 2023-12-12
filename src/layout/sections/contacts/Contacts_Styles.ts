import styled from "styled-components"
import { changeSize, font } from "../../../styles/Common"
import { Theme } from "../../../styles/Theme"

const Contacts = styled.section`
`
const Form = styled.form`
  max-width: 524px;
  width: 100%;
  display: flex;
  flex-direction: column;  
  margin-top: ${changeSize({PxMax: 80, PxMin: 50, Vmax: 1200, Vmin: 375})};

label {
  ${font({PxMax: 16, PxMin: 11, fw: 400, color: "#071A58"})};
  margin-bottom: 8px;
}

textarea {
  resize: none;
  height: 176px;
}
`

const Field = styled.input`
  ${font({PxMax: 18, PxMin: 11, fw: 400, color: "#071A58"})};
  width: 100%;
  padding: 10px;
  margin-bottom: 22px;
  border: 1px solid rgba(0, 0, 0, 0.20);


&::placeholder {
  ${font({PxMax: 16, PxMin: 11, fw: 400, color: "#071A58"})};
  opacity: 0.6;
  }

  &:focus-visible {
    outline: 1px solid rgba(0, 0, 0, 0.20);
  }
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`

const Maps = styled.img`
  width: 100%;
  max-width: 512px;
  object-fit: cover;
  margin-top: 60px;
  height: 506px;

  @media ${Theme.media.mobile} {
    width: 282px;
    height: 195px;
    margin-top: 50px;
  }
`

export const S = {
  Contacts,
  Form,
  Field,
  ButtonWrapper,
  Maps
}