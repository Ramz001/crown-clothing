import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const FormContainer = styled.form`
  min-width: 32rem;
  height: 6.5rem;
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 1rem;
`