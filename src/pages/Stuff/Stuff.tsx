import { Row, Col } from 'react-bootstrap';
import { Container } from '../../components/Container.styled'
import Footer from '../../components/Footer';

const Stuff = () => {
    return (
        <>

            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6} xs={12}>
                        <h1>Sobre mi</h1>
                        <p >Si llegaste hasta acá, te voy a contar un poco más acerca mio pero en español (ya que es mi lengua nativa) y sin formato markdown para que sea mas ameno.</p>
                        <p >Antes de seguir con otras cosas, te quiero mostrar mi setup.</p>
                        <img src="https://preview.redd.it/3bzwmbgzpno71.jpg?width=965&format=pjpg&auto=webp&s=90b32bfedc22f55a2783e0e93931c39f403a8e80" alt="Setup" />
                        <p>Al pasar tantas horas del día dentro de la oficina, es super importante para mi estar cómodo y tener buenas herramientas de trabajo para afrontar el día a día.</p>
                        <p>Por eso cuento con:</p>
                        <ul>
                            <li>Macbook Pro 16"</li>
                            <li>Monitor DELL Regulable</li>
                            <li>Airpods Max para las reuniones (y para enfocarme mientras codeo)</li>
                            <li>Teclado mecánico HYPERX</li>
                            <li>Silla ergonómica</li>
                            <li>Magic Mouse v2</li>
                            <li>Kindle para lecturas relajadas</li>
                            <li>Tira LED RGB Phillips para ambientar la oficina</li>

                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Stuff;