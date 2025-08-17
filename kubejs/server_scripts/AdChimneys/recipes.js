ServerEvents.recipes(event => {

    //Why isn't event.recipes.mekanism working? This is the second time I got tricked by the wiki???
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"createaddition:biomass_pellet"}},"output":{"count":7,"item":"mekanism:bio_fuel"}})
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"createaddition:biomass_pellet_block"}},"output":{"count":64,"item":"mekanism:bio_fuel"}})



    event.remove({
        output: "adchimneys:stone_pump"
    }),
    event.remove({
        output: "adchimneys:metal_pump"
    }),

    event.shaped(Item.of('adchimneys:metal_pump', 1), [
        'ABA',
        'BXB',
        'ABA'
    ], {
        A: 'adchimneys:metal_vent',
        B: 'minecraft:redstone',
        X: 'minecraft:copper_ingot',
    })

    event.shaped(Item.of('adchimneys:stone_pump', 1), [
        'ABA',
        'BXB',
        'ABA'
    ], {
        A: 'adchimneys:stone_vent',
        B: 'minecraft:redstone',
        X: 'minecraft:copper_ingot',
    })
})
