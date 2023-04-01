export function throttle(fn, delay){
    let time = Date.now();
    return () => {
        if((time + delay - Date.now()) <= 0) {
            fn();
            time = Date.now();
        }
} } 
