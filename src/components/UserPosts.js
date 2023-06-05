import React from 'react';
import { Card } from 'react-bootstrap';
import PostItem from './PostItem';

const UserPosts = ({ posts }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Посты пользователя</Card.Title>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default UserPosts;
