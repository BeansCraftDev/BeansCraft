ServerEvents.recipes(event => {
    event.remove({
        output: "mekanism:metallurgic_infuser"
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

    event.remove({
        output: "mekanism:basic_universal_cable"
    })
    event.shaped(Item.of('mekanism:basic_universal_cable', 1), [
        'ABA'
    ], {
        A: 'mekanism:ingot_steel',
        B: 'mekanism:alloy_infused'
    })

    event.remove({
        output: "mekanism:basic_pressurized_tube"
    })
    event.shaped(Item.of('mekanism:basic_pressurized_tube', 1), [
        'ABA'
    ], {
        A: 'mekanism:ingot_steel',
        B: 'ad_astra:desh_ingot'
    })

    event.remove({
        output: "mekanism:basic_mechanical_pipe"
    })
    event.shaped(Item.of('mekanism:basic_mechanical_pipe', 1), [
        'ABA'
    ], {
        A: 'mekanism:ingot_steel',
        B: 'mekanism:hdpe_rod'
    })

})