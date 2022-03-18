CustomRenderer = function(name) {
    CustomRenderer.superClass_.constructor.call(this, name);
};
Blockly.utils.object.inherits(CustomRenderer,Blockly.blockRendering.Renderer);

CustomConstantsProvider = function() {
    // Set up all of the constants from the base provider.
    CustomConstantsProvider.superClass_.constructor.call(this);
  
    // Override a few properties.
    /**
     * The width of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_WIDTH = 20;
  
    /**
     * The height of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_HEIGHT = 5;
  
    /**
     * Rounded corner radius.
     * @type {number}
     * @override
     */
    this.CORNER_RADIUS = 10;
    /**
     * The height of the puzzle tab used for input and output connections.
     * @type {number}
     * @override
     */
    this.TAB_HEIGHT = 15;

    
};
Blockly.utils.object.inherits(CustomConstantsProvider,Blockly.blockRendering.ConstantProvider);

CustomRenderer.prototype.makeConstants_ = function() {
    return new CustomConstantsProvider();
};

//FIXME:以下兩段造函式成CONSOLE持續報錯qwq
//https://blocklycodelabs.dev/codelabs/custom-renderer/index.html?index=..%2F..index#4

// Blockly.blockRendering.ConstantProvider.prototype.init = function() {
//     /**
//      * An object containing sizing and path information about notches.
//      * @type {!Object}
//      */
//     this.NOTCH = this.makeNotch();
  
//     /**
//      * An object containing sizing and path information about puzzle tabs.
//      * @type {!Object}
//      */
//     this.PUZZLE_TAB = this.makePuzzleTab();
  
//     // Additional code has been removed for brevity.
//   };

// /**
//  * Get an object with connection shape and sizing information based on the type
//  * of the connection.
//  * @param {!Blockly.RenderedConnection} connection The connection to find a
//  *     shape object for
//  * @return {!Object} The shape object for the connection.
//  * @package
//  */
//  Blockly.blockRendering.ConstantProvider.prototype.shapeFor = function(
//     connection) {
//   switch (connection.type) {
//     case Blockly.INPUT_VALUE:
//     case Blockly.OUTPUT_VALUE:
//       return this.PUZZLE_TAB;
//     case Blockly.PREVIOUS_STATEMENT:
//     case Blockly.NEXT_STATEMENT:
//       return this.NOTCH;
//     default:
//       throw Error('Unknown connection type');
//   }
// };

Blockly.blockRendering.register('custom_renderer', CustomRenderer);