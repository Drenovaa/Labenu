import express, { Request, Response } from "express"
import connection from "./connection"
import app from "./app"

app.use(express.json())

type user = {
    id: number,
    name: string,
    nickname: string,
    email: string
}


type task = {
    id: number
    title: string,
    description: string,
    limit_date: string,
    status: string
    creator_user_id : string
}

app.put('/user', async (req: Request, res: Response)=>{
    try {
  
      if(!req.body.name || !req.body.nickname || !req.body.email){
        throw new Error("Todos os campos são obrigatórios")
      }
  
      const newUser: user = {
        id: Math.round(Math.random()*100),
        name: req.body.name, 
        nickname: req.body.nickname, 
        email: req.body.email
      }
  
      await connection('TodoListUser').insert(newUser)
  
      res.status(200).send("Novo usuário criado com sucesso!")

    } catch (error) {

      res.status(400).send({ message: error.message })

    }
})

const getUserById = async (id: string): Promise<any> => {

    const result = await connection.raw(`
      SELECT id, nickname FROM TodoListUser
      WHERE id = '${id}'
    `)

      return result[0]
  }

app.get('/user/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result =  await getUserById(id)

        res.send(result)

    } catch (error) {

        res.status(500).send({ message: error.message })

    }
})

const editUser = async (id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection.raw(`
      UPDATE TodoListUser
      SET name = '${name}',
      nickname = '${nickname}'
      WHERE id = '${id}'
    `)

      return result[0]
}  
  
app.post('/user/edit/:id', async (req: Request, res: Response)=> {
    try {

        if(!req.body.name || !req.body.nickname){
            throw new Error("Todos os campos são obrigatórios")
        }

        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        const result =  await editUser(id, name, nickname )

        res.send(result[0]) 

    } catch (error) {

        res.status(400).send({ message: error.message })

    }
})


function formatarData(date: string): string {
    const split = date.split('/')
    const dateFormat = split[2] + "-" + split[1] + "-" + split[0]
    return dateFormat
}
  
app.post('/task', async (req:Request, res: Response) => {
    try {
        if(!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id ){
            console.log(req.body)
            throw new Error("Todos os campos são obrigatórios")
        }

        if(req.body.title && req.body.creator_user_id){
           const check = await connection.raw(`
           SELECT * FROM TodoListTask
           WHERE title ='${req.body.title}';
            `)
            if(check[0][0] && check[0][0].creator_user_id == req.body.creator_user_id){
                console.log(check[0])
                throw new Error("Este usuario já possui uma tarefa com esse nome")
            }
        }

        const newTask: task = {
            id: Math.round(Math.random()*100),
            title: req.body.title, 
            description: req.body.description, 
            limit_date: formatarData(req.body.limit_date),
            status: req.body.status,
            creator_user_id : req.body.creator_user_id 
        }

        await connection('TodoListTask').insert(newTask)

        res.status(200).send("Feito!")

    } catch (error) {

        res.status(400).send({ message: error.message })

    }
})

const getTaskById = async (id:string): Promise<any> => {
    const result = await connection.raw(`
    SELECT 
        task.id as ID,
        task.title as Title,
        task.description as Description,
        task.status as Status,
        DATE_FORMAT(limit_date,'%d/%m/%Y') AS limit_date,
        task.creator_user_id as UserId,
        nickname FROM TodoListTask as task
        JOIN TodoListUser as user
        ON creator_user_id = user.id
        WHERE task.id ='${id}'
    `)

      return result[0][0]
}
app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        let result =  await getTaskById(id)

        res.status(200).send({Task: result})

    } catch (error) {

        res.status(500).send(error)

    }
})

app.get('/users', async (req, res) =>{
    try{
        const result = await connection.raw(`
            SELECT * FROM TodoListUser;
        `)
        res.status(200).send(result[0])
    }
    catch (error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})

const getTaskByUser = async (creator_user_id:string): Promise<any> => {
    const result = await connection.raw(`
    SELECT 
        task.id as ID,
        task.title as Title,
        task.description as Description,
        task.status as Status,
        DATE_FORMAT(limit_date,'%d/%m/%Y') AS limit_date,
        task.creator_user_id as UserId,
        nickname FROM TodoListTask as task
        JOIN TodoListUser as user
        ON creator_user_id = user.id
        WHERE task.creator_user_id ='${creator_user_id}'
    `)

      return result[0]
}

app.get("/tasks", async (req: Request, res: Response) => {
    try {
        const userTask = req.query.userTask as string
        let result =  await getTaskByUser(userTask)
        console.log(userTask)


        res.status(200).send(result)

    } catch (error) {

        res.status(500).send(error)

    }
})