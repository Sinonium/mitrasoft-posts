import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ activePage, totalPages, onPageChange }) => {
	const items = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<Pagination>
			{items.map((number) => (
				<Pagination.Item
					key={number}
					active={number === activePage}
					onClick={() => onPageChange(number)}>
					{number}
				</Pagination.Item>
			))}
		</Pagination>
	);
};

export default PaginationComponent;
