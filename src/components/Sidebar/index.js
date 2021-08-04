import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Sobremesas</SidebarLink>
        <SidebarLink to="/">Cardápio</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Peça Agora</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
