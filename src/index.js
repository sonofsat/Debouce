"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debounce_1 = __importDefault(require("./debounce"));
function results() {
    console.log("Fetching input suggestions");
}
const processChange = (0, debounce_1.default)(results, 500);
processChange();
setTimeout(() => processChange(), 100);
setTimeout(() => processChange(), 200);
setTimeout(() => processChange(), 800);
