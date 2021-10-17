import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'
import SocialIcons from './SocialIcons'
import { useState } from 'react'
import { FaNpm } from 'react-icons/fa'

export default function Header() {
    const [display, setDisplay] = useState('none')

    const displayContacts = () => {
        if (display === 'none')
            setDisplay('flex')
        else
            setDisplay('none')

    }

    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='logo.png' alt='' width='150' />
                    {/* <Button onClick={() => displayContacts()} > Contact Me</Button> */}
                    <SocialIcons color='black'
                        isHeader={true}
                    />
                    {/* </StyledSocialIconsDiv> */}
                    {/* <SocialIcons /> */}
                </Nav>


                <Flex>
                    <div>
                        <h1>Asaf Almog</h1>
                        <p>
                            <b>Front End Developer</b>
                        </p>
                        <p>
                            This site was built with Styled components library <a target='_blank'
                                title='https://www.npmjs.com/package/styled-components'
                                style={{ fontSize: '24pt' }}
                                href='https://www.npmjs.com/package/styled-components'><FaNpm /></a>
                        </p>


                        <Button bg='#ff0099' color='#fff'>

                            <a style={{ color: 'inherit' }} target='_blank' href='https://my-portfolio-asaf.netlify.app/'> Check out my Portfolio</a>
                        </Button>
                    </div>

                    <Image src='./images/illustration-mockups.svg' alt='' />
                </Flex>
            </Container >
        </StyledHeader >
    )
}
