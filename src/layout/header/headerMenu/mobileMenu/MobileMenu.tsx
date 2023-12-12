import { Menu } from "../menu/Menu";
import { useState } from "react";
import { S } from "../HeaderMenu_Styles";


export const MobileMenu = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => {setmenuIsOpen( !menuIsOpen )}
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen}  onClick={ () => {setmenuIsOpen(false)} }>
        <Menu/>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
}

