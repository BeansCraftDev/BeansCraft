ServerEvents.recipes(event => {

  //keep in mind that create coins use 10mb of fluid, not 30 like in Tinker's recipes

  //
  //
  //createdeco:copper_coin
  //createdeco:industrial_iron_coin
  //createdeco:zinc_coin

  //Coin recipes - Zinc

event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:zinc_coin"
  },
  "result": {
    "amount": 10,
    "tag": "forge:molten_zinc"
  },
  "temperature": 420,
  "time": 40
})

  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:zinc_coinstack"
  },
  "result": {
    "amount": 40,
    "tag": "forge:molten_zinc"
  },
  "temperature": 420,
  "time": 160
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/coin"
  },
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_zinc"
  },
  "result": {
    "item": "createdeco:zinc_coin"
  }
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/coin"
  },
  "cast_consumed": true,
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_zinc"
  },
  "result": {
    "item": "createdeco:zinc_coin"
  }
})

  //Coin recipes - gold
  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:gold_coin"
  },
  "result": {
    "amount": 10,
    "tag": "forge:molten_gold"
  },
  "temperature": 700,
  "time": 40
})

  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:gold_coinstack"
  },
  "result": {
    "amount": 40,
    "tag": "forge:molten_gold"
  },
  "temperature": 700,
  "time": 160
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/coin"
  },
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_gold"
  },
  "result": {
    "item": "createdeco:gold_coin"
  }
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/coin"
  },
  "cast_consumed": true,
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_gold"
  },
  "result": {
    "item": "createdeco:gold_coin"
  }
})

//coin recipes - netherite
  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:netherite_coin"
  },
  "result": {
    "amount": 10,
    "tag": "forge:molten_netherite"
  },
  "temperature": 1250,
  "time": 40
})

  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:netherite_coinstack"
  },
  "result": {
    "amount": 40,
    "tag": "forge:molten_netherite"
  },
  "temperature": 1250,
  "time": 160
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/coin"
  },
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_netherite"
  },
  "result": {
    "item": "createdeco:netherite_coin"
  }
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/coin"
  },
  "cast_consumed": true,
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_netherite"
  },
  "result": {
    "item": "createdeco:netherite_coin"
  }
})

//coin recipes - Brass
  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:brass_coin"
  },
  "result": {
    "amount": 10,
    "tag": "forge:molten_brass"
  },
  "temperature": 605,
  "time": 40
})

  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:brass_coinstack"
  },
  "result": {
    "amount": 40,
    "tag": "forge:molten_brass"
  },
  "temperature": 605,
  "time": 160
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/coin"
  },
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_brass"
  },
  "result": {
    "item": "createdeco:brass_coin"
  }
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/coin"
  },
  "cast_consumed": true,
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_brass"
  },
  "result": {
    "item": "createdeco:brass_coin"
  }
})

//coin recipes - Iron
  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:iron_coin"
  },
  "result": {
    "amount": 10,
    "tag": "forge:molten_iron"
  },
  "temperature": 700,
  "time": 40
})

  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:iron_coinstack"
  },
  "result": {
    "amount": 40,
    "tag": "forge:molten_iron"
  },
  "temperature": 700,
  "time": 160
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/coin"
  },
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag":"forge:molten_iron"
  },
  "result": {
    "item": "createdeco:iron_coin"
  }
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/coin"
  },
  "cast_consumed": true,
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_iron"
  },
  "result": {
    "item": "createdeco:iron_coin"
  }
})

//coin recipes - copper
  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:copper_coin"
  },
  "result": {
    "amount": 10,
    "tag": "forge:molten_copper"
  },
  "temperature": 500,
  "time": 40
})

  event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createdeco:copper_coinstack"
  },
  "result": {
    "amount": 40,
    "tag": "forge:molten_copper"
  },
  "temperature": 500,
  "time": 160
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/coin"
  },
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag":"forge:molten_copper"
  },
  "result": {
    "item": "createdeco:copper_coin"
  }
})

  event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/coin"
  },
  "cast_consumed": true,
  "cooling_time": 47,
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_copper"
  },
  "result": {
    "item": "createdeco:copper_coin"
  }
})

//coin recipes - industrial iron - no molten industrial iron available, remind me to register one
//  event.custom(  {
//  "type": "tconstruct:melting",
//  "ingredient": {
//    "item": "createdeco:iron_coin"
//  },
//  "result": {
//    "amount": 10,
//    "tag": "forge:molten_iron"
//  },
//  "temperature": 700,
//  "time": 40
//})
//
//  event.custom({
//  "type": "tconstruct:casting_table",
//  "cast": {
//    "tag": "tconstruct:casts/multi_use/coin"
//  },
//  "cooling_time": 47,
//  "fluid": {
//    "amount": 10,
//    "tag":"forge:molten_brass"
// },
//  "result": {
//    "item": "createdeco:iron_coin"
//  }
//})
//
// event.custom({
//  "type": "tconstruct:casting_table",
//  "cast": {
//    "tag": "tconstruct:casts/single_use/coin"
//  },
//  "cast_consumed": true,
//  "cooling_time": 47,
//  "fluid": {
//    "amount": 10,
//    "tag": "forge:molten_brass"
//  },
//  "result": {
//    "item": "createdeco:iron_coin"
//  }
//})


})