import { Icon } from "../../components/icon/Icon";
import { S } from "./Footer_Styles";

const SocialItemsData: {iconId: string, link:string}[] = [
  {
    iconId:"instagram",
    link: ""
  },
  {
    iconId:"telegram",
    link: ""
  },
  {
    iconId:"vk",
    link: ""
  },
  {
    iconId:"linkedin",
    link: ""
  },
]

export const Footer = () => {
  return (
    <S.Footer>
      <S.ContactList>
        <S.ContactItem>
          <S.ContactLink>
            <Icon iconId="phone" width="24" height="22" viewBox="0 0 24 22"/>
            +7(963)604-65-91 
          </S.ContactLink>
        </S.ContactItem>
        <S.ContactItem>
          <S.ContactLink>
            <Icon iconId="messager" width="24" height="22" viewBox="0 0 24 22"/>
            nomak1493@gmail.com
          </S.ContactLink>
        </S.ContactItem>
        <S.ContactItem>
          <S.ContactLink>
            <Icon iconId="maps" width="22" height="24" viewBox="0 0 22 24"/>
          497 Evergreen Rd. Roseville, CA 95673
          </S.ContactLink>
        </S.ContactItem>
      </S.ContactList>

      <S.SocialList>
      {SocialItemsData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink href={s.link} target="_blank">
                  <Icon
                    iconId={s.iconId}                    
                    width={"23px"}
                    height={"23px"}
                    viewBox={"0 0 23 23"}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
      </S.SocialList>
      <S.Copyright>© 2023 Alena Zinovieva, All Rights Reserved.</S.Copyright>
    </S.Footer>
  );
};