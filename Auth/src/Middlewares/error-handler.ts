import {Request,Response,NextFunction} from 'express';
import { CustomErrors } from '../errors/custom-errors';
import { DatabaseConnectionError } from '../errors/Database-connection-error';
import { RequestValidationError } from '../errors/request-validation-errors';

export const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {




if(err instanceof CustomErrors){

return res.status(err.statusCode).send({errors:err.serializeErrors()})
} 





res.status(400).send({

    errors:[{message:'something went wrong'}]
})

}