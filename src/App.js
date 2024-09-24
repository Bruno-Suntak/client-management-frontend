import React, { useState, useEffect } from 'react';
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';
import NavigationBar from './components/Navbar';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function App() {
  const [clients, setClients] = useState([]);

  const fetchClients = () => {
    axios.get('/api/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <ClientForm fetchClients={fetchClients} />
        <ClientList clients={clients} fetchClients={fetchClients} />
      </Container>
    </div>
  );
}

export default App;
