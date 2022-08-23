"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrors = void 0;
class CustomErrors extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CustomErrors.prototype);
    }
}
exports.CustomErrors = CustomErrors;
