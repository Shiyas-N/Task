const number_1 = document.getElementById("num1");
const number_2 = document.getElementById("num2");

const rslt = document.getElementById("result");

const addition = () => {
    let num1 = Number(number_1.value);
    let num2 = Number(number_2.value);
    rslt.innerHTML = num1+num2;
}
const substraction = () => {
    let num1 = Number(number_1.value);
    let num2 = Number(number_2.value);
    rslt.innerHTML = num1-num2;
}
const multiplication = () => {
    let num1 = Number(number_1.value);
    let num2 = Number(number_2.value);
    rslt.innerHTML = num1*num2;
}
const division = () => {
    let num1 = Number(number_1.value);
    let num2 = Number(number_2.value);
    rslt.innerHTML = num1/num2;
}