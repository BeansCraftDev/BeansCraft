ServerEvents.recipes(event => {

  //Not sure if smelting crushed ores is overpowered, but hey, this pack isn't Gregtech so...

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 90,
      "rate": "metal",
      "tag": "forge:molten_iron"
    }
  ],
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/aluminum"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/aluminum"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_aluminum"
  },
  "temperature": 425,
  "time": 71
})

event.custom({
  "type": "forge:conditional",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/nickel"
    }
  ],
  "recipes": [
    {
      "conditions": [
        {
          "type": "mantle:tag_filled",
          "tag": "forge:ingots/platinum"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_platinum"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/nickel"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_nickel"
        },
        "temperature": 950,
        "time": 97
      }
    },
    {
      "conditions": [
        {
          "type": "forge:true"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_iron"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/nickel"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_nickel"
        },
        "temperature": 950,
        "time": 97
      }
    }
  ]
})

event.custom({
  "type": "forge:conditional",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/uranium"
    }
  ],
  "recipes": [
    {
      "conditions": [
        {
          "type": "mantle:tag_filled",
          "tag": "forge:ingots/lead"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_lead"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/uranium"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_uranium"
        },
        "temperature": 830,
        "time": 92
      }
    },
    {
      "conditions": [
        {
          "type": "forge:true"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_copper"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/uranium"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_uranium"
        },
        "temperature": 830,
        "time": 92
      }
    }
  ]
})

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 25,
      "fluid": "tconstruct:molten_diamond",
      "rate": "gem"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/cobalt"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_cobalt"
  },
  "temperature": 950,
  "time": 97
})

event.custom({
  "type": "forge:conditional",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/silver"
    }
  ],
  "recipes": [
    {
      "conditions": [
        {
          "type": "mantle:tag_filled",
          "tag": "forge:ingots/lead"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_lead"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/silver"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_silver"
        },
        "temperature": 790,
        "time": 90
      }
    },
    {
      "conditions": [
        {
          "type": "forge:true"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_gold"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/silver"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_silver"
        },
        "temperature": 790,
        "time": 90
      }
    }
  ]
})

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 90,
      "rate": "metal",
      "tag": "forge:molten_iron"
    }
  ],
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/osmium"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/osmium"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_osmium"
  },
  "temperature": 975,
  "time": 98
})

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 30,
      "rate": "metal",
      "tag": "forge:molten_gold"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/copper"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_copper"
  },
  "temperature": 500,
  "time": 75
})

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 90,
      "rate": "metal",
      "tag": "forge:molten_cobalt"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/gold"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_gold"
  },
  "temperature": 700,
  "time": 85
})

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 90,
      "rate": "metal",
      "tag": "forge:molten_steel"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/iron"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_iron"
  },
  "temperature": 800,
  "time": 90
})

event.custom({
  "type": "forge:conditional",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/lead"
    }
  ],
  "recipes": [
    {
      "conditions": [
        {
          "type": "mantle:tag_filled",
          "tag": "forge:ingots/silver"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_silver"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/lead"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_lead"
        },
        "temperature": 330,
        "time": 65
      }
    },
    {
      "conditions": [
        {
          "type": "forge:true"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_gold"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/lead"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_lead"
        },
        "temperature": 330,
        "time": 65
      }
    }
  ]
})

event.custom({
  "type": "forge:conditional",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/zinc"
    }
  ],
  "recipes": [
    {
      "conditions": [
        {
          "type": "mantle:tag_filled",
          "tag": "forge:ingots/tin"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_tin"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/zinc"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_zinc"
        },
        "temperature": 420,
        "time": 70
      }
    },
    {
      "conditions": [
        {
          "type": "forge:true"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_copper"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/zinc"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_zinc"
        },
        "temperature": 420,
        "time": 70
      }
    }
  ]
})

event.custom({
  "type": "forge:conditional",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/tin"
    }
  ],
  "recipes": [
    {
      "conditions": [
        {
          "type": "mantle:tag_filled",
          "tag": "forge:ingots/nickel"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_nickel"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/tin"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_tin"
        },
        "temperature": 225,
        "time": 59
      }
    },
    {
      "conditions": [
        {
          "type": "forge:true"
        }
      ],
      "recipe": {
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_copper"
          }
        ],
        "ingredient": {
          "tag": "create:crushed_raw_materials/tin"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_tin"
        },
        "temperature": 225,
        "time": 59
      }
    }
  ]
})

//note to self - make sure space ores are rewarding... or something? I dunno
event.custom({
  "type": "tconstruct:ore_melting",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/desh"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/desh"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_desh"
  },
  "temperature": 700,
  "time": 84
})

event.custom({
  "type": "tconstruct:ore_melting",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/ostrum"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/ostrum"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_ostrum"
  },
  "temperature": 425,
  "time": 84
})

event.custom({
  "type": "tconstruct:ore_melting",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "create:crushed_raw_materials/calorite"
    }
  ],
  "ingredient": {
    "tag": "create:crushed_raw_materials/calorite"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_calorite"
  },
  "temperature": 425,
  "time": 84
})

})