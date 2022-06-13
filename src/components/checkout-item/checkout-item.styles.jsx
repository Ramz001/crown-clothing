import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1.2rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: .55rem;
  }
`

export const Arrow = styled.div`
  cursor: pointer;
  height: 80%;
  
  &::selection{
    background: transparent;
  }  
`

export const Name  = styled.span`
  width: 23%;
`

export const Price  = styled.span`
  width: 23%;
`

export const Value = styled.span`
  margin: 0 10px;
`

export const Quantity = styled.span`
  width: 23%;  
  display: flex;
`

export const RemoveButton = styled.span`
  padding-left: .5rem;
  cursor: pointer;
`
