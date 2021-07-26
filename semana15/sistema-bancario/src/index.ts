import express, { Request, Response } from 'express'
import cors from 'cors'
import dayjs from "dayjs";
import { users, user } from './users'

const app = express()

app.use(express.json())
app.use(cors())


app.get("/contas", (req: Request, res: Response) => {
  res.status(200).send(users)
})

app.get("/conta/saldo", (req: Request, res: Response) => {
  let errorCode: number = 400
  const cpf: string = req.body.cpf

  try{
    if(!cpf){
      errorCode = 404
      throw new Error('Por favor digite um cpf válido')
    }
  
    function verificaSaldo(cpf:string){
      let usuarios: user[] = users;
      return usuarios.find((usuario) => usuario.cpf === cpf)
    }
  
    const saldoUsuario:user | undefined = verificaSaldo(cpf)
  
    if(!saldoUsuario){
      errorCode = 404
      throw new Error('Não existe nenhum usuário com esse cpf')
    }
  
    res.status(200).send({ saldo: saldoUsuario.saldo })

  }catch (error) {
    res.status(400).send({ message: error.message })
  }
})



app.post("/newAccount/", (req: Request, res: Response) => {
  let errorCode: number = 400
  
  try {
    const { id=Math.round(Math.random()*100), name, cpf, saldo, nascimento } = req.body;
    const formatoData = dayjs(nascimento).format("DD/MM/YYYY");

    function verificaIdade (nascimento:string){
      const dataAtual = new Date()
      let dataNascimento = new Date(nascimento)
      let idade = dataAtual.getFullYear() - dataNascimento.getFullYear()
      let mes = dataAtual.getMonth() - dataNascimento.getMonth()
      if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNascimento.getDate())) 
      {
        idade--;
      }
      return idade;
    }

    function verificaCPF (cpf:string){
      let usuarios: user[] = users;
      return usuarios.some((usuario) => usuario.cpf === cpf)
    }

    if(verificaCPF(cpf)){
      errorCode = 404
      throw new Error("CPF já cadastrado")
    }

    if(verificaIdade(nascimento) < 18){
      errorCode = 404
      throw new Error("É preciso ser maior de 18 para criar uma conta")
    }

    if(formatoData === "Invalid Date"){
      errorCode = 404
      throw new Error("É preciso preencher a data de nascimento no padrão YYYY-MM-DD")
    }

    const newUser = {
      id,
      name,
      cpf,
      saldo: 0,
      nascimento: formatoData,
    };

    if(!name || !cpf || !nascimento ){
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
