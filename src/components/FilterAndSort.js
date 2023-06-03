import React, { memo } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const FilterAndSort = ({ filter, setFilter, handleFilterChange, filterValueDebounced }) => {
	
   const handleSortChange = (event) => {
      const sortValue = event.target.value;
      if (sortValue === 'none') {
        setFilter({ ...filter, sort: '' });
      } else {
        setFilter({ ...filter, sort: sortValue });
      }
    };

	return (
		<Form.Group controlId='filterAndSort'>
			<Row>
				<Col xs={9}>
					<Form.Control
						type='text'
						value={filterValueDebounced}
						onChange={handleFilterChange}
						placeholder='Поиск постов'
					/>
				</Col>
				<Col xs={3}>
					<Form.Control
						as='select'
						value={filter.sort}
						onChange={handleSortChange}>
						<option value='none'>Без сортировки</option>
						<option value='title'>По названию A-Z</option>
						<option value='title 1'>По названию Z-A</option>
						<option value='body'>По описанию A-Z</option>
						<option value='body 1'>По описанию Z-A</option>
					</Form.Control>
				</Col>
			</Row>
		</Form.Group>
	);
};

export default memo(FilterAndSort);
