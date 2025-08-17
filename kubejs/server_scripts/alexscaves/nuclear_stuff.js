ServerEvents.recipes(event => {

    event.shaped(Item.of('alexscaves:fissile_core', 1), [
        'ABA',
        'BBB',
    ], {
        A: 'mekanism:block_uranium',
        B: 'mekanism:steel_casing',
    })

    event.shaped(Item.of('alexscaves:uranium_rod', 1), [
        'USU',
        'URU',
        'USU',
    ], {
        U: 'mekanism:ingot_uranium',
        S: 'mekanism:ingot_steel',
        R: 'immersiveengineering:stick_steel'
    })

    event.shaped(Item.of('alexscaves:nuclear_bomb', 1), [
        'CFC',
        'UGU',
        'CAC',
    ], {
        C: 'mekanism:steel_casing',
        F: 'alexscaves:fissile_core',
        U: 'alexscaves:uranium_rod',
        G: 'jaopca:gears.uranium',
        A: 'mekanism:reprocessed_fissile_fragment'
    })
})
