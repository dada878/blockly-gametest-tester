import { world } from 'mojang-minecraft'
import * as ui from 'mojang-minecraft-ui'
function ShopC(player) {
  let fm2 = new ui.ModalFormData()
  fm2.title($$$ :)
  fm2.slider('-> Amount :',1,128,1,1)
  fm2.toggle('Add/Remove', true)
  fm2.show(player).then(response => {
    if (response.formValues[0]){
     if (response.formValues[1] == true){
       dimension.runCommand(give ${player} glass ${response.formValues[0]})
     }
     else if (response.formValues[1] == false) {
       dimension.runCommand(clear ${player} glass ${response.formValues[0]}) 
     }

    }
  })
}

function Shop(player) {
  let fm1 = new ui.ActionFormData()
  fm1.title('testing - Shop')
  fm1.button('testing - Glass','textures/blocks/glass.png')
  fm1.show(player).then(response => {
    if (!response) {return}
    if (response.selection == 0) {
      ShopC(player)
    }
  })
}

function Mainfm(player){
  const fm = new ui.ActionFormData()
  fm.title('testing - Menu')
  fm.body(testing - $fm_body?)
  fm.button('testing - Shop','textures/ui/sidebar_icons/marketplace.png')
  fm.button('testing - Nothing Here','textures/gui/newgui/anvil-crossout.png')
  fm.show(player).then(response => {
    if (!response){return}
    switch (response.selection){
      case 0:
        Shop(player)
        break;
      case 1:
        break;
    }
  })
}

world.events.itemUse.subscribe(ev =>{
  const dimension = world.getDimension('overworld')
  var pl = ev.source
  var item = ev.item
  if (item.id == 'minecraft:book'){
    Mainfm(pl)
  }
})
all is worked but 'runCommand' not work
i turned on Creator Mode for see Bug but i don't see everything
;-; can u help me?