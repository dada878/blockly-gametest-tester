CustomRenderer = function(name) {
    CustomRenderer.superClass_.constructor.call(this, name);
  };
  Blockly.utils.object.inherits(CustomRenderer,
      Blockly.blockRendering.Renderer);


      Blockly.blockRendering.register('custom_renderer', CustomRenderer);


      Blockly.inject('blocklyDiv', {
        renderer: 'custom_renderer'
      }
    );