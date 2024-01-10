
class Comment{
    constructor({content, studentName, studentRole = 'Student'}){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0
    }

    post(){
        console.log(`Name: ${this.studentName} (${this.studentRole}), ${this.likes} likes`)
        console.log(`${this.content}`)
    }
}




function videoPlay(id){
    const urlSecreta = 'https://platziUltrasecreto.com/' + id;
    console.log('Se esta reproduciendo desde la URL: ' + urlSecreta)
}

function videoStop(id){
    const urlSecreta = 'https://platziUltrasecreto.com/' + id;
    console.log('Pausamos la URL: ' + urlSecreta)
}


class platziClass{
    constructor({name, videoID}){
        this.name = name;
        this.videoID = videoID

    }

    reproducir(){
        videoPlay(this.videoID)

    }

    pausar(){
        videoStop(this.videoID)

    }
}


//Objeto Literal

const Alejandro = {
    name : 'Jhon',
    age : 23,
    cursosAprobados: ['Curso de Css FlexBox', 'Curso basico de Programaciom'],
    aprobarCurso(curso){
        this.cursosAprobados.push(curso)
    }
}

Alejandro.aprobarCurso('Curso definitivo de HTML y CSS')
console.log(Alejandro)

//Creando en prototipo con sintaxis de prototipo

/* function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprovarCurso = function(curso){
    this.cursosAprobados.push(curso)
}

const Jhon = new Student('Jhoncito', 23, ['Programacion orientada a objetos', 'curso basico de CSS']) */

//prototipos con sintaxis de clases

class StudentTwo{
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados
    }

    aprovarCurso(curso){
        this.cursosAprobados.push(curso)
    }
}

const Yulieth = new StudentTwo('Juana',25,['POO', 'Python'])
const Oscar = new StudentTwo('Osquitar', 35 , ['Js', 'Go'])

//prototipos con sintaxis de clases recibiendo objetos y devolviendo Objetos (ROR)

class studentThree {
    constructor({age , name , email , cursosAprobados= []}){
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados
    }

    agregarCurso(curso){
        this.cursosAprobados.push(curso)
    }

    eliminarCurso(curso){
        this.cursosAprobados.shift(curso)
    }
}

const Alexa = new studentThree({age: 22 , name: 'Alexita', email: 'alexa@dreamer.co', cursosAprobados: ['GO']})

Alexa.agregarCurso('Curso basico de HTML y CSS')
Alexa.eliminarCurso('GO')

console.log(Alexa)

//Creacion de Objetos literalest

const Alejito = {
    name : 'Jhon',
    username : 'Jhoncito22',
    points: 1200,
    socialMedia: {
        facebook : undefined,
        instagram : 'eljhoncito',
        twitter : 'eljhoncitoo22'
    },
    approvedCourses: ['Html y css', 'Practico Html y Css'],
    learningPath : [{
        name : 'Escuela de desarrollo Web',
        courses : ['Html y css', 'Typescript']
    },
    {
        name : 'Escuela de videojuegos',
        courses : ['Unity', 'Modelado']

    }

]
} // NO es tan optimo trabajar con objetos literales por que el codigo NO escala..


class course{
    constructor({
        name,
        classes =[],
        isFree = false,
        lang = 'spanish'
    }){
        this._name = name
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang

    }

    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if(nuevoNombrecito === 'Curso Malo de programacion basica'){
            console.error('Wey, no..')
        }else{
            this._name = nuevoNombrecito
        }
    }
}



const progBasica = new course({
    name : 'Curso Gratis de programacion Basico',
    isFree : true
})

const definitivoHtml = new course({
    name : 'Curso definitivo de Html y Css'
})

const practicoHtml = new course({
    name : 'Curso practico de Html y Css',
    lang : 'english'
})

const basicoPython = new course({
    name : 'Curso basico de Python'
})

const basicoSql = new course({
    name : 'Curso basico de Sql'
})



class learningPath{
    constructor({
        escuela = undefined,
        cursos = []
    }){
        this.escuela = escuela;
        this.cursos = cursos

    }
}

const escuelaWeb = new learningPath({
    escuela : 'Escuela de Desarrollo Web',
    cursos : [progBasica, definitivoHtml, practicoHtml]
})

const escuelaData = new learningPath({
    escuela : 'Escuela de Data Science',
    cursos : [progBasica, basicoSql, basicoPython]
})

const escuelaVgs = new learningPath({
    escuela : 'Escuela de Videojuegos',
    cursos : [progBasica, basicoPython]
})

class Student{
    constructor({
        name, 
        username, 
        points, 
        twitter = undefined, 
        instagram = undefined, 
        facebook = undefined,
        approvedCourses = [],
        learningPath = []
    }){

        this.name = name 
        this.username = username  
        this.points =  points
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }, 
        this.approvedCourses = approvedCourses,
        this.learningPath = learningPath

    }

    postComment(commentContent){
        const comment = new Comment({
            content : commentContent,
            studentName: this.name
        })

        comment.post()
    }

    
} 

class freeStudent extends Student{
    constructor(props){
        super(props) //Hace referencia al constructor de la clase madre
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)

        }else{
            console.warn('I am sorry ' + this.name + ', you can only take open courses')
        }

    }
}

class basicStudent extends Student{
    constructor(props){
        super(props) //Hace referencia al constructor de la clase madre
    }

    approveCourse(newCourse){
        if(newCourse.lang !== 'english'){
            this.approvedCourses.push(newCourse)

        }else{
            console.warn('I am sorry ' + this.name + ', you can only take spanish courses')
        }

    }
}

class expertStudent extends Student{
    constructor(props){
        super(props) //Hace referencia al constructor de la clase madre
    }

    approveCourse(newCourse){
            this.approvedCourses.push(newCourse)
    }

}


class teacherStudent extends Student{
    constructor(props){
        super(props) //Hace referencia al constructor de la clase madre
    }

    approveCourse(newCourse){
            this.approvedCourses.push(newCourse)
    }


    postComment(commentContent){
        const comment = new Comment({
            content : commentContent,
            studentName: this.name,
            studentRole : 'Teacher'
        })

        comment.post()
    }
}



const Swald = new freeStudent({
    name: 'Oswaldo',
    username : 'swaldramjf',
    points : 52222,
    learningPath : [escuelaData , escuelaWeb]
})

const Pau = new basicStudent({
    name: 'Paula',
    username : 'pauRam',
    points : 8545,
    learningPath : [escuelaData , escuelaWeb]
})

const Freddy = new teacherStudent({
    name: 'Freddy',
    username : 'freddyVega',
    points : 5698,
})



/* class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      if (this.integrantes.some(item => item.instrumento === 'Bateria')) {
        console.log('Ya hay un baterista')
      } else {
        this.integrantes.push(integranteNuevo)
      }
  
    }
  }


  
  //Crear clase Integrante
  class Integrante {
    constructor(
      {
        nombre,
        instrumento
      }
    ) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    }
  
  
  }

  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Jhon", instrumento: "Bateria" }))

  console.log(banda)
  console.log(banda.integrantes) */


  
  
const arr = [1,2,3,4,5,6,7,8,9,10]
const isANum = arr.some(item => item == 50)
console.log(isANum)


function freeGuy(props){
    Student.call(this, props)
}


freeGuy.prototype = Object.create(Student.prototype)

freeGuy.prototype.approveSubject = function(subject){
    if(subject.isfree){
        this.approvedCourses.push(subject);

    }else{
        console.warn(`I am sorry, ${this.name}. You can only take free courses`)
    }
}

