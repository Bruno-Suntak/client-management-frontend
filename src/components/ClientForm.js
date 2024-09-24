import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const ClientForm = ({ fetchClients }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    street: '', neighborhood: '', number: '', city: '', postalCode: ''
  });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/clients', formData)
      .then(() => {
        alert('Cliente cadastrado com sucesso!');
        fetchClients();
        setShow(false);
      })
      .catch(err => console.error(err));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cadastrar Cliente
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o telefone"
                name="phone"
                onChange={handleChange}
              />
            </Form.Group>

            <Modal.Header>
                <Modal.Title>Detalhes do Cliente</Modal.Title>
            </Modal.Header>

            <Form.Group controlId="formStreet">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite a rua"
                name="street"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNeighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o bairro"
                name="neighborhood"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNumber">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o número"
                name="number"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite a cidade"
                name="city"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPostalCode">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CEP"
                name="postalCode"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Cadastrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClientForm;
