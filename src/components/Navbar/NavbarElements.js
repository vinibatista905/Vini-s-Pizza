import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #e31837;
    transform: scale(1.2);
    transition: ease-in-out;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
    font-size: 1.5rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }

  &:hover {
    color: #e31837;
    transform: scale(1.2);
    transition: ease-in-out;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 3rem;
  transform: translate(-50%, -15%);

  &:hover {
    color: #e31837;
  }

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }

  &:hover {
    color: #e31837;
  }
`;
