import React, { memo } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
   const avatars = ['https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp', 'https://cdn-icons-png.flaticon.com/512/147/147142.png', 'https://cdn-icons-png.flaticon.com/512/147/147133.png', 'https://cdn-icons-png.flaticon.com/512/6386/6386976.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU', 'https://cdn-icons-png.flaticon.com/512/147/147140.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_jZ7TCwJGehwy7n4y_RTr73H8590wqHscydz6RvtYQH6mWaERR8nrC89uJvpe9XH6GA&usqp=CAU', 'https://cdn-icons-png.flaticon.com/512/168/168872.png', 'https://cdn-icons-png.flaticon.com/512/3442/3442075.png', 'https://cdn-icons-png.flaticon.com/512/7027/7027779.png']
	return (
		<>
			{posts &&
				posts?.length > 0 &&
				posts?.map((post) => (
					<Row xs='auto' key={post.id} className='post mb-3'>
						<Col className='post__image'>
							<Link to={`/details/${post.userId}`}>
								<Image
									height={80}
									src={avatars[post.userId - 1]}
									rounded
                           alt='avatar'
								/>
							</Link>
						</Col>
						<Col className='post__content' md={10}>
							<Card.Title className='post__title'>{post.title}</Card.Title>
							<Card.Text className='post__description'>{post.body}</Card.Text>
						</Col>
					</Row>
				))}
		</>
	);
};

export default memo(PostList);
