import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
function CustomNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink className="me-3" style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f'
                    })} to="/">About</NavLink>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f'
                    })} to="/courses">Courses</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default CustomNav