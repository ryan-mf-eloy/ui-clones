import styled from 'styled-components'

const Button = styled.button`
  padding: 16px 32px;
  border-radius: ${({ theme }) => theme.buttonBorderRadius};
  border: none;
  background: #ffffff;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  :hover {
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 10px rgba(0,0,0,.2)
  }

  svg {
    margin-right: 10px;
  }

  ${props => props.small && 
    `padding: 12px;
     max-width: 70px;
     font-size: 12px;
     font-weight: 600;`
  }

  ${props => props.dark &&
    `background: ${props.theme.darks[3]};
     color: #ffffff;
     :hover {
        background: ${props.theme.darks[2]};
        color: #ffffff;
     }
  `}

  ${props => props.primary &&
    `background: ${props.theme.primary};
     color: #ffffff;
     :hover {
        background: #8ea1e1;
        color: #ffffff;
     }
  `}
`

export default Button