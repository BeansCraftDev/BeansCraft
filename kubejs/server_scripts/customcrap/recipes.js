ServerEvents.recipes(event => {

event.recipes.create.compacting('notsoedible:lead_bar', [Item.of('mekanism:hdpe_sheet', 4), Item.of('mekanism:ingot_lead', 5), 'minecraft:dirt', Fluid.lava(100)])
event.recipes.create.compacting('notsoedible:uranium_bar', [Item.of('mekanism:hdpe_pellet', 5), Item.of('mekanism:ingot_uranium', 5), 'minecraft:dirt', 'notsoedible:lead_bar', Fluid.lava(150)])


})
