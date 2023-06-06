import React from 'react';
import { Card } from 'react-bootstrap';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';

const UserPosts = ({ posts }) => {
	const { comments, commentsLoading } = useSelector((state) => state.post);
	return (
		<Card>
			<Card.Body>
				<Card.Title>Посты пользователя</Card.Title>
				{posts.map((post) => (
					<PostItem
						key={post?.id}
						post={post}
						loading={commentsLoading}
						comments={comments[post?.id]}
					/>
				))}
			</Card.Body>
		</Card>
	);
};

export default UserPosts;
