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
            <Row className="justify-content-md-center">
                <Col md={6} xs={12}>
                    <IconsContainer>
                        {icons.map((icon) =>
                            <span className="ms-3" key={icon.id}>
                                {icon.icon}
                            </span>

                        )}
                    </IconsContainer>
                </Col>
            </Row>
        </FooterContainer>
    )
}

export default Footer;