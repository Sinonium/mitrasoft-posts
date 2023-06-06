import React from 'react';
import LoadingSpinner from './UI/LoadingSpinner';
import { Container, Row } from 'react-bootstrap';

const FallbackComponent = ({ isNonPage }) => {
	return (
		<>
			{isNonPage ? (
				<Container fluid className='my-5 d-flex justify-content-center'>
					<Row className=' align-items-center'>
						<LoadingSpinner />
					</Row>
				</Container>
			) : (
				<div
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}>
					<LoadingSpinner />
				</div>
			)}
		</>
	);
};

export default FallbackComponent;
