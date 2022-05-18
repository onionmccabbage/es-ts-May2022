// ES6+ has generators
function* fibon(){ // we MUST use 'function'. the asterisk indicates this is a generator
    let first=1, second=2
    // same as for let i=0; i<Number.POSITIVE_INFINITY; i++
    for (;;){ // a never ending loop
        let sum = second+first
        yield `The next value is ${sum}` // we can repeatedly yield from a generator (of any type)
        first = second
        second = sum
    }
}
// a prett-print utility
const prettyPrint = (item:any)=>{ console.log( JSON.stringify(item) )  }
// we need an instance of our generator
const g = fibon() // now the generator exists in memory
prettyPrint(g.next()) // yields 3
prettyPrint(g.next()) // yields 5
prettyPrint(g.next()) // yields 8