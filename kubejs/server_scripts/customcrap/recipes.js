ServerEvents.recipes(event => {

event.recipes.create.compacting('notsoedible:lead_bar', [Item.of('mekanism:hdpe_sheet', 4), Item.of('mekanism:ingot_lead', 5), 'minecraft:dirt', Fluid.lava(100)])
event.recipes.create.compacting('notsoedible:uranium_bar', [Item.of('mekanism:hdpe_pellet', 5), Item.of('mekanism:ingot_uranium', 5), 'minecraft:dirt', 'notsoedible:lead_bar', Fluid.lava(150)])
event.recipes.bloodmagic.altar('enigmaticlegacy:cursed_ring', 'irons_spellbooks:fireward_ring').upgradeLevel(1).drainRate(1).consumptionRate(5).altarSyphon(10000)

event.custom({
  "type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid": "patchouli"
        }
      ],
      "recipe": {
        "type":"patchouli:shapeless_book_recipe",
        "ingredients": [
          {
            "item": "minecraft:book"
          },
          {
            "item": "minecraft:crafting_table"
          }
        ],
        "book": "patchouli:basics"
      }
    }
  ]
}

)

})
