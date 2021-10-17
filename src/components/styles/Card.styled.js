import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || 'row'};

  a {
    text-decoration: none;
  }

  img {
    width: 80%;
    border-radius:5px;
    transition: width 3s;
  }
span{
  font-style: italic;
}

  & > div {
    flex: 1;
  }

  &:hover{
    img {
      width: 100%;
      transition: width 3s;
      padding-right:20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    button{
      margin: 5px;
    }
    img {
      width: 100%;
    }
    h2{
      font-size: 14pt;
    }
  }
  
`
