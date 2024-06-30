"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, timeout = 500) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}
exports.default = debounce;
