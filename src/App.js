import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavbarComponent from './components/Navbar';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import FallbackComponent from './components/FallbackComponent';
import './App.scss';

const About = lazy(() => import('./pages/About/About'));

function App() {
	return (
		<div className='App'>
			<Container>
				<NavbarComponent />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/about'
						element={
							<Suspense fallback={<FallbackComponent />}>
								<About />
							</Suspense>
						}
					/>
					<Route path='/details/:id' element={<Details />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
