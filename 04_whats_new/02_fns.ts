// How to write a function - let me count the ways

// if there is ONE line of output, no need for braces or 'return'
// const fnB = x=>x*x // if there is one param, no need for brackets
// const fnC = x=>{return x*x} // if there are braces we MUST write return (or have no retuirn happen)
// in Typescript we MUST provide brackets if we are to type-safe arguments
const fnD = (x:number, y:number) => x*y   // if there are zero or many arguments we MUST provide brackets
const fnE = ()=>{return 'zero param MUST have brackets'}

// writing function inside classes
class Demo {
    someMethod (){
        // body of method
    }
    // although we CAN do this.....
    otherMethod = ()=>{}
}
console.log(doStuff(3,4))

function doStuff(x:any, y=1, z?:any){ // we can call this before it is declared
    return n
    var n = x+y // hoisting
}

const doOtherStuff = (x:any, y=1, z?:any)=>{ // we cannot call this before it is declared
    let n = x+y
    return n
}


console.log(doOtherStuff(3,4))