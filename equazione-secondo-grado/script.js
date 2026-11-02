const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const btnCalcola = document.getElementById("btn-calcola");
let r1 = document.getElementById("result1");
let r2 = document.getElementById("result2");

btnCalcola.addEventListener("click", () => {
    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);

    let result1 = 0;
    let result2 = 0;

    let delta = (b**2) - (4 * a * c);
    if(delta > 0){
        result1 = (-b  +(delta**0.5)) / (2*a);
        result2 = (-b  -(delta**0.5)) / (2*a);

    } else if (delta == 0){
        result1 = (-b)/(2*a);
        result2 = result1;
    } else {
        result1 = ("non esistente");
        result2 = ("non esistente")
    }
    r1.textContent = '' + result1;
    r2.textContent = '' + result2;

});