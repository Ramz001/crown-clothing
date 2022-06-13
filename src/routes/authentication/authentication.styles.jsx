import styled, { css } from 'styled-components'

export const AuthenticationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55rem;
    margin: 1.5rem auto;
    
    ${mediaQueries}
`

const mediaQueries = styled.css`
    @media (min-width: 1024px){
        ${AuthenticationContainer}{
            flex-direction: row;
        }
    }
`
