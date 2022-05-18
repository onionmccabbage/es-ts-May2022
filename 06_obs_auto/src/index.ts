const info = 'This example illustrated observables'
// we need the RxJS library
import * as Rx from 'rxjs'
import { first } from 'rxjs/operator/first'

// grab handles to parts of the html page
const s:HTMLElement = document.getElementById('search')
const r:HTMLElement = document.getElementById('results')

// by convention Observables end with with a dollar sign
// we can add our Observable to any entity - in this case the search box
const keyup$ = Rx.Observable.fromEvent(s, 'keyup') // like document.addEventLister('keyup', eventHandler)
// we can use our observable by chaining what we intend to do
keyup$
    .do( ()=>{
        console.log('early in the flow')} ) // 'do' is a convenient way to carry out arbitrary operations
    .pluck('keyCode') // we now have the code of the specific key (or key combination) that was pressed
    .do( ()=>{
        console.log('later in the flow')} )
    // the Observable will not be instantiated until the first subsscriber subscribes
    .subscribe( (keyCode:number)=>{ //every time the Observable broadcasts something, each subscriber is notified
        const k = String.fromCharCode(keyCode) //convert the key code nubmer into an actual character
        console.log(`user typed ${k} `)
        // write the code to the web page
        // clearResults(r)
        r.innerHTML += `<span>${k}</span>`
    } )

// we can have many subscribers
// keyup$.subscribe( ()=>{} )

const clearResults = (container:HTMLElement)=>{ // classic way to clear down any existing HTML content
    while(container.childElementCount > 0) {
        container.removeChild(container.firstChild)
    }
}

// the user might want one of the following categories
const categories:string[] = ['people', 'planets', 'species', 'starships', 'vehicles']
const searchBox = document.querySelector('#input'); //-> <input>
const results:HTMLElement = document.querySelector('#suggestions');  //-> <ul>
const notEmpty = (input: string) => !!input && input.trim().length > 0;
const suggest = (arr: string[], query: string) => {
    return arr.filter((item: any) => {
        return query.length > 0 && item.startsWith(query);
    })
}
const cat$ = Rx.Observable.fromEvent(searchBox, 'keyup')

cat$.debounceTime(700) // give the user 700 ms between checks
    .pluck('target', 'value')
    .filter(notEmpty)
    .do((query:string) => console.log(`Querying for ${query}...`))
    // .map(query => sendRequest(testData, query))
    .map( (query:string) => suggest(categories, query))
    .forEach((result:string[]) => { // this is our subscriber
        clearResults(results)
        appendResults(result.toString(), results)
    })

const appendResults = (results: string, container: HTMLElement) => {
    for (const result of results) {
        const li = document.createElement('li')
        const text = document.createTextNode(result)
        li.appendChild(text)
        container.appendChild(li)
    }
}


// when the last subsriber un-subscribes, the Observable is destroyed
// 'hot' observables will give the entire history to new subscribers
// 'cold' observables only give now and future items to new subscribers (default)