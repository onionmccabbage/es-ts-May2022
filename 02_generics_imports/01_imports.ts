// we can import other files
// NB TS will look for a tsconfig file up the chain...
import { Photo } from './interfaces'
import * as pdata from './photos.json'

const photos:Array<Photo> = pdata

const p1:Photo = photos[77]
console.log(p1)