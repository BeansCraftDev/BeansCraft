ServerEvents.recipes(event => {

    event.remove({type: 'ad_astra:oxygen_loading'}),
    event.remove({output: 'ad_astra:fuel_refinery'})
    event.remove({output:'ad_astra:compressor'})
    event.remove({output:'ad_astra:etrionic_blast_furnace'})
    event.remove({output:'ad_astra:water_pump'})
    event.remove({output:'ad_astra:coal_generator'})

    event.remove({output:'ad_astra:fluid_pipe_duct'})
    event.remove({output:'ad_astra:cable_duct'})
    event.remove({output:'ad_astra:steel_cable'})
    event.remove({output:'ad_astra:desh_cable'})
    event.remove({output:'ad_astra:ostrum_fluid_pipe'})
    event.remove({output:'ad_astra:desh_fluid_pipe'})

    event.shaped(Item.of('ad_astra:compressor', 1), [
        'SPS',
        'SAS',
        'SHS'
    ], {
        S: 'mekanism:ingot_steel',
        P: 'create:mechanical_press',
        A: 'immersiveengineering:component_electronic_adv',
        H: 'immersiveengineering:heavy_engineering'
    })



    event.custom({
            "type": "ad_astra:oxygen_loading",
            "cookingtime": 5,
            "energy": 30,
            "input": {
              "ingredient": {
                "tag": "minecraft:water"
              },
              "millibuckets": 100
            },
            "result": {
              "fluid": "mekanism:oxygen",
              "millibuckets": 10
            }
          })

          event.custom({
            "type": "ad_astra:oxygen_loading",
            "cookingtime": 2,
            "energy": 30,
            "input": {
              "ingredient": {
                "fluid": "mekanism:oxygen"
              },
              "millibuckets": 10
            },
            "result": {
              "fluid": "mekanism:oxygen",
              "millibuckets": 10
            }
          })
})
