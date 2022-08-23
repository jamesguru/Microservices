import express, { json, Request, Response } from 'express';
import {currentuser} from './Routes/current-user';
import { errorHandler } from './Middlewares/error-handler';
import { NotFoundError } from './errors/not-found-errors';
import 'express-async-errors'


const app = express();


app.use(json())

app.use(currentuser);

app.use(errorHandler);

app.all('*', async(req,res) =>{

    throw new NotFoundError();
})


app.listen(4000,() => {

    console.log('app is running on port 4000')
}) 