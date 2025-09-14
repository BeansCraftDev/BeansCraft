	
ItemEvents.modification(event => {
  event.modify('createdieselgenerators:gasoline_bucket', item => {
    item.burnTime = 48000 
  })



  event.modify('createdieselgenerators:crude_oil_bucket', item => {
    item.burnTime = 9600
  })



  event.modify('createdieselgenerators:biodiesel_bucket', item => {
    item.burnTime = 24000
  })



  event.modify('createdieselgenerators:diesel_bucket', item => {
    item.burnTime = 48000
  })
})
