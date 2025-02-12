import debounce from "./debounce";
jest.useFakeTimers();

describe('debounce', () => {
    it('should delay the function execution', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 150);

        debouncedFunc();
        expect(func).not.toHaveBeenCalled();

        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalled();
    });

    it('should cancel the function execution if called again within delay time', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 150);

        debouncedFunc();
        debouncedFunc();
        expect(func).not.toHaveBeenCalled();

        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalledTimes(1);  // Adjusted to check if called only once
    });

    it('should pass the correct arguments to the function', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 150);

        debouncedFunc(1, 2, 3);
        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalledWith(1, 2, 3);
    });
});
