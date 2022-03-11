//JS document
window.onbeforeunload = () => saveBlocks();
window.onload = () => importBlocks();
//defined anything
var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(
  blocklyDiv,{
    toolbox: document.getElementById('toolbox')
  }
);



function blocks_init(Blockly) {   
  Blockly.Blocks['gametest_getitemid'] = {
    init: function() {
      this.appendValueInput("ITEM")
          .setCheck("Item")
          .appendField("取得物品ID");
      this.setOutput(true, "String");
      this.setColour(80);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['gametest_getitemid'] = function(block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.id`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['gametest_getitemname'] = {
    init: function() {
      this.appendValueInput("ITEM")
          .setCheck("Item")
          .appendField("取得物品名稱");
      this.setOutput(true, "String");
      this.setColour(80);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['gametest_getitemname'] = function(block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.nameTag`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['gametest_getitemamount'] = {
    init: function() {
      this.appendValueInput("ITEM")
          .setCheck("Item")
          .appendField("取得物品堆疊數量");
      this.setOutput(true, "String");
      this.setColour(80);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gametest_getitemamount'] = function(block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.amount`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['gametest_getitemdata'] = {
    init: function() {
      this.appendValueInput("ITEM")
          .setCheck("Item")
          .appendField("取得物品數據值");
      this.setOutput(true, "String");
      this.setColour(80);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gametest_getitemdata'] = function(block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.data`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['gametest_onitemuse'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("當玩家使用物品");
      this.appendValueInput("ITEM")
          .setCheck("Item")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("物品");
      this.appendValueInput("PLAYER")
          .setCheck("Player")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("玩家");
      this.appendValueInput("CANCEL")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("是否攔截");
      this.appendStatementInput("DO")
          .setCheck(null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['gametest_onitemuse'] = function(block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    let value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let value_cancel = Blockly.JavaScript.valueToCode(block, 'CANCEL', Blockly.JavaScript.ORDER_ATOMIC);
    let statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    
    let cancel
  
    if (value_cancel) {
        cancel = "e.cancel = true"
    }
    else {
      cancel = "e.cancel = false"
    }
  
    let code = `
  Minecraft.world.events.beforeItemUse.subscribe(e => {
  ${cancel}
  ${value_item} = e.item;
  ${value_player} = e.source;
  ${statements_do}
  });
    `;
    return code;
    };

  Blockly.Blocks['gametest_getplayername'] = {
      init: function() {
      this.appendValueInput("PLAYER")
          .setCheck("Player")
          .appendField("取得玩家名稱");
      this.setOutput(true, "String");
      this.setColour(80);
  this.setTooltip("");
  this.setHelpUrl("");
      }
  };
  
  Blockly.Blocks['gametest_getplayerpos'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["X座標","location.x"], ["Y座標","location.y"], ["Z座標","location.z"]]), "POS");
      this.appendValueInput("PLAYER")
          .setCheck("Player")
          .appendField("取得玩家座標");
      this.setOutput(true, "Number");
      this.setColour(80);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gametest_getplayersneak'] = {
    init: function() {
    this.appendValueInput("PLAYER")
        .setCheck("Player")
        .appendField("取得蹲下狀態");
    this.setOutput(true, "Boolean");
    this.setColour(80);
this.setTooltip("");
this.setHelpUrl("");
    }
};

  Blockly.JavaScript['gametest_getplayername'] = function(block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_player}.nameTag`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['gametest_getplayersneak'] = function(block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    let code = `${value_player}.isSneaking`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['gametest_getplayerpos'] = function(block) {
    let dropdown_pos = block.getFieldValue('POS');
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    let code = `${value_player}.${dropdown_pos}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['gametest_onchat'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("當玩家傳送訊息");
      this.appendValueInput("PLAYER")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("玩家");
      this.appendValueInput("MESSAGE")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("訊息");
      this.appendValueInput("CANCEL")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("是否攔截");
      this.appendStatementInput("DO")
          .setCheck(null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['gametest_onchat'] = function(block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    let value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
    let value_cancel = Blockly.JavaScript.valueToCode(block, 'CANCEL', Blockly.JavaScript.ORDER_ATOMIC);
    let statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
      
    let cancel

      if (value_cancel) {
          cancel = "e.cancel = true"
      }
      else {
        cancel = "e.cancel = false"
      }
  
      let code = `
Minecraft.world.events.beforeChat.subscribe(e => {
  ${cancel}
  ${value_player} = e.sender;
  ${value_message} = e.message;
  ${statements_do}
});
      `;
      return code;
      };
  
  //執行指令
  Blockly.Blocks['gametest_run_command'] = {
      init: function() {
          this.appendValueInput("COMMAND")
              .setCheck("String")
              .appendField("執行指令在")
              .appendField(new Blockly.FieldDropdown([["主世界","overworld"], ["地獄","nether"], ["終界","the end"]]), "DIMENSION");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(50);
      this.setTooltip("");
      this.setHelpUrl("");
  }
  };
  Blockly.JavaScript['gametest_run_command'] = function(block) {
      let dropdown_dimension = block.getFieldValue('DIMENSION');
      let value_command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      let code = `Minecraft.world.getDimension("${dropdown_dimension}").runCommand(${value_command});\n`;
      return code;
  };
  Blockly.Blocks['gametest_tellraw_command'] = {
    init: function() {
        this.appendValueInput("MESSAGE")
            .setCheck("String")
            .appendField("發送tellraw訊息")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
}
};
Blockly.JavaScript['gametest_tellraw_command'] = function(block) {
    let value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
    let okay_message = `${value_message}`.replaceAll('\"',"''").replaceAll('\\\\',"\\")
    // let outputTellraw = 'tellraw @a {"rawtext":[{"text":"+'+okay_message+'+"}]}'
    let code = `log(${okay_message})\n`;
    return code;
};
  Blockly.Blocks['gametest_gui_actionform'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("對")
          .appendField(new Blockly.FieldVariable("item"), "PLAYER")
          .appendField("送出自訂義選單");
      this.appendValueInput("SELECT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("選項編號");
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['gametest_gui_actionform'] = function(block) {
    var variable_player = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Variables.NAME_TYPE);
    var value_select = Blockly.JavaScript.valueToCode(block, 'SELECT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.Blocks['gametest_kill_player'] = {
    init: function() {
      this.appendValueInput("PLAYER")
          .setCheck("Player")
          .appendField("殺死玩家");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(50);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gametest_kill_player'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_name}.kill()`
    return code;
  };
  Blockly.Blocks['gametest_add_tag'] = {
    init: function() {
      this.appendValueInput("PLAYER")
          .setCheck("Player")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("對玩家");
      this.appendValueInput("TAG")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("添加標籤");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(50);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['gametest_add_tag'] = function(block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_player}.addTag(${value_tag})`
    return code;
  };

  Blockly.Blocks['gametest_remove_tag'] = {
    init: function() {
      this.appendValueInput("PLAYER")
          .setCheck("Player")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("對玩家");
      this.appendValueInput("TAG")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("移除標籤");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(50);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['gametest_remove_tag'] = function(block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_player}.removeTag(${value_tag})`
    return code;
  };

  Blockly.Blocks['gametest_has_tag'] = {
    init: function() {
      this.appendValueInput("PLAYER")
          .setCheck("Player")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("玩家");
      this.appendValueInput("TAG")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("是否擁有標籤");
      this.setOutput(true, "Boolean");
      this.setColour(80);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['gametest_has_tag'] = function(block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_player}.hasTag(${value_tag})`
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}

blocks_init(Blockly)

//workspace
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  //FIXME:下面這段是做啥的
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);


