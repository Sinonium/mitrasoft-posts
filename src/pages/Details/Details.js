import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getUserAsync, getUserByIdAsync } from '../../store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import UserCard from '../../components/UserCard';
import UserPosts from '../../components/UserPosts';
import FallbackComponent from '../../components/FallbackComponent';
import NotFound from '../NotFound/NotFound';

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
		return <NotFound user/>
	}

	return (
		<Row>
			<Col md={4}>
				<UserCard user={user} />
			</Col>
			<Col md={8}>
				<UserPosts posts={posts} />
			</Col>
		</Row>
	);
};

export default Details;
