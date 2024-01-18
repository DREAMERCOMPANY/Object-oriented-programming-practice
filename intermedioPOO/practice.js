

function requiredParam(param){
    throw new Error(`${param} is mandatory`)
}

function isArray(arr){
    return Array.isArray(arr)

}

function learningPath({
    name = requiredParam('Learningpath name'),
    courses = []
}){
    this.name = name
    this.courses = courses
}




function Student({
    name = requiredParam('Coursename'),
    email = requiredParam('email'),
    age,
    twitter,
    facebook,
    instagram,
    learningPaths = []
}){

    this.name = name;
    this.email = email;
    this.age = age;
    this.socialMedia = {
        twitter,
        facebook,
        instagram
    }

    const private = {
        '_learningPaths': []
    }

    Object.defineProperty(this, 'learningPaths', {
        get(){

            return private['_learningPaths']

        },

        set(newLp){
            if(newLp instanceof learningPath){
                private['_learningPaths'].push(newLp)

            }else{
                console.warn('Alguno de los LPS no es uno real')
            }

        }
    })

    for(lp of learningPaths){
        this.learningPaths = lp
    }

   

}



const escuelaWeb = new learningPath({name: 'Escuela de desarrollo Web'})
    const escuelaPython = new learningPath({name: 'Escuela de python'})
    const Alejo = new Student({
        name: 'Alejandro', 
        email:'Ale.com', 
        learningPaths : [escuelaWeb, escuelaPython, {name: 'impostorrrr'}]
    
    })

    //metodos privados con clases

    class hello{
        constructor(name, age){
            this.name = name ,
            this.age = age
        }

        sayName(){
            console.log(`Hi, I am ${this.name}`)
        }

        #sayAge(){
            console.log(`Hi, I am ${this.age}`)
        }
    }

    const Juan = new hello('Juanito', 22)

   /*  class Bike{

        constructor ( {name, initialKm, color}){
            this.name = name;
            this.color = color;

            if(initialKm <=0){
                console.warn('km can not be 0')
            }else{
                this._km = initialKm || 0
            }

            Object.seal(this)
            
        }

        get km(){
            return this._km
           
        }

        set km(newKm){
            console.error('You can modified KM')
        }

        
        


        sayName(){
            console.log(`Your bike's name: ${this.name}`)
        }

        sayColor(){
            console.log(`Your bike's color: ${this.color}`)
        }
    }

    

    const mt = new Bike({name: 'MT' , color: 'blue', initialKm: 50}) */
    