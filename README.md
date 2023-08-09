# node-deploy
Deploy de API simples com Node, Postgres, Fastify e Zod

## Rotas

### GET /users
Lista todos os usuário cadastrados no banco (o servidor não tem proteção de autenticação no POST, então o cadastro de usuário é livre para qualquer um)

### POST /users
Adiciona um novo usuário ao banco (tem teste de input com Zod, então caso falte alguma informação ou não esteja no formato correto, espere por um erro)

```json
// application/json

{
  "name": "Some User",
  "email": "email@email.com"
}
```

### DELETE /users/:id
Deleta algum usuário da lista de acordo com o id passado como parâmetro