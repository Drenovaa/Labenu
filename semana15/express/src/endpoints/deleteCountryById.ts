import { Request, Response } from "express";
import { countries } from "../data";

export const deleteCountryById = (
    req: Request,
    res: Response,
):void => {

    const index: number = countries.findIndex(
        country => country.id === Number(req.params.id)
    )

    countries.splice(index, 1)

    res.status(204)
    res.end()
}