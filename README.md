# 📦 API de Gestão de Vendas
--
📌 Descrição do Projeto
Este projeto consiste no desenvolvimento de uma API RESTful para gestão de clientes, empresas, vendedores e vendas, seguindo boas práticas de backend, validação de dados e padronização de respostas HTTP.

O objetivo principal é implementar um CRUD completo, com relacionamentos entre entidades e persistência de dados.

--
🎯 Objetivo do Desafio
Desafio 1 – Backend Básico (CRUD estruturado)

A API permite:

Gerir clientes

Gerir empresas

Gerir vendedores

Gerir vendas

Garantir relacionamentos corretos entre as entidades

Retornar respostas padronizadas e bem estruturadas

--
🛠️ Tecnologias Utilizadas

Node.js

Express.js

MongoDB / Mongoose

JWT para autenticação

dotenv para variáveis de ambiente

Nodemon para desenvolvimento

--
📁 Estrutura do Projeto

src/
│── controllers/
│── services/
│── routes/
│── models/
│── middlewares/
│── database/
│── app.js
server.js
.env

--
📚 Entidades e Funcionalidades

👤 Cliente

Criar cliente

Listar clientes

Buscar cliente por ID

Atualizar cliente

Eliminar cliente

🏢 Empresa

Criar empresa

Listar empresas

Buscar empresa por ID

Atualizar empresa

Eliminar empresa

🧑‍💼 Vendedor

Criar vendedor

Listar vendedores

Buscar vendedor por ID

Atualizar vendedor

Eliminar vendedor

Associação a uma empresa

💰 Venda

Criar venda

Listar vendas

Buscar venda por ID

Atualizar venda

Eliminar venda

Associação a um cliente e a um vendedor

🔗 Relacionamentos

Empresa → Vendedores

Cliente → Vendas

Vendedor → Vendas

--
✅ Requisitos Atendidos

CRUD completo para todas as entidades

Relacionamentos entre entidades

Validação de dados na API

Persistência de dados em banco

Uso correto de HTTP Status Codes

Retorno de erros padronizado em JSON

--
📊 Funcionalidades Extras

Paginação de resultados

Ordenação de registros

Filtro de vendas por:

Data

Valor da venda

--
📌 Padrão de Respostas da API

✅ Sucesso
{
  "sucesso": true,
  "mensagem": "Operação realizada com sucesso",
  "dados": {}
}
### ❌ Erro
{
  "sucesso": false,
  "mensagem": "Descrição do erro",
  "erro": "Detalhes técnicos (quando aplicável)"
}
--
📚 Entidades e Funcionalidades

👤 Cliente

Criar cliente

Listar clientes

Buscar cliente por ID

Atualizar cliente

Eliminar cliente

🏢 Empresa

Criar empresa

Listar empresas

Buscar empresa por ID

Atualizar empresa

Eliminar empresa

🧑‍💼 Vendedor

Criar vendedor

Listar vendedores

Buscar vendedor por ID

Atualizar vendedor

Eliminar vendedor

Associação a uma empresa

💰 Venda

Criar venda

Listar vendas

Buscar venda por ID

Atualizar venda

Eliminar venda

Associação a um cliente e a um vendedor

🔗 Relacionamentos

Empresa → Vendedores

Cliente → Vendas

Vendedor → Vendas

--
✅ Requisitos Atendidos

CRUD completo para todas as entidades

Relacionamentos entre entidades

Validação de dados na API

Persistência de dados em banco

Uso correto de HTTP Status Codes

Retorno de erros padronizado em JSON

--
📊 Funcionalidades Extras

Paginação de resultados

Ordenação de registros

Filtro de vendas por:

Data

Valor da venda

--
📌 Padrão de Respostas da API

✅ Sucesso
 git clone https://github.com/JoelsonPedroMutute/sistema-de-gestao-de-vendas.git

 ## Instalar as dependências 
 npm install

## Criar o arquivo .env
Criar o arquivo .env na raiz do projeto e configurar as variáveis de ambiente necessárias, como:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/gestao_vendas
JWT_SECRET=seu_jwt_secret 

## Executar o projeto
npm run dev

--
 📍 Endpoint Base
http://localhost:3000/api

--
👨‍💻 Autor
Joelson Mutute
Projeto desenvolvido como desafio prático de Backend (Node.js / API REST).

