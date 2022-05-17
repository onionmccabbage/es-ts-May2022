// this could be our main app
//this first import works, but we have NO ongoing access to the members
import './04_maths' // all the imported code is run immediately
import * as maths from './04_maths'
// any default must come first
import RandomNumberGen, {pi, phi}  from './04_maths' // no file extension
// we can import types and interfaces too
import {Dog, Penguin} from './03_using_modules'

const r = new RandomNumberGen()
console.log(maths.sqrtTwo, pi)

// we use explicit data typing here - Typescript would not infer our custom types
type Animals = Penguin | Dog
const gromit:Dog = {breeds:['plasticene', 'silicone'], yearOfBirth:1991, legs:4}
const feathers:Penguin = {breed:'RockHopper', yearOfBirth:1998}

const characters:Animals[] = [gromit, feathers]

console.log(typeof(gromit)) // remember - by the time this code runs there is NO TYPESCRIPT!!!
console.log(characters)
