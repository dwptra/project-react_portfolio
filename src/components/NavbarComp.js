import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div className='navigation sticky-top'>
      <Navbar expand="lg" id='navbar'>
        <Container>
          <Navbar.Brand className='space-mono text-white' href="#hero">Wiii.</Navbar.Brand>
          <Navbar.Toggle lg={false} sm={false} aria-controls="basic-navbar-nav" data-bs-theme='dark' className='custom-nav-tog border-0' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='space-mono text-white' href="#about">About</Nav.Link>
              <Nav.Link className='space-mono text-white' href="#skills">Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp;