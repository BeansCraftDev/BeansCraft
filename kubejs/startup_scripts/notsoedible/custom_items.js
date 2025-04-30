StartupEvents.registry('item', event => {
	event.create('notsoedible:lead_bar')
	.tooltip('It\'s just a bar of lead. Why would you eat this?')
	.food(food => {
		food
		.hunger(3)
		.saturation(1)
		.effect('minecraft:wither', 100, 0, 1)
		.effect('minecraft:hunger', 1200, 0, 1)
	})

event.create('notsoedible:uranium_bar')
	.tooltip('...seriously?')
	.food(food => {
		food
		.hunger(4)
		.saturation(1)
		.effect('minecraft:wither', 100, 1, 1)
		.effect('minecraft:hunger', 1200, 1, 1)
		.effect('alexscaves:irradiated', 6000, 5, 1)
	})
})