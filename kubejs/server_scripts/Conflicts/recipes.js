ServerEvents.recipes(event => {

    event.remove({type:'immersiveengineering:fermenter'})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":80,"fluid":"mekanismgenerators:bioethanol"},"input":{"item":"minecraft:apple"}})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":40,"fluid":"mekanismgenerators:bioethanol"},"input":{"tag":"forge:crops/beetroot"}})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":100,"fluid":"mekanismgenerators:bioethanol"},"input":{"item":"minecraft:glow_berries"}})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":250,"fluid":"mekanismgenerators:bioethanol"},"input":{"item":"minecraft:honey_bottle"},"result":{"item":"minecraft:glass_bottle"}})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":20,"fluid":"mekanismgenerators:bioethanol"},"input":{"item":"minecraft:melon_slice"}})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":80,"fluid":"mekanismgenerators:bioethanol"},"input":{"tag":"forge:crops/potato"}})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":80,"fluid":"mekanismgenerators:bioethanol"},"input":{"item":"minecraft:sugar_cane"}})
    event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":50,"fluid":"mekanismgenerators:bioethanol"},"input":{"item":"minecraft:sweet_berries"}})
    event.remove({output: "justhammers:stone_hammer"})
    event.remove({output: "justhammers:stone_destructor_hammer"})
    event.remove({output: "justhammers:stone_impact_hammer"})
    event.remove({output: "justhammers:stone_reinforced_hammer"})
    event.remove({output: "justhammers:stone_reinforced_impact_hammer"})
    event.remove({type: 'immersiveengineering:squeezer'})    
    event.remove({id: 'createdieselgenerators:compacting/plant_oil'})



event.custom({"type":"immersiveengineering:squeezer","energy":6400,"fluid":{"amount":120,"fluid":"createaddition:seed_oil"},"input":{"tag":"forge:seeds"}})

    event.remove({type:"createdieselgenerators:basin_fermenting"})
    event.remove({type:"create:mixing", mod:"createdieselgenerators"})
    event.remove({type:"immersiveengineering:mixer", mod:"immersiveengineering"})

    event.custom({"type":"immersiveengineering:mixer","energy":3200,"fluid":{"amount":500,"tag":"forge:bioethanol"},"inputs":[{"tag":"forge:dusts/sulfur"},{"tag":"forge:dusts/copper"}],"result":{"amount":500,"fluid":"immersiveengineering:herbicide"}})

    event.custom(
        {
            "type": "create:mixing",
            "ingredients": [
              {
                "fluidTag": "forge:plantoil",
                "amount": 100
              },
              {
                "fluidTag": "forge:bioethanol",
                "amount": 100
              }
            ],
            "results": [
              {
                "fluid": "createdieselgenerators:biodiesel",
                "amount": 200
              }
            ]
          }
    )

    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "minecraft:gravel",
            "count": 2
          },
          {
            "item": "minecraft:sand",
            "count": 2
          },
          {
            "fluidTag": "forge:crude_oil",
            "amount": 100
          }
        ],
        "heatRequirement": "heated",
        "results": [
          {
            "item": "createdieselgenerators:asphalt_block",
            "count": 4
          }
        ]
      })

    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
          {
            "item": "create:wheat_flour"
          },
          {
            "fluid": "minecraft:water",
            "amount": 100
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "item": "create:dough"
          },
          {
            "item": "create:wheat_flour",
            "chance": 0.1
          }
        ]
      })
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
          {
            "tag": "forge:fermentable"
          },
          {
            "item": "minecraft:bone_meal"
          }
        ],
        "processingTime": 400,
        "results": [
          {
            "fluid": "mekanismgenerators:bioethanol",
            "amount": 200
          }
        ]
      })
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
          {
            "item": "minecraft:spider_eye"
          },
          {
            "item": "minecraft:sugar"
          },
          {
            "fluid": "minecraft:water",
            "amount": 100
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "item": "minecraft:fermented_spider_eye"
          },
          {
            "fluid": "mekanismgenerators:bioethanol",
            "amount": 100
          }
        ]
      })
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
          {
            "item": "minecraft:apple"
          },
          {
            "tag": "forge:ingots/gold"
          },
          {
            "tag": "forge:ingots/gold"
          },
          {
            "tag": "forge:ingots/gold"
          },
          {
            "tag": "forge:ingots/gold"
          },
          {
            "tag": "forge:ingots/gold"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Potion": "minecraft:mundane"
            },
            "amount": 100
          }
        ],
        "processingTime": 400,
        "results": [
          {
            "item": "minecraft:golden_apple"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Potion": "minecraft:thick"
            },
            "amount": 100
          }
        ]
      })
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
          {
            "item": "minecraft:carrot"
          },
          {
            "tag": "forge:nuggets/gold"
          },
          {
            "tag": "forge:nuggets/gold"
          },
          {
            "tag": "forge:nuggets/gold"
          },
          {
            "tag": "forge:nuggets/gold"
          },
          {
            "tag": "forge:nuggets/gold"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Potion": "minecraft:mundane"
            },
            "amount": 100
          }
        ],
        "processingTime": 400,
        "results": [
          {
            "item": "minecraft:golden_carrot"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Potion": "minecraft:thick"
            },
            "amount": 100
          }
        ]
      })
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
          {
            "item": "minecraft:slime_ball"
          },
          {
            "fluid": "minecraft:lava",
            "amount": 100
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "item": "minecraft:magma_cream"
          }
        ]
      })

    event.remove({
        output: "minecraft:white_dye",
        mod: 'immersiveengineering',
        type: 'minecraft:crafting_shapeless'
    })

    event.custom({"type":"minecraft:crafting_shapeless","category":"misc","ingredients":[{"item":"mekanismgenerators:bioethanol_bucket"},{"item":"minecraft:rotten_flesh"},{"item":"minecraft:rotten_flesh"},{"item":"minecraft:rotten_flesh"},{"tag":"forge:dusts/lead"}],"result":{"count":16,"item":"minecraft:white_dye"}})

    event.remove({
        output: "comforts:sleeping_bag_white"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_white', 1), [
        'AAA'
    ], {
        A: 'minecraft:white_carpet'
    })
    
    event.remove({
        output: "comforts:sleeping_bag_black"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_black', 1), [
        'AAA'
    ], {
        A: 'minecraft:black_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_cyan"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_cyan', 1), [
        'AAA'
    ], {
        A: 'minecraft:cyan_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_yellow"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_yellow', 1), [
        'AAA'
    ], {
        A: 'minecraft:yellow_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_red"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_red', 1), [
        'AAA'
    ], {
        A: 'minecraft:red_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_light_gray"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_light_gray', 1), [
        'AAA'
    ], {
        A: 'minecraft:light_gray_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_gray"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_gray', 1), [
        'AAA'
    ], {
        A: 'minecraft:gray_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_pink"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_pink', 1), [
        'AAA'
    ], {
        A: 'minecraft:pink_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_green"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_green', 1), [
        'AAA'
    ], {
        A: 'minecraft:green_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_brown"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_brown', 1), [
        'AAA'
    ], {
        A: 'minecraft:brown_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_purple"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_purple', 1), [
        'AAA'
    ], {
        A: 'minecraft:purple_carpet'
    })
    
    event.remove({
        output: "comforts:sleeping_bag_orange"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_orange', 1), [
        'AAA'
    ], {
        A: 'minecraft:orange_carpet'
    })
    
    event.remove({
        output: "comforts:sleeping_bag_blue"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_blue', 1), [
        'AAA'
    ], {
        A: 'minecraft:blue_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_magenta"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_magenta', 1), [
        'AAA'
    ], {
        A: 'minecraft:magenta_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_lime"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_lime', 1), [
        'AAA'
    ], {
        A: 'minecraft:lime_carpet'
    })

    event.remove({
        output: "comforts:sleeping_bag_light_blue"
    }),
    event.shaped(Item.of('comforts:sleeping_bag_light_blue', 1), [
        'AAA'
    ], {
        A: 'minecraft:light_blue_carpet'
    })

    event.remove({
        output: "mekanism:block_uranium", input: "#forge:raw_materials/uranium"
    })
})
