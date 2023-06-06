import React, { memo } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const FilterAndSort = ({ filter, setFilter, handleFilterChange, filterValue, handleFilterClear }) => {
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
					<InputGroup>
						<Form.Control
							type='text'
							value={filterValue}
							onChange={handleFilterChange}
							placeholder='Поиск постов'
						/>
						{filterValue && <Button onClick={handleFilterClear} variant='outline-secondary'>&times;</Button>}
					</InputGroup>
				</Col>

				<Col xs={3}>
					<Form.Control as='select' value={filter.sort} onChange={handleSortChange}>
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
