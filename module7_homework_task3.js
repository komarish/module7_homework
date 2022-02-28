/*	Савенкова Марина, FR-92
 *	//#3
 *	Написать функцию, которая создает пустой объект, но без прототипа.
 */


function createEmptyObj() {
    //передаем null, чтобы не было прототипа
    return Object.create(null); 
}

//сравниваем пустые объекты
let withProtObj = new Object();
let withoutProtObj = createEmptyObj();
console.log("Пустой объект:", withProtObj);
console.log("Пустой объект без прототипа:", withoutProtObj);
