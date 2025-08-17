JEIEvents.hideItems(event => {

    event.hide('immersiveengineering:ingot_steel')
    event.hide('createaddition:connector')
    event.hide('createaddition:small_light_connector')
    event.hide('createaddition:large_connector')
    event.hide('createaddition:copper_spool')
    event.hide('createaddition:gold_spool')
    event.hide('createaddition:electrum_spool')
    event.hide('createaddition:festive_spool')
    event.hide('ad_astra:fuel_refinery')
    event.hide('ad_astra:etrionic_blast_furnace')
    event.hide('ad_astra:water_pump')
    event.hide('ad_astra:coal_generator')

    event.hide('ad_astra:fluid_pipe_duct')
    event.hide('ad_astra:cable_duct')
    event.hide('ad_astra:steel_cable')
    event.hide('ad_astra:desh_cable')
    event.hide('ad_astra:ostrum_fluid_pipe')
    event.hide('ad_astra:desh_fluid_pipe')


    event.hide('createdieselgenerators:ethanol_bucket')
    event.hide('immersiveengineering:ethanol_bucket')
    event.hide('immersiveengineering:biodiesel_bucket')

    //Hiding the extra oils
    event.hide('immersiveengineering:plantoil_bucket')
    event.hide('createdieselgenerators:plant_oil_bucket')
    event.hide('ad_astra:oil_bucket')

})
JEIEvents.hideFluids(event => {
    event.hide('createdieselgenerators:ethanol')
    event.hide('immersiveengineering:ethanol')
    event.hide('immersiveengineering:biodiesel')
    
    //hiding the extra oils
    event.hide('immersiveengineering:plantoil')
    event.hide('createdieselgenerators:plant_oil')
    event.hide('ad_astra:oil')

  })