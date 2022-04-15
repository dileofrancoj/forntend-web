import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
function CustomNav() {

    const links = [
        { id: "1", name: 'About', link: '/' },
        { id: "2", name: 'Courses', link: '/courses' },
        { id: "3", name: 'Education', link: '/education' },
        { id: "4", name: 'Blog', link: '/blog' }

    ]
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    {links.map(({ name, link, id }) => (
                        <NavLink id={id} className="me-3" style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f'
                        })} to={link}>{name}</NavLink>
                    ))}

                </Nav>
            </Container>
        </Navbar>
    )
}

export default CustomNav