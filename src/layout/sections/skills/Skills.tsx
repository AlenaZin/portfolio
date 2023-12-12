import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { S } from "./Skills_Styles"
import { Skill } from "./skill/Skill"

const SocialItemsData = [
  {
    iconId:"code",
    title: "html5",
  },
  {
    iconId:"css",
    title: "css3",
  },
  {
    iconId:"typescript",
    title: "typescript",
  },
  {
    iconId:"react",
    title: "React",
  },
  {
    iconId:"styledComponents",
    title: "styled components",
  },
  {
    iconId:"figma",
    title: "Figma",
  },

]

export const Skills = () => {
  return (
    <S.Skills id="skills">
      <Container>
        <FlexWrapper wrap="wrap" justify="space-between">
          {SocialItemsData.map((s, index) => {
            return <Skill iconId={s.iconId} key={index} title={s.title}/>;
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
}