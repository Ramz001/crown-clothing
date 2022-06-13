import styled from "styled-components";
import { BaseButton, 
  InvertedButton, 
  GoogleSignInButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 18rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 0.65rem;

  ${GoogleSignInButton},
  ${InvertedButton},
  ${BaseButton} {
    margin-top: auto;
    width: 100%;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
