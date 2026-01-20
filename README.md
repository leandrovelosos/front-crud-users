# CRUD - Usuários

 Este frontend faz parte de um projeto de desenvolvimento de uma Api para cadastro e gerenciamento de usuários. Desenvolvida com Node.js, Express e MySQL. A aplicação permite criar, listar, atualizar e excluir usuários armazenados em um banco de dados relacional.

## Tecnologias Utilizadas

- Node.js

- Express

- MySQL

# Configuração do projeto

### Banco de Dados

Crie um banco de dados MySQL chamado crud e execute o script abaixo:

```bash
USE crud;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    fone VARCHAR(50),
    data_nascimento DATE
);
```

### BackEnd

Clone o repositório

```bash
https://github.com/leandrovelosos/back-crud-users.git
```
Instale as dependecias

```bash
npm install
```
### Configure o arquivo .env

Exemplo 

```bash
DB_HOST=host
DB_USER=nome de usuario do bd
DB_PASSWORD=senha
DB_NAME=nome do banco
PORT=porta
```

### FrontEnd

Clone o repositorio 

```bash
https://github.com/leandrovelosos/front-crud-users.git
```
Instale as dependencias

```bash
npm install
```

### Configure o arquivo .env

Exemplo 

```bash
REACT_APP_API_URL=http://localhost:8800
```

