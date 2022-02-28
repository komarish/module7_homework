/*	Савенкова Марина, FR-92
 *	//#1
 *	Написать, функцию, которая принимает в качестве аргумента объект 
 *  и выводит в консоль все ключи и значения только собственных свойств. 
 *  Данная функция не должна возвращать значение.
 */

function printOwnProperties(obj) {
    for (let key in obj) { //перебираем все ключи объекта
        if (obj.hasOwnProperty(key)) { //если свойство собственное,
            console.log(`Ключ - ${key}, значение: ${obj[key]}.`); //выводим в консоль
        }   
    }
    console.log("");
}

//функция-пример
function task1_Example() {
    //создаем базовый объект - базу под пиццу
    const pizzaBase = {
        dough: "yeast", //тип теста
        size: "30 cm" //размер будущей пиццы
    }

    //создаем пиццу на основе базы
    const pizzaMargarita = Object.create(pizzaBase);
    pizzaMargarita.sauce = "tomato";
    pizzaMargarita.cheese = "mozzarella";
    pizzaMargarita.tomatoes = "cherry";

    //выводим собственные свойства базы
    console.log("Свойства pizzaBase");
    printOwnProperties(pizzaBase);

    //выводим все свойства Маргариты
    console.log("Все свойства pizzaMargarita");
    for (let key in pizzaMargarita) {
        console.log(`Ключ - ${key}, значение: ${pizzaMargarita[key]}.`);           
    }
    console.log("");

    //выводим собственные свойства  Маргариты
    console.log("Собственные свойства pizzaMargarita");
    printOwnProperties(pizzaMargarita);
}

task1_Example();