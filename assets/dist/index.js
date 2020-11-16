!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=50)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.React}()},function(e,t){!function(){e.exports=this.wp.components}()},,function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.primitives}()},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(23);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(24),l=n(25);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}},function(e,t,n){},function(e,t){wp.hooks.addFilter("blocks.registerBlockType","wsuwp/freeform",(function(e,t){return"core/freeform"==t&&(e.category="content"),e}))},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n(21)()},function(e,t,n){"use strict";var r=n(22);function l(){}function a(){}a.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,a,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:l};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){(0,wp.blocks.registerBlockCollection)("wsuwp-em",{title:"Enrollment Management"})},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./packages/block-collections/index.js":
/*!*********************************************!*\
  !*** ./packages/block-collections/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockCollection = wp.blocks.registerBlockCollection;
registerBlockCollection('wsuwp-em', {
  title: 'Enrollment Management'
});

/***/ }),

/***/ "./packages/block-components/helper-field-checker/index.js":
/*!*****************************************************************!*\
  !*** ./packages/block-components/helper-field-checker/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var empty = function empty(field) {
  return typeof field == 'undefined' || field.length == 0 || Object.keys(field) == 0;
};

/* harmony default export */ __webpack_exports__["default"] = (empty);

/***/ }),

/***/ "./packages/block-components/index.js":
/*!********************************************!*\
  !*** ./packages/block-components/index.js ***!
  \********************************************/
/*! exports provided: PatternControl, spacingOptions, spacing, empty, getUtilityClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_controls_pattern_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-controls/pattern-control */ "./packages/block-controls/pattern-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatternControl", function() { return _block_controls_pattern_control__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _block_controls_spacing_selector_spacing_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-controls/spacing-selector/spacing-options */ "./packages/block-controls/spacing-selector/spacing-options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacingOptions", function() { return _block_controls_spacing_selector_spacing_options__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return _block_controls_spacing_selector_spacing_options__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _helper_field_checker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-field-checker */ "./packages/block-components/helper-field-checker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _helper_field_checker__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _wsuwebteam_build_tools_js_helpers_utilityClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/helpers/utilityClasses */ "./node_modules/@wsuwebteam/build-tools/js/helpers/utilityClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUtilityClasses", function() { return _wsuwebteam_build_tools_js_helpers_utilityClasses__WEBPACK_IMPORTED_MODULE_3__["getUtilityClasses"]; });



 // Helpers




/***/ }),

/***/ "./packages/block-controls/block-control-groups/margin-vertical-control-group/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-controls/block-control-groups/margin-vertical-control-group/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/block-controls/block-control-groups/margin-vertical-control-group/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./packages/block-controls/index.js");

var PanelRow = wp.components.PanelRow;



var MarginVerticalControlGroup = function MarginVerticalControlGroup(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
    className: "wsu-block-control__spacing-panel-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["MarginTopControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["MarginBottomControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MarginVerticalControlGroup);

/***/ }),

/***/ "./packages/block-controls/block-control-groups/margin-vertical-control-group/style.scss":
/*!***********************************************************************************************!*\
  !*** ./packages/block-controls/block-control-groups/margin-vertical-control-group/style.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/block-controls/block-control-groups/padding-horizontal-control-group/index.js":
/*!************************************************************************************************!*\
  !*** ./packages/block-controls/block-control-groups/padding-horizontal-control-group/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/block-controls/block-control-groups/padding-horizontal-control-group/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./packages/block-controls/index.js");

var PanelRow = wp.components.PanelRow;



var PaddingHorizontalControlGroup = function PaddingHorizontalControlGroup(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
    className: "wsu-block-control__spacing-panel-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["PaddingLeftControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["PaddingRightControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PaddingHorizontalControlGroup);

/***/ }),

/***/ "./packages/block-controls/block-control-groups/padding-horizontal-control-group/style.scss":
/*!**************************************************************************************************!*\
  !*** ./packages/block-controls/block-control-groups/padding-horizontal-control-group/style.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/block-controls/block-control-groups/padding-vertical-control-group/index.js":
/*!**********************************************************************************************!*\
  !*** ./packages/block-controls/block-control-groups/padding-vertical-control-group/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/block-controls/block-control-groups/padding-vertical-control-group/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./packages/block-controls/index.js");

var PanelRow = wp.components.PanelRow;



var PaddingVerticalControlGroup = function PaddingVerticalControlGroup(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
    className: "wsu-block-control__spacing-panel-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["PaddingTopControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["PaddingBottomControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PaddingVerticalControlGroup);

/***/ }),

/***/ "./packages/block-controls/block-control-groups/padding-vertical-control-group/style.scss":
/*!************************************************************************************************!*\
  !*** ./packages/block-controls/block-control-groups/padding-vertical-control-group/style.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/block-controls/block-control-library/background-color-control.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/background-color-control.js ***!
  \***********************************************************************************/
/*! exports provided: BackgroundColorControl, backgroundColorControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundColorControl", function() { return BackgroundColorControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColorControlAtts", function() { return backgroundColorControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var SelectControl = wp.components.SelectControl;
var backgroundColorContentOptions = [{
  label: 'Default',
  value: ''
}, {
  label: 'Gray 5%',
  value: 'gray-5'
}, {
  label: 'Gray 10%',
  value: 'gray-10'
}, {
  label: 'Gray 80%',
  value: 'gray-80'
}, {
  label: 'Gray 90%',
  value: 'gray-90'
}];

var BackgroundColorControl = function BackgroundColorControl(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var backgroundColorOptions = props.hasOwnProperty('backgroundColorOptions') ? props.backgroundColorOptions : backgroundColorContentOptions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Background Color",
    value: attributes.backgroundColor,
    options: backgroundColorOptions,
    onChange: function onChange(backgroundColor) {
      return setAttributes({
        backgroundColor: backgroundColor
      });
    }
  });
};

var backgroundColorControlAtts = {
  backgroundColor: {
    type: 'string',
    default: ''
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/background-image-control.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/background-image-control.js ***!
  \***********************************************************************************/
/*! exports provided: BackgroundImageControl, backgroundImageControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImageControl", function() { return BackgroundImageControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImageControlAtts", function() { return backgroundImageControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;

var BackgroundImageControl = function BackgroundImageControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, attributes.backgroundImageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.backgroundImageSrc,
    dimensions: attributes.backgroundImageDimensions,
    value: attributes.backgroundImageFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        backgroundImageFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        backgroundImageSrc: media.url
      });
    },
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })));
};

var backgroundImageControlAtts = {
  backgroundImageSrc: {
    type: 'string',
    default: ''
  },
  backgroundImageAlt: {
    type: 'string',
    default: ''
  },
  backgroundImageFocalPoint: {
    type: 'object',
    default: {
      x: 50,
      y: 50
    }
  },
  backgroundImageDimensions: {
    type: 'object',
    default: {
      width: 1070,
      height: 500
    }
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/content-full-width-control.js":
/*!*************************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/content-full-width-control.js ***!
  \*************************************************************************************/
/*! exports provided: ContentFullWidthControl, contentFullWidthControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentFullWidthControl", function() { return ContentFullWidthControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentFullWidthControlAtts", function() { return contentFullWidthControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var ToggleControl = wp.components.ToggleControl;

var ContentFullWidthControl = function ContentFullWidthControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Full Width Content",
    checked: attributes.contentFullWidth,
    onChange: function onChange(contentFullWidth) {
      return setAttributes({
        contentFullWidth: contentFullWidth
      });
    }
  });
};

var contentFullWidthControlAtts = {
  contentFullWidth: {
    type: 'boolean',
    default: false
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/font-size-control.js":
/*!****************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/font-size-control.js ***!
  \****************************************************************************/
/*! exports provided: FontSizeControl, fontSizeControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizeControl", function() { return FontSizeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeControlAtts", function() { return fontSizeControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var SelectControl = wp.components.SelectControl;
var fontSizeOptions = [{
  label: 'Default',
  value: ''
}, {
  label: 'Fine Print',
  value: 'xsmall'
}, {
  label: 'Small',
  value: 'small'
}, {
  label: 'Medium',
  value: 'medium'
}, {
  label: 'Medium Large',
  value: 'medium-large'
}, {
  label: 'Large',
  value: 'large'
}, {
  label: 'Extra Large',
  value: 'extra-large'
}];

var FontSizeControl = function FontSizeControl(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Font Size",
    value: attributes.fontSize,
    options: fontSizeOptions,
    onChange: function onChange(fontSize) {
      return setAttributes({
        fontSize: fontSize
      });
    }
  });
};

var fontSizeControlAtts = {
  fontSize: {
    type: 'string',
    default: ''
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/font-weight-control.js":
/*!******************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/font-weight-control.js ***!
  \******************************************************************************/
/*! exports provided: FontWeightControl, fontWeightControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeightControl", function() { return FontWeightControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightControlAtts", function() { return fontWeightControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var SelectControl = wp.components.SelectControl;
var fontWeightOptions = [{
  label: 'Default',
  value: ''
}, {
  label: 'Light',
  value: 'light'
}, {
  label: 'Normal',
  value: 'normal'
}, {
  label: 'Semi-bold',
  value: 'semi-bold'
}, {
  label: 'Bold',
  value: 'bold'
}, {
  label: 'Extra Bold',
  value: 'extra-bold'
}];

var FontWeightControl = function FontWeightControl(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Font Weight",
    value: attributes.fontWeight,
    options: fontWeightOptions,
    onChange: function onChange(fontWeight) {
      return setAttributes({
        fontWeight: fontWeight
      });
    }
  });
};

var fontWeightControlAtts = {
  fontWeight: {
    type: 'string',
    default: ''
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/full-width-control.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/full-width-control.js ***!
  \*****************************************************************************/
/*! exports provided: FullWidthControl, fullWidthControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullWidthControl", function() { return FullWidthControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullWidthControlAtts", function() { return fullWidthControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var ToggleControl = wp.components.ToggleControl;

var FullWidthControl = function FullWidthControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Full Width",
    checked: attributes.fullWidth,
    onChange: function onChange(fullWidth) {
      return setAttributes({
        fullWidth: fullWidth
      });
    }
  });
};

var fullWidthControlAtts = {
  fullWidth: {
    type: 'boolean',
    default: false
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/indent-control.js":
/*!*************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/indent-control.js ***!
  \*************************************************************************/
/*! exports provided: IndentControl, indentControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndentControl", function() { return IndentControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indentControlAtts", function() { return indentControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var SelectControl = wp.components.SelectControl;
var indentOptions = [{
  label: 'None',
  value: ''
}, {
  label: 'Indent',
  value: 'indent'
}, {
  label: 'Indent More',
  value: 'indent-more'
}];

var IndentControl = function IndentControl(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Indent",
    value: attributes.indent,
    options: indentOptions,
    onChange: function onChange(indent) {
      return setAttributes({
        indent: indent
      });
    }
  });
};

var indentControlAtts = {
  indent: {
    type: 'string',
    default: ''
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/is-notched-control.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/is-notched-control.js ***!
  \*****************************************************************************/
/*! exports provided: IsNotchedControl, isNotchedControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotchedControl", function() { return IsNotchedControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotchedControlAtts", function() { return isNotchedControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var ToggleControl = wp.components.ToggleControl;

var IsNotchedControl = function IsNotchedControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Is Notched",
    checked: attributes.isNotched,
    onChange: function onChange(isNotched) {
      return setAttributes({
        isNotched: isNotched
      });
    }
  });
};

var isNotchedControlAtts = {
  isNotched: {
    type: 'boolean',
    default: false
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/limit-content-width-control.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/limit-content-width-control.js ***!
  \**************************************************************************************/
/*! exports provided: LimitContentWidthControl, limitContentWidthControlAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitContentWidthControl", function() { return LimitContentWidthControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitContentWidthControlAtts", function() { return limitContentWidthControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var ToggleControl = wp.components.ToggleControl;

var LimitContentWidthControl = function LimitContentWidthControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Limit Content Width",
    checked: attributes.limitContentWidth,
    onChange: function onChange(limitContentWidth) {
      return setAttributes({
        limitContentWidth: limitContentWidth
      });
    }
  });
};

var limitContentWidthControlAtts = {
  limitContentWidth: {
    type: 'boolean',
    default: false
  }
};


/***/ }),

/***/ "./packages/block-controls/block-control-library/margin-bottom-control.js":
/*!********************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/margin-bottom-control.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var MarginBottomControl = function MarginBottomControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Margin Bottom",
    value: attributes.inlineStyle.marginBottom,
    onChange: function onChange(marginBottom) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'marginBottom': marginBottom
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MarginBottomControl);

/***/ }),

/***/ "./packages/block-controls/block-control-library/margin-top-control.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/margin-top-control.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var MarginTopControl = function MarginTopControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Margin Top",
    value: attributes.inlineStyle.marginTop,
    onChange: function onChange(marginTop) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'marginTop': marginTop
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MarginTopControl);

/***/ }),

/***/ "./packages/block-controls/block-control-library/max-width-control.js":
/*!****************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/max-width-control.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var MaxWidthControl = function MaxWidthControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Max Width",
    value: attributes.inlineStyle.maxWidth,
    onChange: function onChange(maxWidth) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'maxWidth': maxWidth
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MaxWidthControl);

/***/ }),

/***/ "./packages/block-controls/block-control-library/min-height-control.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/min-height-control.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var MinHeightControl = function MinHeightControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Min Height",
    value: attributes.inlineStyle.minHeight,
    onChange: function onChange(minHeight) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'minHeight': minHeight
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MinHeightControl);

/***/ }),

/***/ "./packages/block-controls/block-control-library/padding-bottom-control.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/padding-bottom-control.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var PaddingBottomControl = function PaddingBottomControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Bottom",
    value: attributes.inlineStyle.paddingBottom,
    onChange: function onChange(paddingBottom) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingBottom': paddingBottom
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PaddingBottomControl);

/***/ }),

/***/ "./packages/block-controls/block-control-library/padding-left-control.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/padding-left-control.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var PaddingLeftControl = function PaddingLeftControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Left",
    value: attributes.inlineStyle.paddingLeft,
    onChange: function onChange(paddingLeft) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingLeft': paddingLeft
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PaddingLeftControl);

/***/ }),

/***/ "./packages/block-controls/block-control-library/padding-right-control.js":
/*!********************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/padding-right-control.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var PaddingRightControl = function PaddingRightControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Right",
    value: attributes.inlineStyle.paddingRight,
    onChange: function onChange(paddingRight) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingRight': paddingRight
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PaddingRightControl);

/***/ }),

/***/ "./packages/block-controls/block-control-library/padding-top-control.js":
/*!******************************************************************************!*\
  !*** ./packages/block-controls/block-control-library/padding-top-control.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextControl = wp.components.TextControl;

var PaddingTopControl = function PaddingTopControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Top",
    value: attributes.inlineStyle.paddingTop,
    onChange: function onChange(paddingTop) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingTop': paddingTop
        })
      });
    },
    placeholder: ''
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PaddingTopControl);

/***/ }),

/***/ "./packages/block-controls/block-control-panels/background-options-panel.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-controls/block-control-panels/background-options-panel.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody;

var BackgroundOptionsPanel = function BackgroundOptionsPanel(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
    className: "wsu-b-panel-background-options"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background Options",
    initialOpen: false
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundOptionsPanel);

/***/ }),

/***/ "./packages/block-controls/block-control-panels/display-options-panel.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-controls/block-control-panels/display-options-panel.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var PanelBody = wp.components.PanelBody;

var DisplayOptionsPanel = function DisplayOptionsPanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Display Options",
    initialOpen: false
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayOptionsPanel);

/***/ }),

/***/ "./packages/block-controls/block-control-panels/em-options-panel.js":
/*!**************************************************************************!*\
  !*** ./packages/block-controls/block-control-panels/em-options-panel.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody;

var EmOptionsPanel = function EmOptionsPanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
    className: "wsu-b-panel-em-options"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "EM Options",
    initialOpen: false
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (EmOptionsPanel);

/***/ }),

/***/ "./packages/block-controls/block-control-panels/general-panel.js":
/*!***********************************************************************!*\
  !*** ./packages/block-controls/block-control-panels/general-panel.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody;

var GeneralPanel = function GeneralPanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: false
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (GeneralPanel);

/***/ }),

/***/ "./packages/block-controls/block-control-panels/layout-panel.js":
/*!**********************************************************************!*\
  !*** ./packages/block-controls/block-control-panels/layout-panel.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody;

var LayoutPanel = function LayoutPanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Layout & Spacing",
    initialOpen: false
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutPanel);

/***/ }),

/***/ "./packages/block-controls/block-options-select/index.js":
/*!***************************************************************!*\
  !*** ./packages/block-controls/block-options-select/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/block-controls/block-options-select/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);



var LayoutOption = function LayoutOption(option, onSelect) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "wsu-g-block-options-select__option",
    onClick: function onClick(event) {
      onSelect(option);
    }
  }, option.icon, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-g-block-options-select__option__label"
  }, option.label));
};

var BlockOptionsSelect = function BlockOptionsSelect(props) {
  if (props.options) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-g-block-options-select"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-g-block-options-select__title"
    }, props.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "wsu-g-block-options-select__options"
    }, props.options.map(function (option) {
      return LayoutOption(option, props.onSelect);
    })));
  } else {
    return '';
  }
};

BlockOptionsSelect.defaultProps = {
  options: []
};
/* harmony default export */ __webpack_exports__["default"] = (BlockOptionsSelect);

/***/ }),

/***/ "./packages/block-controls/block-options-select/style.scss":
/*!*****************************************************************!*\
  !*** ./packages/block-controls/block-options-select/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/block-controls/card-type-controls/index.js":
/*!*************************************************************!*\
  !*** ./packages/block-controls/card-type-controls/index.js ***!
  \*************************************************************/
/*! exports provided: DefaultCard, DefaultCardControls, PersonCard, PersonCardControls, NewsCard, NewsCardControls, CustomCard, CustomCardControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultCard", function() { return DefaultCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultCardControls", function() { return DefaultCardControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCard", function() { return PersonCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCardControls", function() { return PersonCardControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCard", function() { return NewsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardControls", function() { return NewsCardControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCard", function() { return CustomCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCardControls", function() { return CustomCardControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../block-components */ "./packages/block-components/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl,
    DateTimePicker = _wp$components.DateTimePicker,
    Dropdown = _wp$components.Dropdown;
var dateI18n = wp.date.dateI18n;
var _wsu_wds$components = wsu_wds.components,
    WsuCard = _wsu_wds$components.WsuCard,
    WsuHr = _wsu_wds$components.WsuHr;


var DefaultCard = function DefaultCard(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuCard, {
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.title,
      onChange: function onChange(title) {
        return props.setAttributes({
          title: title
        });
      },
      allowedFormats: [],
      placeholder: "Add title"
    }),
    subtitle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.subtitle,
      onChange: function onChange(subtitle) {
        return props.setAttributes({
          subtitle: subtitle
        });
      },
      allowedFormats: [],
      placeholder: "Add subtitle"
    }),
    positionTitle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.positionTitle,
      onChange: function onChange(positionTitle) {
        return props.setAttributes({
          positionTitle: positionTitle
        });
      },
      allowedFormats: [],
      placeholder: "Add position title"
    }),
    description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.description,
      onChange: function onChange(description) {
        return props.setAttributes({
          description: description
        });
      },
      allowedFormats: [],
      placeholder: "Add description"
    }),
    image: {
      'src': props.attributes.imgSrc,
      'alt': props.attributes.imgCaption
    },
    imgFocalPoint: props.attributes.imgFocalPoint
  });
};

var DefaultCardControls = function DefaultCardControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: props.attributes.title,
    onChange: function onChange(title) {
      return props.setAttributes({
        title: title
      });
    },
    placeholder: 'Add title'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Subtitle",
    value: props.attributes.subtitle,
    onChange: function onChange(subtitle) {
      return props.setAttributes({
        subtitle: subtitle
      });
    },
    placeholder: 'Add subtitle'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Position Title",
    value: props.attributes.positionTitle,
    onChange: function onChange(positionTitle) {
      return props.setAttributes({
        positionTitle: positionTitle
      });
    },
    placeholder: 'Add position title'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Description",
    value: props.attributes.description,
    onChange: function onChange(description) {
      return props.setAttributes({
        description: description
      });
    },
    placeholder: 'Add description'
  }));
};

var PersonCard = function PersonCard(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuCard, {
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.title,
      onChange: function onChange(title) {
        return props.setAttributes({
          title: title
        });
      },
      allowedFormats: [],
      placeholder: "Add person name"
    }),
    subtitle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.subtitle,
      onChange: function onChange(subtitle) {
        return props.setAttributes({
          subtitle: subtitle
        });
      },
      allowedFormats: [],
      placeholder: "Add subtitle"
    }),
    description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.description,
      onChange: function onChange(description) {
        return props.setAttributes({
          description: description
        });
      },
      allowedFormats: [],
      placeholder: 'Add description text'
    }),
    positionTitle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.positionTitle,
      onChange: function onChange(positionTitle) {
        return props.setAttributes({
          positionTitle: positionTitle
        });
      },
      allowedFormats: [],
      placeholder: "Add position title"
    }),
    addressLine1: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.addressLine1,
      onChange: function onChange(addressLine1) {
        return props.setAttributes({
          addressLine1: addressLine1
        });
      },
      allowedFormats: [],
      placeholder: 'Add address line 1'
    }),
    addressLine2: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.addressLine2,
      onChange: function onChange(addressLine2) {
        return props.setAttributes({
          addressLine2: addressLine2
        });
      },
      allowedFormats: [],
      placeholder: 'Add address line 2'
    }),
    phoneNumber: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.phoneNumber,
      onChange: function onChange(phoneNumber) {
        return props.setAttributes({
          phoneNumber: phoneNumber
        });
      },
      allowedFormats: [],
      placeholder: 'Add phone number'
    }),
    email: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.email,
      onChange: function onChange(email) {
        return props.setAttributes({
          email: email
        });
      },
      allowedFormats: [],
      placeholder: 'Add email'
    }),
    website: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.website,
      onChange: function onChange(website) {
        return props.setAttributes({
          website: website
        });
      },
      allowedFormats: [],
      placeholder: 'Add website address'
    }),
    image: {
      'src': props.attributes.imgSrc,
      'alt': props.attributes.imgCaption
    },
    imgFocalPoint: props.attributes.imgFocalPoint
  });
};

var PersonCardControls = function PersonCardControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Person Name",
    value: props.attributes.title,
    onChange: function onChange(title) {
      return props.setAttributes({
        title: title
      });
    },
    placeholder: 'Add person name'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Subtitle",
    value: props.attributes.subtitle,
    onChange: function onChange(subtitle) {
      return props.setAttributes({
        subtitle: subtitle
      });
    },
    placeholder: 'Add subtitle'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Position Title",
    value: props.attributes.positionTitle,
    onChange: function onChange(positionTitle) {
      return props.setAttributes({
        positionTitle: positionTitle
      });
    },
    placeholder: 'Add position title'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Description",
    value: props.attributes.description,
    onChange: function onChange(description) {
      return props.setAttributes({
        description: description
      });
    },
    placeholder: 'Add description'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Address Line 1",
    value: props.attributes.addressLine1,
    onChange: function onChange(addressLine1) {
      return props.setAttributes({
        addressLine1: addressLine1
      });
    },
    placeholder: 'Add address line 1'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Address Line 2",
    value: props.attributes.addressLine2,
    onChange: function onChange(addressLine2) {
      return props.setAttributes({
        addressLine2: addressLine2
      });
    },
    placeholder: 'Add address line 2'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Phone Number",
    value: props.attributes.phoneNumber,
    onChange: function onChange(phoneNumber) {
      return props.setAttributes({
        phoneNumber: phoneNumber
      });
    },
    placeholder: 'Add phone number'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Email",
    value: props.attributes.email,
    onChange: function onChange(email) {
      return props.setAttributes({
        email: email
      });
    },
    placeholder: 'Add email address'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Website",
    value: props.attributes.website,
    onChange: function onChange(website) {
      return props.setAttributes({
        website: website
      });
    },
    placeholder: 'Add website address'
  }));
};

var NewsCard = function NewsCard(props) {
  var date = Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.date) ? '' : dateI18n('n/j/y', props.attributes.date);
  var authorName = Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.authorName) ? 'learn more' : props.attributes.authorName;
  var authorUrl = Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.authorUrl) ? 'learn more' : props.attributes.authorUrl;
  var author = {
    'name': authorName,
    'url': authorUrl
  };

  if (Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.authorName) || Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.authorUrl)) {
    author = '';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuCard, {
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.title,
      onChange: function onChange(title) {
        return props.setAttributes({
          title: title
        });
      },
      allowedFormats: [],
      placeholder: 'Add title'
    }),
    description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: props.attributes.description,
      onChange: function onChange(description) {
        return props.setAttributes({
          description: description
        });
      },
      allowedFormats: [],
      placeholder: 'Add description text'
    }),
    image: {
      'src': props.attributes.imgSrc,
      'alt': props.attributes.imgCaption
    },
    imgFocalPoint: props.attributes.imgFocalPoint // categories={[
    // 	{
    // 		'name': 'Sed category',
    // 		'url': '#' 
    // 	},
    // 	{
    // 		'name': 'Sed category',
    // 		'url': '#' 
    // 	}
    // ]}
    // tags={[
    // 	{
    // 		'name': 'Fames',
    // 		'url': '#'
    // 	},
    // 	{
    // 		'name': 'Tristique',
    // 		'url': '#'
    // 	},
    // 	{
    // 		'name': 'Malesuada',
    // 		'url': '#'
    // 	}
    // ]}
    ,
    author: author,
    date: date
  });
};

var NewsCardControls = function NewsCardControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: props.attributes.title,
    onChange: function onChange(title) {
      return props.setAttributes({
        title: title
      });
    },
    placeholder: 'Add title'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Description",
    value: props.attributes.description,
    onChange: function onChange(description) {
      return props.setAttributes({
        description: description
      });
    },
    placeholder: 'Add description'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuHr, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Date"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isTertiary: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.date) ? 'Select date' : dateI18n('M j, Y'.concat(" ", 'g:i a'), props.attributes.date));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DateTimePicker, {
        currentDate: props.attributes.date,
        onChange: function onChange(date) {
          return props.setAttributes({
            date: date
          });
        },
        is12Hour: true
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Author Name",
    value: props.attributes.authorName,
    onChange: function onChange(authorName) {
      return props.setAttributes({
        authorName: authorName
      });
    },
    placeholder: 'Add author name',
    help: !Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.authorName) && Object(_block_components__WEBPACK_IMPORTED_MODULE_1__["empty"])(props.attributes.authorUrl) ? 'Author name is only displayed if a name and URL are included.' : ''
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Author Url",
    value: props.attributes.authorUrl,
    onChange: function onChange(authorUrl) {
      return props.setAttributes({
        authorUrl: authorUrl
      });
    },
    placeholder: 'Add author url'
  }));
};

var CustomCard = function CustomCard(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuCard, {
    description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      templateLock: false
    }),
    image: {
      'src': props.attributes.imgSrc,
      'alt': props.attributes.imgCaption
    }
  });
};

var CustomCardControls = function CustomCardControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Have fun! There are no fields for custom cards, just use blocks!"));
};



/***/ }),

/***/ "./packages/block-controls/decorator-control/index.js":
/*!************************************************************!*\
  !*** ./packages/block-controls/decorator-control/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}


var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    Button = _wp$components.Button;
var WsuHr = wsu_wds.components.WsuHr;
var decoratorOptions = [{
  label: 'Crimson Bar',
  value: 'crimson-bar'
}, {
  label: 'Crimson Bar | Light',
  value: 'crimson-bar-light'
}, {
  label: 'Angled Lines | Gray',
  value: 'angled-lines-gray'
}, {
  label: 'Angled Lines | Crimson',
  value: 'angled-lines-crimson'
}, {
  label: 'Plus | Gray',
  value: 'plus-gray'
}, {
  label: 'Plus | Crimson',
  value: 'plus-crimson'
}, {
  label: 'Text | White',
  value: 'text-white'
}, {
  label: 'Text | Outline Gray',
  value: 'text-outline-gray'
}, {
  label: 'Text | Outline Crimson',
  value: 'text-outline-crimson'
}, {
  label: 'Cougar | White',
  value: 'cougar-head-white'
}, {
  label: 'Cougar | Crimson',
  value: 'cougar-head-crimson'
}, {
  label: 'Overlay | Crimson',
  value: 'overlay-crimson'
}, {
  label: 'Overlay | gray',
  value: 'overlay-gray'
}, {
  label: 'WSU Watermark Vert | White',
  value: 'wsu-watermark-vertical-white'
}, {
  label: 'WSU Watermark Vert | Crimson',
  value: 'wsu-watermark-vertical-crimson'
}];

var getDecoratorLabel = function getDecoratorLabel(slug) {
  var label = false;

  var _iterator = _createForOfIteratorHelper(decoratorOptions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var decorator = _step.value;

      if (slug === decorator.value) {
        label = decorator.label;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return label;
};

var Decorator = function Decorator(props) {
  var type = props.decorator.hasOwnProperty('type') ? props.decorator.type : '';
  var label = getDecoratorLabel(type);
  var text = props.decorator.hasOwnProperty('text') ? props.decorator.text : '';
  var positionTop = props.decorator.hasOwnProperty('positionTop') ? props.decorator.positionTop : '';
  var positionBottom = props.decorator.hasOwnProperty('positionBottom') ? props.decorator.positionBottom : '';
  var positionRight = props.decorator.hasOwnProperty('positionRight') ? props.decorator.positionRight : '';
  var positionLeft = props.decorator.hasOwnProperty('positionLeft') ? props.decorator.positionLeft : '';
  var width = props.decorator.hasOwnProperty('width') ? props.decorator.width : '';
  var height = props.decorator.hasOwnProperty('height') ? props.decorator.height : '';
  var hideOnMobile = props.decorator.hasOwnProperty('hideOnMobile') ? props.decorator.hideOnMobile : false;
  var hideOnTablet = props.decorator.hasOwnProperty('hideOnTablet') ? props.decorator.hideOnTablet : false;
  var hideOnDesktop = props.decorator.hasOwnProperty('hideOnDesktop') ? props.decorator.hideOnDesktop : false;

  if (!label) {
    return null;
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
      title: label,
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
      style: {
        display: 'flex'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
      label: "Top",
      value: positionTop,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'positionTop', value);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
      label: "Bottom",
      value: positionBottom,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'positionBottom', value);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
      style: {
        display: 'flex'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
      label: "Right",
      value: positionRight,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'positionRight', value);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
      label: "left",
      value: positionLeft,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'positionLeft', value);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
      style: {
        display: 'flex'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
      label: "Width",
      value: width,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'width', value);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
      label: "Height",
      value: height,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'height', value);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
      label: "Text",
      value: text,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'text', value);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
      label: "Hide on Mobile",
      help: hideOnMobile ? 'Hidden.' : 'Visible.',
      checked: hideOnMobile,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'hideOnMobile', value);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
      label: "Hide on Tablet",
      help: hideOnTablet ? 'Hidden.' : 'Visible.',
      checked: hideOnTablet,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'hideOnTablet', value);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
      label: "Hide on Desktop",
      help: hideOnDesktop ? 'Hidden.' : 'Visible.',
      checked: hideOnDesktop,
      onChange: function onChange(value) {
        props.updateDecorator(props.index, 'hideOnDesktop', value);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
      onClick: function onClick(event) {
        props.removeDecorator(props.index);
      },
      isDestructive: true
    }, "Remove Decorator")));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, "Decorator");
};

Decorator.defaultProps = {
  decorators: []
};

var DecoratorControl = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DecoratorControl, _React$Component);

  var _super = _createSuper(DecoratorControl);

  function DecoratorControl(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DecoratorControl);

    _this = _super.call(this, props);
    _this.state = {
      selectedDecorator: 'crimson-bar'
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DecoratorControl, [{
    key: "updateDecoratorArray",
    value: function updateDecoratorArray(index, property, value) {
      var decoratorArray = this.props.decorators;
      decoratorArray[index][property] = value;
      decoratorArray = decoratorArray.concat([]);
      this.props.onChange(decoratorArray);
    }
  }, {
    key: "addDecoratorToArray",
    value: function addDecoratorToArray(type) {
      var newArray = [{
        type: type
      }];
      var decoratorArray = this.props.decorators.concat(newArray);
      this.props.onChange(decoratorArray);
    }
  }, {
    key: "removeDecorator",
    value: function removeDecorator(index) {
      var decoratorArray = this.props.decorators;
      decoratorArray.splice(index, 1);
      decoratorArray = decoratorArray.concat([]);
      this.props.onChange(decoratorArray);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: "Decorators",
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: "Select Decorator",
        onChange: function onChange(value) {
          _this2.state.selectedDecorator = value;
        },
        options: decoratorOptions
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        onClick: function onClick(event) {
          _this2.addDecoratorToArray(_this2.state.selectedDecorator);
        },
        isSecondary: true
      }, "Add Decorator"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(WsuHr, null), this.props.decorators.map(function (decorator, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Decorator, {
          decorator: decorator,
          index: index,
          removeDecorator: function removeDecorator(index) {
            _this2.removeDecorator(index);
          },
          updateDecorator: function updateDecorator(index, property, value) {
            _this2.updateDecoratorArray(index, property, value);
          }
        });
      }));
    }
  }]);

  return DecoratorControl;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

DecoratorControl.defaultProps = {
  decorators: []
};
/* harmony default export */ __webpack_exports__["default"] = (DecoratorControl);

/***/ }),

/***/ "./packages/block-controls/feed-controls/feed-control-atts.js":
/*!********************************************************************!*\
  !*** ./packages/block-controls/feed-controls/feed-control-atts.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var feedControlAtts = {
  postType: {
    type: 'string',
    default: 'post'
  },
  taxonomy: {
    type: 'string',
    default: 'category'
  },
  termIds: {
    type: 'string',
    default: ''
  },
  count: {
    type: 'integer',
    default: 5
  },
  offset: {
    type: 'integer',
    default: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (feedControlAtts);

/***/ }),

/***/ "./packages/block-controls/feed-controls/feed-control.js":
/*!***************************************************************!*\
  !*** ./packages/block-controls/feed-controls/feed-control.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;

var FeedControls = function FeedControls(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      taxonomyOptions = _ref.taxonomyOptions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Feed Settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Content Type (post type)",
    value: attributes.postType,
    onChange: function onChange(postType) {
      return setAttributes({
        postType: postType
      });
    },
    placeholder: 'Enter post type here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Feed By (taxonomy)",
    value: attributes.taxonomy,
    onChange: function onChange(taxonomy) {
      return setAttributes({
        taxonomy: taxonomy
      });
    },
    options: taxonomyOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Term IDs",
    value: attributes.termIds,
    onChange: function onChange(termIds) {
      return setAttributes({
        termIds: termIds
      });
    },
    placeholder: 'Enter Term IDs here (5,6,7).'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Count",
    value: attributes.count,
    onChange: function onChange(count) {
      return setAttributes({
        count: parseInt(count)
      });
    },
    placeholder: 'Enter # of items.'
  }));
};

FeedControls.defaultProps = {
  attributes: {},
  setAttributes: function setAttributes() {
    return false;
  },
  taxonomyOptions: [{
    label: 'Category',
    value: 'category'
  }, {
    label: 'Tag',
    value: 'tag'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (FeedControls);

/***/ }),

/***/ "./packages/block-controls/filters/advanced-controls/index.js":
/*!********************************************************************!*\
  !*** ./packages/block-controls/filters/advanced-controls/index.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress Dependencies
 */

var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var TextControl = wp.components.TextControl;
/**
 * Add Unique ID field to the advanced controls
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */

var addCustomAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var visibleOnMobile = attributes.visibleOnMobile;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Unique ID",
      help: "Unique ID will be applied to this block's HTML container.",
      value: attributes.id,
      onChange: function onChange(id) {
        return setAttributes({
          id: id
        });
      }
    })));
  };
}, 'addCustomAdvancedControls');
addFilter('editor.BlockEdit', 'wsuwp/custom-advanced-control', addCustomAdvancedControls);

/***/ }),

/***/ "./packages/block-controls/global-block-atts/index.js":
/*!************************************************************!*\
  !*** ./packages/block-controls/global-block-atts/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var globalBlockAtts = {
  id: {
    type: 'string',
    default: ''
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
  },
  inlineStyle: {
    type: 'object',
    default: {}
  }
};
/* harmony default export */ __webpack_exports__["default"] = (globalBlockAtts);

/***/ }),

/***/ "./packages/block-controls/index.js":
/*!******************************************!*\
  !*** ./packages/block-controls/index.js ***!
  \******************************************/
/*! exports provided: SelectIcon, SpacingSelector, SpacingPanelVertical, FeedControls, DecoratorControl, feedControlAtts, globalBlockAtts, SizeUnitControl, sizeUnitControlAtts, GeneralPanel, BackgroundColorControl, backgroundColorControlAtts, FullWidthControl, fullWidthControlAtts, ContentFullWidthControl, contentFullWidthControlAtts, LimitContentWidthControl, limitContentWidthControlAtts, BackgroundImageControl, backgroundImageControlAtts, IsNotchedControl, isNotchedControlAtts, FontSizeControl, fontSizeControlAtts, FontWeightControl, fontWeightControlAtts, IndentControl, indentControlAtts, MarginBottomControl, MarginTopControl, PaddingTopControl, PaddingBottomControl, PaddingRightControl, PaddingLeftControl, MinHeightControl, MaxWidthControl, MarginVerticalControlGroup, PaddingVerticalControlGroup, PaddingHorizontalControlGroup, LayoutPanel, BackgroundOptionsPanel, EmOptionsPanel, DisplayOptionsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-icon */ "./packages/block-controls/select-icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectIcon", function() { return _select_icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _spacing_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spacing-selector */ "./packages/block-controls/spacing-selector/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingSelector", function() { return _spacing_selector__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _spacing_unit_control_spacing_panel_vertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing-unit-control/spacing-panel-vertical */ "./packages/block-controls/spacing-unit-control/spacing-panel-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingPanelVertical", function() { return _spacing_unit_control_spacing_panel_vertical__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _feed_controls_feed_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed-controls/feed-control */ "./packages/block-controls/feed-controls/feed-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedControls", function() { return _feed_controls_feed_control__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _decorator_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorator-control */ "./packages/block-controls/decorator-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecoratorControl", function() { return _decorator_control__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _feed_controls_feed_control_atts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-controls/feed-control-atts */ "./packages/block-controls/feed-controls/feed-control-atts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedControlAtts", function() { return _feed_controls_feed_control_atts__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _global_block_atts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalBlockAtts", function() { return _global_block_atts__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _size_unit_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./size-unit-control */ "./packages/block-controls/size-unit-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SizeUnitControl", function() { return _size_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeUnitControlAtts", function() { return _size_unit_control__WEBPACK_IMPORTED_MODULE_7__["sizeUnitControlAtts"]; });

/* harmony import */ var _block_control_panels_general_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-control-panels/general-panel */ "./packages/block-controls/block-control-panels/general-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralPanel", function() { return _block_control_panels_general_panel__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _block_control_library_background_color_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-control-library/background-color-control */ "./packages/block-controls/block-control-library/background-color-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundColorControl", function() { return _block_control_library_background_color_control__WEBPACK_IMPORTED_MODULE_9__["BackgroundColorControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColorControlAtts", function() { return _block_control_library_background_color_control__WEBPACK_IMPORTED_MODULE_9__["backgroundColorControlAtts"]; });

/* harmony import */ var _block_control_library_full_width_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-control-library/full-width-control */ "./packages/block-controls/block-control-library/full-width-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullWidthControl", function() { return _block_control_library_full_width_control__WEBPACK_IMPORTED_MODULE_10__["FullWidthControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullWidthControlAtts", function() { return _block_control_library_full_width_control__WEBPACK_IMPORTED_MODULE_10__["fullWidthControlAtts"]; });

/* harmony import */ var _block_control_library_content_full_width_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-control-library/content-full-width-control */ "./packages/block-controls/block-control-library/content-full-width-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentFullWidthControl", function() { return _block_control_library_content_full_width_control__WEBPACK_IMPORTED_MODULE_11__["ContentFullWidthControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contentFullWidthControlAtts", function() { return _block_control_library_content_full_width_control__WEBPACK_IMPORTED_MODULE_11__["contentFullWidthControlAtts"]; });

/* harmony import */ var _block_control_library_limit_content_width_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-control-library/limit-content-width-control */ "./packages/block-controls/block-control-library/limit-content-width-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitContentWidthControl", function() { return _block_control_library_limit_content_width_control__WEBPACK_IMPORTED_MODULE_12__["LimitContentWidthControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "limitContentWidthControlAtts", function() { return _block_control_library_limit_content_width_control__WEBPACK_IMPORTED_MODULE_12__["limitContentWidthControlAtts"]; });

/* harmony import */ var _block_control_library_background_image_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./block-control-library/background-image-control */ "./packages/block-controls/block-control-library/background-image-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundImageControl", function() { return _block_control_library_background_image_control__WEBPACK_IMPORTED_MODULE_13__["BackgroundImageControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundImageControlAtts", function() { return _block_control_library_background_image_control__WEBPACK_IMPORTED_MODULE_13__["backgroundImageControlAtts"]; });

/* harmony import */ var _block_control_library_is_notched_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./block-control-library/is-notched-control */ "./packages/block-controls/block-control-library/is-notched-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsNotchedControl", function() { return _block_control_library_is_notched_control__WEBPACK_IMPORTED_MODULE_14__["IsNotchedControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotchedControlAtts", function() { return _block_control_library_is_notched_control__WEBPACK_IMPORTED_MODULE_14__["isNotchedControlAtts"]; });

/* harmony import */ var _block_control_library_font_size_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./block-control-library/font-size-control */ "./packages/block-controls/block-control-library/font-size-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizeControl", function() { return _block_control_library_font_size_control__WEBPACK_IMPORTED_MODULE_15__["FontSizeControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeControlAtts", function() { return _block_control_library_font_size_control__WEBPACK_IMPORTED_MODULE_15__["fontSizeControlAtts"]; });

/* harmony import */ var _block_control_library_font_weight_control__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./block-control-library/font-weight-control */ "./packages/block-controls/block-control-library/font-weight-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeightControl", function() { return _block_control_library_font_weight_control__WEBPACK_IMPORTED_MODULE_16__["FontWeightControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightControlAtts", function() { return _block_control_library_font_weight_control__WEBPACK_IMPORTED_MODULE_16__["fontWeightControlAtts"]; });

/* harmony import */ var _block_control_library_indent_control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./block-control-library/indent-control */ "./packages/block-controls/block-control-library/indent-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndentControl", function() { return _block_control_library_indent_control__WEBPACK_IMPORTED_MODULE_17__["IndentControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indentControlAtts", function() { return _block_control_library_indent_control__WEBPACK_IMPORTED_MODULE_17__["indentControlAtts"]; });

/* harmony import */ var _block_control_library_margin_bottom_control__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./block-control-library/margin-bottom-control */ "./packages/block-controls/block-control-library/margin-bottom-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarginBottomControl", function() { return _block_control_library_margin_bottom_control__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _block_control_library_margin_top_control__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./block-control-library/margin-top-control */ "./packages/block-controls/block-control-library/margin-top-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarginTopControl", function() { return _block_control_library_margin_top_control__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _block_control_library_padding_top_control__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./block-control-library/padding-top-control */ "./packages/block-controls/block-control-library/padding-top-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaddingTopControl", function() { return _block_control_library_padding_top_control__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _block_control_library_padding_bottom_control__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./block-control-library/padding-bottom-control */ "./packages/block-controls/block-control-library/padding-bottom-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaddingBottomControl", function() { return _block_control_library_padding_bottom_control__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _block_control_library_padding_right_control__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./block-control-library/padding-right-control */ "./packages/block-controls/block-control-library/padding-right-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaddingRightControl", function() { return _block_control_library_padding_right_control__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _block_control_library_padding_left_control__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./block-control-library/padding-left-control */ "./packages/block-controls/block-control-library/padding-left-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaddingLeftControl", function() { return _block_control_library_padding_left_control__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _block_control_library_min_height_control__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./block-control-library/min-height-control */ "./packages/block-controls/block-control-library/min-height-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinHeightControl", function() { return _block_control_library_min_height_control__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _block_control_library_max_width_control__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./block-control-library/max-width-control */ "./packages/block-controls/block-control-library/max-width-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaxWidthControl", function() { return _block_control_library_max_width_control__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _block_control_groups_margin_vertical_control_group__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./block-control-groups/margin-vertical-control-group */ "./packages/block-controls/block-control-groups/margin-vertical-control-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarginVerticalControlGroup", function() { return _block_control_groups_margin_vertical_control_group__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _block_control_groups_padding_vertical_control_group__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./block-control-groups/padding-vertical-control-group */ "./packages/block-controls/block-control-groups/padding-vertical-control-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaddingVerticalControlGroup", function() { return _block_control_groups_padding_vertical_control_group__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _block_control_groups_padding_horizontal_control_group__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./block-control-groups/padding-horizontal-control-group */ "./packages/block-controls/block-control-groups/padding-horizontal-control-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaddingHorizontalControlGroup", function() { return _block_control_groups_padding_horizontal_control_group__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _block_control_panels_layout_panel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./block-control-panels/layout-panel */ "./packages/block-controls/block-control-panels/layout-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutPanel", function() { return _block_control_panels_layout_panel__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _block_control_panels_background_options_panel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./block-control-panels/background-options-panel */ "./packages/block-controls/block-control-panels/background-options-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundOptionsPanel", function() { return _block_control_panels_background_options_panel__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _block_control_panels_em_options_panel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./block-control-panels/em-options-panel */ "./packages/block-controls/block-control-panels/em-options-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmOptionsPanel", function() { return _block_control_panels_em_options_panel__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _block_control_panels_display_options_panel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./block-control-panels/display-options-panel */ "./packages/block-controls/block-control-panels/display-options-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayOptionsPanel", function() { return _block_control_panels_display_options_panel__WEBPACK_IMPORTED_MODULE_32__["default"]; });











/* Block Control Library
=============================== */



























/* Block Control Groups
=============================== */




/* Block Control Panels
=============================== */






/***/ }),

/***/ "./packages/block-controls/pattern-control/index.js":
/*!**********************************************************!*\
  !*** ./packages/block-controls/pattern-control/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var TextControl = wp.components.TextControl;

var PatternControl = function PatternControl(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: props.label,
    value: props.value,
    onChange: props.onChange,
    placeholder: props.placeholder
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Options Include: wsu-c-pattern--angled-lines-crimson-top-left, wsu-c-pattern--plus-crimson-top-right, wsu-c-pattern--plus-crimson-bottom-right, wsu-c-pattern--plus-crimson-bottom-left, wsu-c-pattern--solid-crimson-bottom-left, wsu-c-pattern--solid-crimson-top-right."));
};

/* harmony default export */ __webpack_exports__["default"] = (PatternControl);

/***/ }),

/***/ "./packages/block-controls/select-icon/index.js":
/*!******************************************************!*\
  !*** ./packages/block-controls/select-icon/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;

var SelectIcon = function SelectIcon(props) {
  var icons = ['', 'alarm', 'alert-notification', 'arrow-down-carrot', 'arrow-down', 'arrow-left-carrot', 'arrow-left', 'arrow-right-carrot', 'arrow-right', 'arrow-up-carrot', 'arrow-up', 'attachment', 'basket', 'bookmark', 'calendar', 'cart', 'check', 'collapse', 'comment', 'contrast', 'credit-card', 'cut', 'discussion', 'document', 'download', 'edit', 'email', 'expand', 'favorite', 'feedback', 'filter', 'flag', 'gallery', 'graph', 'home', 'info', 'key', 'light-bulb', 'link', 'location', 'map-location', 'map', 'menu', 'minus-circle', 'minus', 'mobile', 'monitor', 'more-vertical', 'more', 'next', 'pause', 'phone', 'photos', 'play-circle', 'play', 'plus', 'pluse-circle', 'previous', 'print', 'profile-circle', 'profile', 'rate', 'refresh', 'save', 'search', 'secure', 'send', 'settings', 'share', 'social-facebook', 'social-instagram', 'social-linkedin', 'social-twitter', 'social-youtube', 'stop-circle', 'stop', 'tag', 'tent', 'time', 'trash', 'upload', 'video-slideshow', 'warning-caution', 'warning-stop', 'x-close', 'zoom-in', 'zoom-out'];
  var iconSelect = [];
  icons.forEach(function (value, index) {
    var icon = {
      label: value,
      value: value
    };
    iconSelect.push(icon);
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: props.label,
    value: props.icon,
    onChange: function onChange(icon) {
      props.onchange(icon);
    },
    options: iconSelect
  });
};

SelectIcon.defaultProps = {
  label: 'Icon',
  className: 'wsu-b-select-icon'
};
/* harmony default export */ __webpack_exports__["default"] = (SelectIcon);

/***/ }),

/***/ "./packages/block-controls/size-unit-control/index.js":
/*!************************************************************!*\
  !*** ./packages/block-controls/size-unit-control/index.js ***!
  \************************************************************/
/*! exports provided: sizeUnitControlAtts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitControlAtts", function() { return sizeUnitControlAtts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/block-controls/size-unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);

var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    SelectControl = _wp$components.SelectControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = __experimentalNumberControl;

var imageSizePresets = [25, 33.33, 50, 66.66, 75, 100];

var SizeUnitControl = function SizeUnitControl(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;

  function updateDimensions(nextWidth, nextHeight) {
    return function () {
      setAttributes({
        width: nextWidth,
        height: nextHeight
      });
    };
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Sizing Type",
    value: attributes.unit,
    options: [{
      label: 'Responsive',
      value: '%'
    }, {
      label: 'Static',
      value: 'px'
    }],
    onChange: function onChange(type) {
      return setAttributes({
        unit: type
      });
    }
  }), attributes.unit == '%' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-control__size-unit-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
    className: "button-group"
  }, imageSizePresets.map(function (scale) {
    var scaledWidth = scale;
    var scaledHeight = 'auto';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      isSmall: true,
      isPressed: scale == attributes.width ? true : false,
      onClick: updateDimensions(scaledWidth, scaledHeight)
    }, Math.round(scale), "%");
  }))), attributes.unit == 'px' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-control__size-unit-control-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-control__size-unit-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(NumberControl, {
    label: "Width",
    isShiftStepEnabled: true,
    shiftStep: 10,
    value: attributes.width,
    onChange: function onChange(width) {
      setAttributes({
        width: width,
        height: parseInt(width * attributes.ratio, 10)
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(NumberControl, {
    label: "Height",
    isShiftStepEnabled: true,
    shiftStep: 10,
    value: attributes.height,
    onChange: function onChange(height) {
      setAttributes({
        height: height,
        width: parseInt(height * attributes.ratio, 10)
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-control__size-unit-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
    className: "button-group"
  }, imageSizePresets.map(function (scale) {
    var newWidth = Math.round(attributes.scaledWidth * (scale / 100));
    var newHeight = Math.round(attributes.scaledHeight * (scale / 100));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      isSmall: true,
      onClick: updateDimensions(newWidth, newHeight)
    }, Math.round(scale), "%");
  })))));
};

var sizeUnitControlAtts = {
  width: {
    type: 'integer',
    default: 0
  },
  height: {
    type: 'integer',
    default: 0
  },
  naturalWidth: {
    type: 'integer',
    default: 0
  },
  naturalHeight: {
    type: 'integer',
    default: 0
  },
  scaledWidth: {
    type: 'integer',
    default: 0
  },
  scaledHeight: {
    type: 'integer',
    default: 0
  },
  ratio: {
    type: 'number',
    default: 1
  },
  naturalRatio: {
    type: 'number',
    default: 1
  },
  unit: {
    type: 'string',
    default: '%'
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SizeUnitControl);

/***/ }),

/***/ "./packages/block-controls/size-unit-control/style.scss":
/*!**************************************************************!*\
  !*** ./packages/block-controls/size-unit-control/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/block-controls/spacing-selector/index.js":
/*!***********************************************************!*\
  !*** ./packages/block-controls/spacing-selector/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../block-components */ "./packages/block-components/index.js");

var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;


var SpacingSelector = function SpacingSelector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding Before",
    value: attributes.paddingBefore,
    onChange: function onChange(paddingBefore) {
      return setAttributes({
        paddingBefore: paddingBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacingOptions"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding After",
    value: attributes.paddingAfter,
    onChange: function onChange(paddingAfter) {
      return setAttributes({
        paddingAfter: paddingAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacingOptions"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin Before",
    value: attributes.marginBefore,
    onChange: function onChange(marginBefore) {
      return setAttributes({
        marginBefore: marginBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacingOptions"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin After",
    value: attributes.marginAfter,
    onChange: function onChange(marginAfter) {
      return setAttributes({
        marginAfter: marginAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacingOptions"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingSelector);

/***/ }),

/***/ "./packages/block-controls/spacing-selector/spacing-options.js":
/*!*********************************************************************!*\
  !*** ./packages/block-controls/spacing-selector/spacing-options.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var spacingOptions = [{
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
/* harmony default export */ __webpack_exports__["default"] = (spacingOptions);

/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/index.js":
/*!***************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/index.js ***!
  \***************************************************************/
/*! exports provided: SpacingUnitControlMarginVertical, SpacingUnitControlPaddingVertical, SpacingUnitControlVertical, SpacingPanel, SpacingPanelVertical, SpacingUnitControlPaddingHorizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spacing_unit_control_margin_vertical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spacing-unit-control-margin-vertical */ "./packages/block-controls/spacing-unit-control/spacing-unit-control-margin-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingUnitControlMarginVertical", function() { return _spacing_unit_control_margin_vertical__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _spacing_unit_control_padding_vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spacing-unit-control-padding-vertical */ "./packages/block-controls/spacing-unit-control/spacing-unit-control-padding-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingUnitControlPaddingVertical", function() { return _spacing_unit_control_padding_vertical__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _spacing_unit_control_vertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing-unit-control-vertical */ "./packages/block-controls/spacing-unit-control/spacing-unit-control-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingUnitControlVertical", function() { return _spacing_unit_control_vertical__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _spacing_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spacing-panel */ "./packages/block-controls/spacing-unit-control/spacing-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingPanel", function() { return _spacing_panel__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _spacing_panel_vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing-panel-vertical */ "./packages/block-controls/spacing-unit-control/spacing-panel-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingPanelVertical", function() { return _spacing_panel_vertical__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _spacing_unit_control_padding_horizontal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spacing-unit-control-padding-horizontal */ "./packages/block-controls/spacing-unit-control/spacing-unit-control-padding-horizontal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingUnitControlPaddingHorizontal", function() { return _spacing_unit_control_padding_horizontal__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/spacing-panel-vertical.js":
/*!********************************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/spacing-panel-vertical.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./packages/block-controls/spacing-unit-control/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./packages/block-controls/index.js");

var _wp$components = wp.components,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl;



var SpacingPanelVertical = function SpacingPanelVertical(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["LayoutPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["SpacingUnitControlVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingPanelVertical);

/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/spacing-panel.js":
/*!***********************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/spacing-panel.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody;

var SpacingPanel = function SpacingPanel(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingPanel);

/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/spacing-unit-control-margin-vertical.js":
/*!**********************************************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/spacing-unit-control-margin-vertical.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./packages/block-controls/spacing-unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _wp$components = wp.components,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl;


var SpacingUnitControlMarginVertical = function SpacingUnitControlMarginVertical(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, {
    className: "wsu-block-control__spacing-panel-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Margin Top",
    value: attributes.inlineStyle.marginTop,
    onChange: function onChange(marginTop) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'marginTop': marginTop
        })
      });
    },
    placeholder: ''
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Margin Bottom",
    value: attributes.inlineStyle.marginBottom,
    onChange: function onChange(marginBottom) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'marginBottom': marginBottom
        })
      });
    },
    placeholder: ''
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingUnitControlMarginVertical);

/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/spacing-unit-control-padding-horizontal.js":
/*!*************************************************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/spacing-unit-control-padding-horizontal.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _wp$components = wp.components,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl;

var SpacingUnitControlPaddingHorizontal = function SpacingUnitControlPaddingHorizontal(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, {
    className: "wsu-block-control__spacing-panel-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Left",
    value: attributes.inlineStyle.paddingLeft,
    onChange: function onChange(paddingLeft) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingLeft': paddingLeft
        })
      });
    },
    placeholder: ''
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Right",
    value: attributes.inlineStyle.paddingRight,
    onChange: function onChange(paddingRight) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingRight': paddingRight
        })
      });
    },
    placeholder: ''
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingUnitControlPaddingHorizontal);

/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/spacing-unit-control-padding-vertical.js":
/*!***********************************************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/spacing-unit-control-padding-vertical.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _wp$components = wp.components,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl;

var SpacingUnitControlPaddingVertical = function SpacingUnitControlPaddingVertical(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, {
    className: "wsu-block-control__spacing-panel-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Top",
    value: attributes.inlineStyle.paddingTop,
    onChange: function onChange(paddingTop) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingTop': paddingTop
        })
      });
    },
    placeholder: ''
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Padding Bottom",
    value: attributes.inlineStyle.paddingBottom,
    onChange: function onChange(paddingBottom) {
      return setAttributes({
        inlineStyle: _objectSpread(_objectSpread({}, attributes.inlineStyle), {}, {
          'paddingBottom': paddingBottom
        })
      });
    },
    placeholder: ''
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingUnitControlPaddingVertical);

/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/spacing-unit-control-vertical.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/spacing-unit-control-vertical.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./packages/block-controls/spacing-unit-control/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _wp$components = wp.components,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl;



var SpacingUnitControlVertical = function SpacingUnitControlVertical(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["SpacingUnitControlMarginVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["SpacingUnitControlPaddingVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingUnitControlVertical);

/***/ }),

/***/ "./packages/block-controls/spacing-unit-control/style.scss":
/*!*****************************************************************!*\
  !*** ./packages/block-controls/spacing-unit-control/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-accordion-group/editor/block.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/content-accordion-group/editor/block.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-accordion-group/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-accordion-group/editor/save.js");
/* harmony import */ var _block_controls_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/index */ "./packages/block-controls/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-accordion-group/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;




registerBlockType("wsuwp/accordion-group", {
  title: "Accordion Group",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "2",
    width: "16",
    height: "4",
    rx: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "10",
    width: "16",
    height: "4",
    rx: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "18",
    width: "16",
    height: "4",
    rx: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 1C20.4477 1 20 1.44772 20 2V3H19C18.4477 3 18 3.44772 18 4C18 4.55228 18.4477 5 19 5H20V6C20 6.55228 20.4477 7 21 7C21.5523 7 22 6.55228 22 6V5H23C23.5523 5 24 4.55229 24 4C24 3.44772 23.5523 3 23 3H22V2C22 1.44772 21.5523 1 21 1Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 9C20.4477 9 20 9.44772 20 10V11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H20V14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14V13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H22V10C22 9.44772 21.5523 9 21 9Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 17C20.4477 17 20 17.4477 20 18V19H19C18.4477 19 18 19.4477 18 20C18 20.5523 18.4477 21 19 21H20V22C20 22.5523 20.4477 23 21 23C21.5523 23 22 22.5523 22 22V21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H22V18C22 17.4477 21.5523 17 21 17Z"
  })),
  attributes: _objectSpread(_objectSpread({
    source: {
      type: 'string',
      default: 'insert'
    }
  }, _block_controls_index__WEBPACK_IMPORTED_MODULE_4__["globalBlockAtts"]), _block_controls_index__WEBPACK_IMPORTED_MODULE_4__["feedControlAtts"]),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-accordion-group/editor/edit.js":
/*!****************************************************************!*\
  !*** ./packages/blocks/content-accordion-group/editor/edit.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var WsuAccordion = wsu_wds.components.WsuAccordion;


var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var sourceOptions = [{
    label: 'Insert',
    value: 'insert'
  }, {
    label: 'Feed',
    value: 'feed'
  }];

  if ('insert' == attributes.source) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "General"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Source",
      value: attributes.source,
      onChange: function onChange(source) {
        return setAttributes({
          source: source
        });
      },
      options: sourceOptions
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
      attributes: attributes,
      setAttributes: setAttributes
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-c-accordion-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ['wsuwp/accordion'],
      templateLock: false
    })));
  } else {
    var placeholders = [];
    var count = attributes.count < 5 ? attributes.count : 5;

    for (var i = 0; i < count; i++) {
      placeholders.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuAccordion, {
        title: "Feed: Accordion Title Here"
      }));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "General"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Source",
      value: attributes.source,
      onChange: function onChange(source) {
        return setAttributes({
          source: source
        });
      },
      options: sourceOptions
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["FeedControls"], {
      attributes: attributes,
      setAttributes: setAttributes
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Style",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingSelector"], {
      attributes: attributes,
      setAttributes: setAttributes
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-c-accordion-group"
    }, placeholders));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-accordion-group/editor/save.js":
/*!****************************************************************!*\
  !*** ./packages/blocks/content-accordion-group/editor/save.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var save = function save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./packages/blocks/content-accordion-group/editor/style.scss":
/*!*******************************************************************!*\
  !*** ./packages/blocks/content-accordion-group/editor/style.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-accordion/editor/block.js":
/*!***********************************************************!*\
  !*** ./packages/blocks/content-accordion/editor/block.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-accordion/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-accordion/editor/save.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-accordion/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;




registerBlockType("wsuwp/accordion", {
  title: "Accordion Item",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "2",
    width: "16",
    height: "4",
    rx: "2",
    "fill-opacity": "0.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "10",
    width: "16",
    height: "4",
    rx: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "18",
    width: "16",
    height: "4",
    rx: "2",
    "fill-opacity": "0.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 1C20.4477 1 20 1.44772 20 2V3H19C18.4477 3 18 3.44772 18 4C18 4.55228 18.4477 5 19 5H20V6C20 6.55228 20.4477 7 21 7C21.5523 7 22 6.55228 22 6V5H23C23.5523 5 24 4.55228 24 4C24 3.44772 23.5523 3 23 3H22V2C22 1.44772 21.5523 1 21 1Z",
    "fill-opacity": "0.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 9C20.4477 9 20 9.44772 20 10V11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H20V14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14V13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H22V10C22 9.44772 21.5523 9 21 9Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 17C20.4477 17 20 17.4477 20 18V19H19C18.4477 19 18 19.4477 18 20C18 20.5523 18.4477 21 19 21H20V22C20 22.5523 20.4477 23 21 23C21.5523 23 22 22.5523 22 22V21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H22V18C22 17.4477 21.5523 17 21 17Z",
    "fill-opacity": "0.2"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    title: {
      type: 'string',
      default: ''
    },
    tag: {
      type: 'string',
      default: 'h2'
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-accordion/editor/edit.js":
/*!**********************************************************!*\
  !*** ./packages/blocks/content-accordion/editor/edit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var WsuAccordion = wsu_wds.components.WsuAccordion;


var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter title here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuAccordion, {
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      className: "wsu-c-accordion__title-control",
      value: attributes.title,
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Title Text Here ..."
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-accordion/editor/save.js":
/*!**********************************************************!*\
  !*** ./packages/blocks/content-accordion/editor/save.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var save = function save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./packages/blocks/content-accordion/editor/style.scss":
/*!*************************************************************!*\
  !*** ./packages/blocks/content-accordion/editor/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-button/editor/block.js":
/*!********************************************************!*\
  !*** ./packages/blocks/content-button/editor/block.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-button/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-button/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;



registerBlockType("wsuwp/button", {
  title: "Button",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M5 11C5 9.89543 5.89543 9 7 9H17C18.1046 9 19 9.89543 19 11V12C19 13.1046 18.1046 14 17 14H7C5.89543 14 5 13.1046 5 12V11Z",
    fill: "white"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 7H17C19.2091 7 21 8.79086 21 11V12C21 14.2091 19.2091 16 17 16H7C4.79086 16 3 14.2091 3 12V11C3 8.79086 4.79086 7 7 7ZM7 9C5.89543 9 5 9.89543 5 11V12C5 13.1046 5.89543 14 7 14H17C18.1046 14 19 13.1046 19 12V11C19 9.89543 18.1046 9 17 9H7Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    buttonText: {
      type: 'string',
      default: ''
    },
    buttonUrl: {
      type: 'string',
      default: ''
    },
    style: {
      type: 'string',
      default: 'default'
    },
    shape: {
      type: 'string',
      default: 'default'
    },
    color: {
      type: 'string',
      default: 'default'
    },
    size: {
      type: 'string',
      default: 'default'
    },
    buttonAlign: {
      type: 'string',
      default: 'default'
    },
    iconBefore: {
      type: 'string',
      default: ''
    },
    iconAfter: {
      type: 'string',
      default: ''
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-button/editor/edit.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-button/editor/edit.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var WsuButton = wsu_wds.components.WsuButton;



var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: attributes.buttonAlign,
    onChange: function onChange(buttonAlign) {
      return setAttributes({
        buttonAlign: buttonAlign
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Text",
    value: attributes.buttonText,
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    },
    placeholder: 'Enter button text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Button Link Destination"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
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
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Icon",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SelectIcon"], {
    label: "Icon Before",
    icon: attributes.iconBefore,
    onchange: function onchange(value) {
      setAttributes({
        iconBefore: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SelectIcon"], {
    label: "Icon After",
    icon: attributes.iconAfter,
    onchange: function onchange(value) {
      setAttributes({
        iconAfter: value
      });
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
      label: 'Link',
      value: 'link'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Shape",
    value: attributes.shape,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Square',
      value: 'square'
    }, {
      label: 'Rounded',
      value: 'round'
    }],
    onChange: function onChange(shape) {
      return setAttributes({
        shape: shape
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Color",
    value: attributes.color,
    onChange: function onChange(color) {
      return setAttributes({
        color: color
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Crimson',
      value: 'crimson'
    }, {
      label: 'White',
      value: 'white'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Size",
    value: attributes.size,
    onChange: function onChange(size) {
      return setAttributes({
        size: size
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Large',
      value: 'large'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Alignment",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: attributes.buttonAlign,
    onChange: function onChange(buttonAlign) {
      return setAttributes({
        buttonAlign: buttonAlign
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuButton, {
    buttonText: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: attributes.buttonText,
      onChange: function onChange(buttonText) {
        return setAttributes({
          buttonText: buttonText
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Add Button Text"
    }),
    buttonUrl: attributes.buttonUrl,
    shape: attributes.shape,
    size: attributes.size,
    color: attributes.color,
    setAttributes: setAttributes,
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-button/editor/style.scss":
/*!**********************************************************!*\
  !*** ./packages/blocks/content-button/editor/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-callout/editor/block.js":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-callout/editor/block.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-callout/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-callout/editor/save.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-callout/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;




registerBlockType("wsuwp/callout", {
  title: "Callout",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 9H7V7H17V9Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10 11H7V10H10V11Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 13H7V12H17V13Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 15H7V14H17V15Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13 17H7V16H13V17Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    imageSrc: {
      type: 'string',
      default: ''
    },
    imageAlt: {
      type: 'string',
      default: ''
    },
    imageSize: {
      type: 'string',
      default: 'default'
    },
    shape: {
      type: 'string',
      default: 'default'
    },
    link: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: ''
    },
    tag: {
      type: 'string',
      default: 'h3'
    },
    description: {
      type: 'string',
      default: ''
    },
    layout: {
      type: 'string',
      default: 'default'
    },
    verticalAlign: {
      type: 'string',
      default: 'default'
    },
    isNotched: {
      type: 'boolean',
      default: false
    },
    buttonText: {
      type: 'string',
      default: ''
    },
    buttonUrl: {
      type: 'string',
      default: ''
    },
    videoSrc: {
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
    decorators: {
      type: 'array',
      default: []
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-callout/editor/edit.js":
/*!********************************************************!*\
  !*** ./packages/blocks/content-callout/editor/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wsuwebteam_web_design_system_packages_components_content_callout_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wsuwebteam/web-design-system/packages/components/content-callout/style.scss */ "./node_modules/@wsuwebteam/web-design-system/packages/components/content-callout/style.scss");
/* harmony import */ var _wsuwebteam_web_design_system_packages_components_content_callout_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wsuwebteam_web_design_system_packages_components_content_callout_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;
var WsuCallout = wsu_wds.components.WsuCallout;



var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var shapeOptions = [{
    label: 'Default',
    value: 'default'
  }, {
    label: 'square',
    value: 'square'
  }, {
    label: 'portrait',
    value: 'portrait'
  }, {
    label: 'landscape',
    value: 'landscape'
  }, {
    label: 'video',
    value: 'video'
  }, {
    label: 'circle',
    value: 'circle'
  }];
  var imageSizeOptions = [{
    label: 'Default',
    value: 'default'
  }, {
    label: 'xsmall',
    value: 'xsmall'
  }, {
    label: 'small',
    value: 'small'
  }, {
    label: 'medium',
    value: 'medium'
  }, {
    label: 'large',
    value: 'large'
  }];
  var layoutOptions = [{
    label: 'Default',
    value: 'default'
  }, {
    label: 'horizontal',
    value: 'horizontal'
  }, {
    label: 'vertical',
    value: 'vertical'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Link",
    value: attributes.link,
    onChange: function onChange(link) {
      return setAttributes({
        link: link
      });
    },
    placeholder: 'Enter URL here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Text",
    value: attributes.buttonText,
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    },
    placeholder: 'Enter button text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button URL",
    value: attributes.buttonUrl,
    onChange: function onChange(buttonUrl) {
      return setAttributes({
        buttonUrl: buttonUrl
      });
    },
    placeholder: 'Enter button url here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Video Embed URL",
    value: attributes.videoSrc,
    onChange: function onChange(videoSrc) {
      return setAttributes({
        videoSrc: videoSrc
      });
    },
    placeholder: 'Enter Video EMBED url here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Image",
    initialOpen: false
  }, attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the image to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imgDimensions,
    value: attributes.imgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        imgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Add/Replace Card Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Layout",
    value: attributes.layout,
    onChange: function onChange(layout) {
      return setAttributes({
        layout: layout
      });
    },
    options: layoutOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Image Size",
    value: attributes.imageSize,
    onChange: function onChange(imageSize) {
      return setAttributes({
        imageSize: imageSize
      });
    },
    options: imageSizeOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Shape",
    value: attributes.shape,
    onChange: function onChange(shape) {
      return setAttributes({
        shape: shape
      });
    },
    options: shapeOptions
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuCallout, {
    imageAlt: attributes.imageAlt,
    imageSize: attributes.imageSize,
    imageSrc: attributes.imageSrc,
    shape: attributes.shape,
    link: attributes.link,
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      className: "wsu-c-callout__title-control",
      value: attributes.title,
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Title Text Here"
    }),
    tag: attributes.tag,
    description: attributes.description,
    layout: attributes.layout,
    verticalAlign: attributes.verticalAlign,
    isNotched: attributes.isNotched,
    buttonText: attributes.buttonText,
    buttonUrl: attributes.buttonUrl,
    videoSrc: attributes.videoSrc
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-callout/editor/save.js":
/*!********************************************************!*\
  !*** ./packages/blocks/content-callout/editor/save.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var saveColumn = function saveColumn(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (saveColumn);

/***/ }),

/***/ "./packages/blocks/content-callout/editor/style.scss":
/*!***********************************************************!*\
  !*** ./packages/blocks/content-callout/editor/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-card/editor/block.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-card/editor/block.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-card/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-card/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;
 //import save from "./save";



registerBlockType("wsuwp/card", {
  title: "Card",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 1H18C19.6569 1 21 2.34314 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4C3 2.34315 4.34314 1 6 1ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3H6ZM8.95601 11.5951C8.35989 10.8966 8 9.99032 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 9.99032 15.6401 10.8966 15.044 11.5951C15.0769 11.6108 15.1094 11.6268 15.1416 11.643C15.9004 12.0259 16.6166 12.6548 16.9003 13.5193C16.9664 13.7206 17 13.931 17 14.1429V17C17 18.1046 16.1046 19 15 19H9C7.89543 19 7 18.1046 7 17V14.1429C7 13.931 7.03365 13.7206 7.09969 13.5193C7.38336 12.6548 8.09958 12.0259 8.85842 11.643C8.89059 11.6268 8.92312 11.6108 8.95601 11.5951ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11ZM9 17H15V14.1429C14.875 13.7619 14.1 13 12 13C9.9 13 9.125 13.7619 9 14.1429V17Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    cardType: {
      type: 'string',
      default: 'default'
    },
    imageCaption: {
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
    preTitle: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: ''
    },
    subtitle: {
      type: 'string',
      default: ''
    },
    positionTitle: {
      type: 'string',
      default: ''
    },
    description: {
      type: 'string',
      default: ''
    },
    link: {
      type: 'string',
      default: ''
    },
    asModal: {
      type: 'boolean',
      default: false
    },
    buttonText: {
      type: 'string',
      default: ''
    },
    buttonUrl: {
      type: 'string',
      default: ''
    },
    showTags: {
      type: 'boolean',
      default: false
    },
    showAuthor: {
      type: 'boolean',
      default: false
    },
    date: {
      type: 'string',
      default: ''
    },
    showTitle: {
      type: 'boolean',
      default: false
    },
    showImg: {
      type: 'boolean',
      default: false
    },
    source: {
      type: 'string',
      default: ''
    },
    sourcePostType: {
      type: 'string',
      default: 'post'
    },
    sourceTaxonomy: {
      type: 'string',
      default: 'category'
    },
    sourceTerms: {
      type: 'string',
      default: ''
    },
    sourceLogic: {
      type: 'string',
      default: 'OR'
    },
    sourceOffset: {
      type: 'number',
      default: 0
    },
    sourceExclude: {
      type: 'string',
      default: ''
    },
    sourceCount: {
      type: 'number',
      default: 3
    },
    addressLine1: {
      type: 'string',
      default: ''
    },
    addressLine2: {
      type: 'string',
      default: ''
    },
    phoneNumber: {
      type: 'string',
      default: ''
    },
    email: {
      type: 'string',
      default: ''
    },
    website: {
      type: 'string',
      default: ''
    },
    authorName: {
      type: 'string',
      default: ''
    },
    authorUrl: {
      type: 'string',
      default: ''
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-card/editor/edit.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/content-card/editor/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-card/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/card-type-controls */ "./packages/block-controls/card-type-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;
var WsuCard = wsu_wds.components.WsuCard;





var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var cardTypes = [{
    value: 'default',
    label: 'Default'
  }, {
    value: 'person',
    label: 'Person'
  }, {
    value: 'news',
    label: 'News'
  }, {
    value: 'custom',
    label: 'Custom'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Type",
    options: cardTypes,
    onChange: function onChange(cardType) {
      setAttributes({
        cardType: cardType
      });
    },
    value: attributes.cardType
  }), attributes.cardType == 'default' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["DefaultCardControls"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.cardType == 'person' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["PersonCardControls"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.cardType == 'news' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["NewsCardControls"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.cardType == 'custom' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["CustomCardControls"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Image",
    initialOpen: false
  }, attributes.imgSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the image to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.imgSrc,
    dimensions: attributes.imgDimensions,
    value: attributes.imgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        imgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imgSrc: media.url
      });
    },
    allowedTypes: "image/*",
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Add/Replace Card Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), attributes.cardType == 'default' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["DefaultCard"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.cardType == 'person' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["PersonCard"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.cardType == 'news' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["NewsCard"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.cardType == 'custom' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_card_type_controls__WEBPACK_IMPORTED_MODULE_4__["CustomCard"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-card/editor/style.scss":
/*!********************************************************!*\
  !*** ./packages/blocks/content-card/editor/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-cards/editor/block.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-cards/editor/block.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-cards/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-cards/editor/save.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-cards/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;




registerBlockType("wsuwp/cards", {
  title: "Cards",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M7 5C7 4.44772 7.44772 4 8 4H20C20.5523 4 21 4.44772 21 5V21C21 21.5523 20.5523 22 20 22H8C7.44772 22 7 21.5523 7 21V5Z",
    fill: "white"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8 2H20C21.6569 2 23 3.34314 23 5V21C23 22.6569 21.6569 24 20 24H8C6.34315 24 5 22.6569 5 21V5C5 3.34315 6.34314 2 8 2ZM8 4C7.44772 4 7 4.44772 7 5V21C7 21.5523 7.44772 22 8 22H20C20.5523 22 21 21.5523 21 21V5C21 4.44772 20.5523 4 20 4H8Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M3 3C3 2.44772 3.44772 2 4 2H16C16.5523 2 17 2.44772 17 3V19C17 19.5523 16.5523 20 16 20H4C3.44772 20 3 19.5523 3 19V3Z",
    fill: "white"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M4 0H16C17.6569 0 19 1.34314 19 3V19C19 20.6569 17.6569 22 16 22H4C2.34315 22 1 20.6569 1 19V3C1 1.34315 2.34314 0 4 0ZM4 2C3.44772 2 3 2.44772 3 3V19C3 19.5523 3.44772 20 4 20H16C16.5523 20 17 19.5523 17 19V3C17 2.44772 16.5523 2 16 2H4Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14 8C14 10.2091 12.2091 12 10 12C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8ZM10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 18C5.89543 18 5 17.1046 5 16V13.1429C5 12.931 5.03365 12.7206 5.09969 12.5193C5.38336 11.6548 6.09958 11.0259 6.85842 10.643C7.67298 10.232 8.71659 10 10 10C11.2834 10 12.327 10.232 13.1416 10.643C13.9004 11.0259 14.6166 11.6548 14.9003 12.5193C14.9664 12.7206 15 12.931 15 13.1429V16C15 17.1046 14.1046 18 13 18H7ZM13 16H7V13.1429C7.125 12.7619 7.9 12 10 12C12.1 12 12.875 12.7619 13 13.1429V16Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    asModal: {
      type: 'boolean',
      default: false
    },
    cardsPerRow: {
      type: 'number',
      default: 0
    },
    showTags: {
      type: 'boolean',
      default: false
    },
    showAuthor: {
      type: 'boolean',
      default: false
    },
    showPublishDate: {
      type: 'boolean',
      default: false
    },
    showTitle: {
      type: 'boolean',
      default: false
    },
    showImg: {
      type: 'boolean',
      default: false
    },
    source: {
      type: 'string',
      default: ''
    },
    sourcePostType: {
      type: 'string',
      default: 'post'
    },
    sourceTaxonomy: {
      type: 'string',
      default: 'category'
    },
    sourceTerms: {
      type: 'string',
      default: ''
    },
    sourceLogic: {
      type: 'string',
      default: 'OR'
    },
    sourceOffset: {
      type: 'number',
      default: 0
    },
    sourceExclude: {
      type: 'string',
      default: ''
    },
    sourceCount: {
      type: 'number',
      default: 3
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-cards/editor/edit.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-cards/editor/edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls_block_options_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls/block-options-select */ "./packages/block-controls/block-options-select/index.js");
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;




var getCardTemplate = function getCardTemplate(cardsPerRow) {
  cardsPerRow = parseInt(cardsPerRow);

  switch (cardsPerRow) {
    case 2:
      return [['wsuwp/card', {}, []], ['wsuwp/card', {}, []]];

    case 3:
      return [['wsuwp/card', {}, []], ['wsuwp/card', {}, []], ['wsuwp/card', {}, []]];

    case 4:
      return [['wsuwp/card', {}, []], ['wsuwp/card', {}, []], ['wsuwp/card', {}, []], ['wsuwp/card', {}, []]];

    default:
      return [['wsuwp/card', {}, []]];
  }
};

var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var options = [{
    label: '1 Card',
    value: 1,
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      fillRule: "evenodd",
      d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
    }))
  }, {
    label: '2 Cards',
    value: 2,
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      fillRule: "evenodd",
      d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
    }))
  }, {
    label: '3 Cards',
    value: 3,
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      fillRule: "evenodd",
      d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
    }))
  }, {
    label: '4 Cards',
    value: 4,
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      fillRule: "evenodd",
      d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
    }))
  }];

  if (!attributes.cardsPerRow) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_block_options_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
      options: options,
      onSelect: function onSelect(option) {
        setAttributes({
          'cardsPerRow': option.value
        });
      },
      title: "Cards Per Row"
    });
  } else if (attributes.source) {} else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'wsu-g-cards__wrapper wsu-g-cards--' + attributes.cardsPerRow
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: getCardTemplate(attributes.cardsPerRow),
      allowedBlocks: ['wsuwp/card']
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-c-cards__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    allowedBlocks: ['wsuwp/card']
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-cards/editor/save.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-cards/editor/save.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var cardsSave = function cardsSave(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (cardsSave);

/***/ }),

/***/ "./packages/blocks/content-cards/editor/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-cards/editor/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-column/editor/block.js":
/*!********************************************************!*\
  !*** ./packages/blocks/content-column/editor/block.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-column/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-column/editor/save.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _block_controls___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../block-controls/ */ "./packages/block-controls/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-column/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;





var TEMPLATE = [['core/heading', {
  width: 33.33
}, []]];
registerBlockType("wsuwp/column", {
  title: "WSU Column",
  parent: ['core/columns-single'],
  category: "common",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z"
  })),
  attributes: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__["default"]), _block_controls___WEBPACK_IMPORTED_MODULE_5__["backgroundImageControlAtts"]), _block_controls___WEBPACK_IMPORTED_MODULE_5__["isNotchedControlAtts"]), {}, {
    format: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    },
    decorators: {
      type: 'array',
      default: []
    },
    style: {
      type: 'object',
      default: {}
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-column/editor/edit.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-column/editor/edit.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-column/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_controls_spacing_unit_control_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/spacing-unit-control/index */ "./packages/block-controls/spacing-unit-control/index.js");

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var WsuColumn = wsu_wds.components.WsuColumn;
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["BackgroundOptionsPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["BackgroundImageControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["LayoutPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["MarginVerticalControlGroup"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["PaddingVerticalControlGroup"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["MinHeightControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["EmOptionsPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["IsNotchedControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuColumn, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (editColumn);

/***/ }),

/***/ "./packages/blocks/content-column/editor/save.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-column/editor/save.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var saveColumn = function saveColumn(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (saveColumn);

/***/ }),

/***/ "./packages/blocks/content-column/editor/style.scss":
/*!**********************************************************!*\
  !*** ./packages/blocks/content-column/editor/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-columns/editor/block.js":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-columns/editor/block.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-columns/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-columns/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-columns/editor/save.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Icon = wp.components.Icon;




registerBlockType("wsuwp/columns", {
  title: "Columns",
  category: "layout",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
    layout: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    },
    imageCaption: {
      type: 'string',
      default: ''
    },
    imgSrc: {
      type: 'string',
      default: ''
    },
    verticalSpacing: {
      type: 'string',
      default: 'default'
    },
    decorators: {
      type: 'array',
      default: []
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  transforms: {
    from: [{
      type: 'block',
      blocks: ['wsuwp/columns-halves'],
      transform: function transform(attributes, innerBlocks) {
        return createBlock('wsuwp/columns', {
          layout: 'halves'
        }, innerBlocks);
      }
    }]
  }
});

/***/ }),

/***/ "./packages/blocks/content-columns/editor/edit-options.js":
/*!****************************************************************!*\
  !*** ./packages/blocks/content-columns/editor/edit-options.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var FormatOption = function FormatOption(format, props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "wsu-c-columns-editor__option",
    onClick: function onClick(event) {
      return props.onClick({
        format: format.slug
      });
    }
  }, format.icon, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-c-columns-editor__option__label"
  }, format.label));
};

var EditOptions = function EditOptions(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-c-columns-editor__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-c-columns-editor__title"
  }, "Select Column Layout"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "wsu-c-columns-editor__options"
  }, props.formats.map(function (format) {
    return FormatOption(format, props);
  })));
};

EditOptions.defaultProps = {
  formats: []
};
/* harmony default export */ __webpack_exports__["default"] = (EditOptions);

/***/ }),

/***/ "./packages/blocks/content-columns/editor/edit.js":
/*!********************************************************!*\
  !*** ./packages/blocks/content-columns/editor/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-options */ "./packages/blocks/content-columns/editor/edit-options.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;


var columnFormats = [{
  label: 'Single',
  slug: 'single',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z",
    fill: "black"
  })),
  template: [['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
}, {
  label: 'Halves',
  slug: 'halves',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z",
    fill: "black"
  })),
  template: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
}, {
  label: 'Thirds',
  slug: 'thirds',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  template: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
}, {
  label: 'Quarters',
  slug: 'quarters',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 13.4696 40.7893 12.9609 40.4142 12.5858C40.0391 12.2107 39.5304 12 39 12H9C8.46957 12 7.96086 12.2107 7.58579 12.5858C7.21071 12.9609 7 13.4696 7 14V34C7 34.5304 7.21071 35.0391 7.58579 35.4142C7.96086 35.7893 8.46957 36 9 36H39C39.5304 36 40.0391 35.7893 40.4142 35.4142C40.7893 35.0391 41 34.5304 41 34V14ZM31 34H25V14H31V34ZM33 34V14H39V34H33ZM23 34H17V14H23V34ZM15 34H9V14H15V34Z",
    fill: "black"
  })),
  template: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
}, {
  label: 'Sidebar Right',
  slug: 'sidebar-right',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z",
    fill: "black"
  })),
  template: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
}, {
  label: 'Sidebar Left',
  slug: 'sidebar-left',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z",
    fill: "black"
  })),
  template: [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
}];

var LayoutOption = function LayoutOption(layout, attributes, setAttributes) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "wsu-c-columns-editor__option",
    onClick: function onClick(event) {
      setAttributes({
        layout: layout.slug
      });
    }
  }, layout.icon, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-c-columns-editor__option__label"
  }, layout.label));
};

var getColumnsTemplate = function getColumnsTemplate(attributes) {
  var slug = attributes.layout ? attributes.layout : 'single';
  var template = [];
  columnFormats.forEach(function (layout) {
    if (slug == layout.slug) {
      template = layout.template;
    }
  });
  return template;
};

var ColumnsEdit = function ColumnsEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  {
    if (!attributes.layout) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "wsu-c-columns-editor__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "wsu-c-columns-editor__title"
      }, "Select Column Layout"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
        className: "wsu-c-columns-editor__options"
      }, columnFormats.map(function (layout) {
        return LayoutOption(layout, attributes, setAttributes);
      })));
    } else {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["DecoratorControl"], {
        decorators: attributes.decorators,
        onChange: function onChange(decoratorArray) {
          setAttributes({
            decorators: decoratorArray
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
        title: "Style",
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["SpacingPanelVertical"], {
        attributes: attributes,
        setAttributes: setAttributes
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: 'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + attributes.layout
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
        template: getColumnsTemplate(attributes),
        templateLock: "insert",
        allowedBlocks: ['wsuwp/column']
      })));
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ColumnsEdit);

/***/ }),

/***/ "./packages/blocks/content-columns/editor/save.js":
/*!********************************************************!*\
  !*** ./packages/blocks/content-columns/editor/save.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var ColumnsSave = function ColumnsSave(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (ColumnsSave);

/***/ }),

/***/ "./packages/blocks/content-columns/editor/style.scss":
/*!***********************************************************!*\
  !*** ./packages/blocks/content-columns/editor/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-group/editor/block.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-group/editor/block.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-group/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-group/editor/save.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _block_controls___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../block-controls/ */ "./packages/block-controls/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;




registerBlockType("wsuwp/group", {
  title: "WSU Content Group",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z"
  })),
  attributes: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__["default"]), _block_controls___WEBPACK_IMPORTED_MODULE_5__["fullWidthControlAtts"]), _block_controls___WEBPACK_IMPORTED_MODULE_5__["limitContentWidthControlAtts"]), _block_controls___WEBPACK_IMPORTED_MODULE_5__["backgroundColorControlAtts"]), _block_controls___WEBPACK_IMPORTED_MODULE_5__["indentControlAtts"]), _block_controls___WEBPACK_IMPORTED_MODULE_5__["isNotchedControlAtts"]), {}, {
    decorators: {
      type: 'array',
      default: []
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-group/editor/edit.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-group/editor/edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-group/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var PanelBody = wp.components.PanelBody;
var InspectorControls = wp.blockEditor.InspectorControls;




var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["DisplayOptionsPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["FullWidthControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["LimitContentWidthControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["BackgroundOptionsPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["BackgroundColorControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["LayoutPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["MarginVerticalControlGroup"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["PaddingVerticalControlGroup"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["PaddingHorizontalControlGroup"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["MaxWidthControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["IndentControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["EmOptionsPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["IsNotchedControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-c-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-group/editor/save.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-group/editor/save.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var save = function save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./packages/blocks/content-group/editor/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-group/editor/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-heading/editor/block.js":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-heading/editor/block.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-heading/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-heading/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;


 //import save from "./save";



registerBlockType("wsuwp/heading", {
  title: "Heading",
  category: "content",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["heading"],
  attributes: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__["default"]), _block_controls__WEBPACK_IMPORTED_MODULE_2__["fontSizeControlAtts"]), _block_controls__WEBPACK_IMPORTED_MODULE_2__["fontWeightControlAtts"]), _block_controls__WEBPACK_IMPORTED_MODULE_2__["indentControlAtts"]), {}, {
    align: {
      "type": "string"
    },
    content: {
      "type": "string",
      "default": ""
    },
    link: {
      "type": "string",
      "default": ""
    },
    level: {
      "type": "number",
      "default": 2
    },
    style: {
      "type": "string",
      "default": 'default'
    },
    textAlign: {
      type: 'string',
      default: 'default'
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-heading/editor/edit.js":
/*!********************************************************!*\
  !*** ./packages/blocks/content-heading/editor/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading-level-icon */ "./packages/blocks/content-heading/editor/heading-level-icon.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var URLInputButton = wp.blockEditor.URLInputButton;
var PlainText = wp.blockEditor.PlainText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    DropdownMenu = _wp$components.DropdownMenu,
    Toolbar = _wp$components.Toolbar,
    BaseControl = _wp$components.BaseControl;
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls;
var WsuHeading = wsu_wds.components.WsuHeading;




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

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: 'Enter tile here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Header Link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    id: "header-link",
    className: 'wsu-c-block-content-header__link',
    value: attributes.link,
    onChange: function onChange(link, post) {
      return setAttributes({
        link: link
      });
    },
    placeholder: 'Enter URL here.',
    isFullWidth: true
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["DisplayOptionsPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Alignment"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: attributes.textAlign,
    onChange: function onChange(textAlign) {
      return setAttributes({
        textAlign: textAlign
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["FontSizeControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["FontWeightControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["IndentControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["LayoutPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["MarginVerticalControlGroup"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["PaddingVerticalControlGroup"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DropdownMenu, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      level: attributes.level
    }),
    label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      level: "1"
    }),
    controls: [{
      title: 'Level 2',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "2"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 2
        });
      }
    }, {
      title: 'Level 3',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "3"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 3
        });
      }
    }, {
      title: 'Level 4',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "4"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 4
        });
      }
    }, {
      title: 'Level 5',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "5"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 5
        });
      }
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: attributes.textAlign,
    onChange: function onChange(textAlign) {
      return setAttributes({
        textAlign: textAlign
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuHeading, {
    tag: 'h' + level,
    link: attributes.link,
    style: attributes.style,
    width: attributes.width,
    textAlign: attributes.textAlign
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: 'wsu-b-heading__text',
    value: attributes.content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    multiline: 'false',
    allowedFormats: [],
    placeholder: 'Add heading'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-heading/editor/heading-level-icon.js":
/*!**********************************************************************!*\
  !*** ./packages/blocks/content-heading/editor/heading-level-icon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadingLevelIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelIcon props.
 *
 * @typedef WPHeadingLevelIconProps
 *
 * @property {number}   level     The heading level to show an icon for.
 * @property {?boolean} isPressed Whether or not the icon should appear pressed; default: false.
 */

/**
 * Heading level icon.
 *
 * @param {WPHeadingLevelIconProps} props Component props.
 *
 * @return {?WPComponent} The icon.
 */

function HeadingLevelIcon(_ref) {
  var level = _ref.level,
      _ref$isPressed = _ref.isPressed,
      isPressed = _ref$isPressed === void 0 ? false : _ref$isPressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: levelToPath[level]
  }));
}

/***/ }),

/***/ "./packages/blocks/content-heading/editor/style.scss":
/*!***********************************************************!*\
  !*** ./packages/blocks/content-heading/editor/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-hero/editor/block.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-hero/editor/block.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-hero/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;
var Icon = wp.components.Icon;


registerBlockType("wsuwp/content-hero", {
  title: "Hero Banner",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Icon, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 6V18H22V6H2ZM1 4C0.447715 4 0 4.44772 0 5V19C0 19.5523 0.447716 20 1 20H23C23.5523 20 24 19.5523 24 19V5C24 4.44772 23.5523 4 23 4H1Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "3",
      y1: "8.5",
      x2: "9",
      y2: "8.5",
      stroke: "#555D66"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "3",
      y1: "10.5",
      x2: "11",
      y2: "10.5",
      stroke: "#555D66"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "3",
      y1: "12.5",
      x2: "11",
      y2: "12.5",
      stroke: "#555D66"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "3",
      y1: "15",
      x2: "8",
      y2: "15",
      stroke: "#555D66",
      strokeWidth: "2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
      clipPath: "url(#clip0)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M19.8962 14.6532L18.4399 13.0626H18.9982C19.1625 13.0626 19.3078 12.9747 19.377 12.833C19.4463 12.6917 19.4235 12.5296 19.3173 12.4103L17.893 10.8126H18.4197C18.5855 10.8126 18.735 10.7186 18.7999 10.5734C18.8641 10.4305 18.8338 10.2642 18.7226 10.1501L16.7125 8.085C16.6026 7.97162 16.3975 7.97162 16.2874 8.085L14.2771 10.1501C14.1659 10.2642 14.1358 10.4305 14.1998 10.5734C14.2647 10.7186 14.4143 10.8126 14.5802 10.8126H15.1069L13.6824 12.4106C13.5765 12.5298 13.5537 12.6917 13.6228 12.8332C13.6921 12.9747 13.8372 13.0626 14.0016 13.0626H14.56L13.1037 14.6532C12.9943 14.7726 12.9695 14.9361 13.0388 15.0797C13.1071 15.2212 13.2575 15.3126 13.4218 15.3126H15.9166V15.7424L15.3644 16.5932C15.2675 16.7802 15.4086 17.0003 15.6253 17.0003H17.3746C17.5913 17.0003 17.7324 16.7802 17.6354 16.5932L17.0833 15.7424V15.3126H19.5781C19.7424 15.3126 19.8927 15.2212 19.9611 15.0797C20.0304 14.9361 20.0056 14.7726 19.8962 14.6532Z",
      fill: "#555D66"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("clipPath", {
      id: "clip0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "13",
      y: "8",
      width: "7",
      height: "9",
      fill: "white"
    }))))
  }),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
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
      default: 'https://s3.wp.wsu.edu/uploads/sites/2438/2020/08/Coug-Logo-on-Chinook-crop_8520.jpg'
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
      default: 'boxed-background'
    },
    verticalSpacing: {
      type: 'string',
      default: 'default'
    },
    decorators: {
      type: 'array',
      default: []
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-hero/editor/edit.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/content-hero/editor/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-hero/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wsuwebteam_build_tools_js_helpers_ranges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/helpers/ranges */ "./node_modules/@wsuwebteam/build-tools/js/helpers/ranges.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;
var WsuHero = wsu_wds.components.WsuHero;





var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Add title text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Subtitle",
    value: attributes.subtitle,
    onChange: function onChange(subtitle) {
      return setAttributes({
        subtitle: subtitle
      });
    },
    placeholder: 'Add subtitle text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    placeholder: 'Add caption text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Image Caption",
    value: attributes.imageCaption,
    onChange: function onChange(imageCaption) {
      return setAttributes({
        imageCaption: imageCaption
      });
    },
    placeholder: 'Add image caption text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, attributes.imgSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.imgSrc,
    dimensions: attributes.imgDimensions,
    value: attributes.imgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        imgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imgSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Button",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Text",
    value: attributes.buttonText,
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    },
    placeholder: 'Add button text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Button Link Destination"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
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
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Button Style",
    value: "",
    options: [{
      label: 'Default',
      value: 'default'
    }]
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Display Style",
    value: "",
    options: [{
      label: 'Default',
      value: 'default'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Banner Height",
    value: attributes.verticalSpacing,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Extra Small',
      value: 'xsmall'
    }, {
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Large',
      value: 'large'
    }, {
      label: 'Full',
      value: 'full'
    }],
    onChange: function onChange(verticalSpacing) {
      return setAttributes({
        verticalSpacing: verticalSpacing
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuHero, {
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: attributes.title,
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      allowedFormats: [],
      placeholder: "Add Title Text"
    }),
    titleTag: "h2",
    subtitle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: attributes.subtitle,
      onChange: function onChange(subtitle) {
        return setAttributes({
          subtitle: subtitle
        });
      },
      allowedFormats: [],
      placeholder: "Add Subtitle Text"
    }),
    caption: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: attributes.caption,
      onChange: function onChange(caption) {
        return setAttributes({
          caption: caption
        });
      },
      allowedFormats: [],
      placeholder: 'Add Caption Text'
    }),
    buttonText: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: attributes.buttonText,
      onChange: function onChange(buttonText) {
        return setAttributes({
          buttonText: buttonText
        });
      },
      allowedFormats: [],
      placeholder: 'Add Button Text'
    }),
    buttonUrl: attributes.buttonUrl,
    backgroundImage: attributes.imgSrc,
    imageCaption: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      value: attributes.imageCaption,
      onChange: function onChange(imageCaption) {
        return setAttributes({
          imageCaption: imageCaption
        });
      },
      allowedFormats: [],
      placeholder: "Add image caption text"
    }),
    imageCaptionUrl: attributes.imageCaptionUrl,
    verticalSpacing: attributes.verticalSpacing,
    marginBefore: attributes.marginBefore,
    marginAfter: attributes.marginAfter,
    style: attributes.style
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-hero/editor/style.scss":
/*!********************************************************!*\
  !*** ./packages/blocks/content-hero/editor/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-image/editor/block.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-image/editor/block.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-image/editor/edit.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-image/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputimage = wp.blockEditor.URLInputimage;



registerBlockType("wsuwp/image", {
  title: "Image",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M8.00031 6C9.10311 6 10.0003 6.8972 10.0003 8C10.0003 9.1028 9.10311 10 8.00031 10C6.89751 10 6.00031 9.1028 6.00031 8C6.00031 6.8972 6.89751 6 8.00031 6ZM8.00031 4C5.79121 4 4.00031 5.7909 4.00031 8C4.00031 10.2091 5.79121 12 8.00031 12C10.2094 12 12.0003 10.2091 12.0003 8C12.0003 5.7909 10.2095 4 8.00031 4Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M9.76431 2L10.2115 2.8944L10.7642 4H12.0003H14.0003V13.0236H2.00031V4H4.00031H5.23641L5.78921 2.8944L6.23641 2H9.76431ZM11.0003 0H5.00031L4.00031 2H2.00031C0.900305 2 0.000305176 2.9 0.000305176 4V13.0236C0.000305176 14.1236 0.900305 15.0236 2.00031 15.0236H14.0003C15.1003 15.0236 16.0003 14.1236 16.0003 13.0236V4C16.0003 2.9 15.1003 2 14.0003 2H12.0003L11.0003 0Z"
  })),
  attributes: _objectSpread(_objectSpread(_objectSpread({}, _block_controls__WEBPACK_IMPORTED_MODULE_3__["globalBlockAtts"]), _block_controls__WEBPACK_IMPORTED_MODULE_3__["sizeUnitControlAtts"]), {}, {
    src: {
      type: 'string',
      default: ''
    },
    alt: {
      type: 'string',
      default: ''
    },
    srcType: {
      type: 'string',
      default: 'media'
    },
    alignment: {
      type: 'string',
      default: 'default'
    },
    attachmentId: {
      type: 'integer',
      default: null
    },
    decorators: {
      type: 'array',
      default: []
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-image/editor/edit.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-image/editor/edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-image/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    URLPopover = _wp$blockEditor.URLPopover;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    Panel = _wp$components.Panel,
    PanelRow = _wp$components.PanelRow,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Placeholder = _wp$components.Placeholder,
    FormFileUpload = _wp$components.FormFileUpload,
    ResizableBox = _wp$components.ResizableBox,
    __experimentalUnitControl = _wp$components.__experimentalUnitControl;
var _wsu_wds$components = wsu_wds.components,
    WsuImage = _wsu_wds$components.WsuImage,
    WsuHr = _wsu_wds$components.WsuHr,
    WsuHeading = _wsu_wds$components.WsuHeading,
    WsuIcon = _wsu_wds$components.WsuIcon,
    WsuP = _wsu_wds$components.WsuP;



var MIN_WIDTH = 20;
var MAX_WIDTH = 1128;

var MediaUploadCheckControl = function MediaUploadCheckControl(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      var ratio = (media.height / media.width).toFixed(2);
      var width = media.width > MAX_WIDTH ? MAX_WIDTH : media.width;
      var height = media.width > MAX_WIDTH ? Math.round(MAX_WIDTH * ratio) : media.height;
      props.setAttributes({
        src: media.url,
        alt: media.alt,
        width: width,
        height: height,
        naturalWidth: media.width,
        naturalHeight: media.height,
        scaledWidth: width,
        scaledHeight: height,
        ratio: ratio,
        attachmentId: media.id
      });
    },
    allowedTypes: "image/*",
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isPrimary: true,
        onClick: open
      }, "Open Media Library");
    }
  }));
};

var edit = function edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      toggleSelection = props.toggleSelection;
  var minWidth = attributes.naturalWidth < attributes.naturalHeight ? MIN_WIDTH : MIN_WIDTH * attributes.ratio;
  var minHeight = attributes.naturalHeight < attributes.naturalWidth ? MIN_WIDTH : MIN_WIDTH / attributes.ratio;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockAlignmentToolbar, {
    onChange: function onChange(alignment) {
      return setAttributes({
        alignment: alignment
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Image Source",
    value: attributes.srcType,
    options: [{
      label: 'Media Library',
      value: 'media'
    }, {
      label: 'Custom URL',
      value: 'url'
    }],
    onChange: function onChange(srcType) {
      return setAttributes({
        srcType: srcType
      });
    }
  }), attributes.srcType == 'media' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheckControl, {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.srcType == 'url' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Custom Image URL",
    value: attributes.src,
    onChange: function onChange(src) {
      return setAttributes({
        src: src
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuHr, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Alt Text",
    value: attributes.alt,
    onChange: function onChange(alt) {
      return setAttributes({
        alt: alt
      });
    },
    placeholder: 'Enter image alt text here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SizeUnitControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  })), !attributes.src && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Placeholder, {
    label: "Image",
    instructions: "Upload an image file, pick one from your media library, or add one with a URL.",
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M8.00031 6C9.10311 6 10.0003 6.8972 10.0003 8C10.0003 9.1028 9.10311 10 8.00031 10C6.89751 10 6.00031 9.1028 6.00031 8C6.00031 6.8972 6.89751 6 8.00031 6ZM8.00031 4C5.79121 4 4.00031 5.7909 4.00031 8C4.00031 10.2091 5.79121 12 8.00031 12C10.2094 12 12.0003 10.2091 12.0003 8C12.0003 5.7909 10.2095 4 8.00031 4Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M9.76431 2L10.2115 2.8944L10.7642 4H12.0003H14.0003V13.0236H2.00031V4H4.00031H5.23641L5.78921 2.8944L6.23641 2H9.76431ZM11.0003 0H5.00031L4.00031 2H2.00031C0.900305 2 0.000305176 2.9 0.000305176 4V13.0236C0.000305176 14.1236 0.900305 15.0236 2.00031 15.0236H14.0003C15.1003 15.0236 16.0003 14.1236 16.0003 13.0236V4C16.0003 2.9 15.1003 2 14.0003 2H12.0003L11.0003 0Z"
    }))
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheckControl, {
    attributes: attributes,
    setAttributes: setAttributes
  })), attributes.src && props.attributes.unit == 'px' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResizableBox, {
    size: {
      width: attributes.width + attributes.unit,
      height: attributes.height + attributes.unit
    },
    minWidth: minWidth,
    minHeight: minHeight,
    maxWidth: MAX_WIDTH,
    lockAspectRatio: true,
    className: "wsu-c-image-container wsu-c-image__wrapper--" + attributes.alignment,
    showHandle: isSelected,
    enable: {
      top: false,
      right: true,
      bottom: true,
      left: true,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    onResizeStop: function onResizeStop(event, direction, elt, delta) {
      // If direction is width
      if (direction == 'right' || direction == 'left') {
        // Store new width value: width + delta
        var newWidth = parseInt(attributes.width + delta.width, 10); // Store new height value that is equal new width * ratio

        var newHeight = parseInt(newWidth * attributes.ratio, 10); // Set width/height value

        setAttributes({
          height: newHeight,
          width: newWidth
        });
      } // If direction is bottom
      else if (direction == 'bottom') {
          // Store new height value: height + delta
          var _newHeight = parseInt(attributes.height + delta.height, 10); // Store new width value that is equal to height * ratio


          var _newWidth = parseInt(_newHeight * attributes.ratio, 10); // Set width/height value


          setAttributes({
            height: _newHeight,
            width: _newWidth
          });
        } // Error out as not valid direction value only left/right bottom are supported
        else {
            console.error('Not a valid/supported direction: ' + direction);
          }

      toggleSelection(true);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuImage, {
    src: attributes.src,
    alt: attributes.alt
  })), attributes.src && attributes.unit == '%' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-c-image__wrapper wsu-c-image__wrapper--" + attributes.alignment
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuImage, {
    src: attributes.src,
    alt: attributes.alt,
    width: attributes.width + attributes.unit
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-image/editor/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-image/editor/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-news/editor/block.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-news/editor/block.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-news/editor/edit.js");
/* harmony import */ var _block_controls_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/index */ "./packages/block-controls/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-news/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;



registerBlockType("wsuwp/news", {
  title: "News",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "2",
    width: "16",
    height: "4",
    rx: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "10",
    width: "16",
    height: "4",
    rx: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "18",
    width: "16",
    height: "4",
    rx: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 1C20.4477 1 20 1.44772 20 2V3H19C18.4477 3 18 3.44772 18 4C18 4.55228 18.4477 5 19 5H20V6C20 6.55228 20.4477 7 21 7C21.5523 7 22 6.55228 22 6V5H23C23.5523 5 24 4.55229 24 4C24 3.44772 23.5523 3 23 3H22V2C22 1.44772 21.5523 1 21 1Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 9C20.4477 9 20 9.44772 20 10V11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H20V14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14V13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H22V10C22 9.44772 21.5523 9 21 9Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 17C20.4477 17 20 17.4477 20 18V19H19C18.4477 19 18 19.4477 18 20C18 20.5523 18.4477 21 19 21H20V22C20 22.5523 20.4477 23 21 23C21.5523 23 22 22.5523 22 22V21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H22V18C22 17.4477 21.5523 17 21 17Z"
  })),
  attributes: _objectSpread(_objectSpread({
    source: {
      type: 'string',
      default: 'insert'
    },
    type: {
      type: 'string',
      default: 'default'
    },
    itemsPerRow: {
      type: 'integer',
      default: 3
    }
  }, _block_controls_index__WEBPACK_IMPORTED_MODULE_3__["globalBlockAtts"]), _block_controls_index__WEBPACK_IMPORTED_MODULE_3__["feedControlAtts"]),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-news/editor/edit.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/content-news/editor/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var WsuAccordion = wsu_wds.components.WsuAccordion;


var CardControls = function CardControls(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Card Options",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Items Per Row",
    value: attributes.itemsPerRow,
    onChange: function onChange(itemsPerRow) {
      return setAttributes({
        itemsPerRow: itemsPerRow
      });
    },
    options: [{
      label: '1',
      value: 1
    }, {
      label: '2',
      value: 2
    }, {
      label: '3',
      value: 3
    }, {
      label: '4',
      value: 4
    }]
  }));
};

var edit = function edit(_ref2) {
  var className = _ref2.className,
      attributes = _ref2.attributes,
      setAttributes = _ref2.setAttributes;
  var sourceOptions = [{
    label: 'Insert',
    value: 'insert'
  }, {
    label: 'Feed',
    value: 'feed'
  }];

  if ('insert' == attributes.source) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "General"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Source",
      value: attributes.source,
      onChange: function onChange(source) {
        return setAttributes({
          source: source
        });
      },
      options: sourceOptions
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Style",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingSelector"], {
      attributes: attributes,
      setAttributes: setAttributes
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("pre", null, "News"));
  } else {
    var placeholders = [];
    var count = attributes.count < 5 ? attributes.count : 5;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "General"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Source",
      value: attributes.source,
      onChange: function onChange(source) {
        return setAttributes({
          source: source
        });
      },
      options: sourceOptions
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Display Type",
      value: attributes.type,
      onChange: function onChange(type) {
        return setAttributes({
          type: type
        });
      },
      options: [{
        label: 'Default',
        value: 'default'
      }, {
        label: 'Card',
        value: 'card'
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["FeedControls"], {
      attributes: attributes,
      setAttributes: setAttributes
    })), 'card' == attributes.type && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CardControls, {
      attributes: attributes,
      setAttributes: setAttributes
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
      attributes: attributes,
      setAttributes: setAttributes
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("pre", null, "News"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-news/editor/style.scss":
/*!********************************************************!*\
  !*** ./packages/blocks/content-news/editor/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-page-banner/editor/block.js":
/*!*************************************************************!*\
  !*** ./packages/blocks/content-page-banner/editor/block.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-page-banner/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-page-banner/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;



registerBlockType("wsuwp/page-banner", {
  title: "Page Banner",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    y: "15",
    width: "48",
    height: "18"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "2.5",
    y1: "12.5",
    x2: "38.5",
    y2: "12.5",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "2.5",
    y1: "8.5",
    x2: "45.5",
    y2: "8.5",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "3",
    y1: "4",
    x2: "30",
    y2: "4",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "2.5",
    y1: "44.5",
    x2: "19.5",
    y2: "44.5",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "25.5",
    y1: "44.5",
    x2: "42.5",
    y2: "44.5",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "2.5",
    y1: "40.5",
    x2: "22.5",
    y2: "40.5",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "25.5",
    y1: "40.5",
    x2: "45.5",
    y2: "40.5",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "3",
    y1: "36",
    x2: "15",
    y2: "36",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    x1: "26",
    y1: "36",
    x2: "38",
    y2: "36",
    stroke: "#555D66",
    "stroke-opacity": "0.5",
    "stroke-width": "2",
    "stroke-linecap": "round"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    imageSrc: {
      type: 'string',
      default: ''
    },
    imageAlt: {
      type: 'string',
      default: ''
    },
    imageCaption: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string',
      default: 'default'
    },
    height: {
      type: 'string',
      default: 'default'
    },
    isFullBleed: {
      type: 'boolean',
      default: false
    },
    isNotched: {
      type: 'boolean',
      default: false
    },
    patterns: {
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
    title: {
      type: 'string',
      default: ''
    },
    eyebrowHeader: {
      type: 'string',
      default: ''
    },
    overlay: {
      type: 'string',
      default: 'default'
    },
    textAlign: {
      type: 'string',
      default: 'default'
    },
    titleTag: {
      type: 'string',
      default: 'h2'
    },
    decorators: {
      type: 'array',
      default: []
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-page-banner/editor/edit.js":
/*!************************************************************!*\
  !*** ./packages/blocks/content-page-banner/editor/edit.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-page-banner/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");


var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;
var WsuPageBanner = wsu_wds.components.WsuPageBanner;

 // TODO: Move PatternControl from block-components to block-controls



var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Add Title Text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Eyebrow Header",
    value: attributes.eyebrowHeader,
    onChange: function onChange(eyebrowHeader) {
      return setAttributes({
        eyebrowHeader: eyebrowHeader
      });
    },
    placeholder: 'Add Eyebrow Header Text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the image to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imgDimensions,
    value: attributes.imgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        imgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Add/Replace Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Height",
    value: attributes.height,
    onChange: function onChange(height) {
      return setAttributes({
        height: height
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
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
    }, {
      label: 'Full',
      value: 'full'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Overlay",
    value: attributes.overlay,
    onChange: function onChange(overlay) {
      return setAttributes({
        overlay: overlay
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Gray',
      value: 'gray'
    }, {
      label: 'Black',
      value: 'black'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Title Tag",
    value: attributes.titleTag,
    onChange: function onChange(titleTag) {
      return setAttributes({
        titleTag: titleTag
      });
    },
    options: [{
      label: 'H1',
      value: 'h1'
    }, {
      label: 'H2',
      value: 'h2'
    }, {
      label: 'H3',
      value: 'h3'
    }, {
      label: 'H4',
      value: 'h4'
    }, {
      label: 'H5',
      value: 'h5'
    }, {
      label: 'H6',
      value: 'h6'
    }]
  }), attributes.titleTag == 'h1' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      background: '#fff491',
      padding: '16px',
      borderRadius: '10px',
      marginBottom: '16px'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontWeight: 'bold'
    }
  }, "Accessibility Warning"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    style: {
      marginBottom: '0'
    }
  }, "Make sure that you are not using more than one H1 on your page! See ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
  }, "WCAG 1.3.1 Info and Relationships"), " for more information.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: attributes.textAlign,
    onChange: function onChange(textAlign) {
      return setAttributes({
        textAlign: textAlign
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Is Notched",
    help: attributes.isNotched ? 'Has image notch.' : 'No image notch.',
    checked: attributes.isNotched,
    onChange: function onChange(value) {
      return setAttributes({
        isNotched: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Bleed Left & Right",
    checked: attributes.isFullBleed,
    onChange: function onChange(value) {
      return setAttributes({
        isFullBleed: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_components__WEBPACK_IMPORTED_MODULE_3__["PatternControl"], {
    label: "Pattern Classes",
    value: attributes.patterns,
    onChange: function onChange(patterns) {
      return setAttributes({
        patterns: patterns
      });
    },
    placeholder: 'Enter pattern classes here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_4__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_4__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuPageBanner, {
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: attributes.title,
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Add Title Text"
    }),
    eyebrowHeader: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      value: attributes.eyebrowHeader,
      onChange: function onChange(eyebrowHeader) {
        return setAttributes({
          eyebrowHeader: eyebrowHeader
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Add Eyebrow Header Text"
    }),
    imageSrc: attributes.imageSrc,
    imageAlt: attributes.imageAlt,
    imageCaption: attributes.imageCaption,
    height: attributes.height,
    isNotched: attributes.isNotched,
    isFullBleed: attributes.isFullBleed,
    textAlign: attributes.textAlign,
    overlay: attributes.overlay,
    titleTag: attributes.titleTag
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-page-banner/editor/style.scss":
/*!***************************************************************!*\
  !*** ./packages/blocks/content-page-banner/editor/style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-post-title/editor/block.js":
/*!************************************************************!*\
  !*** ./packages/blocks/content-post-title/editor/block.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-post-title/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;


registerBlockType("wsuwp/post-title", {
  title: "Post Title",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M9.66955 8.60874C8.46034 8.60874 7.38339 8.98662 6.58984 9.72348V5H3V19.0193H6.58984V14.0691C6.58984 12.3686 7.47786 11.6507 8.63039 11.6507C9.66955 11.6507 10.3119 12.2742 10.3119 13.7479V19.0193H13.9018V13.1622C13.9018 9.988 12.0691 8.60874 9.66955 8.60874Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M14.8028 5.79354V8.68431H17.259V19.0193H21V5.79354H14.8028Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    subtitle: {
      "type": "string",
      "default": ""
    },
    hideAuthor: {
      "type": "boolean",
      "default": false
    },
    hidePublishDate: {
      "type": "boolean",
      "default": false
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-post-title/editor/edit.js":
/*!***********************************************************!*\
  !*** ./packages/blocks/content-post-title/editor/edit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;
var PostTitle = wp.editor.PostTitle;

var WsuArticleHeader = wsu_wds.components.WsuArticleHeader;

var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Subtitle",
    value: attributes.subtitle,
    onChange: function onChange(subtitle) {
      return setAttributes({
        subtitle: subtitle
      });
    },
    placeholder: 'Enter subtile here'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Author",
    help: attributes.hideAuthor ? 'Hidden.' : 'Visible.',
    checked: attributes.hideAuthor,
    onChange: function onChange(hideAuthor) {
      return setAttributes({
        hideAuthor: hideAuthor
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Publish Date",
    help: attributes.hidePublishDate ? 'Hidden.' : 'Visible.',
    checked: attributes.hidePublishDate,
    onChange: function onChange(hidePublishDate) {
      return setAttributes({
        hidePublishDate: hidePublishDate
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuArticleHeader, {
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PostTitle, null),
    subtitle: attributes.subtitle
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-quote/editor/block.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-quote/editor/block.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-quote/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./packages/blocks/content-quote/editor/save.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-quote/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;




registerBlockType("wsuwp/quote", {
  title: "Quote",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 9H7V7H17V9Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10 11H7V10H10V11Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 13H7V12H17V13Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 15H7V14H17V15Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13 17H7V16H13V17Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    name: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: ''
    },
    cite: {
      type: 'string',
      default: ''
    },
    citeUrl: {
      type: 'string',
      default: ''
    },
    citeAlign: {
      type: 'string',
      default: 'default'
    },
    color: {
      type: 'string',
      default: 'default'
    },
    textSize: {
      type: 'string',
      default: 'default'
    },
    width: {
      type: 'string',
      default: 'default'
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-quote/editor/edit.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-quote/editor/edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var WsuBlockquote = wsu_wds.components.WsuBlockquote;


var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Person Name (Citation)",
    value: attributes.name,
    onChange: function onChange(name) {
      return setAttributes({
        name: name
      });
    },
    placeholder: 'Enter person name here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Person Title (Citation)",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter person title here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Citation Text",
    value: attributes.cite,
    onChange: function onChange(cite) {
      return setAttributes({
        cite: cite
      });
    },
    placeholder: 'Enter citation here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Citation URL",
    value: attributes.citeUrl,
    onChange: function onChange(citeUrl) {
      return setAttributes({
        citeUrl: citeUrl
      });
    },
    placeholder: 'Enter citation url here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Citation Align",
    value: attributes.citeAlign,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }],
    onChange: function onChange(citeAlign) {
      return setAttributes({
        citeAlign: citeAlign
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Text Size",
    value: attributes.textSize,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Medium Large',
      value: 'medium-large'
    }, {
      label: 'Large',
      value: 'large'
    }],
    onChange: function onChange(textSize) {
      return setAttributes({
        textSize: textSize
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Width",
    value: attributes.width,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Medium Large',
      value: 'medium-large'
    }, {
      label: 'Large',
      value: 'large'
    }],
    onChange: function onChange(width) {
      return setAttributes({
        width: width
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuBlockquote, {
    name: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      value: attributes.name,
      onChange: function onChange(name) {
        return setAttributes({
          name: name
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Person Name"
    }),
    title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      value: attributes.title,
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Person Title"
    }),
    cite: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      value: attributes.cite,
      onChange: function onChange(cite) {
        return setAttributes({
          cite: cite
        });
      },
      multiline: 'false',
      allowedFormats: [],
      placeholder: "Citation"
    }),
    citeUrl: attributes.citeUrl,
    textSize: attributes.textSize,
    citeAlign: attributes.citeAlign
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false,
    allowedBlocks: ['core/paragraph', 'core/freeform', 'core/list']
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-quote/editor/save.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-quote/editor/save.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var save = function save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./packages/blocks/content-quote/editor/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-quote/editor/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-search-bar/editor/block.js":
/*!************************************************************!*\
  !*** ./packages/blocks/content-search-bar/editor/block.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-search-bar/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-search-bar/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;



registerBlockType("wsuwp/search-bar", {
  title: "Search Bar",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 5V19H19V5H5Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M15.1716 13.7574C15.6951 12.967 16 12.0191 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C12.0191 16 12.967 15.6951 13.7574 15.1716L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L15.1716 13.7574ZM14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    placeholder: {
      type: 'string',
      default: ''
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-search-bar/editor/edit.js":
/*!***********************************************************!*\
  !*** ./packages/blocks/content-search-bar/editor/edit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var InspectorControls = wp.blockEditor.InspectorControls;
var PanelBody = wp.components.PanelBody;


var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingSelector"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-b-editor__search-bar__edit-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wsu-b-editor__search-bar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    name: "",
    value: "",
    placeholder: "Search"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "submit",
    name: "submit",
    value: "Search"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-search-bar/editor/style.scss":
/*!**************************************************************!*\
  !*** ./packages/blocks/content-search-bar/editor/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-separator/editor/block.js":
/*!***********************************************************!*\
  !*** ./packages/blocks/content-separator/editor/block.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-separator/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-separator/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;



registerBlockType("wsuwp/separator", {
  title: "Content Separator",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "26",
    viewBox: "0 0 48 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.25 13C0.25 12.2873 0.827795 11.7095 1.54054 11.7095H46.7095C47.4222 11.7095 48 12.2873 48 13C48 13.7127 47.4222 14.2905 46.7095 14.2905H1.54054C0.827795 14.2905 0.25 13.7127 0.25 13Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M36.3851 2.67568H11.8649C11.1521 2.67568 10.5743 3.25347 10.5743 3.96622V5.90203C10.5743 6.61477 11.1521 7.19257 11.8649 7.19257H36.3851C37.0979 7.19257 37.6757 6.61477 37.6757 5.90203V3.96622C37.6757 3.25347 37.0979 2.67568 36.3851 2.67568ZM11.8649 0.094595C9.72663 0.094595 7.99324 1.82798 7.99324 3.96622V5.90203C7.99324 8.04026 9.72663 9.77365 11.8649 9.77365H36.3851C38.5234 9.77365 40.2568 8.04026 40.2568 5.90203V3.96622C40.2568 1.82798 38.5234 0.094595 36.3851 0.094595H11.8649Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M36.3851 18.8074H11.8649C11.1521 18.8074 10.5743 19.3852 10.5743 20.098V22.0338C10.5743 22.7465 11.1521 23.3243 11.8649 23.3243H36.3851C37.0979 23.3243 37.6757 22.7465 37.6757 22.0338V20.098C37.6757 19.3852 37.0979 18.8074 36.3851 18.8074ZM11.8649 16.2264C9.72663 16.2264 7.99324 17.9597 7.99324 20.098V22.0338C7.99324 24.172 9.72663 25.9054 11.8649 25.9054H36.3851C38.5234 25.9054 40.2568 24.172 40.2568 22.0338V20.098C40.2568 17.9597 38.5234 16.2264 36.3851 16.2264H11.8649Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    style: {
      type: 'string',
      default: 'default'
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-separator/editor/edit.js":
/*!**********************************************************!*\
  !*** ./packages/blocks/content-separator/editor/edit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var WsuSeparator = wsu_wds.components.WsuSeparator;


var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var styleOptions = [{
    label: 'Default',
    value: 'default'
  }, {
    label: 'Crimson',
    value: 'crimson'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Style",
    value: attributes.style,
    onChange: function onChange(style) {
      return setAttributes({
        style: style
      });
    },
    options: styleOptions
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WsuSeparator, {
    style: attributes.style
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-separator/editor/style.scss":
/*!*************************************************************!*\
  !*** ./packages/blocks/content-separator/editor/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/content-video/editor/block.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/content-video/editor/block.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./packages/blocks/content-video/editor/edit.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-video/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var registerBlockType = wp.blocks.registerBlockType;



registerBlockType('wsuwp/video', {
  title: 'Video',
  category: 'content',
  icon: 'video-alt3',
  attributes: _objectSpread(_objectSpread({}, _block_controls__WEBPACK_IMPORTED_MODULE_2__["globalBlockAtts"]), {}, {
    url: {
      type: 'string',
      default: ''
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./packages/blocks/content-video/editor/edit.js":
/*!******************************************************!*\
  !*** ./packages/blocks/content-video/editor/edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./packages/blocks/content-video/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    URLPopover = _wp$blockEditor.URLPopover;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    Panel = _wp$components.Panel,
    PanelRow = _wp$components.PanelRow,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Placeholder = _wp$components.Placeholder,
    FormFileUpload = _wp$components.FormFileUpload,
    ResizableBox = _wp$components.ResizableBox,
    __experimentalUnitControl = _wp$components.__experimentalUnitControl;
var _wsu_wds$components = wsu_wds.components,
    WsuImage = _wsu_wds$components.WsuImage,
    WsuHr = _wsu_wds$components.WsuHr,
    WsuHeading = _wsu_wds$components.WsuHeading,
    WsuIcon = _wsu_wds$components.WsuIcon,
    WsuP = _wsu_wds$components.WsuP;





var edit = function edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      toggleSelection = props.toggleSelection;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockAlignmentToolbar, {
    onChange: function onChange(alignment) {
      return setAttributes({
        alignment: alignment
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["GeneralPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Video Url",
    value: attributes.url,
    onChange: function onChange(url) {
      return setAttributes({
        url: url
      });
    },
    help: "Supports YouTube and Vimeo videos."
  }), attributes.url.includes('youtu.be') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("code", null, "Video player doesn't support shortened urls. Please include the full YouTube url."))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Placeholder, {
    label: "Video",
    instructions: "Add the URL for which your video is hosted!",
    icon: "video-alt3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Video Url",
    value: attributes.url,
    onChange: function onChange(url) {
      return setAttributes({
        url: url
      });
    },
    help: "Supports YouTube and Vimeo videos."
  }), attributes.url.includes('youtu.be') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("code", null, "Video player doesn't support shortened urls. Please include the full YouTube url.")));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/blocks/content-video/editor/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/content-video/editor/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/blocks/core-freeform/editor/block.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/core-freeform/editor/block.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

wp.hooks.addFilter('blocks.registerBlockType', 'wsuwp/freeform', function (settings, name) {
  if ('core/freeform' == name) {
    settings.category = 'content';
  }

  return settings;
});

/***/ }),

/***/ "./packages/blocks/core-paragraph/index.js":
/*!*************************************************!*\
  !*** ./packages/blocks/core-paragraph/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-controls */ "./packages/block-controls/index.js");


var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    InspectorAdvancedControls = _wp$editor.InspectorAdvancedControls,
    InspectorControls = _wp$editor.InspectorControls;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody;
 //restrict to specific block names

var allowedBlocks = ['core/paragraph'];
var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var visibleOnMobile = attributes.visibleOnMobile;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && allowedBlocks.includes(name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["DisplayOptionsPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["FontSizeControl"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["FontWeightControl"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["IndentControl"], {
      attributes: attributes,
      setAttributes: setAttributes
    }))));
  };
}, 'withAdvancedControls');

function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  //add allowedBlocks restriction
  if (typeof settings.attributes !== 'undefined' && allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      fontSize: {
        type: 'string',
        default: ''
      },
      fontWeight: {
        type: 'string',
        default: ''
      },
      indent: {
        type: 'string',
        default: ''
      }
    });
  }

  return settings;
}

function applyExtraClass(extraProps, blockType, attributes) {
  var fontSize = attributes.fontSize,
      fontWeight = attributes.fontWeight,
      indent = attributes.indent;
  var empty = ['', 'default'];

  if (allowedBlocks.includes(blockType.name)) {
    var classNames = [extraProps.className];

    if (attributes.hasOwnProperty('fontSize') && !empty.includes(attributes.fontSize)) {
      classNames.push('wsu-u-font-size--' + attributes.fontSize);
    }

    if (attributes.hasOwnProperty('fontWeight') && !empty.includes(attributes.fontWeight)) {
      classNames.push('wsu-u-font-weight--' + attributes.fontWeight);
    }

    if (attributes.hasOwnProperty('indent') && !empty.includes(attributes.indent)) {
      classNames.push('wsu-u-indent--' + attributes.indent);
    }

    extraProps.className = classNames.join(' ');
  }

  console.log(extraProps);
  return extraProps;
}

addFilter('editor.BlockEdit', 'editorskit/custom-advanced-control', withAdvancedControls);
addFilter('blocks.registerBlockType', 'editorskit/custom-attributes', addAttributes);
addFilter('blocks.getSaveContent.extraProps', 'editorskit/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./packages/em-blocks/content-callout/editor/block.js":
/*!************************************************************!*\
  !*** ./packages/em-blocks/content-callout/editor/block.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./packages/em-blocks/content-callout/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./packages/em-blocks/content-callout/editor/save.js");

/**
 *
 * WordPress Dependencies
 *
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;


registerBlockType("wsuwp-em/callout", {
  title: "Callout (EM)",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "12",
    height: "31",
    viewBox: "0 0 12 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M2.3076 17.7434C1.73446 17.4212 1.35629 16.8379 1.29607 16.1832L0.00841373 2.18318C-0.043086 1.62325 0.143496 1.06751 0.522449 0.652105C0.901403 0.236697 1.43772 0 2.00001 0H10C10.5623 0 11.0986 0.236697 11.4776 0.652105C11.8565 1.06751 12.0431 1.62325 11.9916 2.18318L10.7039 16.1832C10.6437 16.8379 10.2656 17.4212 9.69242 17.7434C9.11928 18.0656 8.4244 18.0855 7.83375 17.7967C7.28931 17.5304 6.66543 17.3815 6.00001 17.3815C5.33458 17.3815 4.7107 17.5304 4.16626 17.7967C3.57561 18.0855 2.88073 18.0656 2.3076 17.7434ZM12 24.9664C12 28.2191 9.53729 31 6.00001 31C2.46272 31 7.45053e-06 28.2191 7.45053e-06 24.9664C7.45053e-06 21.6245 2.51707 19 6.00001 19C9.48295 19 12 21.6245 12 24.9664ZM3.28767 16C3.89234 15.7043 4.5525 15.509 5.24335 15.4264C5.49198 15.3966 5.74459 15.3814 6.00001 15.3814C6.25543 15.3814 6.50804 15.3966 6.75667 15.4264C7.44751 15.509 8.10767 15.7043 8.71235 16L10 2H2.00001L3.28767 16ZM10 24.9664C10 27.1849 8.36364 29 6.00001 29C3.63637 29 2.00001 27.1849 2.00001 24.9664C2.00001 22.7143 3.63637 21 6.00001 21C8.36364 21 10 22.7143 10 24.9664Z"
  })),
  attributes: {
    imageSrc: {
      type: 'string',
      default: ''
    },
    imageAlt: {
      type: 'string',
      default: ''
    },
    imageSize: {
      type: 'string',
      default: 'default'
    },
    shape: {
      type: 'string',
      default: 'default'
    },
    style: {
      type: 'string',
      default: 'default'
    },
    link: {
      type: 'string',
      default: ''
    },
    eyebrowHeader: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: ''
    },
    tag: {
      type: 'string',
      default: 'h3'
    },
    description: {
      type: 'string',
      default: ''
    },
    layout: {
      type: 'string',
      default: 'default'
    },
    verticalAlign: {
      type: 'string',
      default: 'default'
    },
    isNotched: {
      type: 'boolean',
      default: false
    },
    buttonText: {
      type: 'string',
      default: ''
    },
    buttonUrl: {
      type: 'string',
      default: ''
    },
    videoSrc: {
      type: 'string',
      default: ''
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
    },
    titleSize: {
      type: 'string',
      default: 'default'
    },
    borderColor: {
      type: 'string',
      default: 'default'
    },
    bleedImage: {
      type: 'boolean',
      default: false
    },
    patterns: {
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
    id: {
      type: 'string',
      default: ''
    },
    decorators: {
      type: 'array',
      default: []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/em-blocks/content-callout/editor/edit.js":
/*!***********************************************************!*\
  !*** ./packages/em-blocks/content-callout/editor/edit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./packages/em-blocks/content-callout/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");


var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;
var EmContentCallout = wsu_wds.emComponents.EmContentCallout;




var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var shapeOptions = [{
    label: 'default',
    value: 'default'
  }, {
    label: 'square',
    value: 'square'
  }, {
    label: 'portrait',
    value: 'portrait'
  }, {
    label: 'landscape',
    value: 'landscape'
  }, {
    label: 'video',
    value: 'video'
  }, {
    label: 'circle',
    value: 'circle'
  }];
  var imageSizeOptions = [{
    label: 'default',
    value: 'default'
  }, {
    label: 'xsmall',
    value: 'xsmall'
  }, {
    label: 'small',
    value: 'small'
  }, {
    label: 'medium',
    value: 'medium'
  }, {
    label: 'large',
    value: 'large'
  }];
  var layoutOptions = [{
    label: 'default',
    value: 'default'
  }, {
    label: 'horizontal',
    value: 'horizontal'
  }, {
    label: 'vertical',
    value: 'vertical'
  }, {
    label: 'image-left',
    value: 'image-left'
  }, {
    label: 'image-right',
    value: 'image-right'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Eyebrow Header",
    value: attributes.eyebrowHeader,
    onChange: function onChange(eyebrowHeader) {
      return setAttributes({
        eyebrowHeader: eyebrowHeader
      });
    },
    placeholder: 'Enter title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    },
    placeholder: 'Enter caption here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Link",
    value: attributes.link,
    onChange: function onChange(link) {
      return setAttributes({
        link: link
      });
    },
    placeholder: 'Enter URL here.'
  }), attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the image to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imgDimensions,
    value: attributes.imgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        imgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Add/Replace Card Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Text",
    value: attributes.buttonText,
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    },
    placeholder: 'Enter button text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button URL",
    value: attributes.buttonUrl,
    onChange: function onChange(buttonUrl) {
      return setAttributes({
        buttonUrl: buttonUrl
      });
    },
    placeholder: 'Enter button url here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Display",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Style",
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
      label: 'Overlay',
      value: 'overlay'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Layout",
    value: attributes.layout,
    onChange: function onChange(layout) {
      return setAttributes({
        layout: layout
      });
    },
    options: layoutOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Image Size",
    value: attributes.imageSize,
    onChange: function onChange(imageSize) {
      return setAttributes({
        imageSize: imageSize
      });
    },
    options: imageSizeOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Shape",
    value: attributes.shape,
    onChange: function onChange(shape) {
      return setAttributes({
        shape: shape
      });
    },
    options: shapeOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Border Color",
    value: attributes.borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes({
        borderColor: borderColor
      });
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Crimson',
      value: 'crimson'
    }, {
      label: 'None',
      value: 'none'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Is Notched",
    help: attributes.isNotched ? 'Has image notch.' : 'No image notch.',
    checked: attributes.isNotched,
    onChange: function onChange(value) {
      return setAttributes({
        isNotched: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Bleed Image",
    checked: attributes.bleedImage,
    onChange: function onChange(value) {
      return setAttributes({
        bleedImage: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_components__WEBPACK_IMPORTED_MODULE_3__["PatternControl"], {
    label: "Pattern Classes",
    value: attributes.patterns,
    onChange: function onChange(patterns) {
      return setAttributes({
        patterns: patterns
      });
    },
    placeholder: 'Enter pattern classes here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Layout",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding Before",
    value: attributes.paddingBefore,
    onChange: function onChange(paddingBefore) {
      return setAttributes({
        paddingBefore: paddingBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding After",
    value: attributes.paddingAfter,
    onChange: function onChange(paddingAfter) {
      return setAttributes({
        paddingAfter: paddingAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin Before",
    value: attributes.marginBefore,
    onChange: function onChange(marginBefore) {
      return setAttributes({
        marginBefore: marginBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin After",
    value: attributes.marginAfter,
    onChange: function onChange(marginAfter) {
      return setAttributes({
        marginAfter: marginAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_4__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_4__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmContentCallout, {
    eyebrowTitle: attributes.eyebrowHeader,
    title: attributes.title,
    description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      templateLock: false
    }),
    link: attributes.link,
    imageSrc: attributes.imageSrc
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/em-blocks/content-callout/editor/save.js":
/*!***********************************************************!*\
  !*** ./packages/em-blocks/content-callout/editor/save.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var save = function save(props) {
  console.info(props);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./packages/em-blocks/content-callout/editor/style.scss":
/*!**************************************************************!*\
  !*** ./packages/em-blocks/content-callout/editor/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/em-blocks/content-heading/editor/block.js":
/*!************************************************************!*\
  !*** ./packages/em-blocks/content-heading/editor/block.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/em-blocks/content-heading/editor/edit.js");

/**
 *
 * WordPress Dependencies
 *
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;

 //import save from "./save"; 

registerBlockType("wsuwp-em/heading", {
  title: "Heading (EM)",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M28.9507 2C28.9507 0.89543 29.8462 0 30.9507 0H46C47.1046 0 48 0.89543 48 2V46C48 47.1046 47.1046 48 46 48H30.9507C29.8462 48 28.9507 47.1046 28.9507 46V31.7829H19.0493V46C19.0493 47.1046 18.1538 48 17.0493 48H2C0.89543 48 0 47.1046 0 46V2C0 0.89543 0.89543 0 2 0H17.0493C18.1538 0 19.0493 0.89543 19.0493 2V15.5886H28.9507V2ZM30.9507 2H46V46H30.9507V29.7829H17.0493V46H2V2H17.0493V17.5886H30.9507V2Z"
  })),
  attributes: {
    align: {
      "type": "string"
    },
    content: {
      "type": "string",
      "default": ""
    },
    link: {
      "type": "string",
      "default": ""
    },
    level: {
      "type": "number",
      "default": 2
    },
    style: {
      "type": "string",
      "default": 'default'
    },
    textAlign: {
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
    },
    id: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/em-blocks/content-heading/editor/edit.js":
/*!***********************************************************!*\
  !*** ./packages/em-blocks/content-heading/editor/edit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading-level-icon */ "./packages/em-blocks/content-heading/editor/heading-level-icon.js");
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");

var __ = wp.i18n.__;
var URLInputButton = wp.blockEditor.URLInputButton;
var PlainText = wp.blockEditor.PlainText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    DropdownMenu = _wp$components.DropdownMenu,
    Toolbar = _wp$components.Toolbar,
    BaseControl = _wp$components.BaseControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;




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

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: 'Enter tile here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Header Link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    id: "header-link",
    className: 'wsu-c-block-content-header__link',
    value: attributes.link,
    onChange: function onChange(link, post) {
      return setAttributes({
        link: link
      });
    },
    placeholder: 'Enter URL here.',
    isFullWidth: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: attributes.textAlign,
    onChange: function onChange(textAlign) {
      return setAttributes({
        textAlign: textAlign
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Layout",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding Before",
    value: attributes.paddingBefore,
    onChange: function onChange(paddingBefore) {
      return setAttributes({
        paddingBefore: paddingBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding After",
    value: attributes.paddingAfter,
    onChange: function onChange(paddingAfter) {
      return setAttributes({
        paddingAfter: paddingAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin Before",
    value: attributes.marginBefore,
    onChange: function onChange(marginBefore) {
      return setAttributes({
        marginBefore: marginBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin After",
    value: attributes.marginAfter,
    onChange: function onChange(marginAfter) {
      return setAttributes({
        marginAfter: marginAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_3__["spacing"]
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DropdownMenu, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      level: attributes.level
    }),
    label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      level: "1"
    }),
    controls: [{
      title: 'Level 2',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "2"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 2
        });
      }
    }, {
      title: 'Level 3',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "3"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 3
        });
      }
    }, {
      title: 'Level 4',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "4"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 4
        });
      }
    }, {
      title: 'Level 5',
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: "5"
      }),
      onClick: function onClick() {
        return setAttributes({
          level: 5
        });
      }
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: attributes.textAlign,
    onChange: function onChange(textAlign) {
      return setAttributes({
        textAlign: textAlign
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-b-heading__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
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

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/em-blocks/content-heading/editor/heading-level-icon.js":
/*!*************************************************************************!*\
  !*** ./packages/em-blocks/content-heading/editor/heading-level-icon.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadingLevelIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelIcon props.
 *
 * @typedef WPHeadingLevelIconProps
 *
 * @property {number}   level     The heading level to show an icon for.
 * @property {?boolean} isPressed Whether or not the icon should appear pressed; default: false.
 */

/**
 * Heading level icon.
 *
 * @param {WPHeadingLevelIconProps} props Component props.
 *
 * @return {?WPComponent} The icon.
 */

function HeadingLevelIcon(_ref) {
  var level = _ref.level,
      _ref$isPressed = _ref.isPressed,
      isPressed = _ref$isPressed === void 0 ? false : _ref$isPressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: levelToPath[level]
  }));
}

/***/ }),

/***/ "./packages/em-blocks/content-hero/editor/block.js":
/*!*********************************************************!*\
  !*** ./packages/em-blocks/content-hero/editor/block.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./packages/em-blocks/content-hero/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;
var Icon = wp.components.Icon;


registerBlockType("wsuwp-em/hero", {
  title: "Hero Banner (EM)",
  category: "content",
  icon: 'book-alt',
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
    title: {
      type: 'string',
      default: ''
    },
    titleTag: {
      type: 'string',
      default: ''
    },
    titleAriaLabel: {
      type: 'string',
      default: ''
    },
    description: {
      type: 'string',
      default: ''
    },
    backgroundImageUrl: {
      type: 'string',
      default: 'https://s3.wp.wsu.edu/uploads/sites/2438/2020/08/Coug-Logo-on-Chinook-crop_8520.jpg'
    },
    decorators: {
      type: 'array',
      default: []
    },
    style: {
      type: 'string',
      default: 'default'
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./packages/em-blocks/content-hero/editor/edit.js":
/*!********************************************************!*\
  !*** ./packages/em-blocks/content-hero/editor/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/em-blocks/content-hero/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wsuwebteam_build_tools_js_helpers_ranges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/helpers/ranges */ "./node_modules/@wsuwebteam/build-tools/js/helpers/ranges.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;
var EmHero = wsu_wds.emComponents.EmHero;





var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Add title text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "TitleTag",
    value: attributes.titleTag,
    onChange: function onChange(titleTag) {
      return setAttributes({
        titleTag: titleTag
      });
    },
    placeholder: 'Add titleTag text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "TitleAriaLabel",
    value: attributes.titleAriaLabel,
    onChange: function onChange(titleAriaLabel) {
      return setAttributes({
        titleAriaLabel: titleAriaLabel
      });
    },
    placeholder: 'Add titleAriaLabel text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Description",
    value: attributes.description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    },
    placeholder: 'Add description text'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        backgroundImageUrl: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["DecoratorControl"], {
    decorators: attributes.decorators,
    onChange: function onChange(decoratorArray) {
      setAttributes({
        decorators: decoratorArray
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Style",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Display Style",
    value: attributes.style,
    options: [{
      label: 'Welcome #FutureCoug (Only used on Admitted and has a Hardcoded Title Field that is not editable at the moment)',
      value: 'default'
    }, {
      label: 'Boxed Background',
      value: 'boxed-background'
    }],
    onChange: function onChange(style) {
      setAttributes({
        style: style
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Banner Height",
    value: attributes.verticalSpacing,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Extra Small',
      value: 'xsmall'
    }, {
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Large',
      value: 'large'
    }, {
      label: 'Full',
      value: 'full'
    }],
    onChange: function onChange(verticalSpacing) {
      return setAttributes({
        verticalSpacing: verticalSpacing
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_3__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmHero, {
    title: attributes.title,
    titleTag: attributes.titleTag,
    titleAriaLabel: attributes.titleAriaLabel,
    description: attributes.description,
    backgroundImageUrl: attributes.backgroundImageUrl,
    style: attributes.style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/em-blocks/content-hero/editor/style.scss":
/*!***********************************************************!*\
  !*** ./packages/em-blocks/content-hero/editor/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/em-blocks/content-separator/editor/block.js":
/*!**************************************************************!*\
  !*** ./packages/em-blocks/content-separator/editor/block.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./packages/em-blocks/content-separator/editor/edit.js");
/* harmony import */ var _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../block-controls/global-block-atts */ "./packages/block-controls/global-block-atts/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./packages/em-blocks/content-separator/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 *
 * WordPress Dependencies
 *
 */


var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockCollection = _wp$blocks.registerBlockCollection;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;



registerBlockType("wsuwp-em/separator", {
  title: "Separator (EM)",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "26",
    viewBox: "0 0 48 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.25 13C0.25 12.2873 0.827795 11.7095 1.54054 11.7095H46.7095C47.4222 11.7095 48 12.2873 48 13C48 13.7127 47.4222 14.2905 46.7095 14.2905H1.54054C0.827795 14.2905 0.25 13.7127 0.25 13Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M36.3851 2.67568H11.8649C11.1521 2.67568 10.5743 3.25347 10.5743 3.96622V5.90203C10.5743 6.61477 11.1521 7.19257 11.8649 7.19257H36.3851C37.0979 7.19257 37.6757 6.61477 37.6757 5.90203V3.96622C37.6757 3.25347 37.0979 2.67568 36.3851 2.67568ZM11.8649 0.094595C9.72663 0.094595 7.99324 1.82798 7.99324 3.96622V5.90203C7.99324 8.04026 9.72663 9.77365 11.8649 9.77365H36.3851C38.5234 9.77365 40.2568 8.04026 40.2568 5.90203V3.96622C40.2568 1.82798 38.5234 0.094595 36.3851 0.094595H11.8649Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M36.3851 18.8074H11.8649C11.1521 18.8074 10.5743 19.3852 10.5743 20.098V22.0338C10.5743 22.7465 11.1521 23.3243 11.8649 23.3243H36.3851C37.0979 23.3243 37.6757 22.7465 37.6757 22.0338V20.098C37.6757 19.3852 37.0979 18.8074 36.3851 18.8074ZM11.8649 16.2264C9.72663 16.2264 7.99324 17.9597 7.99324 20.098V22.0338C7.99324 24.172 9.72663 25.9054 11.8649 25.9054H36.3851C38.5234 25.9054 40.2568 24.172 40.2568 22.0338V20.098C40.2568 17.9597 38.5234 16.2264 36.3851 16.2264H11.8649Z"
  })),
  attributes: _objectSpread(_objectSpread({}, _block_controls_global_block_atts__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    isHatched: {
      type: 'boolean',
      default: false
    },
    showMoreIndicator: {
      type: 'boolean',
      default: false
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./packages/em-blocks/content-separator/editor/edit.js":
/*!*************************************************************!*\
  !*** ./packages/em-blocks/content-separator/editor/edit.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;
var EmSeparator = wsu_wds.emComponents.EmSeparator;



var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmSeparator, {
    isHatched: attributes.isHatched,
    showMoreIndicator: attributes.showMoreIndicator,
    className: className
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Use Hatched Background",
    help: attributes.isHatched ? 'Has hatched background.' : 'No hatched background.',
    checked: attributes.isHatched,
    onChange: function onChange(checked) {
      return setAttributes({
        isHatched: checked
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_1__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/em-blocks/content-separator/editor/style.scss":
/*!****************************************************************!*\
  !*** ./packages/em-blocks/content-separator/editor/style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/em-blocks/content-stat/editor/block.js":
/*!*********************************************************!*\
  !*** ./packages/em-blocks/content-stat/editor/block.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./packages/em-blocks/content-stat/editor/edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./packages/em-blocks/content-stat/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);

/**
 *
 * WordPress Dependencies
 *
 */

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockCollection = _wp$blocks.registerBlockCollection;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var URLInputButton = wp.blockEditor.URLInputButton;


registerBlockType("wsuwp-em/stat", {
  title: "Stat (EM)",
  category: "content",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 -1.04907e-06L24 23.9999L48 23.9999C48 23.1233 47.953 22.2576 47.8614 21.4053C46.6593 10.2231 37.7768 1.34067 26.5946 0.138619C25.7423 0.0469997 24.8766 -1.01075e-06 24 -1.04907e-06ZM26.5946 2.75025L26.5946 21.4053L45.2497 21.4053C44.0719 11.6576 36.3423 3.92806 26.5946 2.75025ZM24 26.5945C22.5671 26.5945 21.4054 25.4329 21.4054 23.9999L21.4054 0.138617C20.5254 0.233211 19.6597 0.375369 18.8108 0.562468C8.05056 2.93412 4.82653e-06 12.5269 4.32503e-06 24C3.74564e-06 37.2548 10.7452 48 24 48C35.4731 48 45.0659 39.9494 47.4375 29.1891C47.6246 28.3402 47.7668 27.4745 47.8614 26.5945L24 26.5945ZM44.7726 29.1891L24 29.1891C21.1341 29.1891 18.8108 26.8658 18.8108 23.9999L18.8108 3.22737C9.49723 5.54589 2.5946 13.9683 2.5946 24C2.5946 35.8219 12.1781 45.4054 24 45.4054C34.0317 45.4054 42.4542 38.5027 44.7726 29.1891Z"
  })),
  attributes: {
    value: {
      type: 'string',
      default: ''
    },
    label: {
      type: 'string',
      default: ''
    },
    description: {
      type: 'string',
      default: ''
    },
    prefix: {
      type: 'string',
      default: ''
    },
    suffix: {
      type: 'string',
      default: ''
    },
    separator: {
      type: 'string',
      default: ','
    },
    duration: {
      type: 'number',
      default: 1.5
    },
    alignment: {
      type: 'string',
      default: 'default'
    },
    isDark: {
      type: 'boolean',
      default: false
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./packages/em-blocks/content-stat/editor/edit.js":
/*!********************************************************!*\
  !*** ./packages/em-blocks/content-stat/editor/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../block-components */ "./packages/block-components/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl,
    CheckboxControl = _wp$components.CheckboxControl,
    RangeControl = _wp$components.RangeControl;



var edit = function edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("pre", null, "EM Stat"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Value / Number",
    value: attributes.value,
    onChange: function onChange(value) {
      return setAttributes({
        value: value
      });
    },
    placeholder: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Label",
    value: attributes.label,
    onChange: function onChange(label) {
      return setAttributes({
        label: label
      });
    },
    placeholder: 'Enter stat label here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Description",
    value: attributes.description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    },
    placeholder: 'Enter stat description here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Alignment",
    value: attributes.alignment,
    options: [{
      label: 'Center',
      value: 'default'
    }, {
      label: 'Left',
      value: 'align-left'
    }, {
      label: 'Right',
      value: 'align-right'
    }],
    onChange: function onChange(change) {
      return setAttributes({
        alignment: change
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Enable Dark Mode",
    help: attributes.isDark ? 'Dark mode is enabled.' : 'Using default.',
    checked: attributes.isDark,
    onChange: function onChange(checked) {
      return setAttributes({
        isDark: checked
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Layout",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding Before",
    value: attributes.paddingBefore,
    onChange: function onChange(paddingBefore) {
      return setAttributes({
        paddingBefore: paddingBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Padding After",
    value: attributes.paddingAfter,
    onChange: function onChange(paddingAfter) {
      return setAttributes({
        paddingAfter: paddingAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin Before",
    value: attributes.marginBefore,
    onChange: function onChange(marginBefore) {
      return setAttributes({
        marginBefore: marginBefore
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacing"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Margin After",
    value: attributes.marginAfter,
    onChange: function onChange(marginAfter) {
      return setAttributes({
        marginAfter: marginAfter
      });
    },
    options: _block_components__WEBPACK_IMPORTED_MODULE_1__["spacing"]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_2__["SpacingPanelVertical"], {
    attributes: attributes,
    setAttributes: setAttributes
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./packages/em-blocks/content-stat/editor/style.scss":
/*!***********************************************************!*\
  !*** ./packages/em-blocks/content-stat/editor/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/primitives":
/*!*********************************************!*\
  !*** external {"this":["wp","primitives"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map