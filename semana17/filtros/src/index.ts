import { Response, Request } from "express";
import { send } from "process";
import app from "./app";
import connection from "./connection";
import { getAllUsers, getUserbyType } from "./endpoints/endpoints";


app.get('/users', getAllUsers)

app.get('/users/:type', getUserbyType)