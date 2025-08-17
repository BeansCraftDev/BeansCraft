ServerEvents.recipes(event => {

event.custom({
  "type": "tconstruct:casting_basin",
  "cooling_time": 180,
  "fluid": {
    "amount": 810,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "result": {
    "item": "createbigcannons:cast_iron_block"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/ingot"
  },
  "cast_consumed": true,
  "cooling_time": 60,
  "fluid": {
    "amount": 90,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "result": {
    "tag": "forge:ingots/cast_iron"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "cooling_time": 60,
  "fluid": {
    "amount": 90,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "result": {
    "tag": "forge:ingots/cast_iron"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/nugget"
  },
  "cooling_time": 20,
  "fluid": {
    "amount": 10,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "result": {
    "tag": "forge:nuggets/cast_iron"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/nugget"
  },
  "cast_consumed": true,
  "cooling_time": 20,
  "fluid": {
    "amount": 10,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "result": {
    "tag": "forge:nuggets/cast_iron"
  }
})



event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/plate"
  },
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "forge:plates/cast_iron"
    }
  ],
  "cooling_time": 60,
  "fluid": {
    "amount": 90,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "result": {
    "tag": "forge:plates/cast_iron"
  }
})
  
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/plate"
  },
  "cast_consumed": true,
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "forge:plates/cast_iron"
    }
  ],
  "cooling_time": 60,
  "fluid": {
    "amount": 90,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "result": {
    "tag": "forge:plates/cast_iron"
  }
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createbigcannons:cast_iron_block"
  },
  "result": {
    "amount": 810,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "temperature": 800,
  "time": 180
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createbigcannons:cast_iron_ingot"
  },
  "result": {
    "amount": 90,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "temperature": 800,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "forge:plates/cast_iron"
    }
  ],
  "ingredient": {
    "tag": "forge:plates/cast_iron"
  },
  "result": {
    "amount": 90,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "temperature": 800,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "createbigcannons:cast_iron_nugget"
  },
  "result": {
    "amount": 10,
    "fluid": "createbigcannons:molten_cast_iron"
  },
  "temperature": 800,
  "time": 20
})






	event.custom({
  "type": "tconstruct:damagable_melting",
  "byproducts": [
    {
      "amount": 100,
      "tag": "forge:molten_steel"
    }
  ],
  "ingredient": {
    "tag": "c:rustyhelmets"
  },
  "result": {
    "amount": 200,
    "tag": "forge:molten_iron",
    "unit_size": 10
  },
  "temperature": 800,
  "time": 110
})

	event.custom({
  "type": "tconstruct:damagable_melting",
  "byproducts": [
    {
      "amount": 140,
      "tag": "forge:molten_steel"
    }
  ],
  "ingredient": {
    "tag": "c:rustychests"
  },
  "result": {
    "amount": 280,
    "tag": "forge:molten_iron",
    "unit_size": 10
  },
  "temperature": 800,
  "time": 139
})

	event.custom({
  "type": "tconstruct:damagable_melting",
  "byproducts": [
    {
      "amount": 100,
      "tag": "forge:molten_steel"
    }
  ],
  "ingredient": {
    "tag": "c:rustygear"
  },
  "result": {
    "amount": 180,
    "tag": "forge:molten_iron",
    "unit_size": 10
  },
  "temperature": 800,
  "time": 139
})


})