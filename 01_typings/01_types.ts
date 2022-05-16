{ // four ways to declare a type:
  // prefer interface
  // also type, class and enum

    // literals
    type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista'
    let k:Kingdom
    k = 'Bacteria'
    // k = 'Nonsuch' // nope

    type Arbitrary = 'literaly this' | 10 | false // union of types

    let r:Arbitrary
    r = 'literaly this' // or 10 or false but NOTHING else
    // r = true
}
{
    // enumeration (enum)
    enum BoxSize {
        Small, // implicitly zero
        Medium, // then 1, 2, 3 etc in ordinal sequence
    }
    // enums are open ended
    enum BoxSize {
        Large=2,
        XLarge,
        XXLarge
    }

    let boxType = BoxSize.Medium // i.e. 1
    boxType++ // same as boxType = boxType+1
    boxType++ //
    boxType-- // back to two (Large)
    console.log(boxType)

}
{
    // functions - we often aim for function with no return, i.e. :void
    const fn =(x:number):string =>{ // the function will return a string
        return `${x}` // return the number as a string
    }

    const result = fn(-3) // '-3'
    console.log(typeof(result))
}
{ //further types
    // union types implicity make a new type
    let u:boolean | number | string // must be one of these types
    u = 9999 // this is one of the permitted types
    // might be easier to do this
    type my_type = boolean | number | string
    const fn = ():my_type=>{
        return 'ok'
    }
}
{ // the tuple type: a collection of members whose values MUST be in an order
    let poem:[number, boolean, string] // this tuple only permits a number, then a boolean, then a string
    poem = [1, true, 'love']
    // tuples (and types in general) are dead handy for code completion
    console.log(poem[2].charAt[0], poem[0].toString())
}