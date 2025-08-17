ServerEvents.recipes(event => {

    //"chamomile" tea, as per Roxi request. Enjoy :3
  	event.recipes.farmersdelight.cooking(
	    ['minecraft:oxeye_daisy','minecraft:oxeye_daisy','minecraft:sugar'],
	    'liladditions:oxeye_tea', // output
	    1, // exp
	    200, // cookTime
	    'minecraft:glass_bottle', // container
	)

})