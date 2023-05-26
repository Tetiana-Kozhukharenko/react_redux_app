import React from "react";
import { HeaderNav, NavLink,NavItem, NavList } from "../../pages/styled-components/StyledComponents";

const NavMenu = () => {
  return(
    <HeaderNav>
      <nav>
        <NavList>
          <NavItem>
            <NavLink to='/publications'>Publications</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/add-publications'>Add publications</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderNav>
  )
}
export default NavMenu;