// here we will write some Typescript
// Typescript has TWO all-encompassing capabilites
// 1 - a language service - code hinting etc.
// 2 - data-typing capabilities
{ // this is a code block - a scope (ES6)
    var w = true; // these days we avoid 'var'
    var x = 'Ethel'; // Typescript infers the type (here is a string)
    var y = 'Lily'; // a constant is immutable
    // the ts language service helps avpid stupid mistakes
    // x = false // nope
    // we can explicitly type things (post-colon data typing is a Typescipt thing)
    var p = 'Grace'; // but ts would infer this anyway
    // we would then explicity data-type to give us good feedback
    var programmer = { name: "Ada" };
    // we can mix types (a union of types)
    var d = 1; // the 'any' type should be avoided
    // mixing data types within structures
    var digits = [3, 2, 1]; // optional types
    // or (equivalent syntax)
    var digits2 = [9, 8, 7, "coffee"]; // for one data type no round brackets needed
    digits.push('time for coffee'); // the array remains mutable
    console.log(digits);
    // functions - we typically data-type the incoming arguments (although default values will infer a type)
    var fn = function (pers_name) {
        if (pers_name === void 0) { pers_name = 'Ethel'; }
        // get in the habit of using sting interpolation syntax
        console.log("Greetings ".concat(pers_name, " one plus two is ").concat(1 + 2));
    };
    fn(programmer['name']);
    // some other ES6+ features
    console.log(Number.MAX_VALUE);
    // reminder - ECMAScript remains a prototypical language
    // everything ultimately descends fro mthe Object type
    var obj1 = Object.create({}); // ES will implicity inherit from the Object type
    var obj2 = Object.create(null); // we inherit from null
    console.log(obj1);
    console.log(obj2);
}
