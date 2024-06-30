function debounce<T extends (...args: any[]) => void>(func: T, timeout = 500) {
    let timer: NodeJS.Timeout;
    return function (this: any, ...args: Parameters<T>) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  
  export default debounce;
  