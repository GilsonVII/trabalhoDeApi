API – Trabalho Prático

Este projeto contém 7 exercícios de API REST desenvolvidos em Node.js, com rotas para manipulação de usuários e posts.

Funcionalidades Implementadas

GET /users – Busca todos os usuários.

GET /users/filter?min=idadeMin&max=idadeMax – Filtra usuários por idade mínima e máxima.

POST /posts – Cria um novo post.

PUT /users/:id – Atualiza dados de um usuário existente.

PUT /posts/:id – Atualiza um post existente.

DELETE /posts/:id – Deleta um post (com validação de usuário).

DELETE /users/inactive – Remove usuários inativos.

Tecnologias Utilizadas

Node.js

Express

cors

typeScript

Estrutura do Projeto

src/
 ├── routes/       # Definição das rotas
 ├── controllers/  # Lógica de entrada/saída HTTP
 ├── business/     # Regras de negócio
 ├── data/         # Acesso a dados
 ├── index.js      # Ponto de entrada da aplicação

Como Rodar o Projeto

Clone este repositório:

git clone https://github.com/seu-usuario/nome-repo.git


Instale as dependências:

npm install


Rode o servidor:

npm run dev

Acesse em:

http://localhost:3000

Exemplos de Requisições
Criar um Post
POST /posts
{
  "userId": 1,
  "title": "Meu primeiro post",
  "content": "Conteúdo do post"
}

Filtrar Usuários por Idade
GET /users/filter?min=18&max=30

Autor

Gilson Alberice
