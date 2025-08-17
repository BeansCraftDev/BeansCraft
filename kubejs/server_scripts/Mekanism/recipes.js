ServerEvents.recipes(event => {

    //Why isn't event.recipes.mekanism working? This is the second time I got tricked by the wiki???
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"createaddition:biomass_pellet"}},"output":{"count":7,"item":"mekanism:bio_fuel"}})
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"createaddition:biomass_pellet_block"}},"output":{"count":64,"item":"mekanism:bio_fuel"}})



    event.remove({
        output: "mekanism:metallurgic_infuser"
    }),
    event.remove({
        output: "mekanismgenerators:solar_generator"
    }),

    event.shaped(Item.of('mekanismgenerators:solar_generator', 1), [
        'AAA',
        'IRI',
        'OEO'
    ], {
        A: 'ad_astra:photovoltaic_etrium_cell',
        I: 'minecraft:iron_ingot',
        R: 'mekanism:alloy_infused',
        O: 'mekanism:ingot_osmium',
        E: 'mekanism:energy_tablet'
    })

    event.shaped(Item.of('mekanism:metallurgic_infuser', 1), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:basic_control_circuit',
        B: 'minecraft:furnace',
        C: 'minecraft:redstone',
        D: 'minecraft:iron_ingot'
    })
})
