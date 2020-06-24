// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"button/editor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var URLInputButton = wp.editor.URLInputButton;
var URLInput = wp.editor.URLInput;
var PlainText = wp.editor.PlainText;
var RichText = wp.editor.RichText;

var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  //console.info(props);
  return React.createElement("div", {
    className: "wsu-c-button__wrapper"
  }, React.createElement(RichText, {
    tagName: "div",
    className: 'wsu-c-button',
    value: attributes.text,
    onChange: function onChange(text) {
      return setAttributes({
        text: text
      });
    },
    multiline: 'false',
    allowedFormats: []
  }), React.createElement(URLInput, {
    className: className,
    value: attributes.url,
    onChange: function onChange(url, post) {
      return setAttributes({
        url: url
      });
    }
  }));
};

var _default = edit;
exports.default = _default;
},{}],"button/editor.scss":[function(require,module,exports) {

},{}],"button/index.js":[function(require,module,exports) {
"use strict";

var _editor = _interopRequireDefault(require("./editor"));

require("./editor.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var URLInputButton = wp.editor.URLInputButton;
registerBlockType("wsuwp/button", {
  title: "Button",
  category: "content",
  attributes: {
    url: {
      type: 'string'
    },
    text: {
      type: 'string',
      default: 'Button Text'
    }
  },
  edit: _editor.default
});
},{"./editor":"button/editor.js","./editor.scss":"button/editor.scss"}],"post-title/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var URLInputButton = wp.editor.URLInputButton;
var URLInput = wp.editor.URLInput;
var PlainText = wp.editor.PlainText;
var RichText = wp.editor.RichText;

var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return React.createElement("h1", {
    className: "wsu-c-post-title"
  }, "[Post Title Placeholder]");
};

var _default = edit;
exports.default = _default;
},{}],"post-title/index.js":[function(require,module,exports) {
"use strict";

var _edit = _interopRequireDefault(require("./edit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var URLInputButton = wp.editor.URLInputButton;
//import save from "./save";
registerBlockType("wsuwp/post-title", {
  title: "Post Title",
  category: "content",
  attributes: {},
  edit: _edit.default
});
},{"./edit":"post-title/edit.js"}],"heading/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var URLInputButton = wp.editor.URLInputButton;
var PlainText = wp.editor.PlainText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;

var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var level = attributes.level;

  function setLevel(event) {
    var selected = event.target.querySelector('option:checked');
    setAttributes({
      level: selected.value
    });
    event.preventDefault();
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: "General"
  }, React.createElement(SelectControl, {
    label: "Display Style",
    value: attributes.style,
    onChange: function onChange(style) {
      return setAttributes({
        style: style
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Callout',
      value: 'callout'
    }]
  }))), React.createElement("div", {
    className: "wsu-b-heading__wrapper"
  }, React.createElement("form", {
    onSubmit: setLevel,
    className: 'wsu-b-heading__level'
  }, React.createElement("select", {
    value: level,
    onChange: setLevel
  }, React.createElement("option", {
    value: "h2"
  }, "H2"), React.createElement("option", {
    value: "h3"
  }, "H3"), React.createElement("option", {
    value: "h4"
  }, "H4"), React.createElement("option", {
    value: "h5"
  }, "H5"))), React.createElement(RichText, {
    tagName: "h" + attributes.level,
    className: 'wsu-b-heading__text',
    value: attributes.content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    multiline: 'false',
    allowedFormats: [],
    placeholder: 'Heading Here ...'
  })));
};

var _default = edit;
exports.default = _default;
},{}],"heading/index.js":[function(require,module,exports) {
"use strict";

var _edit = _interopRequireDefault(require("./edit"));

require("./editor.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var URLInputButton = wp.editor.URLInputButton;
registerBlockType("wsuwp/heading", {
  title: "Heading",
  category: "content",
  attributes: {
    url: {
      type: 'string'
    },
    content: {
      type: 'string',
      default: ''
    },
    level: {
      type: 'string',
      default: '2'
    },
    style: {
      type: 'string',
      default: 'default'
    }
  },
  edit: _edit.default
});
},{"./edit":"heading/edit.js","./editor.scss":"button/editor.scss"}],"paragraph/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls;
var Fragment = wp.element.Fragment; //import edit from './edit';

var paragraphEditor = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var _props$attributes = props.attributes,
        content = _props$attributes.content,
        alignment = _props$attributes.alignment,
        className = props.className,
        name = props.name;

    var onChangeContent = function onChangeContent(newContent) {
      props.setAttributes({
        content: newContent
      });
    };

    var onChangeAlignment = function onChangeAlignment(newAlignment) {
      props.setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    };

    if (typeof name != 'undefined' && name === 'core/paragraph') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, React.createElement(BlockControls, null, React.createElement(AlignmentToolbar, {
        value: alignment,
        onChange: onChangeAlignment
      })), React.createElement(RichText, {
        className: className,
        style: {
          textAlign: alignment
        },
        tagName: "p",
        onChange: onChangeContent,
        value: content,
        placeholder: 'Start Writing ....'
      }));
    } else {
      return React.createElement(BlockEdit, props);
    }
  };
}, "removeEditor");
var _default = paragraphEditor;
exports.default = _default;
},{}],"paragraph/index.js":[function(require,module,exports) {
"use strict";

var _edit = _interopRequireDefault(require("./edit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//wp.hooks.addFilter( 'editor.BlockListBlock', 'wsuwp/blocks/paragraph', removeEditor );
wp.hooks.addFilter('editor.BlockEdit', 'wsuwp/blocks/paragraph', _edit.default);
wp.hooks.addFilter('blocks.registerBlockType', 'wsuwp/freeform', function (settings, name) {
  if ('core/paragraph' == name) {
    settings.category = 'content';
  }

  return settings;
});
},{"./edit":"paragraph/edit.js"}],"columns/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnsEdit = void 0;
var __ = wp.i18n.__;
var InnerBlocks = wp.editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var BASETEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie nulla mi, ut dapibus ipsum pulvinar a. Pellentesque faucibus aliquam nibh. Pellentesque nec arcu cursus, euismod massa in, ornare urna. Nullam eu neque elementum, rutrum ante a, luctus lectus.';
var formats = {
  default: [['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  single: [['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  halves: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  thirds: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  quarters: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  sidebar_right: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  sidebar_left: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
};

var GetTemplate = function GetTemplate(attributes) {
  var format = 'single';

  if (attributes.hasOwnProperty('format')) {
    format = attributes.format;
    format = format.replace('-', '_');

    if (formats.hasOwnProperty(format)) {
      return formats[format];
    }
  }

  return formats.default;
};

var ColumnsEdit = function ColumnsEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var columnsTemplate = GetTemplate(attributes);
  var format = attributes.format;
  var spacing = [{
    label: 'Default',
    value: 'default'
  }, {
    label: 'None',
    value: 'none'
  }, {
    label: 'Xsmall',
    value: 'xsmall'
  }, {
    label: 'Small',
    value: 'small'
  }, {
    label: 'Medium',
    value: 'medium'
  }, {
    label: 'Medium-large',
    value: 'medium-large'
  }, {
    label: 'Large',
    value: 'large'
  }, {
    label: 'Xlarge',
    value: 'xlarge'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: "General"
  }, React.createElement(SelectControl, {
    label: "Background Color",
    value: attributes.backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes({
        backgroundColor: backgroundColor
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Gray 5%',
      value: 'gray-5'
    }, {
      label: 'Gray 10%',
      value: 'gray-10'
    }]
  })), React.createElement(PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, React.createElement(SelectControl, {
    label: "Padding Before",
    value: attributes.paddingBefore,
    onChange: function onChange(paddingBefore) {
      return setAttributes({
        paddingBefore: paddingBefore
      });
    },
    options: spacing
  }), React.createElement(SelectControl, {
    label: "Padding After",
    value: attributes.paddingAfter,
    onChange: function onChange(paddingAfter) {
      return setAttributes({
        paddingAfter: paddingAfter
      });
    },
    options: spacing
  }), React.createElement(SelectControl, {
    label: "Margin Before",
    value: attributes.marginBefore,
    onChange: function onChange(marginBefore) {
      return setAttributes({
        marginBefore: marginBefore
      });
    },
    options: spacing
  }), React.createElement(SelectControl, {
    label: "Margin After",
    value: attributes.marginAfter,
    onChange: function onChange(marginAfter) {
      return setAttributes({
        marginAfter: marginAfter
      });
    },
    options: spacing
  }))), React.createElement("div", {
    className: 'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + format
  }, React.createElement(InnerBlocks, {
    template: columnsTemplate,
    templateLock: "insert",
    allowedBlocks: ['wsuwp/column']
  })));
};

exports.ColumnsEdit = ColumnsEdit;
},{}],"columns/save.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var InnerBlocks = wp.editor.InnerBlocks;

var ColumnsSave = function ColumnsSave(props) {
  return React.createElement(InnerBlocks.Content, null);
};

var _default = ColumnsSave;
exports.default = _default;
},{}],"columns-single/index.js":[function(require,module,exports) {
"use strict";

var _edit = require("../columns/edit");

var _save = _interopRequireDefault(require("../columns/save"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
registerBlockType("wsuwp/columns-single", {
  title: "Columns: Single",
  category: "layout",
  attributes: {
    format: {
      type: 'string',
      default: 'single'
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    },
    paddingBefore: {
      type: 'string',
      default: 'default'
    },
    paddingAfter: {
      type: 'string',
      default: 'default'
    },
    marginBefore: {
      type: 'string',
      default: 'default'
    },
    marginAfter: {
      type: 'string',
      default: 'default'
    }
  },
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-halves/index.js":[function(require,module,exports) {
"use strict";

var _edit = require("../columns/edit");

var _save = _interopRequireDefault(require("../columns/save"));

var _attributes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
registerBlockType("wsuwp/columns-halves", {
  title: "Columns: Halves",
  icon: React.createElement(SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })),
  category: "layout",
  attributes: (_attributes = {
    format: {
      type: 'string',
      default: 'halves'
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    }
  }, _defineProperty(_attributes, "backgroundColor", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingAfter", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginAfter", {
    type: 'string',
    default: 'default'
  }), _attributes),
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-thirds/index.js":[function(require,module,exports) {
"use strict";

var _edit = require("../columns/edit");

var _save = _interopRequireDefault(require("../columns/save"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
registerBlockType("wsuwp/columns-thirds", {
  title: "Columns: Thirds",
  icon: React.createElement(SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(Path, {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  category: "layout",
  attributes: {
    format: {
      type: 'string',
      default: 'thirds'
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    },
    paddingBefore: {
      type: 'string',
      default: 'default'
    },
    paddingAfter: {
      type: 'string',
      default: 'default'
    },
    marginBefore: {
      type: 'string',
      default: 'default'
    },
    marginAfter: {
      type: 'string',
      default: 'default'
    }
  },
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-quarters/index.js":[function(require,module,exports) {
"use strict";

var _edit = require("../columns/edit");

var _save = _interopRequireDefault(require("../columns/save"));

var _attributes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
registerBlockType("wsuwp/columns-quarters", {
  title: "Columns: Quarters",
  icon: React.createElement(SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M25,14h6v20h-6V14z M23,34h-6 V14h6V34z M9,14h6v20H9V14z M39,34h-6V14h6V34z"
  })),
  category: "layout",
  attributes: (_attributes = {
    format: {
      type: 'string',
      default: 'quarters'
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    }
  }, _defineProperty(_attributes, "backgroundColor", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingAfter", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginAfter", {
    type: 'string',
    default: 'default'
  }), _attributes),
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-sidebar-left/index.js":[function(require,module,exports) {
"use strict";

var _edit = require("../columns/edit");

var _save = _interopRequireDefault(require("../columns/save"));

var _attributes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
registerBlockType("wsuwp/columns-sidebar-left", {
  title: "Columns: Sidebar Left",
  icon: React.createElement(SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
  })),
  category: "layout",
  attributes: (_attributes = {
    format: {
      type: 'string',
      default: 'sidebar-left'
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    }
  }, _defineProperty(_attributes, "backgroundColor", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingAfter", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginAfter", {
    type: 'string',
    default: 'default'
  }), _attributes),
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-sidebar-right/index.js":[function(require,module,exports) {
"use strict";

var _edit = require("../columns/edit");

var _save = _interopRequireDefault(require("../columns/save"));

var _attributes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
registerBlockType("wsuwp/columns-sidebar-right", {
  title: "Columns: Sidebar Right",
  icon: React.createElement(SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
  })),
  category: "layout",
  attributes: (_attributes = {
    format: {
      type: 'string',
      default: 'sidebar-right'
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    }
  }, _defineProperty(_attributes, "backgroundColor", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "paddingAfter", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginBefore", {
    type: 'string',
    default: 'default'
  }), _defineProperty(_attributes, "marginAfter", {
    type: 'string',
    default: 'default'
  }), _attributes),
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"column/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var InnerBlocks = wp.editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;

var editColumn = function editColumn(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var spacing = [{
    label: 'Default',
    value: 'default'
  }, {
    label: 'None',
    value: 'none'
  }, {
    label: 'Xsmall',
    value: 'xsmall'
  }, {
    label: 'Small',
    value: 'small'
  }, {
    label: 'Medium',
    value: 'medium'
  }, {
    label: 'Medium-large',
    value: 'medium-large'
  }, {
    label: 'Large',
    value: 'large'
  }, {
    label: 'Xlarge',
    value: 'xlarge'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: "General"
  }, React.createElement(SelectControl, {
    label: "Background Color",
    value: attributes.backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes({
        backgroundColor: backgroundColor
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Gray 5%',
      value: 'gray-5'
    }, {
      label: 'Gray 10%',
      value: 'gray-10'
    }]
  })), React.createElement(PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, React.createElement(SelectControl, {
    label: "Padding Before",
    value: attributes.paddingBefore,
    onChange: function onChange(paddingBefore) {
      return setAttributes({
        paddingBefore: paddingBefore
      });
    },
    options: spacing
  }), React.createElement(SelectControl, {
    label: "Padding After",
    value: attributes.paddingAfter,
    onChange: function onChange(paddingAfter) {
      return setAttributes({
        paddingAfter: paddingAfter
      });
    },
    options: spacing
  }), React.createElement(SelectControl, {
    label: "Margin Before",
    value: attributes.marginBefore,
    onChange: function onChange(marginBefore) {
      return setAttributes({
        marginBefore: marginBefore
      });
    },
    options: spacing
  }), React.createElement(SelectControl, {
    label: "Margin After",
    value: attributes.marginAfter,
    onChange: function onChange(marginAfter) {
      return setAttributes({
        marginAfter: marginAfter
      });
    },
    options: spacing
  }))), React.createElement("div", {
    className: "wsu-c-column wsu-u-no-js"
  }, React.createElement(InnerBlocks, {
    templateLock: false
  })));
};

var _default = editColumn;
exports.default = _default;
},{}],"column/save.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var InnerBlocks = wp.editor.InnerBlocks;

var saveColumn = function saveColumn(props) {
  console.info(props);
  return React.createElement(InnerBlocks.Content, null);
};

var _default = saveColumn;
exports.default = _default;
},{}],"column/index.js":[function(require,module,exports) {
"use strict";

var _edit = _interopRequireDefault(require("./edit"));

var _save = _interopRequireDefault(require("./save"));

require("./editor.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var TEMPLATE = [['core/heading', {
  width: 33.33
}, []]];
registerBlockType("wsuwp/column", {
  title: "WSU Column",
  parent: ['core/columns-single'],
  category: "common",
  attributes: {
    format: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    },
    paddingBefore: {
      type: 'string',
      default: 'default'
    },
    paddingAfter: {
      type: 'string',
      default: 'default'
    },
    marginBefore: {
      type: 'string',
      default: 'default'
    },
    marginAfter: {
      type: 'string',
      default: 'default'
    }
  },
  edit: _edit.default,
  save: _save.default
});
},{"./edit":"column/edit.js","./save":"column/save.js","./editor.scss":"button/editor.scss"}],"search-bar/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var URLInputButton = wp.editor.URLInputButton;
var URLInput = wp.editor.URLInput;
var PlainText = wp.editor.PlainText;
var RichText = wp.editor.RichText;

var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  //console.info(props);
  return React.createElement("div", {
    className: "wsu-b-editor__search-bar__edit-wrapper"
  }, React.createElement("div", {
    "class": "wsu-b-editor__search-bar"
  }, React.createElement("input", {
    type: "text",
    name: "",
    value: "",
    placeholder: "Search"
  }), React.createElement("input", {
    type: "submit",
    name: "submit",
    value: "Search"
  })));
};

var _default = edit;
exports.default = _default;
},{}],"search-bar/index.js":[function(require,module,exports) {
"use strict";

var _edit = _interopRequireDefault(require("./edit"));

require("./edit.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var URLInputButton = wp.editor.URLInputButton;
registerBlockType("wsuwp/search-bar", {
  title: "Search Bar",
  category: "content",
  attributes: {
    placeholder: {
      type: 'string'
    }
  },
  edit: _edit.default
});
},{"./edit":"search-bar/edit.js","./edit.scss":"button/editor.scss"}],"freeform/index.js":[function(require,module,exports) {
wp.hooks.addFilter('blocks.registerBlockType', 'wsuwp/freeform', function (settings, name) {
  if ('core/freeform' == name) {
    settings.category = 'content';
  }

  return settings;
});
},{}],"../content-hero/editor/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;

var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: "General"
  }, React.createElement(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter title text here.'
  }), React.createElement(TextControl, {
    label: "Subtitle",
    value: attributes.subtitle,
    onChange: function onChange(subtitle) {
      return setAttributes({
        subtitle: subtitle
      });
    },
    placeholder: 'Enter subtitle text here.'
  }), React.createElement(TextControl, {
    label: "Caption",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    placeholder: 'Enter caption text here.'
  }), React.createElement(TextControl, {
    label: "Image Caption",
    value: attributes.imgCaption,
    onChange: function onChange(imgCaption) {
      return setAttributes({
        imgCaption: imgCaption
      });
    },
    placeholder: 'Enter image caption text here.'
  }), React.createElement(TextControl, {
    label: "Button Text",
    value: attributes.buttonText,
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    },
    placeholder: 'Enter button text here.'
  }), React.createElement(BaseControl, {
    label: "Button Link Destination"
  }, React.createElement(URLInput, {
    id: "bannerButtonLink",
    className: 'wsu-c-block__banner__editor__content__link',
    value: attributes.buttonUrl,
    onChange: function onChange(buttonUrl, post) {
      return setAttributes({
        buttonUrl: buttonUrl
      });
    },
    placeholder: 'Button Link',
    isFullWidth: true
  })), React.createElement(SelectControl, {
    label: "Display Style",
    value: '',
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'San Juan',
      value: 'san-juan'
    }, {
      label: 'Olympic',
      value: 'olympic'
    }]
  })), React.createElement(PanelBody, {
    title: "Background",
    initialOpen: false
  }, React.createElement(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, React.createElement(FocalPointPicker, {
    url: attributes.imgSrc,
    dimensions: attributes.imgDimensions,
    value: attributes.imgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        imgFocalPoint: focalPoint
      });
    }
  })), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imgSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return React.createElement(BaseControl, {
        label: "Replace Background Image"
      }, React.createElement(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })))), React.createElement("div", {
    className: "wsu-c-block__banner__wrapper"
  }, React.createElement("div", {
    className: "wsu-c-hero__wrapper"
  }, React.createElement("div", {
    className: "wsu-c-hero__container",
    style: {
      backgroundImage: "url(" + attributes.imgSrc + ")",
      backgroundPositionX: attributes.imgFocalPoint.x * 100 + '%',
      backgroundPositionY: attributes.imgFocalPoint.y * 100 + '%'
    }
  }, React.createElement("div", {
    className: "wsu-c-hero__content"
  }, React.createElement("div", {
    className: "wsu-c-hero__title"
  }, React.createElement(RichText, {
    tagName: "div",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    allowedFormats: []
  })), React.createElement("div", {
    className: "wsu-c-hero__subtitle"
  }, React.createElement(RichText, {
    tagName: "div",
    value: attributes.subtitle,
    onChange: function onChange(subtitle) {
      return setAttributes({
        subtitle: subtitle
      });
    },
    allowedFormats: []
  })), React.createElement("div", {
    className: "wsu-c-hero__caption"
  }, React.createElement(RichText, {
    tagName: "div",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    allowedFormats: [],
    placeholder: 'Enter caption text here.'
  })), React.createElement("div", {
    className: "wsu-c-button wsu-button-sm"
  }, React.createElement("a", {
    href: "#",
    className: "wsu-c-button_link"
  }, React.createElement(RichText, {
    tagName: "div",
    value: attributes.buttonText,
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    },
    allowedFormats: []
  })))), React.createElement("div", {
    className: "wsu-c-hero__image-caption"
  }, React.createElement(RichText, {
    tagName: "span",
    value: attributes.imgCaption,
    onChange: function onChange(imgCaption) {
      return setAttributes({
        imgCaption: imgCaption
      });
    },
    allowedFormats: []
  }))))));
};

var _default = edit;
exports.default = _default;
},{}],"../content-hero/editor/block.js":[function(require,module,exports) {
"use strict";

var _edit = _interopRequireDefault(require("./edit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * WordPress Dependencies
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var URLInputButton = wp.editor.URLInputButton;
var Icon = wp.components.Icon;
registerBlockType("wsuwp/content-hero", {
  title: "Hero Banner",
  category: "content",
  icon: React.createElement(Icon, {
    icon: React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 6V18H22V6H2ZM1 4C0.447715 4 0 4.44772 0 5V19C0 19.5523 0.447716 20 1 20H23C23.5523 20 24 19.5523 24 19V5C24 4.44772 23.5523 4 23 4H1Z",
      fill: "#555D66"
    }), React.createElement("line", {
      x1: "3",
      y1: "8.5",
      x2: "9",
      y2: "8.5",
      stroke: "#555D66"
    }), React.createElement("line", {
      x1: "3",
      y1: "10.5",
      x2: "11",
      y2: "10.5",
      stroke: "#555D66"
    }), React.createElement("line", {
      x1: "3",
      y1: "12.5",
      x2: "11",
      y2: "12.5",
      stroke: "#555D66"
    }), React.createElement("line", {
      x1: "3",
      y1: "15",
      x2: "8",
      y2: "15",
      stroke: "#555D66",
      strokeWidth: "2"
    }), React.createElement("g", {
      clipPath: "url(#clip0)"
    }, React.createElement("path", {
      d: "M19.8962 14.6532L18.4399 13.0626H18.9982C19.1625 13.0626 19.3078 12.9747 19.377 12.833C19.4463 12.6917 19.4235 12.5296 19.3173 12.4103L17.893 10.8126H18.4197C18.5855 10.8126 18.735 10.7186 18.7999 10.5734C18.8641 10.4305 18.8338 10.2642 18.7226 10.1501L16.7125 8.085C16.6026 7.97162 16.3975 7.97162 16.2874 8.085L14.2771 10.1501C14.1659 10.2642 14.1358 10.4305 14.1998 10.5734C14.2647 10.7186 14.4143 10.8126 14.5802 10.8126H15.1069L13.6824 12.4106C13.5765 12.5298 13.5537 12.6917 13.6228 12.8332C13.6921 12.9747 13.8372 13.0626 14.0016 13.0626H14.56L13.1037 14.6532C12.9943 14.7726 12.9695 14.9361 13.0388 15.0797C13.1071 15.2212 13.2575 15.3126 13.4218 15.3126H15.9166V15.7424L15.3644 16.5932C15.2675 16.7802 15.4086 17.0003 15.6253 17.0003H17.3746C17.5913 17.0003 17.7324 16.7802 17.6354 16.5932L17.0833 15.7424V15.3126H19.5781C19.7424 15.3126 19.8927 15.2212 19.9611 15.0797C20.0304 14.9361 20.0056 14.7726 19.8962 14.6532Z",
      fill: "#555D66"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "clip0"
    }, React.createElement("rect", {
      x: "13",
      y: "8",
      width: "7",
      height: "9",
      fill: "white"
    }))))
  }),
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    titleTag: {
      type: 'string',
      default: ''
    },
    subtitle: {
      type: 'string',
      default: ''
    },
    caption: {
      type: 'string',
      default: ''
    },
    buttonText: {
      type: 'string',
      default: ''
    },
    buttonUrl: {
      type: 'string',
      default: ''
    },
    imageCaption: {
      type: 'string',
      default: ''
    },
    imageCaptionUrl: {
      type: 'string',
      default: ''
    },
    imgSrc: {
      type: 'string',
      default: ''
    },
    imgFocalPoint: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    imgDimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    style: {
      type: 'string',
      default: 'default'
    },
    verticalSpacing: {
      type: 'string',
      default: 'default'
    }
  },
  edit: _edit.default
});
},{"./edit":"../content-hero/editor/edit.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./button/index.js");

require("./post-title/index.js");

require("./heading/index.js");

require("./paragraph/index.js");

require("./editor.scss");

require("./columns/editor.scss");

require("./columns-single/index.js");

require("./columns-halves/index.js");

require("./columns-thirds/index.js");

require("./columns-quarters/index.js");

require("./columns-sidebar-left/index.js");

require("./columns-sidebar-right/index.js");

require("./column/index.js");

require("./search-bar/index.js");

require("./freeform/index.js");

require("../content-hero/editor/block.js");
},{"./button/index.js":"button/index.js","./post-title/index.js":"post-title/index.js","./heading/index.js":"heading/index.js","./paragraph/index.js":"paragraph/index.js","./editor.scss":"button/editor.scss","./columns/editor.scss":"button/editor.scss","./columns-single/index.js":"columns-single/index.js","./columns-halves/index.js":"columns-halves/index.js","./columns-thirds/index.js":"columns-thirds/index.js","./columns-quarters/index.js":"columns-quarters/index.js","./columns-sidebar-left/index.js":"columns-sidebar-left/index.js","./columns-sidebar-right/index.js":"columns-sidebar-right/index.js","./column/index.js":"column/index.js","./search-bar/index.js":"search-bar/index.js","./freeform/index.js":"freeform/index.js","../content-hero/editor/block.js":"../content-hero/editor/block.js"}]},{},["index.js"], null)
//# sourceMappingURL=/index.js.map