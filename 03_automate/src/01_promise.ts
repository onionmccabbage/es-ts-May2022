// in a similar way to Arrays, the Promise has an internal type
const go = (isWorking:boolean):Promise<string | Error>=>{
    // we can return a (JavaScript) Promise (which MUST have a call-back)
    return new Promise( (resolve, reject)=>{ // a promise has built-in 'resolve' and 'reject'
        setTimeout( ()=>{ // here we emulate an async call (might take a while)
            if(isWorking){
                resolve('everything worked out fine')
            } else {
                reject(new Error('something went wrong') ) // NB the reject data type is not being checked agains what we said
            } 
        }, 500 ) // here is the end of the setTimeout
    } )
}

// exercise the code
// NB Promises can be async, so we might need to wait.......
go(true) // Promises are 'thenable'
    .then( (val:string)=>{console.log(val)} )
    .catch( (err:Error)=>{console.log(err)} )