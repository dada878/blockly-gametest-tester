Blockly.Blocks['gametest_get_entity_id'] = {
    init: function () {
        this.appendValueInput("ENTITY")
            .setCheck(null)
            .appendField("取得ID");
        this.setOutput(true, "String");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_get_entity_id'] = function (block) {
    const value_entity = Blockly.JavaScript.valueToCode(block, 'ENTITY', Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${value_entity}.id`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_on_hit_entity'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("當實體攻擊");
        this.appendValueInput("ATTACKER")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("攻擊實體");
        this.appendValueInput("TARGET")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("受擊實體");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_on_hit_entity'] = function (block) {
    const value_attacker = Blockly.JavaScript.valueToCode(block, 'ATTACKER', Blockly.JavaScript.ORDER_ATOMIC);
    const value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    const code = `
      world.afterEvents.entityHitEntity.subscribe((e) => {
        ${value_attacker} = e.damagingEntity;
        ${value_target} = e.hitEntity;
        if (!${value_attacker}.id) return;
        ${statements_code}
      });
            `;
    return code;
};
Blockly.Blocks['gametest_on_player_join'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("當玩家加入");
        this.appendValueInput("PLAYER")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("玩家");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_on_player_join'] = function (block) {
    const value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    const code = `
      world.afterEvents.playerJoin.subscribe((e) => {
        ${value_player} = e.playerName;
        ${statements_code}
      });
            `;
    return code;
};
Blockly.Blocks['gametest_on_player_leave'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("當玩家退出");
        this.appendValueInput("PLAYER")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("玩家名稱");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_on_player_leave'] = function (block) {
    const value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    const code = `
      world.afterEvents.PlayerLeave.subscribe((e) => {
        ${value_player} = e.playerName;
        ${statements_code}
      });
            `;
    return code;
};
Blockly.Blocks['gametest_on_block_place'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("當方塊被玩家放置");
        this.appendValueInput("PLAYER")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("玩家");
        this.appendValueInput("BLOCK")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("方塊");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_on_block_place'] = function (block) {
    const value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    const value_block = Blockly.JavaScript.valueToCode(block, 'BLOCK', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    const code = `
      world.afterEvents.playerPlaceBlock.subscribe((e) => {
        ${value_player} = e.player;
        ${value_block} = e.extends;
        ${statements_code}
      });
            `;
    return code;
};
Blockly.Blocks['gametest_on_block_break'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("當方塊被玩家破壞");
        this.appendValueInput("PLAYER")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("玩家");
        this.appendValueInput("BLOCK")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("方塊");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_on_block_break'] = function (block) {
    const value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    const value_block = Blockly.JavaScript.valueToCode(block, 'BLOCK', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    const code = `
      world.afterEvents.playerBreakBlock.subscribe((e) => 
        ${value_player} = e.player;
        ${value_block} = e.extends;
        ${statements_code}
      });
            `;
    return code;
};
Blockly.Blocks['gametest_on_tick'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("當遊戲刻運行");
        this.appendStatementInput("CODE")
            .setCheck(null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_on_tick'] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    var code = `
      system.runInterval(() => {
      ${statements_code}
      });
        `;
    return code;
};
Blockly.Blocks['gametest_on_load'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("當行為包載入完畢");
        this.appendStatementInput("CODE")
            .setCheck(null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_on_load'] = function (block) {
    const statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    return statements_code;
};
Blockly.Blocks['get_substring'] = {
    init: function () {
        this.appendValueInput("STRING")
            .setCheck("String")
            .appendField("取得字串");
        this.appendValueInput("START")
            .setCheck("Number")
            .appendField("的第");
        this.appendValueInput("END")
            .setCheck("Number")
            .appendField("到");
        this.appendDummyInput()
            .appendField("個字");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['get_substring'] = function (block) {
    var string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
    var start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
    var end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${string}.substr(${start},${end})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['lib_index_string'] = {
    init: function () {
        this.appendValueInput("STRING")
            .setCheck("String")
            .appendField("取得字串");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("的第");
        this.appendDummyInput()
            .appendField("個文字");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['lib_index_string'] = function (block) {
    var value_string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_string}[${value_index}-1]`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['is_str_in_str'] = {
    init: function () {
        this.appendValueInput("STRING")
            .setCheck("String")
            .appendField("字串");
        this.appendValueInput("TARGET")
            .setCheck("String")
            .appendField("內是否包含");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['is_str_in_str'] = function (block) {
    var value_string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `${value_string}.indexOf(${value_target}) > -1`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['lib_while'] = {
    init: function () {
        this.appendValueInput("IF")
            .setCheck("Boolean")
            .appendField("重複直到");
        this.appendStatementInput("CODE")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['lib_while'] = function (block) {
    var value_if = Blockly.JavaScript.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    var code = `while(!${value_if}) {\n${statements_code}\n}\n`;
    return code;
};
Blockly.Blocks['gametest_getitemid'] = {
    init: function () {
        this.appendValueInput("ITEM")
            .setCheck("Item")
            .appendField("取得物品ID");
        this.setOutput(true, "String");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_getitemid'] = function (block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.id`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_getitemname'] = {
    init: function () {
        this.appendValueInput("ITEM")
            .setCheck("Item")
            .appendField("取得物品名稱");
        this.setOutput(true, "String");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_getitemname'] = function (block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.nameTag`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_getitemamount'] = {
    init: function () {
        this.appendValueInput("ITEM")
            .setCheck("Item")
            .appendField("取得物品堆疊數量");
        this.setOutput(true, "Number");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_getitemamount'] = function (block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.amount`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_getitemdata'] = {
    init: function () {
        this.appendValueInput("ITEM")
            .setCheck(null)
            .appendField("取得資料值");
        this.setOutput(true, "Number");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_getitemdata'] = function (block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_item}.data`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_onitemuse'] = {
    init: function () {
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
Blockly.JavaScript['gametest_onitemuse'] = function (block) {
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
    world.afterEvents.ItemCompleteUse.subscribe((e) => 
    ${cancel}
    ${value_item} = e.itemStack;
    ${value_player} = e.source;
    ${statements_do}
    });
      `;
    return code;
};
Blockly.Blocks['gametest_getplayername'] = {
    init: function () {
        this.appendValueInput("PLAYER")
            .setCheck("Player")
            .appendField("取得實體名稱");
        this.setOutput(true, "String");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_getplayername'] = function (block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_player}.nameTag`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_get_player_real_name'] = {
    init: function () {
        this.appendValueInput("PLAYER")
            .setCheck("Player")
            .appendField("取得玩家真實名稱");
        this.setOutput(true, "String");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_get_player_real_name'] = function (block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_player}.name`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_get_health'] = {
    init: function () {
        this.appendValueInput("ENTITY")
            .setCheck(null)
            .appendField("取得實體血量");
        this.setOutput(true, "Number");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_get_health'] = function (block) {
    const value_entity = Blockly.JavaScript.valueToCode(block, 'ENTITY', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_entity}.getComponent('minecraft:health').current`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_check_block_is_air'] = {
    init: function () {
        this.appendValueInput("BLOCK")
            .setCheck(null)
            .appendField("方塊是否為空氣");
        this.setOutput(true, "Boolean");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_check_block_is_air'] = function (block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'BLOCK', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${value_player}.isEmpty`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_get_entity_pos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["X座標", "location.x"], ["Y座標", "location.y"], ["Z座標", "location.z"]]), "POS");
        this.appendValueInput("ENTITY")
            .setCheck("Player")
            .appendField("取得座標");
        this.setOutput(true, "Number");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_get_entity_pos'] = function (block) {
    let dropdown_pos = block.getFieldValue('POS');
    let value_player = Blockly.JavaScript.valueToCode(block, 'ENTITY', Blockly.JavaScript.ORDER_ATOMIC);

    let code = `${value_player}.${dropdown_pos}`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_getplayersneak'] = {
    init: function () {
        this.appendValueInput("PLAYER")
            .setCheck("Player")
            .appendField("取得蹲下狀態");
        this.setOutput(true, "Boolean");
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_getplayersneak'] = function (block) {
    let value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);

    let code = `${value_player}.isSneaking`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['gametest_onchat'] = {
    init: function () {
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
Blockly.JavaScript['gametest_onchat'] = function (block) {
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
  world.beforeEvents.chatSend.subscribe((e) => {
    ${cancel}
    ${value_player} = e.sender;
    ${value_message} = e.message;
    ${statements_do}
  });
        `;
    return code;
};
Blockly.Blocks['gametest_run_command'] = {
    init: function () {
        this.appendValueInput("COMMAND")
            .setCheck("String")
            .appendField("執行指令在")
            .appendField(new Blockly.FieldDropdown([["主世界", "overworld"], ["地獄", "nether"], ["終界", "the end"]]), "DIMENSION");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(50);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['gametest_run_command'] = function (block) {
    let dropdown_dimension = block.getFieldValue('DIMENSION');
    let value_command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_ATOMIC);

    let code = `world.getDimension("${dropdown_dimension}").runCommand(${value_command});\n`;
    return code;
};
Blockly.Blocks['gametest_tellraw_command'] = {
    init: function () {
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
Blockly.JavaScript['gametest_tellraw_command'] = function (block) {
    let value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
    let okay_message = `${value_message}`.replaceAll('\"', "''").replaceAll('\\\\', "\\")
    // let outputTellraw = 'tellraw @a {"rawtext":[{"text":"+'+okay_message+'+"}]}'
    let code = `log(${okay_message})\n`;
    return code;
};
Blockly.Blocks['gametest_gui_actionform'] = {
    init: function () {
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
Blockly.JavaScript['gametest_gui_actionform'] = function (block) {
    var variable_player = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Variables.NAME_TYPE);
    var value_select = Blockly.JavaScript.valueToCode(block, 'SELECT', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '...;\n';
    return code;
};
Blockly.Blocks['gametest_kill_player'] = {
    init: function () {
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
Blockly.JavaScript['gametest_kill_player'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_name}.kill()`
    return code;
};
Blockly.Blocks['gametest_add_tag'] = {
    init: function () {
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
Blockly.JavaScript['gametest_add_tag'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `system.run(() => {
        ${value_player}.addTag(${value_tag})
    })
    `
    return code;
};
Blockly.Blocks['gametest_remove_tag'] = {
    init: function () {
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
Blockly.JavaScript['gametest_remove_tag'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `system.run(() => {
    ${value_player}.removeTag(${value_tag})
    })`
    return code;
};
Blockly.Blocks['gametest_has_tag'] = {
    init: function () {
        this.appendValueInput("PLAYER")
            .setCheck("Player")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("檢查實體");
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
Blockly.JavaScript['gametest_has_tag'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_player}.hasTag(${value_tag})`
    return [code, Blockly.JavaScript.ORDER_NONE];
};
