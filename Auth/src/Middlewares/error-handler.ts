import {Request,Response,NextFunction} from 'express';
import { DatabaseConnectionError } from '../errors/Database-connection-error';
import { RequestValidationError } from '../errors/request-validation-errors';

export const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {




if(err instanceof RequestValidationError){

const formattedErrors = err.errors.map(error => {


    return {message: error.msg, field:error.param}
}) ;


return res.status(400).send({errors:formattedErrors});


} 


if(err instanceof DatabaseConnectionError){




    return res.status(500).send({errors:[

        {message:err.message}
    ]})


}


    res.status(400).json({

        message:"Something went wrong"
    })


}