"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
class RequestValidationError extends Error {
    constructor(errors) {
        super();
        this.errors = errors;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}
exports.RequestValidationError = RequestValidationError;
