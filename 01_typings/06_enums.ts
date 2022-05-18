// more on enums
// bit flags
{
    const enum CategoryFlags {
        None   = 0,
        Music  = 1,
        News   = 2,
        Drama  = 4,
        Comedy = 8
    }

    const musicalComedy = CategoryFlags.Music | CategoryFlags.Comedy

    // we can use it like this
    const hasMusic   = (musicalComedy &CategoryFlags.Music)  // 1
    const hasComedy  = (musicalComedy &CategoryFlags.Comedy) // 8
    const hasDrama   = (musicalComedy &CategoryFlags.Drama)  // 0

    console.log(hasMusic, hasComedy, hasDrama)
}