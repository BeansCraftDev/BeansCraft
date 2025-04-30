ServerEvents.recipes(event => {



event.replaceInput(
    {input: 'createaddition:copper_spool'},
    'createaddition:copper_spool',
    'immersiveengineering:wirecoil_copper'
)
event.replaceInput(
    {input: 'createdieselgenerators:wood_chip'},
    'createdieselgenerators:wood_chip',
    'mekanism:sawdust'
)
event.replaceOutput(
  { mod: 'alexscaves' }, // Arg 1: the filter
  'minecraft:iron_nugget',            // Arg 2: the item to replace
  'minecraft:iron_ingot'         // Arg 3: the item to replace it with
   //Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
  
    event.remove({output: "refinedstorage:advanced_processor"})
    event.remove({output: "refinedstorage:destruction_core"})
    event.remove({output: "refinedstorage:construction_core"})
    event.remove({output: "refinedstorage:improved_processor"})
    
    event.recipes.create(['minecraft:iron_block'],[Fluid.lava(500), 'minecraft:calcite', 'ad_astra:moon_sand'])

    event.custom({
            "type": "create:mixing",
            "ingredients": [
              {
                "item": "minecraft:calcite",
                "amount": 5
              },
              {
                "item": "ad_astra:moon_sand",
                "amount": 10
              },
              {
                "amount": 500,
                "fluid": "minecraft:lava",
                "nbt": {}
              }
            ],
            "results": [
              {
                "item": "minecraft:iron_block"
              }
            ]
    })
    

    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "minecraft:calcite",
            "amount": 5
          },
          {
            "item": "ad_astra:moon_sand",
            "amount": 10
          },
          {
            "amount": 500,
            "fluid": "minecraft:lava",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": "minecraft:iron_block"
          }
        ]
})


event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "minecraft:calcite",
        "amount": 5
      },
      {
        "item": "ad_astra:mars_sand",
        "amount": 10
      },
      {
        "amount": 500,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "minecraft:copper_block"
      }
    ]
})


event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "minecraft:calcite",
        "amount": 5
      },
      {
        "item": "ad_astra:venus_sand",
        "amount": 10
      },
      {
        "amount": 500,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "minecraft:gold_block"
      }
    ]
})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'refinedstorage:basic_processor'
        },
        "loops": 2,
        "results": [
            {
                "chance": 65.0,
                "item": "refinedstorage:destruction_core"
            },
            {
                "chance": 35.0,
                "item": "minecraft:quartz"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    },
                    {
                        "item": "minecraft:quartz"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    },
                    {
                        "item": "immersiveengineering:component_electronic"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    },
                    {
                        "item": "refinedstorage:quartz_enriched_iron"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_destruction_core"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "refinedstorage:incomplete_destruction_core"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'refinedstorage:raw_advanced_processor'
        },
        "loops": 2,
        "results": [
            {
                "chance": 65.0,
                "item": "refinedstorage:advanced_processor"
            },
            {
                "chance": 35.0,
                "item": "minecraft:diamond"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    },
                    {
                        "item": "ad_astra:ostrum_plate"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    },
                    {
                        "item": "immersiveengineering:component_electronic"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    },
                    {
                        "amount": 100,
                        "fluid": "estrogen:molten_amethyst",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_advanced_processor"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "refinedstorage:incomplete_advanced_processor"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'refinedstorage:basic_processor'
        },
        "loops": 2,
        "results": [
            {
                "chance": 65.0,
                "item": "refinedstorage:construction_core"
            },
            {
                "chance": 35.0,
                "item": "minecraft:glowstone_dust"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    },
                    {
                        "item": "minecraft:glowstone_dust"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    },
                    {
                        "item": "immersiveengineering:component_electronic"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    },
                    {
                        "item": "refinedstorage:quartz_enriched_iron"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_construction_core"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "refinedstorage:incomplete_construction_core"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'refinedstorage:raw_improved_processor'
        },
        "loops": 2,
        "results": [
            {
                "chance": 65.0,
                "item": "refinedstorage:improved_processor"
            },
            {
                "chance": 35.0,
                "item": "create:golden_sheet"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    },
                    {
                        "item": "create:golden_sheet"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    },
                    {
                        "item": "immersiveengineering:component_electronic"
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    },
                    {
                        "amount": 100,
                        "fluid": "estrogen:molten_amethyst",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_cast_iron",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "refinedstorage:incomplete_improved_processor"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "refinedstorage:incomplete_improved_processor"
        }
    })

    //Baby's first basic control circuit. A step into mekanism age
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'refinedstorage:advanced_processor'
        },
        "loops": 20,
        "results": [
            {
                "item": "mekanism:basic_control_circuit"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    },
                    {
                        "item": "minecraft:redstone"
                    }
                ],
                "results": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_steel",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    }
                ],
                "results": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    },
                    {
                        "amount": 1000,
                        "fluid": "createbigcannons:molten_steel",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "mekanism:incomplete_basic_control_circuit"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "mekanism:incomplete_basic_control_circuit"
        }
    })

})
