import { S } from "../HeaderMenu_Styles";


const items = [
  {
    title: "Home",
    href: "home"
  },
  {
    title: "About",
    href: "about"
  },
  {
    title: "Works",
    href: "works"
  },
  {
    title: "Testimonials",
    href: "testimonials"
  },
  {
    title: "Contact",
    href: "contacts"
  },
]

export const Menu = () => {
  return (
    <ul>      
      {items.map((items, index) => (
        <S.MenuItem key={index}> 
          <S.NavLink 
          smooth={true}
          to={items.href}
          >
            {items.title}
          </S.NavLink>
        </S.MenuItem>
      ))}      
    </ul>
  );
}

