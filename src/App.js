import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavbarComponent from './components/Navbar';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import About from './pages/About/About';
import './App.scss';


function App() {
	return (
		<div className='App'>
			<Container>
				<NavbarComponent />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/about'
						element={<About />}
					/>
					<Route path='/details/:id' element={<Details />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
