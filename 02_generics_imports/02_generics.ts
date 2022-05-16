{
    // problem we cannot be sure what types may exist in the array
    function firstElement(arr:any[]):any{ // we can't predict every data-type and we try to avoid 'any'
        return arr[0]
    }
    const result = firstElement( [1,2,3] )
    console.log(result)
    // solution is to use 'generics'
    // by convention we use 'T' to stand in for whatever type we need
    const zeroElement = <T>(arr:T[]):T=>{ // this the ONE TIME we MUST use this syntax in older Typescript
        return arr[0] // we are not obliged to return the same type as the generic
    }
    const a_s = ['one', 'two', 'three']
    const a_n = [4,3,2]
    const r = zeroElement( a_s )
    // one advantage of using generics is code-completion can introspect specific types
    console.log(r.charAt(0))
// NB the tsconfig can include a "lib" option
// then we can use browser-like features such as console.log


}