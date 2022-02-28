/*  Савенкова Марина, FR-92
 *  //#5
 *  Переписать консольное приложение из предыдущего юнита на классы.
 *
 *  Общие требования:
 *
 *  Имена классов, свойств и методов должны быть информативными;
 *  Соблюдать best practices;
 *  Использовать синтаксис ES6.
 */

//базовый класс
class ElectroDevice {

    //включение прибора
    turnOn() {
        this.power = true;
        console.log("ElectroDevice is switched on.");
    }

    //выключение прибора
    turnOff() {
        this.power = false;
        console.log("ElectroDevice is switched off.");
    }

    //подсчет потребляемой мощности за время
    getTotalEnergyConsumption(time) {
        let totalEnergyConsumption = time*this.energyConsumption;
        console.log(`Total energy consumption in ${time} min: ${totalEnergyConsumption}.`);
        return totalEnergyConsumption;
    }

    //установка значения потребляемой мощности
    setEnergyConsumption(val) {
        this.energyConsumption = val;
    }

}

//класс лампы
class Lamp extends ElectroDevice {

    //конструктор
    constructor(lampLocation, lampType, energyConsumption, name = "") {
        super();
        this.name = name;
        this.lampType = lampType; //incandescent, daylight
        this.lampLocation = lampLocation; //ceiling, table
        this.energyConsumption = energyConsumption;
    }

    //замена лампочки
    changeLightBulb(lampType, energyConsumption) {
        this.lampType = lampType;
        this.setEnergyConsumption(energyConsumption);
        console.log(`The new light bulb (${lampType}) is screwed in.`);
    }    
    
}

//создаем экземпляр лампы
let myLamp = new Lamp("table", "incandescent", 50, "Globo FAMOUS 24880");
console.log(myLamp);

myLamp.turnOn();                        //включаем лампу
myLamp.getTotalEnergyConsumption(60);   //считаем потребление энергии
myLamp.changeLightBulb("daylight", 20); //меняем лампочку
myLamp.getTotalEnergyConsumption(60);   //считаем потребление энергии с новой лампочкой
myLamp.turnOff();                       //выключаем лампу


//класс телевизора
class TV extends ElectroDevice {

    //конструктор
    constructor(typeOfTV, energyConsumption, name = "") {
        super();
        this.name = name;
        this.typeOfTV = typeOfTV;
        this.energyConsumption = energyConsumption;
    }
    
    //переключение канала
    switchChannel(numOfChannel) {
        if (this.power) { 
            this.numOfChannel = numOfChannel;
            console.log(`You switched to the channel ${numOfChannel}.`);
        }
       else {
            console.log("Error! You should turn on the TV.");
       }
    }
 
}


//создаем экземпляр телевизора
let myTV = new TV("LED", 50, "Xiaomi MI TV 32 P1, 32");
console.log(myTV);

myTV.turnOn();                      //включаем телевизор
myTV.getTotalEnergyConsumption(60); //считаем потребление энергии
myTV.switchChannel(33);             //переключаем канал
myTV.turnOff();                     //выключаем телевизор
myTV.switchChannel(35);             //снова пытаемся переключить канал