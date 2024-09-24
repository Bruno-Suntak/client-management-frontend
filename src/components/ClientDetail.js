import React from 'react';

const ClientDetail = ({ client }) => {
  return (
    <div>
      <h2>Detalhes do Cliente</h2>
      <p>Nome: {client.name}</p>
      <p>Email: {client.email}</p>
      <p>Telefone: {client.phone}</p>
      <h4>Endereço</h4>
      <p>Rua: {client.street}</p>
      <p>Bairro: {client.neighborhood}</p>
      <p>Número: {client.number}</p>
      <p>Cidade: {client.city}</p>
      <p>CEP: {client.postalCode}</p>
    </div>
  );
};

export default ClientDetail;