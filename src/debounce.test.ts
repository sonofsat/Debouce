import useDebounce from "./debounce";
jest.useFakeTimers();

describe('useDebounce', () => {
    it('should delay the function execution', () => {
        const func = jest.fn();
        const debouncedFun = useDebounce(func, 150);

        debouncedFun();
        expect(func).not.toHaveBeenCalled();


        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalled();
    });


    it('should cancel the function execution if called again within delay time', () => {
        const func =  jest.fn();
        const debouncedFun =  useDebounce(func, 150);

        debouncedFun();
        debouncedFun();
        expect(func).not.toHaveBeenCalled();

        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalled();
    
    });

    it('should pass the correct arg to the function', () => {
        const func = jest.fn();
        const debouncedFun = useDebounce(func, 150);

        debouncedFun(1,2,3);
        jest.advanceTimersByTime(150);
        expect(func).toHaveBeenCalled();
    });
})