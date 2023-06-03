import React from 'react';
import LoadingSpinner from './UI/LoadingSpinner';

const FallbackComponent = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}>
			<LoadingSpinner />
		</div>
	);
};

export default FallbackComponent;
