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

}