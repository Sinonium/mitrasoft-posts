import React from 'react';
import { Card } from 'react-bootstrap';

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;