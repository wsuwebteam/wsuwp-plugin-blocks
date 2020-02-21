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
})({"editor.scss":[function(require,module,exports) {

},{}],"columns/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnsEdit = void 0;
var __ = wp.i18n.__;
var InnerBlocks = wp.editor.InnerBlocks;
var BASETEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie nulla mi, ut dapibus ipsum pulvinar a. Pellentesque faucibus aliquam nibh. Pellentesque nec arcu cursus, euismod massa in, ornare urna. Nullam eu neque elementum, rutrum ante a, luctus lectus.';
var formats = {
  default: [['wsuwp/column', {}, [['core/freeform', {}, []]]]],
  single: [['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]]],
  halves: [['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]]],
  thirds: [['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]]],
  quarters: [['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]]],
  sidebar_right: [['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]]],
  sidebar_left: [['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]], ['wsuwp/column', {}, [['core/freeform', {
    content: BASETEXT
  }, []]]]]
};

var GetTemplate = function GetTemplate(props) {
  var format = 'single';

  if (props.attributes.hasOwnProperty('format')) {
    format = props.attributes.format;
    format = format.replace('-', '_');

    if (formats.hasOwnProperty(format)) {
      return formats[format];
    }
  }

  return formats.default;
};

var ColumnsEdit = function ColumnsEdit(props) {
  var columnsTemplate = GetTemplate(props);
  var format = props.attributes.format;
  return React.createElement("div", {
    className: 'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + format
  }, React.createElement(InnerBlocks, {
    template: columnsTemplate,
    templateLock: "insert",
    allowedBlocks: ['wsuwp/column']
  }));
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
    }
  },
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-halves/index.js":[function(require,module,exports) {
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
registerBlockType("wsuwp/columns-halves", {
  title: "Columns: Halves",
  category: "layout",
  attributes: {
    format: {
      type: 'string',
      default: 'halves'
    }
  },
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
registerBlockType("wsuwp/columns-thirds", {
  title: "Columns: Thirds",
  category: "layout",
  attributes: {
    format: {
      type: 'string',
      default: 'thirds'
    }
  },
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-quarters/index.js":[function(require,module,exports) {
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
registerBlockType("wsuwp/columns-quarters", {
  title: "Columns: Quarters",
  category: "layout",
  attributes: {
    format: {
      type: 'string',
      default: 'quarters'
    }
  },
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-sidebar-left/index.js":[function(require,module,exports) {
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
registerBlockType("wsuwp/columns-sidebar-left", {
  title: "Columns: Sidebar Left",
  category: "layout",
  attributes: {
    format: {
      type: 'string',
      default: 'sidebar-left'
    }
  },
  edit: _edit.ColumnsEdit,
  save: _save.default
});
},{"../columns/edit":"columns/edit.js","../columns/save":"columns/save.js"}],"columns-sidebar-right/index.js":[function(require,module,exports) {
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
registerBlockType("wsuwp/columns-sidebar-right", {
  title: "Columns: Sidebar Right",
  category: "layout",
  attributes: {
    format: {
      type: 'string',
      default: 'sidebar-right'
    }
  },
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

var editColumn = function editColumn(props) {
  console.info(props);
  return React.createElement("div", {
    className: "wsu-c-column wsu-u-no-js"
  }, React.createElement(InnerBlocks, {
    templateLock: false
  }));
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
    }
  },
  edit: _edit.default,
  save: _save.default
});
},{"./edit":"column/edit.js","./save":"column/save.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./editor.scss");

require("./columns/editor.scss");

require("./columns-single/index.js");

require("./columns-halves/index.js");

require("./columns-thirds/index.js");

require("./columns-quarters/index.js");

require("./columns-sidebar-left/index.js");

require("./columns-sidebar-right/index.js");

require("./column/index.js");
},{"./editor.scss":"editor.scss","./columns/editor.scss":"editor.scss","./columns-single/index.js":"columns-single/index.js","./columns-halves/index.js":"columns-halves/index.js","./columns-thirds/index.js":"columns-thirds/index.js","./columns-quarters/index.js":"columns-quarters/index.js","./columns-sidebar-left/index.js":"columns-sidebar-left/index.js","./columns-sidebar-right/index.js":"columns-sidebar-right/index.js","./column/index.js":"column/index.js"}]},{},["index.js"], null)
//# sourceMappingURL=/index.js.map