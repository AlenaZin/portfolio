import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { S } from "./About_Styles"
import photo from "./../../../assets/images/foto.jpg"
import { TitleSection } from "../../../components/TitleSection"


export const About = () => {
  return (
    <S.About id="about">
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap">
          <S.PhotoFrapper>
            <S.Photo src={photo} alt="" />
          </S.PhotoFrapper>
          <S.TextWrapper>
            <TitleSection>I Am A Developer</TitleSection>
            <S.AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              officiis accusamus alias nam ratione amet rerum, in pariatur aut
              esse iste laudantium! Vel assumenda iusto voluptatem ratione,
              sequi atque ea.
            </S.AboutText>
            <S.ButtonWrapper>
              <Button>Download CV</Button>
              <Button className="revers">View Portfolio</Button>
            </S.ButtonWrapper>
          </S.TextWrapper>
        </FlexWrapper>
      </Container>
    </S.About>
  );
}