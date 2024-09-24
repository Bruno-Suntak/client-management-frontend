import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="warning" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="#">Gestão de Clientes</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
