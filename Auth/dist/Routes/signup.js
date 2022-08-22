"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Database_connection_error_1 = require("../errors/Database-connection-error");
const request_validation_errors_1 = require("../errors/request-validation-errors");
const router = (0, express_1.Router)();
exports.signupRouter = router;
router.post("/api/user/signup", [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email must be valid"),
    (0, express_validator_1.body)("password")
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage("Password must be between 4 and 20 characters"),
], (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty) {
        throw new request_validation_errors_1.RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
    throw new Database_connection_error_1.DatabaseConnectionError();
});
