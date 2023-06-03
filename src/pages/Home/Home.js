import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/PostList';
import { getPostsAsync } from '../../store/reducers/postReducer';
import FallbackComponent from '../../components/FallbackComponent';
import './index.scss';

const Home = () => {
	const dispatch = useDispatch();
	const { posts, loading, error } = useSelector((state) => state.post);

	useEffect(() => {
		if (posts.length === 0) {
			dispatch(getPostsAsync({ _limit: 20 }));
		}
	}, []);

	return (
		<>
			{!loading ? (
				<h1>Список постов {posts?.length === 0 && 'пуст'}</h1>
			) : (
				<FallbackComponent />
			)}
			{posts && posts.length > 0 && (
				<PostList posts={posts} />
			)}
		</>
	);
};

export default Home;
