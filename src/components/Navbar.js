import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
	return (
		<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='/'>MyPosts</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbar-nav' />
				<Navbar.Collapse id='navbar-nav'>
					<Nav className='mr-auto'>
						<LinkContainer to='/'>
							<Nav.Link as={NavLink} exact to='/home'>
								Home
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link as={NavLink} exact to='/about'>
								About
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/details'>
							<Nav.Link as={NavLink} exact to='/contact'>
								Details
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>

		</Navbar>
	);
};

export default NavbarComponent;
