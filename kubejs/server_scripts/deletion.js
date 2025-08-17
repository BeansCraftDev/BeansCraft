
ServerEvents.recipes(event => {



    event.remove({output: 'mekanism:ingot_steel', mod:'magistuarmory'})
    event.remove({output: 'mekanism:ingot_steel', mod:'ad_astra'})
    event.remove({output: 'mekanism:block_steel', mod:'ad_astra'})

    event.remove({output: 'ad_astra:steel_block'})
    event.remove({output: 'immersiveengineering:ingot_steel'})
    event.remove({output: 'ad_astra:steel_ingot'})
    event.remove({output: 'magistuarmory:steel_ingot'})
    event.remove({ output: 'mekanism:ingot_steel', type: 'minecraft:blasting' })
    event.remove({output: 'createaddition:connector'})
    event.remove({output: 'createaddition:small_light_connector'})
    event.remove({output: 'createaddition:large_connector'})
    event.remove({output: 'createaddition:copper_spool'})
    event.remove({output: 'createaddition:gold_spool'})
    event.remove({output: 'createaddition:electrum_spool'})
    event.remove({output: 'createaddition:festive_spool'})

    event.remove({output: 'immersiveengineering:wirecoil_structure_steel'})
    event.remove({output: 'immersiveengineering:wirecoil_structure_rope'})
    event.remove({output: 'immersiveengineering:wirecoil_steel'})
    event.remove({output: 'immersiveengineering:wirecoil_redstone'})
    event.remove({output: 'immersiveengineering:wirecoil_electrum'})
    event.remove({output: 'immersiveengineering:wirecoil_copper'})

    event.remove({output: 'alexscaves:nuclear_bomb'})
    event.remove({output: 'alexscaves:uranium_rod'})

})
