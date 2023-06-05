import React from 'react';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
	return (
		<header className='header'>
			<Navbar className='mb-3' expand='md' variant='dark' bg='dark'>
				<Container>
					<Navbar.Toggle aria-controls='navbar-dark-example' />
					<Navbar.Collapse className='justify-content-between' id='navbar-dark-example'>
						<Navbar.Brand>My Posts</Navbar.Brand>
						<Nav>
							<NavDropdown
								drop='start'
								id='nav-dropdown-dark-example'
								title={<FaBars />}
								menuVariant='dark'>
								<NavDropdown.Item exact as={Link} to='/'>
									Список постов
								</NavDropdown.Item>
								<NavDropdown.Item exact as={Link} to='/about'>
									Обо мне
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item className='text-center' disabled>
									<Image
										width={50}
										roundedCircle
										alt='avatar'
										src='https://img.hhcdn.ru/photo/725020558.jpeg?t=1686084281&h=NCTtue0y4-1UrnUeXTryrw'
									/>
								</NavDropdown.Item>
								<NavDropdown.Item className='text-center' disabled>Нурсултан</NavDropdown.Item>
								<NavDropdown.Item disabled>sinoniumx@gmail.com</NavDropdown.Item>
								<Navbar.Text></Navbar.Text>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
