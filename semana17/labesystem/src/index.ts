import { Response, Request } from "express";
import { send } from "process";
import app from "./app";
import { connection } from "./data/connection";
import { getAllStudents } from "./endpoints/endpoints";


app.get('/users', getAllStudents)