import http from "node:http";

/*
- Criar Usuários
-Listagem Usuários
-Edição de Usuários
-Remoção Usuários

- HTTP
  - Método HTTP
  - url

- GET, POST, PUT, PATCH, DELETE

  GET => Buscar um recurso de back-end
  POST => Criar um recurso de back-end
  PUT => Atualizar um recurso de back-end
  PATHC => Atualizar uma informação especifica de um recurso de back-end
  DELETE => Deletar um recurso do back-end

  GET /users => Buscando usuário do back-end
  POST /users => Criar um usuário no back-end

*/

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("user listing");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Create users");
  }

  return res.end("Hello Word");
});

server.listen(3333, () => {
  console.log("Server On");
});
