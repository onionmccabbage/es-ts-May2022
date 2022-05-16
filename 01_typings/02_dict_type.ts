{ // curly braces indicate a code block (a scope)
    // the dictionary type
    interface Celaphopod {
        hasink:boolean
        arms:number
        tentacles:number
    }

    interface CelaphopodDict {
        [species:string]:Celaphopod
    }

    enum en {vulgaris='Vulgaris', loligo='Loligo'}
    let t:string = 'octocreature' // just an arbitrary new kind of ocopus

    // populate our dictionary
    const dict:CelaphopodDict = {} //an empty object
    dict[en.vulgaris] = {hasink:true, arms:8, tentacles:0}
    dict[en.vulgaris] = {hasink:true, arms:8, tentacles:0}
    dict[t] = {hasink:false, arms:12, tentacles:33}

}
