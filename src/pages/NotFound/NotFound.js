import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFound = ({user}) => {
  return (
    <Container className="text-center">
      <h1>Страница {user ? 'пользователя' : ''} не найдена</h1>
      <p>Извините, запрошенная страница {user ? 'пользователя' : ''} не найдена.</p>
      <Button as={Link} to="/" variant="primary">На главную</Button>
    </Container>
  );
};

export default NotFound;
