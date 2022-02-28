/*	Савенкова Марина, FR-92
 *	//#2
 *	Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, 
 *  есть ли у переданного объекта свойство с данным именем. 
 *  Функция должна возвращать true или false.
 */

 function isPropertyExist(prop, obj) {
     return (prop in obj); //возвращаем то, что вернет нам in
 }

//функция-пример
 function task2_Example() {
    //создаем базовый объект - базу под пиццу
    const pizzaBase = {
        dough: "yeast",
        size: "30 cm"
    }

    //создаем пиццу на основе базы
    const pizzaMargarita = Object.create(pizzaBase);
    pizzaMargarita.sauce = "tomato";
    pizzaMargarita.cheese = "mozzarella";
    pizzaMargarita.tomatoes = "cherry";

    //выводим обе пиццы и проверяем наличие свойств
    //при помощи функции isPropertyExist
    console.log("pizzaBase", pizzaBase);
    console.log("pizzaMargarita", pizzaMargarita);
    console.log('Есть ли в пицце "Маргарита" сыр?');
    console.log(isPropertyExist("cheese", pizzaMargarita));
    console.log('Есть ли в пицце "Маргарита" зелень?');
    console.log(isPropertyExist("greenery", pizzaMargarita));
    console.log('Есть ли в пицце "Маргарита" тесто?');
    console.log(isPropertyExist("dough", pizzaMargarita));
 } 


 task2_Example();