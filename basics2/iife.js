// Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB Connected`);
})(); // run without call (named iife)
// semi colon required to stop cintext of iife


((name) => {
    console.log(`${name}`);
})("tarun");

