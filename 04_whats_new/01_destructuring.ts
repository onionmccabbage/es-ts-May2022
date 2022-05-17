{
    // desctructuring in ES6+
    // unpack an array
    const values = [1, 3, 6, 11, 215, 21, 55, 42 ]
    //                          ... is an ellipsis, for hte rest of the values
    const [first, second, ,fourth, ...rest] = values
    console.log(first, fourth, rest)
}
{
    // the spread operator
    const squares = [1, 4, 9, 16, 25]
    const powers  = [2, 4, 8, 16, 32]
    // here ... is hte spread operator
    const both = [...squares, ...powers]
    console.log(both)
}
{
    // object destructuring
    const prog = {name:'Play School', presenter:'Floella', started:1976}
    const {name:n, presenter:p, ...rest} = prog
    console.log(`${n} presented by ${p} since ${rest['started']}`)
}
{
    // tuple destructuring
    function getMission():[string, string, string] {
        return ['inform', 'educate', 'entertain']
    }
    const [inf, edu, ent] = getMission()
}