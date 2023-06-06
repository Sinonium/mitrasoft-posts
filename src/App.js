import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import FallbackComponent from './components/FallbackComponent';
import './App.scss';
import Header from './components/Header';
import NotFound from './pages/NotFound/NotFound';

const About = lazy(() => import('./pages/About/About'));

function App() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 350);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	return (
		<div className='App'>
			<Header isMobile={isMobile}/>
			<Container>
				<Routes>
					<Route path='/' element={<Home isSmallScreen={isSmallScreen} />} />
					<Route
						path='/about'
						element={
							<Suspense fallback={<FallbackComponent />}>
								<About />
							</Suspense>
						}
					/>
					<Route path='/details/:id' element={<Details />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
