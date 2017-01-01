import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Link from 'next/link'

const AppNavigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link href='/'><a className='navbar-brand'>App Name</a></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {/* I want these NavItems to use Link, or the Router */}
        <NavItem eventKey={1} href='/'>Home</NavItem>
        <NavItem eventKey={2} href='/about'>About</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default AppNavigation
