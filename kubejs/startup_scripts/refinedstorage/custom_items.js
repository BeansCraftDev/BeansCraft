StartupEvents.registry('item', event => {
	event.create('refinedstorage:incomplete_advanced_processor', 'create:sequenced_assembly')
	event.create('refinedstorage:incomplete_construction_core', 'create:sequenced_assembly')
	event.create('refinedstorage:incomplete_destruction_core', 'create:sequenced_assembly')
	event.create('refinedstorage:incomplete_improved_processor', 'create:sequenced_assembly')
})