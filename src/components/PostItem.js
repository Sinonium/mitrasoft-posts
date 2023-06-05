import React, { useState } from 'react';
import { Card, Col, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const avatars = [
		'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp',
		'https://cdn-icons-png.flaticon.com/512/147/147142.png',
		'https://cdn-icons-png.flaticon.com/512/147/147133.png',
		'https://cdn-icons-png.flaticon.com/512/6386/6386976.png',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU',
		'https://cdn-icons-png.flaticon.com/512/147/147140.png',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_jZ7TCwJGehwy7n4y_RTr73H8590wqHscydz6RvtYQH6mWaERR8nrC89uJvpe9XH6GA&usqp=CAU',
		'https://cdn-icons-png.flaticon.com/512/168/168872.png',
		'https://cdn-icons-png.flaticon.com/512/3442/3442075.png',
		'https://cdn-icons-png.flaticon.com/512/7027/7027779.png',
	];


	const toggleComments = () => {
		if (showComments) {
			setShowComments(false);
			setComments([]);
		} else {
			fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
				.then((response) => response.json())
				.then((data) => setComments(data))
				.catch((error) => console.log(error));

			setShowComments(true);
		}
	};

	return (
		<Row key={post.id} className='mb-3'>
			<Card className={showComments ? 'post align-items-start' : 'post'}>
				<Col xs='auto' className='post__image'>
					<Link to={`/details/${post.userId}`}>
						<Image height={80} src={avatars[post.userId - 1]} rounded alt='avatar' />
					</Link>
				</Col>
				<Col className='post__content'>
					<Card.Title className='post__title'>{post.title}</Card.Title>
					<Card.Text className='post__description'>{post.body}</Card.Text>
					{showComments && (
						<>
							<hr />
							<div>
								<h5>Список комментариев:</h5>
								{comments.map((comment) => (
									<div key={comment.id}>
										<strong>{comment.name}</strong>
										<p>{comment.body}</p>
									</div>
								))}
							</div>
						</>
					)}
				</Col>
				<Button variant='outline-primary' onClick={toggleComments}>
					{showComments ? 'Скрыть комментарии' : 'Комментарии'}
				</Button>
			</Card>
		</Row>
	);
};

export default PostItem;
