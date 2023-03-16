function debounce(f, ms) {
    let call = true; 
    
    return function(a) {
        if (call) {
            f.call(this, a);
            call = false;
            setTimeout(() => call = true, ms);
        }
    }
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)