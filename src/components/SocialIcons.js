import { FaLinkedin, FaFacebook, FaGithub, FaMailBulk, FaPhone } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons({ color, isHeader }) {
    return (
        <StyledSocialIcons color={color} border={isHeader === true ? '1px solid black' : '1px solid #fff'}>

            {
                isHeader == true &&
                <a href='tel:972502820405' title='Phone'>
                    <FaPhone />
                </a>
            }
            <li>
                <a href='mailto:asafalmog119@gmail.com' title='Email'>
                    <FaMailBulk />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/asaf-almog-b94904117/' title='Linkedin'>
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href='https://github.com/asaf6024' title='GitHub'>
                    <FaGithub />
                </a>
            </li>
        </StyledSocialIcons>
    )
}