import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }
  ul li a{
    color: #fff;
  }

  p {
    text-align: right;
  }
  p a {
    color: #fff;
    text-decoration: none;
  }
  img {
    margin-left: 50px;
  } 
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
    img {
      margin-left: 0;
    } 
  }
`
