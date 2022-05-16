
interface Photo {
    albumId     : number
    id          : number
    title       : string
    url         : string
    thumbnailUrl : string
    oobywoobly?:any // optional member - better to choose a (union of) type(s)
    // we can have methods (this one is optional)
    pretty?:(x:boolean, y:{})=>{} // here we data-type arguments x and y
}

// a class can implement an interface
class Snap implements Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    // optionally our JavaScript class may take a constructor
    constructor(snap:Photo){
        this.albumId = snap.albumId
        this.id      = snap.id
        this.title   = snap.title
        this.url     = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }

    // here's how we write a method of this class
    pretty ():string { // no arguments for x and y - all ok....
        return `${this.title}: ${this.url}`
    };
}

// we can extend classes
class LoRes extends Snap {
    constructor(snap:Photo){
        super(snap) // invoke t he constructor from the parent class
        this.url = this.thumbnailUrl // only use hte low resolution version of the image

    }
}

let photos:Array<Photo> = [ // or Photo[]
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
  "albumId": 1,
  "id": 2,
  "title": "reprehenderit est deserunt velit ipsam",
  "url": "https://via.placeholder.com/600/771796",
  "thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
  "albumId": 1,
  "id": 3,
  "title": "officia porro iure quia iusto qui ipsa ut modi",
  "url": "https://via.placeholder.com/600/24f355",
  "thumbnailUrl": "https://via.placeholder.com/150/24f355"
},
{
  "albumId": 1,
  "id": 4,
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
}
]
// when creating class instances we user the 'new' keyword
const s1 = new Snap(photos[3])

let s2 = new Snap({ // duck typing - if it looks like a Duck - it is a Duck
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://via.placeholder.com/600/61a65",
    "thumbnailUrl": "https://via.placeholder.com/150/61a65"
  })

console.log(s1.pretty())


