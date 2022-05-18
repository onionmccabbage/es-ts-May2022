{
    // guard against data type oddities
    const eg = (sn:string | number)=>{
        // if we get a string, return the length
        if (typeof sn == 'string') {
            return sn.length
        } else {
            return sn.toFixed(2)
        }
    }
    const words = 'one point four nine'
    const num   = 1.496

    console.log(eg(words))
    console.log(eg(num))
}