ServerEvents.recipes(event => {

//adding missing iron and gold wire casting

event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "tag": "forge:wires/iron"
  },
  "result": {
    "amount": 45,
    "tag": "forge:molten_iron"
  },
  "temperature": 420,
  "time": 800
})

event.custom(  {
  "type": "tconstruct:melting",
  "ingredient": {
    "tag": "forge:wires/gold"
  },
  "result": {
    "amount": 45,
    "tag": "forge:molten_gold"
  },
  "temperature": 700,
  "time": 10
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/wire"
  },
  "cast_consumed": true,
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "forge:wires/iron"
    }
  ],
  "cooling_time": 35,
  "fluid": {
    "amount": 45,
    "tag": "forge:molten_iron"
  },
  "result": {
    "tag": "forge:wires/iron"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/wire"
  },
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "forge:wires/iron"
    }
  ],
  "cooling_time": 35,
  "fluid": {
    "amount": 45,
    "tag": "forge:molten_iron"
  },
  "result": {
    "tag": "forge:wires/iron"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/wire"
  },
  "cast_consumed": true,
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "forge:wires/gold"
    }
  ],
  "cooling_time": 35,
  "fluid": {
    "amount": 45,
    "tag": "forge:molten_gold"
  },
  "result": {
    "tag": "forge:wires/gold"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/wire"
  },
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "tag": "forge:wires/gold"
    }
  ],
  "cooling_time": 35,
  "fluid": {
    "amount": 45,
    "tag": "forge:molten_gold"
  },
  "result": {
    "tag": "forge:wires/gold"
  }
})

})