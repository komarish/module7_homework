/*	Савенкова Марина, FR-92
 *	//#4
 *   Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
 *
 *   Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
 *
 *   Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
 *   Выбрав прибор, подумайте, какими свойствами он обладает.
 *
 *   План:
 *
 *       Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
 *       Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
 *       У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
 *       Создать экземпляры каждого прибора;
 *       Вывести в консоль и посмотреть результаты работы, гордиться собой :)
 *
 *   Общие требования:
 *
 *       Имена функций, свойств и методов должны быть информативными.
 *
 *       Соблюдать best practices:
 *       использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
 *       информативные имена (а не a, b);
 *       четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
 *       использование синтаксиса es6 (кроме функции-конструкторов) и т.д.
 */



//В целях улучшения производительности функции включения, выключения и подсчёта мощности 
//были вынесены из родительской функции (как в примере из видео)
//и добавлены в прототип констуктора ElectroDevice()

function ElectroDevice() {}

//включаем прибор в розетку, питание = true
ElectroDevice.prototype.turnOn = function() {
    this.power = true;
    console.log("ElectroDevice is switched on.");
}

//выключаем прибор из розетки, питание = false
ElectroDevice.prototype.turnOff = function() {
    this.power = false;
    console.log("ElectroDevice is switched off.");
}

//подсчёт потребляемой мощности за время time
ElectroDevice.prototype.getTotalEnergyConsumption = function(time) {
    let totalEnergyConsumption = time*this.energyConsumption;
    console.log(`Total energy consumption in ${time} min: ${totalEnergyConsumption}.`);
    return totalEnergyConsumption;
}

//установка значения мощности
ElectroDevice.prototype.setEnergyConsumption = function(val) {
    this.energyConsumption = val;
}


//конструктор для лампы
//на вход приходит расположение лампы, тип, потребляемая мощность и модель
  function Lamp(lampLocation, lampType, energyConsumption, name = "") {
    this.name = name,
    this.lampType = lampType, //incandescent, daylight
    this.lampLocation = lampLocation, //ceiling, table
    this.setEnergyConsumption(energyConsumption),

    //метод для замены лампочки в лампе, устанавливается тип лампы и потребление энергии
    this.changeLightBulb = function(lampType, energyConsumption) {
        this.lampType = lampType;
        this.setEnergyConsumption(energyConsumption);
        console.log(`The new light bulb (${lampType}) is screwed in.`);
    }
}

//добавляем ElectroDevice в прототип лампы
Lamp.prototype = new ElectroDevice();

//создаем экземпляр лампы
let myLamp = new Lamp("table", "incandescent", 50, "Globo FAMOUS 24880");
console.log(myLamp);

myLamp.turnOn();                        //включаем лампу
myLamp.getTotalEnergyConsumption(60);   //считаем потребление энергии
myLamp.changeLightBulb("daylight", 20); //меняем лампочку
myLamp.getTotalEnergyConsumption(60);   //считаем потребление энергии с новой лампочкой
myLamp.turnOff();                       //выключаем лампу


//конструктор для телевизора
//на вход приходит тип, потребляемая мощность и модель
function TV(typeOfTV, energyConsumption, name = "") {
    this.name = name,
    this.typeOfTV = typeOfTV,
    this.setEnergyConsumption(energyConsumption),

    //метод для переключения канала
    //на вход приходит номер канала, на который нужно переключить
    //если телевизор выключен, появляется сообщение об ошибке
    this.switchChannel = function(numOfChannel) {
        if (this.power) { 
            this.numOfChannel = numOfChannel;
            console.log(`You switched to the channel ${numOfChannel}.`);
        }
       else {
            console.log("Error! You should turn on the TV.");
       }
    }
 
}

//добавляем ElectroDevice в прототип телевизора
TV.prototype = new ElectroDevice();

//создаем экземпляр телевизора
let myTV = new TV("LED", 50, "Xiaomi MI TV 32 P1, 32");
console.log(myTV);

myTV.turnOn();                      //включаем телевизор
myTV.getTotalEnergyConsumption(60); //считаем потребление энергии
myTV.switchChannel(33);             //переключаем канал
myTV.turnOff();                     //выключаем телевизор
myTV.switchChannel(35);             //снова пытаемся переключить канал