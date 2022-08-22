"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentuser = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.currentuser = router;
router.get('/api/users/currentuser', () => {
});
