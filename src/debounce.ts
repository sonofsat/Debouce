const useDebounce = (func: (...args: any[]) => void, delay: number) => {
    let timeout: NodeJS.Timeout | null=null;

    return (...args: any[]) => {
        if(timeout) clearTimeout(timeout);

        timeout=setTimeout(() => {
            func(...args)
        }, delay)
    }
}

export default useDebounce