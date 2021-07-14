import { Request, Response } from "express";
import { countries } from "../data";
import { country } from "../types";



export const searchCountry = (
    req: Request,
    res: Response,

):void => {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
        res.status(404)
        res.send("Nenhum parâmetro de busca foi informado!")
    } else {
    let result: country[] = countries;
    if (req.query.name) {
      const name = req.query.name as string;
      result = result.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
    }
  
    if (req.query.capital) {
      const capital = req.query.capital as string;
      result = result.filter((country) =>
        country.capital.toLowerCase().includes(capital.toLowerCase())
      );
    }
  
    if (req.query.continent) {
      const continent = req.query.continent as string;
      result = result.filter((country) =>
        country.continent.toLowerCase().includes(continent.toLowerCase())
      );
    }
  
    if (
      (req.query.name || req.query.capital || req.query.continent) &&
      result.length > 0
    ) {
      res.status(200)
      res.send(result);
    } else {
      res.status(404)
      res.send("Not found :(");
    }
}
  };