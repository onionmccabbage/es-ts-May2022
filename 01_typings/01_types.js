{ // four ways to declare a type:
    let k;
    k = 'Bacteria';
    let r;
    r = 'literaly this'; // or 10 or false but NOTHING else
    // r = true
}
{
    // enumeration (enum)
    let BoxSize;
    (function (BoxSize) {
        BoxSize[BoxSize["Small"] = 0] = "Small";
        BoxSize[BoxSize["Medium"] = 1] = "Medium";
    })(BoxSize || (BoxSize = {}));
    // enums are open ended
    (function (BoxSize) {
        BoxSize[BoxSize["Large"] = 2] = "Large";
        BoxSize[BoxSize["XLarge"] = 3] = "XLarge";
        BoxSize[BoxSize["XXLarge"] = 4] = "XXLarge";
    })(BoxSize || (BoxSize = {}));
    let boxType = BoxSize.Medium; // i.e. 1
    boxType++; // same as boxType = boxType+1
    boxType++; //
    boxType--; // back to two (Large)
    console.log(boxType);
}
{
    // functions - we often aim for function with no return, i.e. :void
    const fn = (x) => {
        return `${x}`; // return the number as a string
    };
    const result = fn(-3); // '-3'
    console.log(typeof (result));
}
{ //further types
    // union types implicity make a new type
    let u; // must be one of these types
    u = 9999; // this is one of the permitted types
    const fn = () => {
        return 'ok';
    };
}
{ // the tuple type: a collection of members whose values MUST be in an order
    let poem; // this tuple only permits a number, then a boolean, then a string
    poem = [1, true, 'love'];
    // tuples (and types in general) are dead handy for code completion
    console.log(poem[2].charAt[0], poem[0].toString());
}
