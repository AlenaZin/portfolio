import { WorkCard } from "./workCard/WorkCard"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper";
import img_1 from "./../../../assets/images/image_1.jpg";
import img_2 from "./../../../assets/images/image_2.jpg";
import img_3 from "./../../../assets/images/image_3.jpg";
import img_4 from "./../../../assets/images/image_4.jpg";
import img_5 from "./../../../assets/images/image_5.jpg";
import img_6 from "./../../../assets/images/image_6.jpg";
import { TitleSection } from "../../../components/TitleSection";
import { S } from "./Works_Styles";

const items = [
  {
    image: img_1,
    title: "Project title",
    text: "UI, Art drection"
  },
  {
    image: img_2,
    title: "Project title",
    text: "UI, Art drection"
  },
  {
    image: img_3,
    title: "Project title",
    text: "UI, Art drection"
  },
  {
    image: img_4,
    title: "Project title",
    text: "UI, Art drection"
  },
  {
    image: img_5,
    title: "Project title",
    text: "UI, Art drection"
  },
  {
    image: img_6,
    title: "Project title",
    text: "UI, Art drection"
  },
] 

export const Works = () => {
  return (
    <S.Works id="works">
      <Container>
        <TitleSection>Works</TitleSection>
        <FlexWrapper wrap="wrap" justify="space-between">
          {items.map((s, index) => {
            return (
              <WorkCard image={s.image} title={s.title} text={s.text}  key={index}/>
            )
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
}


