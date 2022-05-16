import { Row, Col } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

import { FooterContainer } from '../Container.styled';

const Footer = () => {

    const icons = [
        { id: 1, icon: <BsGithub />, link: 'https://github.com/dileofrancoj' },
        { id: 2, icon: <BsLinkedin />, link: 'https://www.linkedin.com/in/dileofranco/' },
        { id: 3, icon: <BsTwitter />, link: 'https://twitter.com/Franco_DiLeo' },
        { id: 4, icon: <BsYoutube />, link: 'https://www.youtube.com/channel/UCKtT02m2FVY-ExtmHCtFwIw' }
    ]
    return (
        <FooterContainer>
            <Row className="justify-content-center m-0 p-0">
                <Col md={3} xs={8}>
                    {icons.map((icon) =>
                        <a href={icon.link} key={icon.id} target="_new">
                            <span className="ms-3 display-4">
                                {icon.icon}
                            </span>
                        </a>
                    )}
                </Col>
            </Row>
        </FooterContainer>
    )
}

export default Footer;