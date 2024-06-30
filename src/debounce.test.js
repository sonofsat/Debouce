"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debounce_1 = __importDefault(require("./debounce"));
jest.useFakeTimers();
describe('debounce', () => {
    it('should delay the function execution', () => {
        const func = jest.fn();
        const debouncedFunc = (0, debounce_1.default)(func, 150);
        debouncedFunc();
        expect(func).not.toHaveBeenCalled();
        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalled();
    });
    it('should cancel the function execution if called again within delay time', () => {
        const func = jest.fn();
        const debouncedFunc = (0, debounce_1.default)(func, 150);
        debouncedFunc();
        debouncedFunc();
        expect(func).not.toHaveBeenCalled();
        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalledTimes(1); // Adjusted to check if called only once
    });
    it('should pass the correct arguments to the function', () => {
        const func = jest.fn();
        const debouncedFunc = (0, debounce_1.default)(func, 150);
        debouncedFunc(1, 2, 3);
        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalledWith(1, 2, 3);
    });
});
