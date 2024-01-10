import{platziClass} from './index.js'

const clase67 = new platziClass({
    name : 'Javascript orientado a objetos, basado en prototipos',
    videoID : 123456825
})

clase67.reproducir()
clase67.pausar()

clase67.reproducir()
clase67.pausar()

clase67.reproducir()
clase67.pausar()

const word = '   nuevo curso gratis de programacion          '
const arrayWord = word.trim().split(' ')
const newString = arrayWord.map((word)=>{
    const arreglitoUpper = word[0]?.toUpperCase() + word.substring(1)
    return arreglitoUpper
   

})

const res = newString.join(' ')

console.log(newString)
console.log(res)

function transformStr(str){
    if(typeof str === 'string'){
        const cadena = str.replace(/\s+/g, ' ').trim();
        const arr = cadena.split(' ')
        const arrUpper = arr.map((data)=>{
            return data[0].toUpperCase() + data.substring(1);
        })
        const strUpper = arrUpper.join(' ')
        console.log(strUpper)

    }else{
        console.error('Type of data enter must be a string')
    }

}

transformStr('  hola    amigo   como   estas?  ')