import GlobalStyle from './styles/global';
import styled from 'styled-components';
import Form from './components/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import Grid from './components/Grid.js';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
//import "react-toastify/dist/ReactToastify.css";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px
`
const Title = styled.h2``;


function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800');
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form />
        <Grid users={users}/>
      </Container>

      <Toaster position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
