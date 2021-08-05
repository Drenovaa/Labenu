import express from 'express';
import { createNewProduct, getProducts } from '../controllers/productController';
import { createNewUser, getUsers } from '../controllers/userController';

const Router = express.Router();

Router.get('/users', getUsers)
Router.post('/users', createNewUser)
Router.get('/products', getProducts)
Router.post('/products', createNewProduct)

export default Router