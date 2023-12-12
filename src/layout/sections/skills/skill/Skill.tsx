import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import {S} from "./../Skills_Styles"

type SkillPropsType ={
  iconId: string;
  title: string;
}

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <S.SkillSWrapper>
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
          <S.SkillTitle>{props.title}</S.SkillTitle>
      </S.SkillSWrapper>
    </S.Skill>
  );
};

