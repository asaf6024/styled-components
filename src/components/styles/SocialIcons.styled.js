import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    border: ${({ border }) => border || '1px solid #fff'};
    border-radius: 50%;
    color:${({ color }) => color || '#fff'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
  a:hover{
    color: blue;
  }
`

