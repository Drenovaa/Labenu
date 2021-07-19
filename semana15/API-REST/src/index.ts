import express, { Request, Response } from 'express'
import cors from 'cors'
import { users, user } from './users'

const app = express()

app.use(express.json())
app.use(cors())

/*
EX1

A) GET
B)Como desejamos buscar a lista de usuarios a identidade pode ser /users 

*/
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

/*
EX2

A)O parâmetro é recebido em uma query, como a pesquisa é feita com base no tipo e recebe apenas um parâmetro de filtro a resposta é enviada apenas se o type solicitado existir.

B)Sim, criando um enum

*/

app.get("/users/searchByType", (req: Request, res: Response) => {
  let result: user[] = users;

  if(req.query.type){
    const type = req.query.type as string;
    result = result.filter((user) =>
      user.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())
    )
  
  if(req.query.type && result.length > 0){
    res.status(200).send(result)
  }else{
    res.status(404).send("Usuario não encontrado")
  }
    
  }
})

/*
EX3
A) Envio por query
B) -

*/

app.get("/users/searchByName", (req: Request, res: Response) => {
  let result: user[] = users;

  if(req.query.name){
    const name = req.query.name as string;
    result = result.filter((user) =>
      user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    )
  
  if(req.query.name && result.length > 0){
    res.status(200).send(result)
  }else{
    res.status(404).send("Usuario não encontrado")
  }
    
  }
})

/*
EX4
A)Ambos tiveram o mesmo comportamento de sempre que eu enviar uma requisição um novo usuario era adicionado mesmo que repetido
B)Não, para a criação e novos envios o metodo POST parece ser o ideal, e o metodo PUT seria em caso de alterações
*/

app.post("/users/addUser", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { id, name, email, type, age } = req.body;

    const newUser = {
      id,
      name,
      email,
      type,
      age,
    };

    if(!name || !email || !type || !age || !id){
      errorCode = 404
      throw new Error("É preciso preencher todos os dados para criar um novo usuário")
    }

    users.push(newUser);
    res.status(200).send({
      message: "Usuario criado",
      user: newUser,
    });

  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
