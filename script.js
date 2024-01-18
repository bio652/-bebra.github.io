//1
let myVar = 10
document.querySelector('.div1').innerHTML = myVar
console.log("yayyayayayayayayayaaayayayayadydfaafy") 
//2
let s1 = "123";
document.querySelector('.div2').innerHTML = parseInt(s1)
//3
let a1 = 123;
document.querySelector('.div3').innerHTML = a1.toString()
//4
let ismvint = isNaN(myVar)
if(ismvint === false){
document.querySelector('.div4').innerHTML = "is int"
}
//5
let bl1 = true
document.querySelector('.div5').innerHTML = String(bl1);
//6
let bl2 = "true"
document.querySelector('.div6').innerHTML = Boolean(bl2);
//7
const myObj = {
    name:"bebra",
    age:10
};
document.querySelector('.div7').innerHTML =  JSON.stringify(myObj);
//8
if (typeof myVar === 'object') {
    document.querySelector('.div8').innerHTML = "its an object"
} else {
    document.querySelector('.div8').innerHTML = "its not an object"
}
//9
let a2 = 123.456
let ar = Math.round(a2 * 100) / 100;
document.querySelector('.div9').innerHTML = ar.toString()
//10
let ar2 = Math.round(a2*1) / 1
document.querySelector('.div10').innerHTML = ar2.toString()

/*“Задача 1: Объявите переменную с именем ‘myVar’ и присвойте ей значение 10. Выведите значение ‘myVar’ в div1. 
Задача 2: Преобразуйте строку ‘123’ в число. Выведите результат в div2.
 Задача 3: Преобразуйте число 123 в строку. Выведите результат в div3.
  Задача 4: Проверьте, является ли значение переменной ‘myVar’ числом. Выведите результат в div4. 
  Задача 5: Преобразуйте логическое значение true в строку. Выведите результат в div5. 
  Задача 6: Преобразуйте строку ‘true’ в логическое значение. Выведите результат в div6.
   Задача 7: Создайте объект с именем ‘myObj’, которая содержит поля ‘name’ и ‘age’. Выведите значение ‘myObj’ в div7.
    Задача 8: Проверьте, является ли значение переменной ‘myVar’ объектом. Выведите результат в div8.
     Задача 9: Преобразуйте число 123.456 в строку, округлив его до двух знаков после запятой. Выведите результат в div9.
      Задача 10: Преобразуйте ‘123.456’ в число, округлив его до целого значения. Выведите результат в div10. Результат залить на github.”*/