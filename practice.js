class Car{
    constructor( {make, model , year, color, fuelType, mileage}){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelType = fuelType;
        this.mileage = mileage;
        this.isEngineOn = false;
        this.isCarClean = false;
    }

    startEngine(){
        if(!this.isEngineOn){
            console.log('Engine Started')
            this.isEngineOn = true;
        } else{
            console.log('Engine is already running')
        }
    }

    stopEngine(){
        if(this.isEngineOn){
            console.log('Engine Stopped')
            this.isEngineOn = false
        }else{
            console.log('Engine is already off')
        }
    }

    carWash(){
        if(!this.isCarClean){
            console.log('Car will be clean')
            this.isCarClean = true
        } else{
            console.log('Car is already clean')
            
        }
    }

    


}

class Mazda extends Car{
    constructor(props, wheelsType = []){
        super(props)
        this.wheelsType = wheelsType
    }

    changeWheel(wheel){
        if(!this.wheelsType){
            this.wheelsType.push(wheel)
        }else{
            this.wheelsType.shift()
            this.wheelsType.push(wheel)
        }
    }

    renewMileage(){
        const km = this.mileage
        if(km >= 10000){
            console.log(`Previous milage: ${km} km. Current Milage: 0 km `)
            this.mileage = 0;
            
        } else{
            console.log('Mileage is still good to go')
        }
    }
}

const Mazdathree = new Mazda(
    {
        make: 'Mazda',
        model : 2022,
        year : 2005,
        color : 'blue',
        fuelType: 'Diesel',
        mileage: 50000
    }

)