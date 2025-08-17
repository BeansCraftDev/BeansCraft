ServerEvents.recipes(event => {


    

    event.remove({ type: 'immersiveengineering:refinery' })
    
    event.custom({"type":"immersiveengineering:bottling_machine","fluid":{"amount":500,"tag":"forge:crude_oil"},"input":{"item":"immersiveengineering:mold_plate"},"results":[{"item":"mekanism:hdpe_sheet"},{"item":"immersiveengineering:mold_plate"}]})
    
    event.custom({"type":"immersiveengineering:generator_fuel","burnTime":500,"fluidTag":"forge:gasoline"})
    event.custom({"type":"immersiveengineering:generator_fuel","burnTime":350,"fluidTag":"forge:diesel"})

    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst":
        {
            "tag":"forge:dusts/saltpeter"
        },
        "energy":80,
        "input0":
        {
            "amount":8,
            "tag":"forge:plantoil"
        },
        "input1":
        {
            "amount":8,
            "tag":"forge:bioethanol"
        },
        "result":
        {
            "amount":32,
            "fluid":"createdieselgenerators:biodiesel"
        }
    })

    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst":
        {
            "tag":"forge:dusts/saltpeter"
        },
        "energy":80,
        "input0":
        {
            "amount":10,
            "tag":"forge:oxygen"
        },
        "input1":
        {
            "amount":10,
            "tag":"forge:hydrogen"
        },
        "result":
        {
            "amount":5,
            "fluid":"ad_astra:fuel"
        }
    })

    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst":
        {
            "tag":"forge:dusts/saltpeter"
        },
        "energy":80,
        "input0":
        {
            "amount":5,
            "tag":"forge:oxygen"
        },
        "input1":
        {
            "amount":20,
            "tag":"forge:diesel"
        },
        "result":
        {
            "amount":5,
            "fluid":"ad_astra:fuel"
        }
    })
    
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst":
        {
            "tag":"forge:dusts/saltpeter"
        },
        "energy":200,
        "input0":
        {
            "amount":8,
            "tag":"forge:crude_oil"
        },
        "result":
        {
            "amount":16,
            "fluid":"createdieselgenerators:diesel"
        }
    })

    event.custom({
        "type": "immersiveengineering:refinery",
        "energy":250,
        "input0":
        {
            "amount":8,
            "tag":"forge:crude_oil"
        },
        "result":
        {
            "amount":16,
            "fluid":"createdieselgenerators:gasoline"
        }
    })
    event.custom({
        "type":"immersiveengineering:refinery",
        "catalyst":
        {
            "tag":"forge:plates/silver"
        },
        "energy":120,
        "input0":
        {
            "amount":8,
            "tag":"forge:bioethanol"
        },
        "result":
        {
            "amount":8,
            "fluid":"immersiveengineering:acetaldehyde"
        }
    })
    event.custom({
        "type":"immersiveengineering:refinery",
        "energy":240,
        "input0":
        {
            "amount":12,
            "tag":"forge:acetaldehyde"
        },
        "input1":
        {
            "amount":8,
            "tag":"forge:creosote"
        },
        "result":
        {
            "amount":8,
            "fluid":"immersiveengineering:phenolic_resin"
        }
    })
    event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"s":{"item":"createaddition:spool"},"w":{"item":"immersiveengineering:wire_steel"}},"pattern":[" w ","wsw"," w "],"result":{"count":4,"item":"immersiveengineering:wirecoil_structure_steel"},"show_notification":true})
    event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"s":{"item":"createaddition:spool"},"w":{"item":"immersiveengineering:hemp_fiber"}},"pattern":[" w ","wsw"," w "],"result":{"count":4,"item":"immersiveengineering:wirecoil_structure_rope"},"show_notification":true})
    event.custom({"type":"immersiveengineering:turn_and_copy","category":"misc","key":{"a":{"tag":"forge:wires/aluminum"},"s":{"item":"createaddition:spool"},"w":{"tag":"forge:wires/steel"}},"pattern":[" w ","asa"," w "],"quarter_turn":true,"result":{"count":4,"item":"immersiveengineering:wirecoil_steel"},"show_notification":true})
    event.custom({"type":"immersiveengineering:turn_and_copy","category":"misc","key":{"a":{"tag":"forge:dusts/redstone"},"s":{"item":"createaddition:spool"},"w":{"tag":"forge:wires/aluminum"}},"pattern":[" w ","asa"," w "],"quarter_turn":true,"result":{"count":4,"item":"immersiveengineering:wirecoil_redstone"},"show_notification":true})
    event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"s":{"item":"createaddition:spool"},"w":{"tag":"forge:wires/electrum"}},"pattern":[" w ","wsw"," w "],"result":{"count":4,"item":"immersiveengineering:wirecoil_electrum"},"show_notification":true})
    event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"s":{"item":"createaddition:spool"},"w":{"tag":"forge:wires/copper"}},"pattern":[" w ","wsw"," w "],"result":{"count":4,"item":"immersiveengineering:wirecoil_copper"},"show_notification":true})
})

