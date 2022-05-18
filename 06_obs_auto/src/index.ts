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
        clearResults(r)
        r.innerHTML += `<span>${k}</span>`
    } )

const clearResults = (container:HTMLElement)=>{ // classic way to clear down any existing HTML content
    console.log('clearing results')
    while(container.childElementCount > 0) {
        container.removeChild(container.firstChild)
    }
}

// when the last subsriber un-subscribes, the Observable is destroyed
// 'hot' observables will give the entire history to new subscribers
// 'cold' observables only give now and future items to new subscribers (default)