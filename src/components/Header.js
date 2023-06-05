import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
	return (
		<header className='header'>
			<Navbar className='mb-3' expand='md' variant='dark' bg='dark'>
				<Container>
					<Navbar.Brand>My Posts</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbar-dark-example' />
					<Navbar.Collapse id='navbar-dark-example'>
						<Nav className='header__nav'>
							<NavDropdown
								id='nav-dropdown-dark-example'
								title={<FaBars />}
								menuVariant='dark'>
								<NavDropdown.Item exact to='/' as={Link}>
									Список постов
								</NavDropdown.Item>
								<NavDropdown.Item exact to='/about' as={Link}>
									Обо мне
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
