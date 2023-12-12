import React from "react"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Icon } from "../../components/icon/Icon"
import {S} from "./Header_Styles"
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu"
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu"
import { Logo } from "../../components/logo/Logo"

export const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? <MobileMenu />
                              : <DesktopMenu /> } 
        </FlexWrapper>
      </Container>
    </S.Header>
  );
}