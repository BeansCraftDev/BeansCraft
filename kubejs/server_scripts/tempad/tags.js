ServerEvents.tags('fluid', event => {
    event.add('tempad:tempad_liquid_fuel', 'mekanismgenerators:fusion_fuel')
    event.remove('tempad:tempad_liquid_fuel',"minecraft:lava")
})