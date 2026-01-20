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
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  gap: 10px
`
const Title = styled.h2``;


function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800');
      console.log(res.data);
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.response?.data || "Erro ao buscar usuários");
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Gerenciamento de Usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>

      <Toaster position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
