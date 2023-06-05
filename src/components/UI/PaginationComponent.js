import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ activePage, totalPages, onPageChange }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
	const items = Array.from({ length: totalPages }, (_, index) => index + 1);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 350);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	return (
		<Pagination size={isSmallScreen ? 'sm' : ''}>
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
