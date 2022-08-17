import express, { json, Request, Response } from 'express';


const app = express();


app.use(json())

app.use((err:Error, req:Request, res:Response) => {

    if(err.message){

        console.log(err.message);
    }
})

app.listen(7000,() => {

    console.log('app is running on port 4000')
})