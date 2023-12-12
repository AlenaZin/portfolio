import { S } from "../Works_Styles";


type WorkCardPropsType = {
  image: string,
  title: string,
  text: string
}

export const WorkCard = (props: WorkCardPropsType) => {
  return (
    <S.WorkCard>
      <S.Image src={props.image} />
      <div>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
      </div>
    </S.WorkCard>
  );
}

