import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import PostList from '../../components/PostList';
import { getPostsAsync } from '../../store/reducers/postReducer';
import useDebounce from '../../hooks/useDebounce';
import FilterAndSort from '../../components/FilterAndSort';
import { useFilterSort } from '../../hooks/useFilterSort';
import FallbackComponent from '../../components/FallbackComponent';
import PaginationComponent from '../../components/UI/PaginationComponent';
import './index.scss';

const Home = ({ isSmallScreen }) => {
	const dispatch = useDispatch();
	const { posts, loading, error } = useSelector((state) => state.post);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [filterValueDebounced, setFilterValueDebounced] = useState('');
	const [activePage, setActivePage] = useState(1);
	const postsPerPage = 10;

	const debouncedFilterValue = useDebounce(filterValueDebounced, 700);
	const filteredAndSortedPosts = useFilterSort(posts, filter.sort, debouncedFilterValue);

	const startIndex = (activePage - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;
	const visiblePosts = useMemo(
		() => filteredAndSortedPosts.slice(startIndex, endIndex),
		[endIndex, filteredAndSortedPosts, startIndex]
	);

	const handleFilterChange = useCallback((event) => {
		setFilterValueDebounced(event.target.value);
		setActivePage(1);
	}, []);

	const handleFilterClear = useCallback(() => {
		setFilterValueDebounced('');
	}, []);

	useEffect(() => {
		dispatch(getPostsAsync());
	}, []);

	return (
		<>
			<FilterAndSort
				filter={filter}
				setFilter={setFilter}
				filterValue={filterValueDebounced}
				handleFilterChange={handleFilterChange}
				handleFilterClear={handleFilterClear}
			/>
			{loading && <FallbackComponent />}
			{!loading && (
				<>
					{visiblePosts.length > 0 ? (
						<PostList posts={visiblePosts} />
					) : (
						<p>Нет подходящих постов</p>
					)}
					<Col className='d-flex justify-content-center'>
						<PaginationComponent
							isSmallScreen={isSmallScreen}
							activePage={activePage}
							totalPages={Math.ceil(filteredAndSortedPosts.length / postsPerPage)}
							onPageChange={setActivePage}
						/>
					</Col>
				</>
			)}
		</>
	);
};

export default Home;
