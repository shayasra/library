let inputNumber = document.querySelector("input");

inputNumber.addEventListener("change", library)

function library() {
    let num = parseInt(inputNumber.value);
    let para = document.querySelector("p");
    let square = squareFn(num);
    let cube = cubeFn(num);
    let factorial = factorialFn(num);
    let text = `Square of the number is ${square}
Cube of the Number is ${cube}
Factorial of the Number is ${factorial}`;
    console.log(text);
    para.textContent = text;
}

function squareFn(num) {
    return num ** 2;
}
function cubeFn(num) {
    return num ** 3;
}
function factorialFn(num) {
    if (num < 0){
        return num = (num * factorialFn (num + 1));
    }
    else if (num == 0) {
        return 1;
    }
    return num * factorialFn(num - 1);
}