"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const Database_connection_error_1 = require("../errors/Database-connection-error");
const request_validation_errors_1 = require("../errors/request-validation-errors");
const errorHandler = (err, req, res, next) => {
    if (err instanceof request_validation_errors_1.RequestValidationError) {
        const formattedErrors = err.errors.map(error => {
            return { message: error.msg, field: error.param };
        });
        return res.status(400).send({ errors: formattedErrors });
    }
    if (err instanceof Database_connection_error_1.DatabaseConnectionError) {
        return res.status(500).send({ errors: [
                { message: err.message }
            ] });
    }
    res.status(400).json({
        message: "Something went wrong"
    });
};
exports.errorHandler = errorHandler;
