// here we will write somne Typescript
// Typescript has TWO all-encompassing capabilites
// 1 - a language service - code hinting etc.
// 2 - data-typing capabilities
{ // this is a code block - a scope (ES6)
    var w = true // these days we avoid 'var'
    let x = 'Ethel' // Typescript infers the type (here is a string)
    const y = 'Lily' // a constant is immutable

    // the ts language service helps avpid stupid mistakes
    // x = false // nope
    // we can explicitly type things (post-colon data typing is a Typescipt thing)
    const p:string = 'Grace' // but ts would infer this anyway

    // if the built-in types are unsuitable, make your own (? for optional properties)
    interface user {name:string, id?:number} // interface is a Typescript thing
    // we would then explicity data-type to give us good feedback
    const programmer:user = {name:"Ada"}

    // we can mix types (a union of types)
    const d:number|undefined = 1 // the 'any' type should be avoided

    // mixing data types within structures
    const digits:Array<number | string | boolean> = [3,2,1] // optional types
    // or (equivalent syntax)
    const digits2:(number | string)[] = [9,8,7, "coffee"] // for one data type no round brackets needed

    digits.push('time for coffee') // the array remains mutable
    console.log(digits)

    // functions - we typically data-type the incoming arguments (although default values will infer a type)
    const fn = (pers_name:string = 'Ethel')=>{
        // get in the habit of using sting interpolation syntax
        console.log(`Greetings ${pers_name} one plus two is ${1+2}`)
    }
    fn(programmer['name'])
    // some other ES6+ features
    console.log(Number.MAX_VALUE)

    // reminder - ECMAScript remains a prototypical language
    // everything ultimately descends fro mthe Object type
    const obj1 = Object.create( {} ) // ES will implicity inherit from the Object type
    const obj2 = Object.create( null ) // we inherit from null

    console.log(obj1)
    console.log(obj2)

}