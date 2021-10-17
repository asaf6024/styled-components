import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src='logo.png' alt='' width='150' />
                <Flex>
                    <ul>
                        <li>
                            You can contact me or visit other websites I developed.
                        </li>
                        <li><a href='tel:972502820405'>+972-50-2820405</a></li>
                        <li><a href='mailto:asafalmog119@gmail.com'>asafalmog119@gmail.com</a></li>
                    </ul>
                    <ul>
                        <li><a href='https://my-portfolio-asaf.netlify.app/'>My Porfolio</a></li>
                        <li><a href='http://meshekalmog.co.il/'>Meshek Almog</a></li>
                        <li><a href='https://weather-forecast-asaf.netlify.app/'>Weather Forecast</a></li>
                    </ul>

                    <ul>
                        <li><a href='https://meme-generator-asaf.netlify.app/'>Meme Generator</a></li>
                        <li><a href='https://my-sass-website.netlify.app/'>Sass Website</a></li>
                        <li><a href='https://e-commerce-asaf.netlify.app/'>E-Commerce demo</a></li>

                    </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; 2021 <a href='https://github.com/asaf6024' title='GitHub'>Asaf Almog.</a> All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}