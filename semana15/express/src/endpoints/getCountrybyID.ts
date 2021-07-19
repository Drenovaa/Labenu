import { Request, Response } from "express";
import { countries } from "../data";
import { country } from "../types";

export const getCountrybyID = (
    req: Request,
    res: Response,
):void => {
    const findCountry:country|undefined = countries.find(
        country=> country.id === Number(req.params.id)
    )
    if(findCountry){
        res.status(200)
        res.send({
            
            data: (findCountry)
        })
    }else{
        console.log(req.query)
        res.status(404)
        res.send({
            error: (`Não existe pais com o ID:${req.params.id}`)
        })
    }
}