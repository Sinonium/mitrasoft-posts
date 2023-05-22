import { Route, Routes } from 'react-router-dom';
import { About, Details, Home } from './pages';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/about' element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;
