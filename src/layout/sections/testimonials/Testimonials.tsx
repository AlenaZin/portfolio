import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { Slider } from "../../../components/slider/Slider"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";


export const Testimonials = () => {
  return (
    <StyledTestimonials id="testimonials">
      <Container>
        <FlexWrapper direction="column" align="center">
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimonials>
  );
} 

const StyledTestimonials = styled.section`
  background-color: ${Theme.colors.secondaryBg};
`