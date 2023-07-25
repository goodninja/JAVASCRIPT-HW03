/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */

const userNumber = prompt("Введите число");
function cubing(userNumber) {
  return userNumber * userNumber * userNumber;
}
console.log(cubing(userNumber));
console.log(cubing(2));
console.log(cubing(3));

/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */

const userSalary = prompt("Введите сумму зарплаты за месяц");
function salary(userSalary) {
  if (!parseInt(userSalary)) {
    alert("Введите число");
  } else {
    console.log(
      `Размер заработной платы за вычетом налогов равен ${userSalary * 0.87}`
    );
  }
}
salary(userSalary);

/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

function biggestNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    alert(`максимальное значение = ${num1}`);
  } else if (num2 >= num1 && num2 >= num3) {
    alert(`максимальное значение = ${num2}`);
  } else {
    alert(`максимальное значение = ${num3}`);
  }
}
const number1 = parseInt(prompt("Введите 1е число"));
const number2 = parseInt(prompt("Введите 2е число"));
const number3 = parseInt(prompt("Введите 3е число"));
biggestNumber(number1, number2, number3);

/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

function sum(num1, num2) {
  return num1 + num2;
}

function diff(num1, num2) {
  if (num1 >= num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function check() {
  const num1 = parseInt(prompt("Введите 1е число"));
  const num2 = parseInt(prompt("Введите 2е число"));
  alert(`Сумма = ${sum(num1, num2)}`);
  alert(`Разность = ${diff(num1, num2)}`);
  alert(`Частное = ${divide(num1, num2)}`);
  alert(`Произведение = ${multiply(num1, num2)}`);
}

check();
