StartupEvents.registry('item', event => {
	event.create('beans:bean_logo')
	event.create('beans:bean_outline')

	event.create('beans:bean_trans')
	.tooltip('Careful, it cracks eggs sometimes')

	event.create('beans:bean_mika')
	.tooltip('The brightest star on the night sky')
	event.create('beans:bean_of_autism')
	.tooltip('meow')

	event.create('beans:hellish_bean')
	.tooltip('soaked with the spicy sauce')

	
	event.create('beans:bean_netsu')
	.tooltip('She\'s judging you')
	.food(food => {
		food
		.hunger(1)
		.effect('brewinandchewin:tipsy', 1200, 4, 1)
		.effect('minecraft:poison', 3600, 0, 1)
	})
})
