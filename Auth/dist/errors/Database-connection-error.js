"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
class DatabaseConnectionError extends Error {
    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
