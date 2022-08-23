"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_errors_1 = require("./custom-errors");
class DatabaseConnectionError extends custom_errors_1.CustomErrors {
    constructor() {
        super('Error connecting to a database');
        this.statusCode = 500;
        this.reason = 'Error connecting to a database';
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
