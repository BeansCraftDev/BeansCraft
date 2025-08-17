StartupEvents.registry('item', event => {
	
  event.create('liladditions:bean_cookie').food(food => {
    food
    .hunger(2)
    .saturation(0.5)
    .fastToEat()
  })
  .tooltip('This cookie is moist')

	event.create('liladditions:oxeye_tea')
	.useAnimation('drink')
	.useDuration(itemStack => 32)
	.use((level, player, hand) => true)
	.finishUsing((itemstack, level, entity) => {
      let effects = entity.potionEffects
      effects.add('farmersdelight:comfort', 1200)
      itemstack.shrink(1)
      if (entity.player) {
        entity.give("minecraft:glass_bottle") 
      }
      return itemstack
	})

})
