import { Response, Request } from "express";
import { send } from "process";
import app from "./app";
import connection from "./connection";


app.get('/', async (req, res) =>{
    try{
        const result = await connection.raw(`
            SELECT * FROM Actor;
        `)
        res.status(200).send(result[0])
    }
    catch (error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//EX1
// B)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = '${name}'
        `);
    return result[0];
};

  app.get("/:name", async (req: Request, res: Response) => {
    try {
      const name = req.params.name
      const actor = await getActorByName(name)
      
      res.status(200).send(actor)
      res.end()
    } catch (error) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
});

//C)  && EX3 B)
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count 
    FROM Actor 
    WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};

app.get("/count/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender
    let text
    if(gender === "female"){
      text = "atriz"
    }else{
      text = "atores"
    }

    console.log(`Existem`,await countActors(gender),`${text} do sexo ${gender}`)

    res.end()
  } catch (error) {
        console.log(error.message)
    res.status(500).send("Unexpected error")
  }
});

//EX3
//A)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
          SELECT * FROM Actor
          WHERE id = '${id}'
      `);
  return result[0];
};

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//EX4
//A)
const updateSalary = async (id: string, salary: number): Promise<any> => {
  const result = await connection.raw(`
          UPDATE Actor
          SET salary = '${salary}'
          WHERE id = '${id}'
      `);
  return result;
};

app.post('/actor', async (req: Request, res: Response) =>{
  try{
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Alteração concluida"
    })

  }
  catch (err){
    res.status(400).send({
      message: "erro"
    });
  }
})

///B)
const deleteActor = async (id: string): Promise<any> => {
  const result = await connection.raw(`
          DELETE FROM Actor
          WHERE id = '${id}'
      `);
  return result;
};


app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});