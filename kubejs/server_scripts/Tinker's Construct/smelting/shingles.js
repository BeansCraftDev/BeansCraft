ServerEvents.recipes(event => {

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "create:copper_shingles"
  },
  "result": {
    "amount": 45,
    "tag": "forge:molten_copper"
  },
  "temperature": 500,
  "time": 25
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "create:copper_shingle_slab"
  },
  "result": {
    "amount": 20,
    "tag": "forge:molten_copper"
  },
  "temperature": 500,
  "time": 25
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "create:copper_shingle_stairs"
  },
  "result": {
    "amount": 60,
    "tag": "forge:molten_copper"
  },
  "temperature": 500,
  "time": 25
})


})