import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getUserAsync } from '../../store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';

const Details = () => {
	const { user } = useSelector((state) => state.user);
	const params = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserAsync(params.id));
	}, []);
	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>{user.name}</Card.Title>
					<Card.Text>{user.email}</Card.Text>
					<Card.Text>{user.phone}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Details;
