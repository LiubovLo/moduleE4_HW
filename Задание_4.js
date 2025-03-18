function ElectricalAppliance(name) { 
    this.powerSupply = 220
    this.name = name
    this.powerOn = false

}


ElectricalAppliance.prototype.onOffSwitch = function (OnOffSwitch) { 
    this.powerOn = OnOffSwitch === 'on'; 
}

ElectricalAppliance.prototype.energyConsumption = function (perHour) { 
    
    if (this.powerOn){ 
        const consump = ((this.devicePower / 1000) * perHour).toFixed(2) ;
         console.log(`Электроприбор ${this.name} за ${perHour} час(-а, -ов) 
         постоянной работы потребляет ${consump} КилоВатт(-а).`)
    } else {
        console.log(`Прибор ${this.name} выключен, потребления нет`)
    }
}

function Microwave(name, brand, devicePower, color) {
    this.name = name
    this.brand = brand
    this.devicePower = devicePower

}

Microwave.prototype = new ElectricalAppliance()
Microwave.prototype.getParameters = function () {
    console.log(`Информация электроприбора ${this.name}`)
  for (const key in this) {
      if (typeof this[key] !== "function") { 
          console.log(`${key}: ${this[key]}`);
      }
  }
  console.log('\n')
}


function TV(name, brand, devicePower) { 
    this.name = name
    this.brand = brand
    this.devicePower = devicePower
}

TV.prototype = new ElectricalAppliance()
TV.prototype.getParameters = function () {
    console.log(`Информация электроприбора  ${this.name}`)
  for (const key in this) {
      if (typeof this[key] !== "function") { 
          console.log(`${key}: ${this[key]}`)
      }
  }
}



const microwave = new Microwave('myMicrowave', 'Samsung', 1500 )
const kettle = new Microwave('smartKettle', 'Electrolux', 1000)

const ledtv = new TV('ledTvWithSmartOption', 'Sony', 60)
const notebook = new TV('notebook', 'Sony', 150)

microwave.getParameters() 
microwave.energyConsumption(3) 
microwave.onOffSwitch('on') 
microwave.energyConsumption(3) 

kettle.onOffSwitch('on')
kettle.energyConsumption(3)

ledtv.onOffSwitch('on')
ledtv.energyConsumption(17)
