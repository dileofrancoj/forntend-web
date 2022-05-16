import { Row, Col } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

import { FooterContainer, IconsContainer } from '../Container.styled';

const Footer = () => {

    const icons = [
        { id: 1, icon: <BsGithub /> },
        { id: 2, icon: <BsLinkedin /> },
        { id: 3, icon: <BsTwitter /> },
        { id: 4, icon: <BsYoutube /> }
    ]
    return (
        <FooterContainer>
            <Row className="justify-content-center m-0 p-0">
                <Col md={3} xs={8}>
                    {icons.map((icon) =>
                        <span className="ms-3 display-4" key={icon.id}>
                            {icon.icon}
                        </span>

                    )}
                </Col>
            </Row>
        </FooterContainer>
    )
}

export default Footer;