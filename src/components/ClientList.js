import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const ClientList = ({ fetchClients }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja deletar este cliente?')) {
      axios.delete(`/api/clients/${id}`)
        .then(() => fetchClients())
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="mt-4">
      <h1>Clientes</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <Button variant="info" className="me-2">Detalhes</Button>
                <Button variant="danger" onClick={() => handleDelete(client.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ClientList;
