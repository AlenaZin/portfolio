import { ElementRef, useRef } from "react";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/TitleSection";
import maps from "./../../../assets/images/maps.png"
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';



export const Contacts = () => {

  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs.sendForm('service_tukwpl8', 'template_14ipzd7', form.current, 'Kjq3SU7qcZfKAR8tx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      // form.current.reset();
  };


  return (
    <S.Contacts id="contacts">
      <Container>
        <TitleSection>Get in Touch</TitleSection>
        <FlexWrapper justify="space-around" wrap="wrap">
          <S.Form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Your Name:</label>
            <S.Field required id="name" placeholder="Name" name="user_name"/>
            <label htmlFor="email">Your Email Address:</label>
            <S.Field required id="email" placeholder="something@website.com" name="email"/>
            <label htmlFor="subject">Subject</label>
            <S.Field required id="subject" placeholder="Question about your article" name="subject"/>
            <S.Field required placeholder="Your message starts with…" as={"textarea"} name="message"/>
            <S.ButtonWrapper>
              <Button type="submit">Send</Button>
            </S.ButtonWrapper>            
          </S.Form>
          
          <S.Maps src={maps} alt=""/>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};