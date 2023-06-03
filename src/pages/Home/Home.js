import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/PostList';
import { getPostsAsync } from '../../store/reducers/postReducer';
import useDebounce from '../../hooks/useDebounce';
import FilterAndSort from '../../components/FilterAndSort';
import { useFilterSort } from '../../hooks/useFilterSort';
import FallbackComponent from '../../components/FallbackComponent';
import './index.scss';

const Home = () => {
	const dispatch = useDispatch();
	const { posts, loading, error } = useSelector((state) => state.post);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [filterValueDebounced, setFilterValueDebounced] = useState('');

	const debouncedFilter = useDebounce(filterValueDebounced, 700);
	const sortedAndSearchedPosts = useFilterSort(posts, filter.sort, debouncedFilter);

	const handleFilterChange = (event) => {
		setFilterValueDebounced(event.target.value);
	};

	useEffect(() => {
		if (posts.length === 0) {
			dispatch(getPostsAsync({ _limit: 20 }));
		}
	}, []);

	return (
		<>
			<FilterAndSort
				filter={filter}
				setFilter={setFilter}
				filterValue={filterValueDebounced}
				handleFilterChange={handleFilterChange}
			/>
			{!loading ? (
				<h1>Список постов {sortedAndSearchedPosts?.length === 0 && 'пуст'}</h1>
			) : (
				<FallbackComponent />
			)}
			{posts && sortedAndSearchedPosts.length > 0 && (
				<PostList posts={sortedAndSearchedPosts} />
			)}
		</>
	);
};

export default Home;
