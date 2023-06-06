import React, { memo } from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
	return (
		<>
			{posts &&
				posts?.length > 0 &&
				posts?.map((post) => (
					<PostItem key={post.id} post={post}/>
				))}
		</>
	);
};

export default memo(PostList);
