import { S } from "./Home_Styles"
import photo from "./../../../assets/images/foto.jpg"
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";


export const Home = () => {
  return (
    <S.Home id="home">
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap-reverse">
          <S.TextWrapper>
            <S.SmallText>Hello,</S.SmallText>
            <S.Name>I’m <span>Alena Zinovieva</span></S.Name>
            <S.HomeText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
              modi suscipit fuga numquam nesciunt error ipsum dolores, nulla
              reprehenderit vero ullam et earum adipisci. 
            </S.HomeText>
            <div>
              <Button>Download CV</Button>
            </div>            
          </S.TextWrapper>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Home>
  );
}