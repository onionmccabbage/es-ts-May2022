// we can use type mapping for efficient types
namespace Options_Verbose { // modern ES lets us declare namespaces
    interface Options {
        material:string
        backlight:boolean
    }
    // read-only version
    interface ManualReadOnlyOptions {
        readonly material:string
        readonly backlight:boolean
    }
    // optional version
    interface ManualOptionalOptions {
        material?:string // the trailing question-mark makes that parameter optional
        backlight?:boolean
    }
    // read-only nullable version
    interface ManualNullableOptions {
        material:string | null
        backlight:boolean | null
    }
}
namespace Options_Terse {
    interface Options {
        material:string
        backlight:boolean
    }
    // we can map our types to new types
    type ReadOnlyOptions<T> = { readonly [k in keyof T]: T[k] }
    type OptionalOptions<T> = { [k in keyof T]?: T[k] }
    type NullableOptions<T> = { [k in keyof T]: T[k] | null }

    // use our mapped types
    type ReadOnly = ReadOnlyOptions<Options>
    type Optional = OptionalOptions<Options>
    type Nullable = NullableOptions<Options>

    const brick:ReadOnly ={
        backlight:false,
        material:'brick'
    }
    // brick.backlight = true // nope
    const gauze:Nullable = {
        backlight:true,
        material:null
    }
    const silk:Optional = {
        backlight:true
    }
    silk.material = 'ground nuts'
}