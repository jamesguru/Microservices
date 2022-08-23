import express, { Request, Response, Router } from "express";
import { body, validationResult     } from "express-validator";
import { DatabaseConnectionError } from "../errors/Database-connection-error";
import { RequestValidationError } from "../errors/request-validation-errors";

const router = Router();

interface UserInfo extends Request {
  body: {
    email: string;

    password: string;
  };
}

router.post(
  "/api/user/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: UserInfo, res: Response) => {



    const errors = validationResult(req);



    if(!errors.isEmpty){

        throw new RequestValidationError(errors.array())
    } 





    const { email, password } = req.body;

   throw new DatabaseConnectionError();



  }
);

export { router as signupRouter };
