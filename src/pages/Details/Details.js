import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getUserAsync, getUserByIdAsync } from '../../store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import UserPosts from '../../components/UserPosts';
import FallbackComponent from '../../components/FallbackComponent';
import NotFound from '../NotFound/NotFound';
import './index.scss';

const Details = () => {
	const { user, loading } = useSelector((state) => state.user);
	const { posts } = useSelector((state) => state.post);
	const params = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserAsync(params.id));
		dispatch(getUserByIdAsync(params.id));
	}, []);

	if (loading) {
		return <FallbackComponent />;
	}

	if (posts.length === 0) {
		return <NotFound user />;
	}

	return (
		<Row>
			<Col md={4}>
				<UserCard user={user} />
			</Col>
			<Col md={8}>
				<UserPosts posts={posts} />
			</Col>
			<div className='text-center my-3'>
				<Button as={Link} to='/'>Вернуться на главную</Button>
			</div>
		</Row>
	);
};

export default Details;
