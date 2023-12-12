import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/Slider.css'
import { S } from "./Slider_Styles"
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../FlexWrapper';
import photo_1 from "./../../assets/images/fotoComent.png";
import photo_2 from "./../../assets/images/fotoComent_2.jpg";
import photo_3 from "./../../assets/images/fotoComent_3.jpg";



type SlidePropsType = {
  photo: string,
  name: string,
  text: string
}

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.IconWrapper>
        <Icon iconId="quote" width="110" height="86" viewBox="0 0 110 86" />
      </S.IconWrapper>
      <FlexWrapper direction="column" align="center">
        <S.Photo src={props.photo} alt="" />
        <S.Name>{props.name}</S.Name>
        <S.SmallText>Happy Client</S.SmallText>
      </FlexWrapper>
      <S.Text>{props.text}

      </S.Text>
      <S.Star>
        <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26" />{" "}
        <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26" />
        <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26" />
        <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26" />
        <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26" />
      </S.Star>
    </S.Slide>
  );
}

const items = [
    <Slide 
      photo={photo_1}
      name="Ivan Ivanov"
      text="“Everyone working in the office is very knowledgeable about all types of
      dental work and options for your individual needs.”"
    />,
    <Slide 
      photo={photo_2}
      name="Piater Piatrov"
      text="“Everyone working in the office is very knowledgeable about all types of
      dental work and options for your individual needs.”"
    />,
    <Slide 
      photo={photo_3}
      name="Igor Igorov"
      text="“Everyone working in the office is very knowledgeable about all types of
      dental work and options for your individual needs.”"
    />,
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel mouseTracking items={items} />
  </S.Slider>
);

// import { FlexWrapper } from "../FlexWrapper"
// import { S } from "./Slider_Styles"
// import photo from "./../../assets/images/fotoComent.png"
// import { Icon } from "../icon/Icon";



// export const Slider = () => {
//   return (
//     <S.Slider>
//       <FlexWrapper>
//         <S.Slide>
//           <S.IconWrapper>
//             <Icon iconId="quote" width="110" height="86" viewBox="0 0 110 86"/>
//           </S.IconWrapper>
//           <FlexWrapper direction="column" align="center">
//             <S.Photo src={photo} alt=""/>
//             <S.Name>Adams Ademola</S.Name>
//             <S.SmallText>Happy Client</S.SmallText>
//           </FlexWrapper>
//           <S.Text>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</S.Text>
//           <S.Star>
//             <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26"/>
//             <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26"/>
//             <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26"/>
//             <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26"/>
//             <Icon iconId={"star"} width="26" height="26" viewBox="0 0 26 26"/>
//           </S.Star>
//         </S.Slide>
//       </FlexWrapper>

//       <S.Pagination>
//         <span> </span>
//         <span className="active"> </span>
//         <span> </span>
//       </S.Pagination>
//     </S.Slider>
//   );
// }

