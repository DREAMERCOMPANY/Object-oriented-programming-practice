
const Ale ={
    name: 'Alejandro',
    approvedCourses: ['Curso Html'],
    aprovarCurso(course){
        this.approvedCourses.push(course)

    }
}

console.log(Object.keys(Ale))
console.log(Object.getOwnPropertyNames(Ale))
console.log(Object.entries(Ale))



//Atributos y metodos estaticos en JS:

class burro{
    static makeNoise(){
        return `HOLI BURRR`
    }
}

console.log(burro.makeNoise())

/*

-Object.define.property => recibe tres argumentos, el objeto, la propiedad y el atributo en {}
-Las propiedades se definen con cuatro parametros(value, configurable, writable, enumerable)
-value es el valor de la propiedad
- Si configurable es false, no se puede eliminar la propiedad
- Si writable es false, no se puede editar la propiedad
- Si enumerable es false, no se puede listar la propiedad con Object.keys()

*/ 


const car = {
  mark : 'Tida',
  model : 2022,
  color: 'blue'
}

/* Object.defineProperty(car, 'mileage', {
    value : 20000,
    enumerable : false,
    writable: true,
    configurable : true
})

Object.defineProperty(car, 'power', {
    value: 22,
    enumerable : true,
    writable: false,
    configurable : true
})

Object.defineProperty(car, 'wheels', {
    value: 'Michellin',
    enumerable : true,
    writable: true,
    configurable : false 
})

Object.defineProperty(car, 'Material', {
    value: 'Steal',
    enumerable : false,
    writable: false,
    configurable : false 
    
}) */

Object.seal(car) // no deja eliminar las propiedades del objeto
Object.freeze(car) // no deja eliminar ni editar las propiedades del objeto.
console.log(Object.getOwnPropertyDescriptors(car))


/*
SHALLOW COPY
-Se refiere a copiar objetos con ciclos, Object.assign y Object.create
-sirve cuando las propiedades de los objetos son normales pero cuando hay un objeto dentro, NO.
*/ 

const obj1 = {
    a: 'a',
    b: 'b',
    c:{
        d: 'd',
        e: 'e'
    },

    editA(){
        this.a = 'AAAA'

    }
}

const obj2 = {}

for(prop in obj1){
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({}, obj1)
const obj4 = Object.create(obj1)

/*Json.stringify, Json.parse
- sirve para que no se cambien las propiedades normales y las de los objetos dentro de objetos
pero no funciona con metodos.
*/ 

const objectComplexString = JSON.stringify(obj1)
const obj = JSON.parse(objectComplexString)

console.log(objectComplexString)
console.log(obj)

/*Recursividad, es cuando un funcion se llama por si misma dentro de la misma funcion
siempre tiene que haber algo que corte la funcion recursiva*/


let numerito = 0

while( numerito <= 5 ){
    console.log(numerito)
    numerito++
}


function recursiva(number){
    console.log(number)
    if(number <5){
        return recursiva(number + 1)
    }else{
        return 5;
    }
}

//Creando funciones recursivas, primero con ciclo for, luego con funcion recursiva.


//Estructura funcion recursiva
function recursi(param){
    if(a){
        //llamados recursivos
    }else{
        //llamados normales
    }
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,20]
// let number = 0;

// for(let index =0 ; index < numbers.length ; index ++){
//     number = numbers[index]
//     console.log({index, number})
// }

//funcion recursiva

function recursive(numbersArray){
    if(numbersArray.length !=0){
        const firstNum = numbersArray[0]
        console.log(firstNum)
        numbersArray.shift()
        recursive(numbersArray)

    }
}


/*Deep copy con recursividad*/

function isObject(subject){
    return typeof subject == 'object'
}

function isArray(subject){
    return Array.isArray(subject)
}

function deepCopy(subject){
    let copySubject;

    const subjectisObject = isObject(subject)
    const subjectIsArray =isArray(subject)

    if(subjectIsArray){
        copySubject = []
    } else if(subjectisObject){
        copySubject = {}
    } else{
        return copySubject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key])

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key])
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key])
            }else{
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}

//ABSTRACCION CON OBJETOS LITERALES Y DEEP COPY


// Definition of a literal object named 'studentBase' serving as a template for students.
const studentBase = {
    name: undefined,
    age: undefined,
    nationality: undefined,
    gender: undefined,
    hobbies: undefined
}

// Creation of a deep copy of the 'studentBase' object named 'Alejito' using the 'deepCopy' function.
const Alejito = deepCopy(studentBase)

// Seal the 'Alejito' object, preventing the addition or removal of properties but allowing the modification of existing values.
Object.seal(Alejito)

// Assign the value 'Alejo' to the 'name' property of the 'Alejito' object.
Alejito.name = 'Alejo'

// Define the 'name' property of the 'Alejito' object using Object.defineProperty.
// A new value ('Jhon Romero') is set, and the property is configured as non-configurable (configurable: false).
Object.defineProperty(Alejito, 'name', {
    value: 'Jhon Romero',
    configurable: false
})




/* 
FACTORY PATTERN AND RORO:
 - Patterns that help create object molds through functions.
 - Encapsulate parameters using Object.defineProperty.
 - Use scope to make variables either accessible or not.
 */

// Function 'requiredParam' that throws an error indicating the specified parameter is mandatory.
function requiredParam(param){
    throw new Error(`${param} is mandatory`);
}

// Function 'createStudent' using the Factory Pattern to create a student object.
// Parameters are destructured from an object, providing default values, and using 'requiredParam' for mandatory parameters.
function createStudent({
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    approvedCourses = [],
    facebook,
    twitter,
    instagram
} = {}) {

    // Private properties encapsulated within the closure.
    const private = {
        '_name': name
    };

    // Public properties and methods returned from the factory function.
    const public = {
        email,
        age,
        approvedCourses,
        facebook,
        twitter,
        instagram,

        // Getter method for reading the private '_name'.
        readName() {
            return private['_name'];
        }, 
        // Setter method for changing the private '_name'.
        changeName(newName) {
            private['_name'] = newName;
        }
    };

    // Make readName and changeName non-configurable and non-writable.
    Object.defineProperty(public, 'readName', {
        configurable: false,
        writable: false
    });

    Object.defineProperty(public, 'changeName', {
        configurable: false,
        writable: false
    });

    // Return the public interface of the created student object.
    return public;
}

// Example of using 'createStudent' to create a student object named 'elJhon'.
const elJhon = createStudent({
    name: 'Jhon',
    email: 'hijodelrey@hotmail.com'
});










