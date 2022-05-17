export type Penguin = {
    breed:string, yearOfBirth:number
}

export interface Dog {
    breeds:string[],
    yearOfBirth:number,
    legs?:number
}