(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@material-ui/core/Grid'), require('@material-ui/core/Typography'), require('@material-ui/core/IconButton'), require('@material-ui/core/Toolbar'), require('@material-ui/core/utils'), require('@material-ui/core/styles'), require('@material-ui/core/useMediaQuery'), require('@material-ui/core/Button'), require('@material-ui/core/DialogActions'), require('@material-ui/core/DialogContent'), require('@material-ui/core/Dialog'), require('@material-ui/core/TextField'), require('@material-ui/core/InputAdornment'), require('@material-ui/core/Popover'), require('@material-ui/core/Grow'), require('@material-ui/core/Paper'), require('@material-ui/core/Modal/TrapFocus'), require('@material-ui/core/Popper'), require('@material-ui/core/ButtonBase'), require('@material-ui/core/CircularProgress'), require('react-dom'), require('@material-ui/core/Fade'), require('@material-ui/core/Tab'), require('@material-ui/core/Tabs')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@material-ui/core/Grid', '@material-ui/core/Typography', '@material-ui/core/IconButton', '@material-ui/core/Toolbar', '@material-ui/core/utils', '@material-ui/core/styles', '@material-ui/core/useMediaQuery', '@material-ui/core/Button', '@material-ui/core/DialogActions', '@material-ui/core/DialogContent', '@material-ui/core/Dialog', '@material-ui/core/TextField', '@material-ui/core/InputAdornment', '@material-ui/core/Popover', '@material-ui/core/Grow', '@material-ui/core/Paper', '@material-ui/core/Modal/TrapFocus', '@material-ui/core/Popper', '@material-ui/core/ButtonBase', '@material-ui/core/CircularProgress', 'react-dom', '@material-ui/core/Fade', '@material-ui/core/Tab', '@material-ui/core/Tabs'], factory) :
  (global = global || self, factory(global['@material-ui/pickers'] = {}, global.React, global['material-ui'].Grid, global['material-ui'].Typography, global['material-ui'].IconButton, global['material-ui'].Toolbar, global['material-ui'].utils, global['material-ui'], global['material-ui'].useMediaQuery, global['material-ui'].Button, global['material-ui'].DialogActions, global['material-ui'].DialogContent, global['material-ui'].Dialog, global['material-ui'].TextField, global['material-ui'].InputAdornment, global['material-ui'].Popover, global['material-ui'].Grow, global['material-ui'].Paper, global['material-ui'].TrapFocus, global['material-ui'].Popper, global['material-ui'].ButtonBase, global['material-ui'].CircularProgress, global.ReactDOM, global['material-ui'].Fade, global['material-ui'].Tab, global['material-ui'].Tabs));
}(this, (function (exports, React, Grid, Typography, IconButton, Toolbar, utils, styles$1, useMediaQuery, Button, DialogActions, DialogContent, Dialog, TextField, InputAdornment, Popover, Grow, Paper, TrapFocus, Popper, ButtonBase, CircularProgress, ReactDOM, Fade, Tab, Tabs) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  Grid = Grid && Grid.hasOwnProperty('default') ? Grid['default'] : Grid;
  Typography = Typography && Typography.hasOwnProperty('default') ? Typography['default'] : Typography;
  IconButton = IconButton && IconButton.hasOwnProperty('default') ? IconButton['default'] : IconButton;
  Toolbar = Toolbar && Toolbar.hasOwnProperty('default') ? Toolbar['default'] : Toolbar;
  useMediaQuery = useMediaQuery && useMediaQuery.hasOwnProperty('default') ? useMediaQuery['default'] : useMediaQuery;
  Button = Button && Button.hasOwnProperty('default') ? Button['default'] : Button;
  DialogActions = DialogActions && DialogActions.hasOwnProperty('default') ? DialogActions['default'] : DialogActions;
  DialogContent = DialogContent && DialogContent.hasOwnProperty('default') ? DialogContent['default'] : DialogContent;
  Dialog = Dialog && Dialog.hasOwnProperty('default') ? Dialog['default'] : Dialog;
  TextField = TextField && TextField.hasOwnProperty('default') ? TextField['default'] : TextField;
  InputAdornment = InputAdornment && InputAdornment.hasOwnProperty('default') ? InputAdornment['default'] : InputAdornment;
  Popover = Popover && Popover.hasOwnProperty('default') ? Popover['default'] : Popover;
  Grow = Grow && Grow.hasOwnProperty('default') ? Grow['default'] : Grow;
  Paper = Paper && Paper.hasOwnProperty('default') ? Paper['default'] : Paper;
  TrapFocus = TrapFocus && TrapFocus.hasOwnProperty('default') ? TrapFocus['default'] : TrapFocus;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
  ButtonBase = ButtonBase && ButtonBase.hasOwnProperty('default') ? ButtonBase['default'] : ButtonBase;
  CircularProgress = CircularProgress && CircularProgress.hasOwnProperty('default') ? CircularProgress['default'] : CircularProgress;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  Fade = Fade && Fade.hasOwnProperty('default') ? Fade['default'] : Fade;
  Tab = Tab && Tab.hasOwnProperty('default') ? Tab['default'] : Tab;
  Tabs = Tabs && Tabs.hasOwnProperty('default') ? Tabs['default'] : Tabs;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

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
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });

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

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
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
    {
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
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
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
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
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

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
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
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if ( typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
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
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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
        if (!reactIs.isValidElementType(propValue)) {
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
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
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
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
         printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
  });
  var propTypes_1 = propTypes.array;
  var propTypes_2 = propTypes.bool;
  var propTypes_3 = propTypes.func;
  var propTypes_4 = propTypes.number;
  var propTypes_5 = propTypes.object;
  var propTypes_6 = propTypes.string;
  var propTypes_7 = propTypes.symbol;
  var propTypes_8 = propTypes.any;
  var propTypes_9 = propTypes.arrayOf;
  var propTypes_10 = propTypes.element;
  var propTypes_11 = propTypes.elementType;
  var propTypes_12 = propTypes.instanceOf;
  var propTypes_13 = propTypes.node;
  var propTypes_14 = propTypes.objectOf;
  var propTypes_15 = propTypes.oneOf;
  var propTypes_16 = propTypes.oneOfType;
  var propTypes_17 = propTypes.shape;
  var propTypes_18 = propTypes.exact;
  var propTypes_19 = propTypes.checkPropTypes;
  var propTypes_20 = propTypes.resetWarningCache;
  var propTypes_21 = propTypes.PropTypes;

  var MuiPickersAdapterContext = React.createContext(null);
  var LocalizationProvider = function LocalizationProvider(_ref) {
    var Utils = _ref.dateAdapter,
        children = _ref.children,
        locale = _ref.locale,
        libFormats = _ref.dateFormats,
        libInstance = _ref.dateLibInstance;
    var utils = React.useMemo(function () {
      return new Utils({
        locale: locale,
        formats: libFormats,
        instance: libInstance
      });
    }, [Utils, locale, libFormats, libInstance]);
    return React.createElement(MuiPickersAdapterContext.Provider, {
      value: utils,
      children: children
    });
  };
   LocalizationProvider.propTypes = {
    dateAdapter: propTypes_3.isRequired,
    locale: propTypes_16([propTypes_5, propTypes_6]),

    /**
     * Your component tree.
     */
    children: propTypes_13.isRequired
  } ;

  // TODO uncomment when syntax will be allowed by next babel
  function checkUtils(utils)
  /* : asserts utils is MuiPickersUtils */
  {
    if (!utils) {
      throw new Error('Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
    }
  }

  function useUtils() {
    var utils = React.useContext(MuiPickersAdapterContext);
    checkUtils(utils);
    return utils;
  }
  function useNow() {
    var utils = useUtils();
    var now = React.useRef(utils.date());
    return now.current;
  }

  function toVal(mix) {
  	var k, y, str='';
  	if (mix) {
  		if (typeof mix === 'object') {
  			if (Array.isArray(mix)) {
  				for (k=0; k < mix.length; k++) {
  					if (mix[k] && (y = toVal(mix[k]))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			} else {
  				for (k in mix) {
  					if (mix[k] && (y = toVal(k))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else if (typeof mix !== 'boolean' && !mix.call) {
  			str && (str += ' ');
  			str += mix;
  		}
  	}
  	return str;
  }

  function clsx () {
  	var i=0, x, str='';
  	while (i < arguments.length) {
  		if (x = toVal(arguments[i++])) {
  			str && (str += ' ');
  			str += x;
  		}
  	}
  	return str;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var PenIcon = utils.createSvgIcon(React__default.createElement("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
  }), 'PenIcon');

  var KeyboardIcon = utils.createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
  }), React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })), 'KeyboardIcon');

  var useStyles = styles$1.makeStyles(function (theme) {
    var toolbarBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
    return {
      toolbar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: toolbarBackground,
        color: theme.palette.getContrastText(toolbarBackground)
      },
      toolbarLandscape: {
        height: 'auto',
        maxWidth: 160,
        padding: 16,
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
      },
      dateTitleContainer: {
        flex: 1
      }
    };
  }, {
    name: 'MuiPickersToolbar'
  });

  function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen) {
    return isKeyboardInputOpen ? 'text input view is open, go to calendar view' : 'calendar view is open, go to text input view';
  }

  var PickerToolbar = function PickerToolbar(_ref) {
    var children = _ref.children,
        isLandscape = _ref.isLandscape,
        toolbarTitle = _ref.toolbarTitle,
        _ref$landscapeDirecti = _ref.landscapeDirection,
        landscapeDirection = _ref$landscapeDirecti === void 0 ? 'column' : _ref$landscapeDirecti,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        penIconClassName = _ref.penIconClassName,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        _ref$getMobileKeyboar = _ref.getMobileKeyboardInputViewButtonText,
        getMobileKeyboardInputViewButtonText = _ref$getMobileKeyboar === void 0 ? defaultGetKeyboardInputSwitchingButtonText : _ref$getMobileKeyboar,
        other = _objectWithoutProperties(_ref, ["children", "isLandscape", "toolbarTitle", "landscapeDirection", "className", "penIconClassName", "toggleMobileKeyboardView", "isMobileKeyboardViewOpen", "getMobileKeyboardInputViewButtonText"]);

    var classes = useStyles();
    return React.createElement(Toolbar, _extends({
      "data-mui-test": "picker-toolbar",
      className: clsx(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
    }, other), React.createElement(Typography, {
      "data-mui-test": "picker-toolbar-title",
      color: "inherit",
      variant: "overline"
    }, toolbarTitle), React.createElement(Grid, {
      container: true,
      justify: "space-between",
      className: classes.dateTitleContainer,
      direction: isLandscape ? landscapeDirection : 'row',
      alignItems: isLandscape ? 'flex-start' : 'flex-end'
    }, children, React.createElement(IconButton, {
      onClick: toggleMobileKeyboardView,
      className: penIconClassName,
      color: "inherit",
      "data-mui-test": "toggle-mobile-keyboard-view",
      "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen)
    }, isMobileKeyboardViewOpen ? React.createElement(KeyboardIcon, {
      color: "inherit"
    }) : React.createElement(PenIcon, {
      color: "inherit"
    }))));
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  /** Use it instead of .includes method for IE support */
  function arrayIncludes(array, itemOrItems) {
    if (Array.isArray(itemOrItems)) {
      return itemOrItems.every(function (item) {
        return array.indexOf(item) !== -1;
      });
    }

    return array.indexOf(itemOrItems) !== -1;
  }
  var onSpaceOrEnter = function onSpaceOrEnter(innerFn, onFocus) {
    return function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        innerFn(); // prevent any side effects

        e.preventDefault();
        e.stopPropagation();
      }

      if (onFocus) {
        onFocus(e);
      }
    };
  };
  /** Quick untyped helper to improve function composition readability */

  var pipe = function pipe() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduceRight(function (prevFn, nextFn) {
      return function () {
        return nextFn(prevFn.apply(void 0, arguments));
      };
    }, function (value) {
      return value;
    });
  };
  var executeInTheNextEventLoopTick = function executeInTheNextEventLoopTick(fn) {
    return setTimeout(fn, 0);
  };
  function createDelegatedEventHandler(fn, onEvent) {
    return function (e) {
      fn(e);

      if (onEvent) {
        onEvent(e);
      }
    };
  }
  function mergeRefs(refs) {
    return function (value) {
      refs.forEach(function (ref) {
        if (typeof ref === 'function') {
          ref(value);
        } else if (_typeof(ref) === 'object' && ref != null) {
          // @ts-ignore .current is not a readonly, hold on ts
          ref.current = value;
        }
      });
    };
  }
  var doNothing = function doNothing() {};

  var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
    var date = _ref.date,
        utils = _ref.utils,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        disableFuture = _ref.disableFuture,
        disablePast = _ref.disablePast,
        shouldDisableDate = _ref.shouldDisableDate;
    var today = utils.startOfDay(utils.date());

    if (disablePast && utils.isBefore(minDate, today)) {
      minDate = today;
    }

    if (disableFuture && utils.isAfter(maxDate, today)) {
      maxDate = today;
    }

    var forward = date;
    var backward = date;

    if (utils.isBefore(date, minDate)) {
      forward = utils.date(minDate);
      backward = null;
    }

    if (utils.isAfter(date, maxDate)) {
      if (backward) {
        backward = utils.date(maxDate);
      }

      forward = null;
    }

    while (forward || backward) {
      if (forward && utils.isAfter(forward, maxDate)) {
        forward = null;
      }

      if (backward && utils.isBefore(backward, minDate)) {
        backward = null;
      }

      if (forward) {
        if (!shouldDisableDate(forward)) {
          return forward;
        }

        forward = utils.addDays(forward, 1);
      }

      if (backward) {
        if (!shouldDisableDate(backward)) {
          return backward;
        }

        backward = utils.addDays(backward, -1);
      }
    } // fallback to today if no enabled days


    return utils.date();
  };
  var isYearOnlyView = function isYearOnlyView(views) {
    return views.length === 1 && views[0] === 'year';
  };
  var isYearAndMonthViews = function isYearAndMonthViews(views) {
    return views.length === 2 && arrayIncludes(views, 'month') && arrayIncludes(views, 'year');
  };
  var getFormatByViews = function getFormatByViews(views, utils) {
    if (isYearOnlyView(views)) {
      return utils.formats.year;
    }

    if (isYearAndMonthViews(views)) {
      return utils.formats.monthAndYear;
    }

    return utils.formats.keyboardDate;
  };
  function parsePickerInputValue(now, utils, _ref2) {
    var value = _ref2.value,
        defaultHighlight = _ref2.defaultHighlight;
    var parsedValue = utils.date(value || defaultHighlight || now);
    return parsedValue && utils.isValid(parsedValue) ? parsedValue : now;
  }
  var isRangeValid = function isRangeValid(utils, range) {
    return Boolean(range && range[0] && range[1] && utils.isBefore(range[0], range[1]));
  };
  var isWithinRange = function isWithinRange(utils, day, range) {
    return isRangeValid(utils, range) && utils.isWithinRange(day, range);
  };
  var isStartOfRange = function isStartOfRange(utils, day, range) {
    return isRangeValid(utils, range) && utils.isSameDay(day, range[0]);
  };
  var isEndOfRange = function isEndOfRange(utils, day, range) {
    return isRangeValid(utils, range) && utils.isSameDay(day, range[1]);
  };

  var useStyles$1 = styles$1.makeStyles({
    dateTitleLandscape: {
      margin: 'auto 16px auto auto'
    },
    penIcon: {
      position: 'relative',
      top: 4
    }
  }, {
    name: 'MuiPickersDatePickerRoot'
  });
  var DatePickerToolbar = function DatePickerToolbar(_ref) {
    var date = _ref.date,
        views = _ref.views,
        isLandscape = _ref.isLandscape,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
        toolbarFormat = _ref.toolbarFormat,
        _ref$toolbarTitle = _ref.toolbarTitle,
        toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE' : _ref$toolbarTitle;
    var utils = useUtils();
    var classes = useStyles$1();
    var dateText = React.useMemo(function () {
      if (toolbarFormat) {
        return utils.formatByString(date, toolbarFormat);
      }

      if (isYearOnlyView(views)) {
        return utils.format(date, 'year');
      }

      if (isYearAndMonthViews(views)) {
        return utils.format(date, 'month');
      } // Little localization hack (Google is doing the same for android native pickers):
      // For english localization it is convenient to include weekday into the date "Mon, Jun 1"
      // For other locales using strings like "June 1", without weekday


      return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(date, 'normalDateWithWeekday') : utils.format(date, 'normalDate');
    }, [date, toolbarFormat, utils, views]);
    return React.createElement(PickerToolbar, {
      toolbarTitle: toolbarTitle,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView,
      isLandscape: isLandscape,
      penIconClassName: classes.penIcon
    }, React.createElement(Typography, {
      variant: "h4",
      children: dateText,
      "data-mui-test": "datepicker-toolbar-date",
      align: isLandscape ? 'left' : 'center',
      className: clsx(isLandscape && classes.dateTitleLandscape)
    }));
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var date = propTypes_16([propTypes_5, propTypes_6, propTypes_4, propTypes_12(Date)]);
  var datePickerView = propTypes_15(['year', 'month', 'day']);
  /* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

  var timePickerDefaultProps = {
    invalidDateMessage: 'Invalid Time Format'
  };
  var datePickerDefaultProps = {
    minDate: new Date('1900-01-01'),
    maxDate: new Date('2100-01-01'),
    invalidDateMessage: 'Invalid Date Format',
    minDateMessage: 'Date should not be before minimal date',
    maxDateMessage: 'Date should not be after maximal date'
  };
  var dateTimePickerDefaultProps = _objectSpread({}, timePickerDefaultProps, {}, datePickerDefaultProps, {
    showTabs: true
  });

  var DIALOG_WIDTH = 320;
  var DIALOG_WIDTH_WIDER = 325;
  var VIEW_HEIGHT = 358;
  var DAY_SIZE = 36;
  var DAY_MARGIN = 2;

  var useStyles$2 = styles$1.makeStyles({
    dialogRoot: {
      minWidth: DIALOG_WIDTH
    },
    dialogRootWider: {
      minWidth: DIALOG_WIDTH_WIDER
    },
    dialogContainer: {
      '&:focus > $dialogRoot': {
        outline: 'auto',
        '@media (pointer:coarse)': {
          outline: 0
        }
      }
    },
    dialog: {
      '&:first-child': {
        padding: 0
      }
    },
    withAdditionalAction: {
      // set justifyContent to default value to fix IE11 layout bug
      // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
      justifyContent: 'flex-start',
      '& > *:first-child': {
        marginRight: 'auto'
      }
    }
  }, {
    name: 'MuiPickersModal'
  });
  var ModalDialog = function ModalDialog(_ref) {
    var children = _ref.children,
        onAccept = _ref.onAccept,
        onDismiss = _ref.onDismiss,
        onClear = _ref.onClear,
        onSetToday = _ref.onSetToday,
        okLabel = _ref.okLabel,
        cancelLabel = _ref.cancelLabel,
        clearLabel = _ref.clearLabel,
        todayLabel = _ref.todayLabel,
        clearable = _ref.clearable,
        showTodayButton = _ref.showTodayButton,
        showTabs = _ref.showTabs,
        wider = _ref.wider,
        other = _objectWithoutProperties(_ref, ["children", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

    var classes = useStyles$2();
    return React.createElement(Dialog, _extends({
      onClose: onDismiss,
      classes: {
        container: classes.dialogContainer,
        paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
      }
    }, other), React.createElement(DialogContent, {
      children: children,
      className: classes.dialog
    }), React.createElement(DialogActions, {
      className: clsx((clearable || showTodayButton) && classes.withAdditionalAction)
    }, clearable && React.createElement(Button, {
      "data-mui-test": "clear-action-button",
      color: "primary",
      onClick: onClear
    }, clearLabel), showTodayButton && React.createElement(Button, {
      "data-mui-test": "today-action-button",
      color: "primary",
      onClick: onSetToday
    }, todayLabel), cancelLabel && React.createElement(Button, {
      color: "primary",
      onClick: onDismiss
    }, cancelLabel), okLabel && React.createElement(Button, {
      color: "primary",
      onClick: onAccept
    }, okLabel)));
  };
  ModalDialog.displayName = 'ModalDialog';

  function getTextFieldAriaText(rawValue, utils) {
    return rawValue && utils.isValid(utils.date(rawValue)) ? "Choose date, selected date is ".concat(utils.format(utils.date(rawValue), 'fullDate')) : 'Choose date';
  }
  var getDisplayDate = function getDisplayDate(value, utils, _ref) {
    var inputFormat = _ref.inputFormat,
        emptyInputText = _ref.emptyInputText;
    var date = utils.date(value);
    var isEmpty = value === null;

    if (isEmpty) {
      return emptyInputText || '';
    }

    return utils.isValid(date) ? utils.formatByString(date, inputFormat) : '';
  };

  var getComparisonMaxDate = function getComparisonMaxDate(utils, strictCompareDates, date) {
    if (strictCompareDates) {
      return date;
    }

    return utils.endOfDay(date);
  };

  var getComparisonMinDate = function getComparisonMinDate(utils, strictCompareDates, date) {
    if (strictCompareDates) {
      return date;
    }

    return utils.startOfDay(date);
  };

  var validateDateValue = function validateDateValue(value, utils, _ref2) {
    var maxDate = _ref2.maxDate,
        minDate = _ref2.minDate,
        disablePast = _ref2.disablePast,
        disableFuture = _ref2.disableFuture,
        maxDateMessage = _ref2.maxDateMessage,
        minDateMessage = _ref2.minDateMessage,
        invalidDateMessage = _ref2.invalidDateMessage,
        strictCompareDates = _ref2.strictCompareDates;
    var parsedValue = utils.date(value); // if null - do not show error

    if (value === null) {
      return undefined;
    }

    if (!utils.isValid(value)) {
      return invalidDateMessage;
    }

    if (maxDate && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date(maxDate)))) {
      return maxDateMessage;
    }

    if (disableFuture && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date()))) {
      return maxDateMessage;
    }

    if (minDate && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date(minDate)))) {
      return minDateMessage;
    }

    if (disablePast && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date()))) {
      return minDateMessage;
    }

    return undefined;
  };
  function pick12hOr24hFormat(userFormat, ampm, formats) {
    if (userFormat) {
      return userFormat;
    }

    if (typeof ampm === 'undefined') {
      return formats.localized;
    }

    return ampm ? formats['12h'] : formats['24h'];
  }
  var staticDateWith2DigitTokens = new Date('2019-11-21T22:30:00.000');
  var staticDateWith1DigitTokens = new Date('2019-01-01T09:00:00.000');
  function checkMaskIsValidForCurrentFormat(mask, maskChar, format, acceptRegex, utils) {
    var formattedDateWith1Digit = utils.formatByString(utils.date(staticDateWith1DigitTokens), format);
    var inferredFormatPatternWith1Digits = formattedDateWith1Digit.replace(acceptRegex, maskChar);
    var inferredFormatPatternWith2Digits = utils.formatByString(utils.date(staticDateWith2DigitTokens), format).replace(acceptRegex, '_');
    var isMaskValid = inferredFormatPatternWith2Digits === mask && inferredFormatPatternWith1Digits === mask; // @ts-ignore

    if (!isMaskValid && "development" !== 'production') {
      console.warn("The mask \"".concat(mask, "\" you passed is not valid for the format used ").concat(format, ". Falling down to uncontrolled not-masked input."));
    }

    return {
      isMaskValid: isMaskValid,
      placeholder: formattedDateWith1Digit
    };
  }
  var maskedDateFormatter = function maskedDateFormatter(mask, numberMaskChar, accept) {
    return function (value) {
      var result = '';
      var parsed = value.match(accept) || [];

      if (parsed.length === 0) {
        return '';
      }

      var i = 0;
      var n = 0;

      while (i < mask.length) {
        var maskChar = mask[i];

        if (maskChar === numberMaskChar && n < parsed.length) {
          var parsedChar = parsed[n];
          result += parsedChar;
          n += 1;
        } else {
          result += maskChar;
        }

        i += 1;
      }

      return result;
    };
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var PureDateInput = function PureDateInput(_ref) {
    var onChange = _ref.onChange,
        inputFormat = _ref.inputFormat,
        rifmFormatter = _ref.rifmFormatter,
        refuse = _ref.acceptRegex,
        mask = _ref.mask,
        rawValue = _ref.rawValue,
        maskChar = _ref.maskChar,
        validationError = _ref.validationError,
        InputProps = _ref.InputProps,
        onOpen = _ref.openPicker,
        _ref$TextFieldCompone = _ref.TextFieldComponent,
        TextFieldComponent = _ref$TextFieldCompone === void 0 ? TextField : _ref$TextFieldCompone,
        variant = _ref.variant,
        emptyLabel = _ref.emptyInputText,
        keyboardIcon = _ref.keyboardIcon,
        hideOpenPickerButton = _ref.disableOpenPicker,
        ignoreInvalidInputs = _ref.ignoreInvalidInputs,
        KeyboardButtonProps = _ref.KeyboardButtonProps,
        disableMaskedInput = _ref.disableMaskedInput,
        parsedDateValue = _ref.parsedDateValue,
        forwardedRef = _ref.forwardedRef,
        containerRef = _ref.containerRef,
        open = _ref.open,
        _ref$getOpenDialogAri = _ref.getOpenDialogAriaText,
        getOpenDialogAriaText = _ref$getOpenDialogAri === void 0 ? getTextFieldAriaText : _ref$getOpenDialogAri,
        other = _objectWithoutProperties(_ref, ["onChange", "inputFormat", "rifmFormatter", "acceptRegex", "mask", "rawValue", "maskChar", "validationError", "InputProps", "openPicker", "TextFieldComponent", "variant", "emptyInputText", "keyboardIcon", "disableOpenPicker", "ignoreInvalidInputs", "KeyboardButtonProps", "disableMaskedInput", "parsedDateValue", "forwardedRef", "containerRef", "open", "getOpenDialogAriaText"]);

    var utils = useUtils();
    var PureDateInputProps = React.useMemo(function () {
      return _objectSpread$1({}, InputProps, {
        readOnly: true
      });
    }, [InputProps]);
    var inputValue = getDisplayDate(rawValue, utils, {
      inputFormat: inputFormat,
      emptyInputText: emptyLabel
    });
    return React.createElement(TextFieldComponent, _extends({
      ref: containerRef,
      inputRef: forwardedRef,
      variant: variant,
      error: Boolean(validationError),
      helperText: validationError
    }, other, {
      "aria-label": getOpenDialogAriaText(rawValue, utils) // do not overridable
      ,
      onClick: onOpen,
      value: inputValue,
      InputProps: PureDateInputProps,
      onKeyDown: onSpaceOrEnter(onOpen)
    }));
  };
  PureDateInput.displayName = 'PureDateInput';

  // consider getting rid from wrapper variant
  var WrapperVariantContext = React.createContext(null);

  var MobileWrapper = function MobileWrapper(_ref) {
    var open = _ref.open,
        children = _ref.children,
        okLabel = _ref.okLabel,
        cancelLabel = _ref.cancelLabel,
        clearLabel = _ref.clearLabel,
        todayLabel = _ref.todayLabel,
        showTodayButton = _ref.showTodayButton,
        clearable = _ref.clearable,
        DialogProps = _ref.DialogProps,
        showTabs = _ref.showTabs,
        wider = _ref.wider,
        DateInputProps = _ref.DateInputProps,
        onClear = _ref.onClear,
        onAccept = _ref.onAccept,
        onDismiss = _ref.onDismiss,
        onSetToday = _ref.onSetToday,
        PopoverProps = _ref.PopoverProps,
        displayStaticWrapperAs = _ref.displayStaticWrapperAs,
        KeyboardDateInputComponent = _ref.KeyboardDateInputComponent,
        _ref$PureDateInputCom = _ref.PureDateInputComponent,
        PureDateInputComponent = _ref$PureDateInputCom === void 0 ? PureDateInput : _ref$PureDateInputCom,
        other = _objectWithoutProperties(_ref, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday", "PopoverProps", "displayStaticWrapperAs", "KeyboardDateInputComponent", "PureDateInputComponent"]);

    return React.createElement(WrapperVariantContext.Provider, {
      value: "mobile"
    }, React.createElement(PureDateInputComponent, _extends({
      readOnly: true
    }, other, DateInputProps)), React.createElement(ModalDialog, _extends({
      wider: wider,
      showTabs: showTabs,
      open: open,
      onClear: onClear,
      onAccept: onAccept,
      onDismiss: onDismiss,
      onSetToday: onSetToday,
      clearLabel: clearLabel,
      todayLabel: todayLabel,
      okLabel: okLabel,
      cancelLabel: cancelLabel,
      clearable: clearable,
      showTodayButton: showTodayButton,
      children: children,
      "data-mui-test": "mobile-wrapper-dialog"
    }, DialogProps)));
  };
   MobileWrapper.propTypes = {
    okLabel: propTypes_13,
    cancelLabel: propTypes_13,
    clearLabel: propTypes_13,
    clearable: propTypes_2,
    todayLabel: propTypes_13,
    showTodayButton: propTypes_2,
    DialogProps: propTypes_5
  } ;
  MobileWrapper.defaultProps = {
    okLabel: 'OK',
    cancelLabel: 'Cancel',
    clearLabel: 'Clear',
    todayLabel: 'Today',
    clearable: false,
    showTodayButton: false
  };

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  var Rifm = function Rifm(props) {
    var _React$useReducer = React.useReducer(function (c) {
      return c + 1;
    }, 0),
        refresh = _React$useReducer[1];

    var valueRef = React.useRef(null);
    var replace = props.replace,
        append = props.append;
    var userValue = replace ? replace(props.format(props.value)) : props.format(props.value); // state of delete button see comments below about inputType support

    var isDeleleteButtonDownRef = React.useRef(false);

    var onChange = function onChange(evt) {
      {
        if (evt.target.type === 'number') {
          console.error('Rifm does not support input type=number, use type=tel instead.');
          return;
        }
      }

      var eventValue = evt.target.value;
      valueRef.current = [eventValue, // eventValue
      evt.target, // input
      eventValue.length > userValue.length, // isSizeIncreaseOperation
      isDeleleteButtonDownRef.current, // isDeleleteButtonDown
      userValue === props.format(eventValue)];

      {
        var formattedEventValue = props.format(eventValue);

        if (eventValue !== formattedEventValue && eventValue.toLowerCase() === formattedEventValue.toLowerCase()) {
          console.warn('Case enforcement does not work with format. Please use replace={value => value.toLowerCase()} instead');
        }
      } // The main trick is to update underlying input with non formatted value (= eventValue)
      // that allows us to calculate right cursor position after formatting (see getCursorPosition)
      // then we format new value and call props.onChange with masked/formatted value
      // and finally we are able to set cursor position into right place


      refresh();
    }; // React prints warn on server in non production mode about useLayoutEffect usage
    // in both cases it's noop


    if ( typeof window !== 'undefined') {
      React.useLayoutEffect(function () {
        if (valueRef.current == null) return;
        var _valueRef$current = valueRef.current,
            eventValue = _valueRef$current[0],
            input = _valueRef$current[1],
            isSizeIncreaseOperation = _valueRef$current[2],
            isDeleleteButtonDown = _valueRef$current[3],
            // No operation means that value itself hasn't been changed, BTW cursor, selection etc can be changed
        isNoOperation = _valueRef$current[4];
        valueRef.current = null; // this usually occurs on deleting special symbols like ' here 123'123.00
        // in case of isDeleleteButtonDown cursor should move differently vs backspace

        var deleteWasNoOp = isDeleleteButtonDown && isNoOperation; // Create string from only accepted symbols

        var clean = function clean(str) {
          return (str.match(props.accept || /\d/g) || []).join('');
        };

        var valueBeforeSelectionStart = clean(eventValue.substr(0, input.selectionStart)); // trying to find cursor position in formatted value having knowledge about valueBeforeSelectionStart
        // This works because we assume that format doesn't change the order of accepted symbols.
        // Imagine we have formatter which adds ' symbol between numbers, and by default we refuse all non numeric symbols
        // for example we had input = 1'2|'4 (| means cursor position) then user entered '3' symbol
        // inputValue = 1'23'|4 so valueBeforeSelectionStart = 123 and formatted value = 1'2'3'4
        // calling getCursorPosition("1'2'3'4") will give us position after 3, 1'2'3|'4
        // so for formatting just this function to determine cursor position after formatting is enough
        // with masking we need to do some additional checks see `mask` below

        var getCursorPosition = function getCursorPosition(val) {
          var start = 0;
          var cleanPos = 0;

          for (var i = 0; i !== valueBeforeSelectionStart.length; ++i) {
            var newPos = val.indexOf(valueBeforeSelectionStart[i], start) + 1;
            var newCleanPos = clean(val).indexOf(valueBeforeSelectionStart[i], cleanPos) + 1; // this skips position change if accepted symbols order was broken
            // For example fixes edge case with fixed point numbers:
            // You have '0|.00', then press 1, it becomes 01|.00 and after format 1.00, this breaks our assumption
            // that order of accepted symbols is not changed after format,
            // so here we don't update start position if other accepted symbols was inbetween current and new position

            if (newCleanPos - cleanPos > 1) {
              newPos = start;
              newCleanPos = cleanPos;
            }

            cleanPos = Math.max(newCleanPos, cleanPos);
            start = Math.max(start, newPos);
          }

          return start;
        }; // Masking part, for masks if size of mask is above some value
        // we need to replace symbols instead of do nothing as like in format


        if (props.mask === true && isSizeIncreaseOperation && !isNoOperation) {
          var start = getCursorPosition(eventValue);
          var c = clean(eventValue.substr(start))[0];
          start = eventValue.indexOf(c, start);
          eventValue = "" + eventValue.substr(0, start) + eventValue.substr(start + 1);
        }

        var formattedValue = props.format(eventValue);

        if (append != null && // cursor at the end
        input.selectionStart === eventValue.length && !isNoOperation) {
          if (isSizeIncreaseOperation) {
            formattedValue = append(formattedValue);
          } else {
            // If after delete last char is special character and we use append
            // delete it too
            // was: "12-3|" backspace pressed, then should be "12|"
            if (clean(formattedValue.slice(-1)) === '') {
              formattedValue = formattedValue.slice(0, -1);
            }
          }
        }

        var replacedValue = replace ? replace(formattedValue) : formattedValue;

        if (userValue === replacedValue) {
          // if nothing changed for formatted value, just refresh so userValue will be used at render
          refresh();
        } else {
          props.onChange(replacedValue);
        }

        return function () {
          var start = getCursorPosition(formattedValue); // Visually improves working with masked values,
          // like cursor jumping over refused symbols
          // as an example date mask: was "5|1-24-3" then user pressed "6"
          // it becomes "56-|12-43" with this code, and "56|-12-43" without

          if (props.mask != null && (isSizeIncreaseOperation || isDeleleteButtonDown && !deleteWasNoOp)) {
            while (formattedValue[start] && clean(formattedValue[start]) === '') {
              start += 1;
            }
          }

          input.selectionStart = input.selectionEnd = start + (deleteWasNoOp ? 1 : 0);
        };
      });
    }

    React.useEffect(function () {
      // until https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported
      // by all major browsers (now supported by: +chrome, +safari, ?edge, !firefox)
      // there is no way I found to distinguish in onChange
      // backspace or delete was called in some situations
      // firefox track https://bugzilla.mozilla.org/show_bug.cgi?id=1447239
      var handleKeyDown = function handleKeyDown(evt) {
        if (evt.code === 'Delete') {
          isDeleleteButtonDownRef.current = true;
        }
      };

      var handleKeyUp = function handleKeyUp(evt) {
        if (evt.code === 'Delete') {
          isDeleleteButtonDownRef.current = false;
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      return function () {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    }, []);
    return props.children({
      value: valueRef.current != null ? valueRef.current[0] : userValue,
      onChange: onChange
    });
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var KeyboardDateInput = function KeyboardDateInput(_ref) {
    var disableMaskedInput = _ref.disableMaskedInput,
        rawValue = _ref.rawValue,
        validationError = _ref.validationError,
        KeyboardButtonProps = _ref.KeyboardButtonProps,
        InputAdornmentProps = _ref.InputAdornmentProps,
        onOpen = _ref.openPicker,
        onChange = _ref.onChange,
        InputProps = _ref.InputProps,
        mask = _ref.mask,
        _ref$maskChar = _ref.maskChar,
        maskChar = _ref$maskChar === void 0 ? '_' : _ref$maskChar,
        _ref$acceptRegex = _ref.acceptRegex,
        acceptRegex = _ref$acceptRegex === void 0 ? /[\d]/gi : _ref$acceptRegex,
        inputFormat = _ref.inputFormat,
        disabled = _ref.disabled,
        rifmFormatter = _ref.rifmFormatter,
        _ref$TextFieldCompone = _ref.TextFieldComponent,
        TextFieldComponent = _ref$TextFieldCompone === void 0 ? TextField : _ref$TextFieldCompone,
        _ref$keyboardIcon = _ref.keyboardIcon,
        keyboardIcon = _ref$keyboardIcon === void 0 ? React.createElement(KeyboardIcon, null) : _ref$keyboardIcon,
        variant = _ref.variant,
        emptyLabel = _ref.emptyInputText,
        hideOpenPickerButton = _ref.disableOpenPicker,
        ignoreInvalidInputs = _ref.ignoreInvalidInputs,
        onFocus = _ref.onFocus,
        onBlur = _ref.onBlur,
        parsedDateValue = _ref.parsedDateValue,
        forwardedRef = _ref.forwardedRef,
        containerRef = _ref.containerRef,
        open = _ref.open,
        readOnly = _ref.readOnly,
        inputPropsPassed = _ref.inputProps,
        _ref$getOpenDialogAri = _ref.getOpenDialogAriaText,
        getOpenDialogAriaText = _ref$getOpenDialogAri === void 0 ? getTextFieldAriaText : _ref$getOpenDialogAri,
        other = _objectWithoutProperties(_ref, ["disableMaskedInput", "rawValue", "validationError", "KeyboardButtonProps", "InputAdornmentProps", "openPicker", "onChange", "InputProps", "mask", "maskChar", "acceptRegex", "inputFormat", "disabled", "rifmFormatter", "TextFieldComponent", "keyboardIcon", "variant", "emptyInputText", "disableOpenPicker", "ignoreInvalidInputs", "onFocus", "onBlur", "parsedDateValue", "forwardedRef", "containerRef", "open", "readOnly", "inputProps", "getOpenDialogAriaText"]);

    var utils = useUtils();

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isFocused = _React$useState2[0],
        setIsFocused = _React$useState2[1];

    var getInputValue = function getInputValue() {
      return getDisplayDate(rawValue, utils, {
        inputFormat: inputFormat,
        emptyInputText: emptyLabel
      });
    };

    var _React$useState3 = React.useState(getInputValue()),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        innerInputValue = _React$useState4[0],
        setInnerInputValue = _React$useState4[1];

    var _React$useMemo = React.useMemo(function () {
      // formatting of dates is a quite slow thing, so do not make useless .format calls
      if (!mask || disableMaskedInput) {
        return {
          isMaskValid: false,
          placeholder: utils.formatByString(staticDateWith2DigitTokens, inputFormat)
        };
      }

      return checkMaskIsValidForCurrentFormat(mask, maskChar, inputFormat, acceptRegex, utils);
    }, [inputFormat, mask]),
        shouldUseMaskedInput = _React$useMemo.isMaskValid,
        placeholder = _React$useMemo.placeholder; // eslint-disable-line
    // prettier-ignore


    var formatter = React.useMemo(function () {
      return shouldUseMaskedInput && mask ? maskedDateFormatter(mask, maskChar, acceptRegex) : function (st) {
        return st;
      };
    }, [shouldUseMaskedInput, mask, maskChar, acceptRegex]);
    React.useEffect(function () {
      // If not using mask don't update input on state change when focused to avoid such weird thing:
      // When parsing format "yyyy" with input value "2" value parsed and input value updating to "0002"
      if ((rawValue === null || utils.isValid(rawValue)) && !isFocused) {
        setInnerInputValue(getInputValue());
      }
    }, [rawValue]); // eslint-disable-line

    var handleChange = function handleChange(text) {
      var finalString = text === '' || text === mask ? null : text;
      setInnerInputValue(finalString);
      var date = finalString === null ? null : utils.parse(finalString, inputFormat);

      if (ignoreInvalidInputs && !utils.isValid(date)) {
        return;
      }

      onChange(date, finalString || undefined);
    };

    var adornmentPosition = (InputAdornmentProps === null || InputAdornmentProps === void 0 ? void 0 : InputAdornmentProps.position) || 'end';

    var inputProps = _objectSpread$2({
      ref: containerRef,
      inputRef: forwardedRef,
      type: shouldUseMaskedInput ? 'tel' : 'text',
      disabled: disabled,
      placeholder: placeholder,
      variant: variant,
      error: Boolean(validationError),
      helperText: validationError,
      'data-mui-test': 'keyboard-date-input'
    }, other, {
      inputProps: _objectSpread$2({}, inputPropsPassed, {
        readOnly: readOnly
      }),
      InputProps: _objectSpread$2({}, InputProps, _defineProperty({}, "".concat(adornmentPosition, "Adornment"), hideOpenPickerButton ? undefined : React.createElement(InputAdornment, _extends({
        position: adornmentPosition
      }, InputAdornmentProps), React.createElement(IconButton, _extends({
        edge: adornmentPosition,
        "data-mui-test": "open-picker-from-keyboard",
        disabled: disabled,
        "aria-label": getOpenDialogAriaText(rawValue, utils)
      }, KeyboardButtonProps, {
        onClick: onOpen
      }), keyboardIcon))))
    });

    if (!shouldUseMaskedInput) {
      return React.createElement(TextFieldComponent, _extends({
        value: innerInputValue || '',
        onChange: function onChange(e) {
          return handleChange(e.currentTarget.value);
        }
      }, inputProps, {
        onFocus: createDelegatedEventHandler(function () {
          return setIsFocused(true);
        }, onFocus),
        onBlur: createDelegatedEventHandler(function () {
          return setIsFocused(true);
        }, onBlur)
      }));
    }

    return React.createElement(Rifm, {
      key: mask,
      value: innerInputValue || '',
      onChange: handleChange,
      accept: acceptRegex,
      format: rifmFormatter || formatter
    }, function (_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return React.createElement(TextFieldComponent, _extends({
        value: value,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur
      }, inputProps));
    });
  };

  var useStyles$3 = styles$1.makeStyles({
    popover: {
      '&:focus': {
        outline: 'auto',
        '@media (pointer:coarse)': {
          outline: 0
        }
      }
    }
  });
  var DesktopWrapper = function DesktopWrapper(_ref) {
    var open = _ref.open,
        wider = _ref.wider,
        children = _ref.children,
        PopoverProps = _ref.PopoverProps,
        PopperProps = _ref.PopperProps,
        TransitionComponent = _ref.TransitionComponent,
        onClear = _ref.onClear,
        onDismiss = _ref.onDismiss,
        onSetToday = _ref.onSetToday,
        onAccept = _ref.onAccept,
        showTabs = _ref.showTabs,
        DateInputProps = _ref.DateInputProps,
        okLabel = _ref.okLabel,
        cancelLabel = _ref.cancelLabel,
        clearLabel = _ref.clearLabel,
        todayLabel = _ref.todayLabel,
        showTodayButton = _ref.showTodayButton,
        clearable = _ref.clearable,
        DialogProps = _ref.DialogProps,
        PureDateInputComponent = _ref.PureDateInputComponent,
        displayStaticWrapperAs = _ref.displayStaticWrapperAs,
        _ref$KeyboardDateInpu = _ref.KeyboardDateInputComponent,
        KeyboardDateInputComponent = _ref$KeyboardDateInpu === void 0 ? KeyboardDateInput : _ref$KeyboardDateInpu,
        other = _objectWithoutProperties(_ref, ["open", "wider", "children", "PopoverProps", "PopperProps", "TransitionComponent", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "PureDateInputComponent", "displayStaticWrapperAs", "KeyboardDateInputComponent"]);

    var ref = React.useRef(null);
    var classes = useStyles$3();
    return React.createElement(WrapperVariantContext.Provider, {
      value: "desktop"
    }, React.createElement(KeyboardDateInputComponent, _extends({}, other, DateInputProps, {
      containerRef: ref
    })), React.createElement(Popover, _extends({
      role: "dialog",
      open: open,
      onClose: onDismiss,
      anchorEl: ref.current,
      classes: {
        paper: classes.popover
      },
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    }, PopoverProps), children));
  };
   DesktopWrapper.propTypes = {
    onOpen: propTypes_3,
    onClose: propTypes_3,
    PopoverProps: propTypes_5
  } ;

  var useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
  function runKeyHandler(e, keyHandlers) {
    var handler = keyHandlers[e.keyCode];

    if (handler) {
      handler(); // if event was handled prevent other side effects (e.g. page scroll)

      e.preventDefault();
    }
  }
  function useGlobalKeyDown(active, keyHandlers) {
    var keyHandlersRef = React.useRef(keyHandlers);
    keyHandlersRef.current = keyHandlers;
    useIsomorphicEffect(function () {
      if (active) {
        var handleKeyDown = function handleKeyDown(event) {
          runKeyHandler(event, keyHandlersRef.current);
        };

        window.addEventListener('keydown', handleKeyDown);
        return function () {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }
    }, [active]);
  }
  var keycode = {
    ArrowUp: 38,
    ArrowDown: 40,
    ArrowLeft: 37,
    ArrowRight: 39,
    Enter: 13,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Esc: 27
  };

  var useStyles$4 = styles$1.makeStyles(function (theme) {
    return {
      popper: {
        zIndex: theme.zIndex.modal
      },
      paper: {
        transformOrigin: 'top center',
        '&:focus': {
          outline: 'auto',
          '@media (pointer:coarse)': {
            outline: 0
          }
        }
      },
      topTransition: {
        transformOrigin: 'bottom center'
      }
    };
  });
  var DesktopPopperWrapper = function DesktopPopperWrapper(_ref) {
    var open = _ref.open,
        wider = _ref.wider,
        children = _ref.children,
        PopperProps = _ref.PopperProps,
        PopoverProps = _ref.PopoverProps,
        onClear = _ref.onClear,
        onDismiss = _ref.onDismiss,
        onSetToday = _ref.onSetToday,
        onAccept = _ref.onAccept,
        showTabs = _ref.showTabs,
        DateInputProps = _ref.DateInputProps,
        okLabel = _ref.okLabel,
        cancelLabel = _ref.cancelLabel,
        clearLabel = _ref.clearLabel,
        todayLabel = _ref.todayLabel,
        showTodayButton = _ref.showTodayButton,
        clearable = _ref.clearable,
        DialogProps = _ref.DialogProps,
        PureDateInputComponent = _ref.PureDateInputComponent,
        displayStaticWrapperAs = _ref.displayStaticWrapperAs,
        _ref$TransitionCompon = _ref.TransitionComponent,
        TransitionComponent = _ref$TransitionCompon === void 0 ? Grow : _ref$TransitionCompon,
        _ref$KeyboardDateInpu = _ref.KeyboardDateInputComponent,
        KeyboardDateInputComponent = _ref$KeyboardDateInpu === void 0 ? KeyboardDateInput : _ref$KeyboardDateInpu,
        other = _objectWithoutProperties(_ref, ["open", "wider", "children", "PopperProps", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "PureDateInputComponent", "displayStaticWrapperAs", "TransitionComponent", "KeyboardDateInputComponent"]);

    var classes = useStyles$4();
    var inputRef = React.useRef(null);
    var popperRef = React.useRef(null);
    useGlobalKeyDown(open, _defineProperty({}, keycode.Esc, onDismiss));

    var handleBlur = function handleBlur() {
      executeInTheNextEventLoopTick(function () {
        var _inputRef$current, _popperRef$current;

        if (((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.contains(document.activeElement)) || ((_popperRef$current = popperRef.current) === null || _popperRef$current === void 0 ? void 0 : _popperRef$current.contains(document.activeElement))) {
          return;
        }

        onDismiss();
      });
    };

    return React.createElement(WrapperVariantContext.Provider, {
      value: "desktop"
    }, React.createElement(KeyboardDateInputComponent, _extends({}, other, DateInputProps, {
      onBlur: createDelegatedEventHandler(handleBlur, DateInputProps.onBlur),
      containerRef: inputRef
    })), React.createElement(Popper, _extends({
      transition: true,
      placement: "bottom",
      open: open,
      anchorEl: inputRef.current
    }, PopperProps, {
      className: clsx(classes.popper, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className)
    }), function (_ref2) {
      var TransitionProps = _ref2.TransitionProps,
          placement = _ref2.placement;
      return React.createElement(TrapFocus, {
        open: open,
        disableAutoFocus: true,
        disableEnforceFocus: true,
        isEnabled: function isEnabled() {
          return true;
        },
        getDoc: function getDoc() {
          var _ref3, _popperRef$current2;

          return (_ref3 = (_popperRef$current2 = popperRef.current) === null || _popperRef$current2 === void 0 ? void 0 : _popperRef$current2.ownerDocument) !== null && _ref3 !== void 0 ? _ref3 : document;
        }
      }, React.createElement(TransitionComponent, _extends({}, TransitionProps, {
        timeout: 350
      }), React.createElement(Paper, {
        ref: popperRef,
        onBlur: handleBlur,
        tabIndex: -1,
        elevation: 8,
        className: clsx(classes.paper, placement === 'top' && classes.topTransition)
      }, children)));
    }));
  };

  var makeResponsiveWrapper = function makeResponsiveWrapper(DesktopWrapperComponent, MobileWrapperComponent) {
    var ResponsiveWrapper = function ResponsiveWrapper(_ref) {
      var _ref$desktopModeBreak = _ref.desktopModeBreakpoint,
          desktopModeBreakpoint = _ref$desktopModeBreak === void 0 ? 'md' : _ref$desktopModeBreak,
          okLabel = _ref.okLabel,
          cancelLabel = _ref.cancelLabel,
          clearLabel = _ref.clearLabel,
          todayLabel = _ref.todayLabel,
          showTodayButton = _ref.showTodayButton,
          clearable = _ref.clearable,
          DialogProps = _ref.DialogProps,
          PopoverProps = _ref.PopoverProps,
          PopperProps = _ref.PopperProps,
          TransitionComponent = _ref.TransitionComponent,
          displayStaticWrapperAs = _ref.displayStaticWrapperAs,
          other = _objectWithoutProperties(_ref, ["desktopModeBreakpoint", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "PopoverProps", "PopperProps", "TransitionComponent", "displayStaticWrapperAs"]);

      var theme = styles$1.useTheme();
      var isDesktop = useMediaQuery(theme.breakpoints.up(desktopModeBreakpoint));
      return isDesktop ? React.createElement(DesktopWrapperComponent, _extends({
        PopperProps: PopperProps,
        TransitionComponent: TransitionComponent,
        PopoverProps: PopoverProps
      }, other)) : React.createElement(MobileWrapperComponent, _extends({
        okLabel: okLabel,
        cancelLabel: cancelLabel,
        clearLabel: clearLabel,
        todayLabel: todayLabel,
        showTodayButton: showTodayButton,
        clearable: clearable,
        DialogProps: DialogProps
      }, other));
    };

    return ResponsiveWrapper;
  };
  var ResponsiveWrapper = makeResponsiveWrapper(DesktopWrapper, MobileWrapper);
  var ResponsivePopperWrapper = makeResponsiveWrapper(DesktopPopperWrapper, MobileWrapper);

  function useOpenState(_ref) {
    var open = _ref.open,
        onOpen = _ref.onOpen,
        onClose = _ref.onClose;
    var isControllingOpenProp = React.useRef(typeof open === 'boolean').current;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        _open = _React$useState2[0],
        _setIsOpen = _React$useState2[1]; // It is required to update inner state in useEffect in order to avoid situation when
    // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)


    React.useEffect(function () {
      if (isControllingOpenProp) {
        if (typeof open !== 'boolean') {
          throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
        }

        _setIsOpen(open);
      }
    }, [isControllingOpenProp, open]);
    var setIsOpen = React.useCallback(function (newIsOpen) {
      if (!isControllingOpenProp) {
        _setIsOpen(newIsOpen);
      }

      return newIsOpen ? onOpen && onOpen() : onClose && onClose();
    }, [isControllingOpenProp, onOpen, onClose]);
    return {
      isOpen: _open,
      setIsOpen: setIsOpen
    };
  }

  var FORCE_FINISH_PICKER = Symbol('Force closing picker, used for accessibility ');
  function usePickerState(props, valueManager) {
    var autoOk = props.autoOk,
        inputFormat = props.inputFormat,
        disabled = props.disabled,
        readOnly = props.readOnly,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onError = props.onError,
        value = props.value;

    if (!inputFormat) {
      throw new Error('inputFormat prop is required');
    }

    var now = useNow();
    var utils = useUtils();
    var date = valueManager.parseInput(now, utils, props);

    var _useState = React.useState(date),
        _useState2 = _slicedToArray(_useState, 2),
        pickerDate = _useState2[0],
        setPickerDate = _useState2[1]; // Mobile keyboard view is a special case.
    // When it's open picker should work like closed, cause we are just showing text field


    var _useState3 = React.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isMobileKeyboardViewOpen = _useState4[0],
        setMobileKeyboardViewOpen = _useState4[1];

    var _useOpenState = useOpenState(props),
        isOpen = _useOpenState.isOpen,
        setIsOpen = _useOpenState.setIsOpen;

    React.useEffect(function () {
      if (!valueManager.areValuesEqual(pickerDate, date)) {
        setPickerDate(date);
      }
    }, [value]); // eslint-disable-line

    var acceptDate = React.useCallback(function (acceptedDate, needClosePicker) {
      onChange(acceptedDate);

      if (needClosePicker) {
        setIsOpen(false);

        if (onAccept) {
          onAccept(acceptedDate);
        }
      }
    }, [onAccept, onChange, setIsOpen]);
    var wrapperProps = React.useMemo(function () {
      return {
        open: isOpen,
        onClear: function onClear() {
          return acceptDate(valueManager.emptyValue, true);
        },
        onAccept: function onAccept() {
          return acceptDate(pickerDate, true);
        },
        onDismiss: function onDismiss() {
          return setIsOpen(false);
        },
        onSetToday: function onSetToday() {
          // TODO FIX ME
          setPickerDate(now);
          acceptDate(now, Boolean(autoOk));
        }
      };
    }, [acceptDate, autoOk, isOpen, now, pickerDate, setIsOpen, valueManager.emptyValue]);
    var pickerProps = React.useMemo(function () {
      return {
        date: pickerDate,
        isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
        toggleMobileKeyboardView: function toggleMobileKeyboardView() {
          if (!isMobileKeyboardViewOpen) {
            // accept any partial input done by user
            setPickerDate(pickerDate);
          }

          setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen);
        },
        onDateChange: function onDateChange(newDate, currentVariant) {
          var isFinish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          setPickerDate(newDate);
          var isFinishing = typeof isFinish === 'boolean' ? isFinish : isFinish === FORCE_FINISH_PICKER;

          if (isFinishing) {
            var autoAcceptRequested = Boolean(autoOk) || isFinish === FORCE_FINISH_PICKER;

            if (currentVariant === 'mobile' && autoAcceptRequested) {
              acceptDate(newDate, true);
            }

            if (currentVariant !== 'mobile') {
              acceptDate(newDate, autoAcceptRequested);
            }
          }
        }
      };
    }, [acceptDate, autoOk, isMobileKeyboardViewOpen, pickerDate]);
    var validationError = valueManager.validateInput(value, utils, props);
    React.useEffect(function () {
      if (onError) {
        onError(validationError, value);
      }
    }, [onError, validationError, value]);
    var inputProps = React.useMemo(function () {
      return {
        onChange: onChange,
        inputFormat: inputFormat,
        open: isOpen,
        rawValue: value,
        validationError: validationError,
        parsedDateValue: pickerDate,
        openPicker: function openPicker() {
          return !readOnly && !disabled && setIsOpen(true);
        }
      };
    }, [onChange, inputFormat, isOpen, value, validationError, pickerDate, readOnly, disabled, setIsOpen]);
    var pickerState = {
      pickerProps: pickerProps,
      inputProps: inputProps,
      wrapperProps: wrapperProps
    };
    React.useDebugValue(pickerState, function () {
      return {
        MuiPickerState: {
          pickerDate: pickerDate,
          parsedDate: date,
          other: pickerState
        }
      };
    });
    return pickerState;
  }

  function withDateAdapterProp(Component) {
    return function (_ref) {
      var dateAdapter = _ref.dateAdapter,
          other = _objectWithoutProperties(_ref, ["dateAdapter"]);

      if (dateAdapter) {
        return React.createElement(MuiPickersAdapterContext.Provider, {
          value: dateAdapter
        }, React.createElement(Component, other));
      }

      return React.createElement(Component, other);
    };
  }

  /** Creates a component that rendering modal/popover/nothing and spreading props down to text field */
  function makeWrapperComponent(Wrapper, _ref) {
    var KeyboardDateInputComponent = _ref.KeyboardDateInputComponent,
        PureDateInputComponent = _ref.PureDateInputComponent;

    function WrapperComponent(props) {
      var open = props.open,
          value = props.value,
          autoOk = props.autoOk,
          inputFormat = props.inputFormat,
          minDateMessage = props.minDateMessage,
          maxDateMessage = props.maxDateMessage,
          invalidDateMessage = props.invalidDateMessage,
          defaultHighlight = props.defaultHighlight,
          onChange = props.onChange,
          children = props.children,
          clearable = props.clearable,
          clearLabel = props.clearLabel,
          DialogProps = props.DialogProps,
          PopoverProps = props.PopoverProps,
          okLabel = props.okLabel,
          cancelLabel = props.cancelLabel,
          todayLabel = props.todayLabel,
          inputProps = props.inputProps,
          wrapperProps = props.wrapperProps,
          wider = props.wider,
          showTabs = props.showTabs,
          onAccept = props.onAccept,
          onClose = props.onClose,
          onOpen = props.onOpen,
          onError = props.onError,
          displayStaticWrapperAs = props.displayStaticWrapperAs,
          strictCompareDates = props.strictCompareDates,
          restPropsForTextField = _objectWithoutProperties(props, ["open", "value", "autoOk", "inputFormat", "minDateMessage", "maxDateMessage", "invalidDateMessage", "defaultHighlight", "onChange", "children", "clearable", "clearLabel", "DialogProps", "PopoverProps", "okLabel", "cancelLabel", "todayLabel", "inputProps", "wrapperProps", "wider", "showTabs", "onAccept", "onClose", "onOpen", "onError", "displayStaticWrapperAs", "strictCompareDates"]);

      var WrapperComponent = Wrapper;
      return React__default.createElement(WrapperComponent, _extends({
        clearable: clearable,
        clearLabel: clearLabel,
        DialogProps: DialogProps,
        okLabel: okLabel,
        todayLabel: todayLabel,
        cancelLabel: cancelLabel,
        DateInputProps: inputProps // @ts-ignore
        ,
        KeyboardDateInputComponent: KeyboardDateInputComponent // @ts-ignore
        ,
        PureDateInputComponent: PureDateInputComponent,
        wider: wider,
        showTabs: showTabs,
        displayStaticWrapperAs: displayStaticWrapperAs
      }, wrapperProps, restPropsForTextField), children);
    }

    return WrapperComponent;
  }

  function useViews(_ref) {
    var views = _ref.views,
        openTo = _ref.openTo,
        onChange = _ref.onChange,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView;

    var _React$useState = React.useState(openTo && arrayIncludes(views, openTo) ? openTo : views[0]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        openView = _React$useState2[0],
        _setOpenView = _React$useState2[1];

    var setOpenView = React.useCallback(function () {
      if (isMobileKeyboardViewOpen) {
        toggleMobileKeyboardView();
      }

      _setOpenView.apply(void 0, arguments);
    }, [isMobileKeyboardViewOpen, toggleMobileKeyboardView]);
    var previousView = views[views.indexOf(openView) - 1];
    var nextView = views[views.indexOf(openView) + 1];
    var openNext = React.useCallback(function () {
      if (nextView) {
        setOpenView(nextView);
      }
    }, [nextView, setOpenView]);
    var handleChangeAndOpenNext = React.useCallback(function (date, isFinishedSelectionInCurrentView) {
      onChange(date, Boolean(nextView) ? false : isFinishedSelectionInCurrentView);

      if (isFinishedSelectionInCurrentView) {
        openNext();
      }
    }, [nextView, onChange, openNext]);
    return {
      nextView: nextView,
      previousView: previousView,
      openNext: openNext,
      handleChangeAndOpenNext: handleChangeAndOpenNext,
      openView: openView,
      setOpenView: setOpenView
    };
  }

  var getOrientation = function getOrientation() {
    if (typeof window === 'undefined') {
      return 'portrait';
    }

    if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
      return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
    } // Support IOS safari


    if (window.orientation) {
      return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
    }

    return 'portrait';
  };

  function useIsLandscape(views, customOrientation) {
    var _React$useState = React.useState(getOrientation()),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        orientation = _React$useState2[0],
        setOrientation = _React$useState2[1];

    var eventHandler = React.useCallback(function () {
      return setOrientation(getOrientation());
    }, []);
    useIsomorphicEffect(function () {
      window.addEventListener('orientationchange', eventHandler);
      return function () {
        return window.removeEventListener('orientationchange', eventHandler);
      };
    }, [eventHandler]);

    if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
      // could not display 13:34:44 in landscape mode
      return false;
    }

    var orientationToUse = customOrientation || orientation;
    return orientationToUse === 'landscape';
  }

  var MobileKeyboardInputView = styles$1.styled('div')({
    padding: '16px 24px'
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  var ClockPointer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ClockPointer, _React$Component);

    function ClockPointer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ClockPointer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClockPointer)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        toAnimateTransform: false,
        previousType: undefined
      };

      _this.getAngleStyle = function () {
        var _this$props = _this.props,
            value = _this$props.value,
            isInner = _this$props.isInner,
            type = _this$props.type;
        var max = type === 'hours' ? 12 : 60;
        var angle = 360 / max * value;

        if (type === 'hours' && value > 12) {
          angle -= 360; // round up angle to max 360 degrees
        }

        return {
          height: isInner ? '26%' : '40%',
          transform: "rotateZ(".concat(angle, "deg)")
        };
      };

      return _this;
    }

    _createClass(ClockPointer, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            classes = _this$props2.classes,
            hasSelected = _this$props2.hasSelected,
            isInner = _this$props2.isInner,
            type = _this$props2.type,
            other = _objectWithoutProperties(_this$props2, ["classes", "hasSelected", "isInner", "type"]);

        return React.createElement("div", _extends({}, other, {
          style: this.getAngleStyle(),
          className: clsx(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
        }), React.createElement("div", {
          className: clsx(classes.thumb, hasSelected && classes.noPoint)
        }));
      }
    }]);

    return ClockPointer;
  }(React.Component);

  ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
    if (nextProps.type !== state.previousType) {
      return {
        toAnimateTransform: true,
        previousType: nextProps.type
      };
    }

    return {
      toAnimateTransform: false,
      previousType: nextProps.type
    };
  };

  var styles = function styles(theme) {
    return styles$1.createStyles({
      pointer: {
        width: 2,
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        left: 'calc(50% - 1px)',
        bottom: '50%',
        transformOrigin: 'center bottom 0px'
      },
      animateTransform: {
        transition: theme.transitions.create(['transform', 'height'])
      },
      thumb: {
        width: 4,
        height: 4,
        backgroundColor: theme.palette.primary.contrastText,
        borderRadius: '100%',
        position: 'absolute',
        top: -21,
        left: -15,
        border: "14px solid ".concat(theme.palette.primary.main),
        boxSizing: 'content-box'
      },
      noPoint: {
        backgroundColor: theme.palette.primary.main
      }
    });
  };
  var ClockPointer$1 = styles$1.withStyles(styles, {
    name: 'MuiPickersClockPointer'
  })(ClockPointer);

  var getMeridiem = function getMeridiem(date, utils) {
    return utils.getHours(date) >= 12 ? 'pm' : 'am';
  };
  var convertValueToMeridiem = function convertValueToMeridiem(value, meridiem, ampm) {
    if (ampm) {
      var currentMeridiem = value >= 12 ? 'pm' : 'am';

      if (currentMeridiem !== meridiem) {
        return meridiem === 'am' ? value - 12 : value + 12;
      }
    }

    return value;
  };
  var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
    var newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
    return utils.setHours(time, newHoursAmount);
  };
  var clockCenter = {
    x: 260 / 2,
    y: 260 / 2
  };
  var baseClockPoint = {
    x: clockCenter.x,
    y: 0
  };
  var cx = baseClockPoint.x - clockCenter.x;
  var cy = baseClockPoint.y - clockCenter.y;

  var rad2deg = function rad2deg(rad) {
    return rad * 57.29577951308232;
  };

  var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
    var x = offsetX - clockCenter.x;
    var y = offsetY - clockCenter.y;
    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
    var deg = rad2deg(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;
    var value = Math.floor(deg / step) || 0;
    var delta = Math.pow(x, 2) + Math.pow(y, 2);
    var distance = Math.sqrt(delta);
    return {
      value: value,
      distance: distance
    };
  };

  var getMinutes = function getMinutes(offsetX, offsetY) {
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var angleStep = step * 6;

    var _getAngleValue = getAngleValue(angleStep, offsetX, offsetY),
        value = _getAngleValue.value;

    value = value * step % 60;
    return value;
  };
  var getHours = function getHours(offsetX, offsetY, ampm) {
    var _getAngleValue2 = getAngleValue(30, offsetX, offsetY),
        value = _getAngleValue2.value,
        distance = _getAngleValue2.distance;

    value = value || 12;

    if (!ampm) {
      if (distance < 90) {
        value += 12;
        value %= 24;
      }
    } else {
      value %= 12;
    }

    return value;
  };
  function getSecondsInDay(date, utils) {
    return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
  }
  var createIsAfterIgnoreDatePart = function createIsAfterIgnoreDatePart(utils) {
    return function (dateLeft, dateRight) {
      return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
    };
  };

  var useStyles$5 = styles$1.makeStyles(function (theme) {
    return {
      container: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        minHeight: VIEW_HEIGHT,
        alignItems: 'center'
      },
      clock: {
        backgroundColor: 'rgba(0,0,0,.07)',
        borderRadius: '50%',
        height: 260,
        width: 260,
        position: 'relative',
        pointerEvents: 'none'
      },
      squareMask: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'auto',
        outline: 'none',
        touchActions: 'none',
        userSelect: 'none',
        '&:active': {
          cursor: 'move'
        }
      },
      pin: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      amButton: {
        zIndex: 1,
        left: 8,
        position: 'absolute',
        bottom: 8
      },
      pmButton: {
        zIndex: 1,
        position: 'absolute',
        bottom: 8,
        right: 8
      },
      meridiemButtonSelected: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.primary.light
        }
      }
    };
  }, {
    name: 'MuiPickersClock'
  });
  var Clock = function Clock(_ref) {
    var _useGlobalKeyDown;

    var date = _ref.date,
        _ref$ampmInClock = _ref.ampmInClock,
        ampmInClock = _ref$ampmInClock === void 0 ? false : _ref$ampmInClock,
        value = _ref.value,
        numbersElementsArray = _ref.children,
        type = _ref.type,
        ampm = _ref.ampm,
        isTimeDisabled = _ref.isTimeDisabled,
        _ref$minutesStep = _ref.minutesStep,
        minutesStep = _ref$minutesStep === void 0 ? 1 : _ref$minutesStep,
        allowKeyboardControl = _ref.allowKeyboardControl,
        onChange = _ref.onChange,
        meridiemMode = _ref.meridiemMode,
        handleMeridiemChange = _ref.handleMeridiemChange;
    var utils = useUtils();
    var classes = useStyles$5();
    var wrapperVariant = React.useContext(WrapperVariantContext);
    var isMoving = React.useRef(false);
    var isSelectedTimeDisabled = isTimeDisabled(value, type);
    var isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);

    var handleValueChange = function handleValueChange(newValue, isFinish) {
      if (isTimeDisabled(newValue, type)) {
        return;
      }

      onChange(newValue, isFinish);
    };

    var setTime = function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;

      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();
        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = type === 'seconds' || type === 'minutes' ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
      handleValueChange(value, isFinish);
    };

    var handleTouchMove = function handleTouchMove(e) {
      isMoving.current = true;
      setTime(e);
    };

    var handleTouchEnd = function handleTouchEnd(e) {
      if (isMoving.current) {
        setTime(e, true);
        isMoving.current = false;
      }
    };

    var handleMouseMove = function handleMouseMove(e) {
      e.preventDefault();
      e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        setTime(e.nativeEvent, false);
      }
    };

    var handleMouseUp = function handleMouseUp(e) {
      if (isMoving.current) {
        isMoving.current = false;
      }

      setTime(e.nativeEvent, true);
    };

    var hasSelected = React.useMemo(function () {
      if (type === 'hours') {
        return true;
      }

      return value % 5 === 0;
    }, [type, value]);
    var keyboardControlStep = type === 'minutes' ? minutesStep : 1;
    useGlobalKeyDown(Boolean(allowKeyboardControl !== null && allowKeyboardControl !== void 0 ? allowKeyboardControl : wrapperVariant !== 'static') && !isMoving.current, (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
      return handleValueChange(0, false);
    }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
      return handleValueChange(type === 'minutes' ? 59 : 23, false);
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
      return handleValueChange(value + keyboardControlStep, false);
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
      return handleValueChange(value - keyboardControlStep, false);
    }), _useGlobalKeyDown));
    return React.createElement("div", {
      className: classes.container
    }, React.createElement("div", {
      className: classes.clock
    }, React.createElement("div", {
      role: "menu",
      tabIndex: -1,
      className: classes.squareMask,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove
    }), !isSelectedTimeDisabled && React.createElement(React.Fragment, null, React.createElement("div", {
      className: classes.pin
    }), React.createElement(ClockPointer$1, {
      type: type,
      value: value,
      isInner: isPointerInner,
      hasSelected: hasSelected,
      "aria-live": "polite",
      "aria-label": "Selected time ".concat(utils.format(date, 'fullTime'))
    })), numbersElementsArray), ampm && (wrapperVariant === 'desktop' || ampmInClock) && React.createElement(React.Fragment, null, React.createElement(IconButton, {
      "data-mui-test": "in-clock-am-btn",
      onClick: function onClick() {
        return handleMeridiemChange('am');
      },
      className: clsx(classes.amButton, meridiemMode === 'am' && classes.meridiemButtonSelected)
    }, React.createElement(Typography, {
      variant: "caption"
    }, "AM")), React.createElement(IconButton, {
      "data-mui-test": "in-clock-pm-btn",
      onClick: function onClick() {
        return handleMeridiemChange('pm');
      },
      className: clsx(classes.pmButton, meridiemMode === 'pm' && classes.meridiemButtonSelected)
    }, React.createElement(Typography, {
      variant: "caption"
    }, "PM"))));
  };
  Clock.defaultProps = {
    ampm: propTypes_2,
    minutesStep: propTypes_4
  };
  Clock.displayName = 'Clock';

  var positions = {
    0: [0, 40],
    1: [55, 19.6],
    2: [94.4, 59.5],
    3: [109, 114],
    4: [94.4, 168.5],
    5: [54.5, 208.4],
    6: [0, 223],
    7: [-54.5, 208.4],
    8: [-94.4, 168.5],
    9: [-109, 114],
    10: [-94.4, 59.5],
    11: [-54.5, 19.6],
    12: [0, 5],
    13: [36.9, 49.9],
    14: [64, 77],
    15: [74, 114],
    16: [64, 151],
    17: [37, 178],
    18: [0, 188],
    19: [-37, 178],
    20: [-64, 151],
    21: [-74, 114],
    22: [-64, 77],
    23: [-37, 50]
  };
  var useStyles$6 = styles$1.makeStyles(function (theme) {
    var size = 32;
    var clockNumberColor = theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint;
    return {
      clockNumber: {
        outline: 0,
        width: size,
        height: size,
        userSelect: 'none',
        position: 'absolute',
        left: "calc((100% - ".concat( "".concat(size, "px") , ") / 2)"),
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        color: clockNumberColor,
        '&:focused': {
          backgroundColor: theme.palette.background.paper
        }
      },
      clockNumberSelected: {
        color: theme.palette.primary.contrastText
      },
      clockNumberDisabled: {
        pointerEvents: 'none',
        color: styles$1.fade(clockNumberColor, 0.2)
      }
    };
  }, {
    name: 'MuiPickersClockNumber'
  });
  var ClockNumber = function ClockNumber(_ref) {
    var selected = _ref.selected,
        label = _ref.label,
        index = _ref.index,
        onSelect = _ref.onSelect,
        isInner = _ref.isInner,
        disabled = _ref.disabled,
        getClockNumberText = _ref.getClockNumberText;
    var ref = React.useRef(null);
    var classes = useStyles$6();
    var className = clsx(classes.clockNumber, selected && classes.clockNumberSelected, disabled && classes.clockNumberDisabled);
    var transformStyle = React.useMemo(function () {
      var position = positions[index];
      return {
        transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
      };
    }, [index]);
    React.useEffect(function () {
      if (selected && ref.current) {
        ref.current.focus();
      }
    }, [selected]);
    return React.createElement(ButtonBase, {
      focusRipple: true,
      centerRipple: true,
      ref: ref,
      tabIndex: disabled ? -1 : 0,
      component: "span",
      className: className,
      style: transformStyle,
      "aria-label": getClockNumberText(label),
      onKeyDown: onSpaceOrEnter(function () {
        return onSelect(FORCE_FINISH_PICKER);
      })
    }, React.createElement(Typography, {
      variant: isInner ? 'body2' : 'body1'
    }, label));
  };

  var getHourNumbers = function getHourNumbers(_ref) {
    var ampm = _ref.ampm,
        date = _ref.date,
        utils = _ref.utils,
        onChange = _ref.onChange,
        isDisabled = _ref.isDisabled,
        getClockNumberText = _ref.getClockNumberText;
    var currentHours = utils.getHours(date);
    var hourNumbers = [];
    var startHour = ampm ? 1 : 0;
    var endHour = ampm ? 12 : 23;

    var isSelected = function isSelected(hour) {
      if (ampm) {
        if (hour === 12) {
          return currentHours === 12 || currentHours === 0;
        }

        return currentHours === hour || currentHours - 12 === hour;
      }

      return currentHours === hour;
    };

    var _loop = function _loop(_hour) {
      var label = _hour.toString();

      if (_hour === 0) {
        label = '00';
      }

      var isInner = !ampm && (_hour === 0 || _hour > 12);
      hourNumbers.push(React.createElement(ClockNumber, {
        key: _hour,
        index: _hour,
        isInner: isInner,
        selected: isSelected(_hour),
        disabled: isDisabled(_hour),
        label: utils.formatNumber(label),
        onSelect: function onSelect() {
          return onChange(_hour, true);
        },
        getClockNumberText: getClockNumberText
      }));
    };

    for (var _hour = startHour; _hour <= endHour; _hour += 1) {
      _loop(_hour);
    }

    return hourNumbers;
  };
  var getMinutesNumbers = function getMinutesNumbers(_ref2) {
    var value = _ref2.value,
        utils = _ref2.utils,
        onChange = _ref2.onChange,
        isDisabled = _ref2.isDisabled,
        getClockNumberText = _ref2.getClockNumberText;
    var f = utils.formatNumber;
    return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(function (_ref3, index) {
      var _ref4 = _slicedToArray(_ref3, 2),
          numberValue = _ref4[0],
          label = _ref4[1];

      return React.createElement(ClockNumber, {
        key: numberValue,
        label: label,
        index: index + 1,
        disabled: isDisabled(numberValue),
        selected: numberValue === value,
        onSelect: function onSelect(isFinish) {
          return onChange(numberValue, isFinish);
        },
        getClockNumberText: getClockNumberText
      });
    });
  };

  var useStyles$7 = styles$1.makeStyles(function (theme) {
    var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
    return {
      toolbarTxt: {
        transition: theme.transitions.create('color'),
        color: styles$1.fade(textColor, 0.54)
      },
      toolbarBtnSelected: {
        color: textColor
      }
    };
  }, {
    name: 'MuiPickersToolbarText'
  });

  var ToolbarText = function ToolbarText(_ref) {
    var selected = _ref.selected,
        label = _ref.value,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        other = _objectWithoutProperties(_ref, ["selected", "value", "className"]);

    var classes = useStyles$7();
    return React.createElement(Typography, _extends({
      children: label,
      className: clsx(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
    }, other));
  };

  var useStyles$8 = styles$1.makeStyles({
    toolbarBtn: {
      padding: 0,
      minWidth: '16px',
      textTransform: 'none'
    }
  }, {
    name: 'MuiPickersToolbarButton'
  });
  var ToolbarButton = function ToolbarButton(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        label = _ref.value,
        selected = _ref.selected,
        variant = _ref.variant,
        align = _ref.align,
        typographyClassName = _ref.typographyClassName,
        other = _objectWithoutProperties(_ref, ["className", "value", "selected", "variant", "align", "typographyClassName"]);

    var classes = useStyles$8();
    return React.createElement(Button, _extends({
      variant: "text",
      className: clsx(classes.toolbarBtn, className)
    }, other), React.createElement(ToolbarText, {
      align: align,
      className: typographyClassName,
      variant: variant,
      value: label,
      selected: selected
    }));
  };
  ToolbarButton.displayName = 'ToolbarButton';

  var useStyles$9 = styles$1.makeStyles({
    separator: {
      outline: 0,
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    hourMinuteLabel: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    hourMinuteLabelLandscape: {
      marginTop: 'auto'
    },
    hourMinuteLabelReverse: {
      flexDirection: 'row-reverse'
    },
    ampmSelection: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: 'auto',
      marginLeft: 12
    },
    ampmLandscape: {
      margin: '4px 0 auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexBasis: '100%'
    },
    ampmLabel: {
      fontSize: 17
    },
    penIconLandscape: {
      marginTop: 'auto'
    }
  }, {
    name: 'MuiPickersTimePickerToolbar'
  });
  function useMeridiemMode(date, ampm, onChange) {
    var utils = useUtils();
    var meridiemMode = getMeridiem(date, utils);
    var handleMeridiemChange = React.useCallback(function (mode) {
      var timeWithMeridiem = convertToMeridiem(date, mode, Boolean(ampm), utils);
      onChange(timeWithMeridiem, false);
    }, [ampm, date, onChange, utils]);
    return {
      meridiemMode: meridiemMode,
      handleMeridiemChange: handleMeridiemChange
    };
  }
  var clockTypographyVariant = 'h3';
  var TimePickerToolbar = function TimePickerToolbar(_ref) {
    var date = _ref.date,
        views = _ref.views,
        ampm = _ref.ampm,
        openView = _ref.openView,
        onChange = _ref.onChange,
        isLandscape = _ref.isLandscape,
        setOpenView = _ref.setOpenView,
        ampmInClock = _ref.ampmInClock,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
        _ref$toolbarTitle = _ref.toolbarTitle,
        toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT TIME' : _ref$toolbarTitle;
    var utils = useUtils();
    var theme = styles$1.useTheme();
    var classes = useStyles$9();
    var showAmPmControl = ampm && !ampmInClock;

    var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
        meridiemMode = _useMeridiemMode.meridiemMode,
        handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

    var separator = React.createElement(ToolbarText, {
      tabIndex: -1,
      value: ":",
      variant: clockTypographyVariant,
      selected: false,
      className: classes.separator
    });
    return React.createElement(PickerToolbar, {
      landscapeDirection: "row",
      toolbarTitle: toolbarTitle,
      isLandscape: isLandscape,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView,
      penIconClassName: clsx(isLandscape && classes.penIconLandscape)
    }, React.createElement("div", {
      className: clsx(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, theme.direction === 'rtl' && classes.hourMinuteLabelReverse)
    }, arrayIncludes(views, 'hours') && React.createElement(ToolbarButton, {
      "data-mui-test": "hours",
      tabIndex: -1,
      variant: clockTypographyVariant,
      onClick: function onClick() {
        return setOpenView('hours');
      },
      selected: openView === 'hours',
      value: ampm ? utils.format(date, 'hours12h') : utils.format(date, 'hours24h')
    }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && React.createElement(ToolbarButton, {
      "data-mui-test": "minutes",
      tabIndex: -1,
      variant: clockTypographyVariant,
      onClick: function onClick() {
        return setOpenView('minutes');
      },
      selected: openView === 'minutes',
      value: utils.format(date, 'minutes')
    }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && React.createElement(ToolbarButton, {
      "data-mui-test": "seconds",
      variant: clockTypographyVariant,
      onClick: function onClick() {
        return setOpenView('seconds');
      },
      selected: openView === 'seconds',
      value: utils.format(date, 'seconds')
    })), showAmPmControl && React.createElement("div", {
      className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape)
    }, React.createElement(ToolbarButton, {
      disableRipple: true,
      variant: "subtitle2",
      "data-mui-test": "toolbar-am-btn",
      selected: meridiemMode === 'am',
      typographyClassName: classes.ampmLabel,
      value: utils.getMeridiemText('am'),
      onClick: function onClick() {
        return handleMeridiemChange('am');
      }
    }), React.createElement(ToolbarButton, {
      disableRipple: true,
      variant: "subtitle2",
      "data-mui-test": "toolbar-pm-btn",
      selected: meridiemMode === 'pm',
      typographyClassName: classes.ampmLabel,
      value: utils.getMeridiemText('pm'),
      onClick: function onClick() {
        return handleMeridiemChange('pm');
      }
    })));
  };

  function useParsedDate(possiblyUnparsedValue) {
    var utils = useUtils();
    return React.useMemo(function () {
      return typeof possiblyUnparsedValue === 'undefined' ? undefined : utils.date(possiblyUnparsedValue);
    }, [possiblyUnparsedValue, utils]);
  }
  function useNextMonthDisabled(month, _ref) {
    var disableFuture = _ref.disableFuture,
        maxDate = _ref.maxDate;
    var utils = useUtils();
    return React.useMemo(function () {
      var now = utils.date();
      var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
      return !utils.isAfter(lastEnabledMonth, month);
    }, [disableFuture, maxDate, month, utils]);
  }
  function usePreviousMonthDisabled(month, _ref2) {
    var disablePast = _ref2.disablePast,
        minDate = _ref2.minDate;
    var utils = useUtils();
    return React.useMemo(function () {
      var now = utils.date();
      var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
      return !utils.isBefore(firstEnabledMonth, month);
    }, [disablePast, minDate, month, utils]);
  }

  var ArrowLeftIcon = utils.createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  })), 'ArrowLeftIcon');

  var ArrowRightIcon = utils.createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  })), 'ArrowRightIcon');

  var useStyles$a = styles$1.makeStyles(function (theme) {
    return {
      iconButton: {
        zIndex: 1,
        backgroundColor: theme.palette.background.paper
      },
      previousMonthButtonMargin: {
        marginRight: 24
      },
      hidden: {
        visibility: 'hidden'
      }
    };
  }, {
    name: 'MuiPickersArrowSwitcher'
  });

  var PureArrowSwitcher = function PureArrowSwitcher(_ref) {
    var className = _ref.className,
        leftArrowButtonProps = _ref.leftArrowButtonProps,
        leftArrowButtonText = _ref.leftArrowButtonText,
        rightArrowButtonProps = _ref.rightArrowButtonProps,
        rightArrowButtonText = _ref.rightArrowButtonText,
        isLeftHidden = _ref.isLeftHidden,
        isRightHidden = _ref.isRightHidden,
        isLeftDisabled = _ref.isLeftDisabled,
        isRightDisabled = _ref.isRightDisabled,
        onLeftClick = _ref.onLeftClick,
        onRightClick = _ref.onRightClick,
        _ref$leftArrowIcon = _ref.leftArrowIcon,
        leftArrowIcon = _ref$leftArrowIcon === void 0 ? React.createElement(ArrowLeftIcon, null) : _ref$leftArrowIcon,
        _ref$rightArrowIcon = _ref.rightArrowIcon,
        rightArrowIcon = _ref$rightArrowIcon === void 0 ? React.createElement(ArrowRightIcon, null) : _ref$rightArrowIcon,
        text = _ref.text,
        other = _objectWithoutProperties(_ref, ["className", "leftArrowButtonProps", "leftArrowButtonText", "rightArrowButtonProps", "rightArrowButtonText", "isLeftHidden", "isRightHidden", "isLeftDisabled", "isRightDisabled", "onLeftClick", "onRightClick", "leftArrowIcon", "rightArrowIcon", "text"]);

    var classes = useStyles$a();
    var theme = styles$1.useTheme();
    var isRtl = theme.direction === 'rtl';
    return React.createElement("div", _extends({
      className: className
    }, other), React.createElement(IconButton, _extends({
      "data-mui-test": "previous-arrow-button",
      size: "small",
      "aria-label": leftArrowButtonText
    }, leftArrowButtonProps, {
      disabled: isLeftDisabled,
      onClick: onLeftClick,
      className: clsx(classes.iconButton, leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className, Boolean(isLeftHidden) && classes.hidden, !Boolean(text) && classes.previousMonthButtonMargin)
    }), isRtl ? rightArrowIcon : leftArrowIcon), text && React.createElement(Typography, {
      variant: "subtitle1",
      display: "inline"
    }, text), React.createElement(IconButton, _extends({
      "data-mui-test": "next-arrow-button",
      size: "small",
      "aria-label": rightArrowButtonText
    }, rightArrowButtonProps, {
      disabled: isRightDisabled,
      onClick: onRightClick,
      className: clsx(classes.iconButton, rightArrowButtonProps === null || rightArrowButtonProps === void 0 ? void 0 : rightArrowButtonProps.className, Boolean(isRightHidden) && classes.hidden)
    }), isRtl ? leftArrowIcon : rightArrowIcon));
  };

  PureArrowSwitcher.displayName = 'ArrowSwitcher';
  var ArrowSwitcher = React.memo(PureArrowSwitcher);

  var useStyles$b = styles$1.makeStyles(function () {
    return {
      arrowSwitcher: {
        position: 'absolute',
        right: 8,
        top: 8
      }
    };
  }, {
    name: 'MuiPickersClockView'
  });

  var getHoursAriaText = function getHoursAriaText(hour) {
    return "".concat(hour, " hours");
  };

  var getMinutesAriaText = function getMinutesAriaText(minute) {
    return "".concat(minute, " minutes");
  };

  var getSecondsAriaText = function getSecondsAriaText(seconds) {
    return "".concat(seconds, " seconds");
  };

  var ClockView = function ClockView(_ref) {
    var type = _ref.type,
        onDateChange = _ref.onDateChange,
        onChange = _ref.onChange,
        ampm = _ref.ampm,
        date = _ref.date,
        _ref$minutesStep = _ref.minutesStep,
        minutesStep = _ref$minutesStep === void 0 ? 1 : _ref$minutesStep,
        ampmInClock = _ref.ampmInClock,
        unparsedMinTime = _ref.minTime,
        unparsedMaxTime = _ref.maxTime,
        allowKeyboardControl = _ref.allowKeyboardControl,
        shouldDisableTime = _ref.shouldDisableTime,
        _ref$getHoursClockNum = _ref.getHoursClockNumberText,
        getHoursClockNumberText = _ref$getHoursClockNum === void 0 ? getHoursAriaText : _ref$getHoursClockNum,
        _ref$getMinutesClockN = _ref.getMinutesClockNumberText,
        getMinutesClockNumberText = _ref$getMinutesClockN === void 0 ? getMinutesAriaText : _ref$getMinutesClockN,
        _ref$getSecondsClockN = _ref.getSecondsClockNumberText,
        getSecondsClockNumberText = _ref$getSecondsClockN === void 0 ? getSecondsAriaText : _ref$getSecondsClockN,
        leftArrowButtonProps = _ref.leftArrowButtonProps,
        rightArrowButtonProps = _ref.rightArrowButtonProps,
        leftArrowIcon = _ref.leftArrowIcon,
        rightArrowIcon = _ref.rightArrowIcon,
        _ref$leftArrowButtonT = _ref.leftArrowButtonText,
        leftArrowButtonText = _ref$leftArrowButtonT === void 0 ? 'open previous view' : _ref$leftArrowButtonT,
        _ref$rightArrowButton = _ref.rightArrowButtonText,
        rightArrowButtonText = _ref$rightArrowButton === void 0 ? 'open next view' : _ref$rightArrowButton,
        openNextView = _ref.openNextView,
        openPreviousView = _ref.openPreviousView,
        nextViewAvailable = _ref.nextViewAvailable,
        showViewSwitcher = _ref.showViewSwitcher,
        previousViewAvailable = _ref.previousViewAvailable,
        disableTimeValidationIgnoreDatePart = _ref.disableTimeValidationIgnoreDatePart;
    var utils = useUtils();
    var classes = useStyles$b();
    var minTime = useParsedDate(unparsedMinTime);
    var maxTime = useParsedDate(unparsedMaxTime);

    var _useMeridiemMode = useMeridiemMode(date, ampm, onDateChange),
        meridiemMode = _useMeridiemMode.meridiemMode,
        handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

    var isTimeDisabled = React.useCallback(function (rawValue, type) {
      var validateTimeValue = function validateTimeValue(getRequestedTimePoint) {
        var isAfterComparingFn = disableTimeValidationIgnoreDatePart ? utils.isAfter : createIsAfterIgnoreDatePart(utils); // prettier-ignore

        return Boolean(minTime && isAfterComparingFn(minTime, getRequestedTimePoint('end')) || maxTime && isAfterComparingFn(getRequestedTimePoint('start'), maxTime) || shouldDisableTime && shouldDisableTime(rawValue, type));
      };

      switch (type) {
        case 'hours':
          var hoursWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, Boolean(ampm));
          return validateTimeValue(function (when) {
            return pipe(function (currentDate) {
              return utils.setHours(currentDate, hoursWithMeridiem);
            }, function (dateWithHours) {
              return utils.setMinutes(dateWithHours, when === 'start' ? 0 : 59);
            }, function (dateWithMinutes) {
              return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
            })(date);
          });

        case 'minutes':
          return validateTimeValue(function (when) {
            return pipe(function (currentDate) {
              return utils.setMinutes(currentDate, rawValue);
            }, function (dateWithMinutes) {
              return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
            })(date);
          });

        case 'seconds':
          return validateTimeValue(function () {
            return utils.setSeconds(date, rawValue);
          });
      }
    }, [ampm, date, disableTimeValidationIgnoreDatePart, maxTime, meridiemMode, minTime, shouldDisableTime, utils]);
    var viewProps = React.useMemo(function () {
      switch (type) {
        case 'hours':
          var handleHoursChange = function handleHoursChange(value, isFinish) {
            var valueWithMeridiem = convertValueToMeridiem(value, meridiemMode, Boolean(ampm));
            onChange(utils.setHours(date, valueWithMeridiem), isFinish);
          };

          return {
            onChange: handleHoursChange,
            value: utils.getHours(date),
            children: getHourNumbers({
              date: date,
              utils: utils,
              ampm: Boolean(ampm),
              onChange: handleHoursChange,
              getClockNumberText: getHoursClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'hours');
              }
            })
          };

        case 'minutes':
          var minutesValue = utils.getMinutes(date);

          var handleMinutesChange = function handleMinutesChange(value, isFinish) {
            onChange(utils.setMinutes(date, value), isFinish);
          };

          return {
            value: minutesValue,
            onChange: handleMinutesChange,
            children: getMinutesNumbers({
              utils: utils,
              value: minutesValue,
              onChange: handleMinutesChange,
              getClockNumberText: getMinutesClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'minutes');
              }
            })
          };

        case 'seconds':
          var secondsValue = utils.getSeconds(date);

          var handleSecondsChange = function handleSecondsChange(value, isFinish) {
            onChange(utils.setSeconds(date, value), isFinish);
          };

          return {
            value: secondsValue,
            onChange: handleSecondsChange,
            children: getMinutesNumbers({
              utils: utils,
              value: secondsValue,
              onChange: handleSecondsChange,
              getClockNumberText: getSecondsClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'seconds');
              }
            })
          };

        default:
          throw new Error('You must provide the type for ClockView');
      }
    }, [type, utils, date, ampm, getHoursClockNumberText, getMinutesClockNumberText, getSecondsClockNumberText, meridiemMode, onChange, isTimeDisabled]);
    return React.createElement(React.Fragment, null, showViewSwitcher && React.createElement(ArrowSwitcher, {
      className: classes.arrowSwitcher,
      leftArrowButtonProps: leftArrowButtonProps,
      rightArrowButtonProps: rightArrowButtonProps,
      leftArrowButtonText: leftArrowButtonText,
      rightArrowButtonText: rightArrowButtonText,
      leftArrowIcon: leftArrowIcon,
      rightArrowIcon: rightArrowIcon,
      onLeftClick: openPreviousView,
      onRightClick: openNextView,
      isLeftDisabled: previousViewAvailable,
      isRightDisabled: nextViewAvailable
    }), React.createElement(Clock, _extends({
      date: date,
      ampmInClock: ampmInClock,
      onDateChange: onDateChange,
      type: type,
      ampm: ampm,
      minutesStep: minutesStep,
      allowKeyboardControl: allowKeyboardControl,
      isTimeDisabled: isTimeDisabled,
      meridiemMode: meridiemMode,
      handleMeridiemChange: handleMeridiemChange
    }, viewProps)));
  };
   ClockView.propTypes = {
    date: propTypes_5.isRequired,
    onChange: propTypes_3.isRequired,
    ampm: propTypes_2,
    minutesStep: propTypes_4,
    type: propTypes_15(['minutes', 'hours', 'seconds']).isRequired
  } ;
  ClockView.displayName = 'ClockView';
  var ClockView$1 = React.memo(ClockView);

  var useStyles$c = styles$1.makeStyles(function (theme) {
    return {
      yearButtonContainer: {
        flexBasis: '33.3%',
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 0'
      },
      yearButtonContainerDesktop: {
        flexBasis: '25%'
      },
      yearButton: {
        height: 36,
        width: 72,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        '&:focus, &:hover': {
          backgroundColor: styles$1.fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
        }
      },
      yearSelected: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main,
        '&:focus, &:hover': {
          backgroundColor: theme.palette.primary.dark
        }
      },
      yearDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      }
    };
  }, {
    name: 'MuiPickersYear'
  });
  var Year = function Year(_ref) {
    var onSelect = _ref.onSelect,
        forwardedRef = _ref.forwardedRef,
        value = _ref.value,
        selected = _ref.selected,
        disabled = _ref.disabled,
        children = _ref.children,
        focused = _ref.focused,
        allowKeyboardControl = _ref.allowKeyboardControl,
        other = _objectWithoutProperties(_ref, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children", "focused", "allowKeyboardControl"]);

    var classes = useStyles$c();
    var ref = React.useRef(null);
    var wrapperVariant = React.useContext(WrapperVariantContext);
    React.useEffect(function () {
      if (focused && ref.current && !disabled && allowKeyboardControl) {
        ref.current.focus();
      }
    }, [allowKeyboardControl, disabled, focused]);
    return React.createElement("div", {
      role: "button",
      ref: forwardedRef,
      onClick: function onClick() {
        return onSelect(value);
      },
      className: clsx(classes.yearButtonContainer, wrapperVariant === 'desktop' && classes.yearButtonContainerDesktop)
    }, React.createElement(Typography, _extends({
      ref: ref,
      variant: "subtitle1",
      tabIndex: selected ? 0 : -1,
      color: selected ? 'primary' : undefined,
      children: children,
      onKeyDown: onSpaceOrEnter(function () {
        return onSelect(value);
      }),
      className: clsx(classes.yearButton, selected && classes.yearSelected, disabled && classes.yearDisabled)
    }, other)));
  };
  Year.displayName = 'Year';
  var Year$1 = React.forwardRef(function (props, ref) {
    return React.createElement(Year, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  var useStyles$d = styles$1.makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowY: 'auto',
      height: '100%'
    }
  }, {
    name: 'MuiPickersYearSelection'
  });
  var YearSelection = function YearSelection(_ref) {
    var _useGlobalKeyDown;

    var date = _ref.date,
        onChange = _ref.onChange,
        onYearChange = _ref.onYearChange,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        disablePast = _ref.disablePast,
        disableFuture = _ref.disableFuture,
        isDateDisabled = _ref.isDateDisabled,
        allowKeyboardControl = _ref.allowKeyboardControl;
    var theme = styles$1.useTheme();
    var utils = useUtils();
    var classes = useStyles$d();
    var currentYear = utils.getYear(date);

    var _React$useState = React.useState(currentYear),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        focusedYear = _React$useState2[0],
        setFocused = _React$useState2[1];

    var wrapperVariant = React.useContext(WrapperVariantContext);
    var selectedYearRef = React.useRef(null);
    React.useEffect(function () {
      if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
        try {
          selectedYearRef.current.scrollIntoView({
            block: wrapperVariant === 'static' ? 'nearest' : 'center'
          });
        } catch (e) {
          // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
          selectedYearRef.current.scrollIntoView();
        }
      }
    }, []); // eslint-disable-line

    var handleYearSelection = React.useCallback(function (year) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var newDate = utils.setYear(date, year);

      if (isDateDisabled(newDate)) {
        return;
      }

      if (onYearChange) {
        onYearChange(newDate);
      }

      onChange(newDate, isFinish);
    }, [date, isDateDisabled, onChange, onYearChange, utils]);
    var yearsInRow = wrapperVariant === 'desktop' ? 4 : 3;
    var nowFocusedYear = focusedYear || currentYear;
    useGlobalKeyDown(Boolean(allowKeyboardControl), (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
      return setFocused(nowFocusedYear - yearsInRow);
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
      return setFocused(nowFocusedYear + yearsInRow);
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowLeft, function () {
      return setFocused(nowFocusedYear + (theme.direction === 'ltr' ? -1 : 1));
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowRight, function () {
      return setFocused(nowFocusedYear + (theme.direction === 'ltr' ? 1 : -1));
    }), _useGlobalKeyDown));
    return React.createElement("div", null, React.createElement("div", {
      className: classes.container
    }, utils.getYearRange(minDate, maxDate).map(function (year) {
      var yearNumber = utils.getYear(year);
      var selected = yearNumber === currentYear;
      return React.createElement(Year$1, {
        key: utils.format(year, 'year'),
        selected: selected,
        value: yearNumber,
        onSelect: handleYearSelection,
        allowKeyboardControl: allowKeyboardControl,
        focused: yearNumber === focusedYear,
        ref: selected ? selectedYearRef : undefined,
        disabled: Boolean(disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()))
      }, utils.format(year, 'year'));
    })));
  };

  var useStyles$e = styles$1.makeStyles(function (theme) {
    return {
      root: {
        flex: '1 0 33.33%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        height: 64,
        transition: theme.transitions.create('font-size', {
          duration: '100ms'
        }),
        '&:focus': {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium
        }
      },
      monthSelected: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      },
      monthDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      }
    };
  }, {
    name: 'MuiPickersMonth'
  });
  var Month = function Month(_ref) {
    var selected = _ref.selected,
        onSelect = _ref.onSelect,
        disabled = _ref.disabled,
        value = _ref.value,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ["selected", "onSelect", "disabled", "value", "children"]);

    var classes = useStyles$e();
    var handleSelection = React.useCallback(function () {
      onSelect(value);
    }, [onSelect, value]);
    return React.createElement(Typography, _extends({
      "data-mui-test": "month",
      role: "button",
      component: "div",
      className: clsx(classes.root, selected && classes.monthSelected, disabled && classes.monthDisabled),
      tabIndex: disabled ? -1 : 0,
      onClick: handleSelection,
      onKeyDown: onSpaceOrEnter(handleSelection),
      color: selected ? 'primary' : undefined,
      variant: selected ? 'h5' : 'subtitle1',
      children: children
    }, other));
  };
  Month.displayName = 'Month';

  var useStyles$f = styles$1.makeStyles({
    container: {
      width: 310,
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'stretch'
    }
  }, {
    name: 'MuiPickersMonthSelection'
  });
  var MonthSelection = function MonthSelection(_ref) {
    var disablePast = _ref.disablePast,
        disableFuture = _ref.disableFuture,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        date = _ref.date,
        onMonthChange = _ref.onMonthChange,
        onChange = _ref.onChange;
    var utils = useUtils();
    var classes = useStyles$f();
    var currentMonth = utils.getMonth(date);

    var shouldDisableMonth = function shouldDisableMonth(month) {
      var now = utils.date();
      var utilMinDate = utils.date(minDate);
      var utilMaxDate = utils.date(maxDate);
      var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
      var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
      var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
      var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
      return isBeforeFirstEnabled || isAfterLastEnabled;
    };

    var onMonthSelect = React.useCallback(function (month) {
      var newDate = utils.setMonth(date, month);
      onChange(newDate, true);

      if (onMonthChange) {
        onMonthChange(newDate);
      }
    }, [date, onChange, onMonthChange, utils]);
    return React.createElement("div", {
      className: classes.container
    }, utils.getMonthArray(date).map(function (month) {
      var monthNumber = utils.getMonth(month);
      var monthText = utils.format(month, 'monthShort');
      return React.createElement(Month, {
        key: monthText,
        value: monthNumber,
        selected: monthNumber === currentMonth,
        onSelect: onMonthSelect,
        disabled: shouldDisableMonth(month)
      }, monthText);
    }));
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var createCalendarStateReducer = function createCalendarStateReducer(reduceAnimations, disableSwitchToMonthOnDayFocus, utils) {
    return function (state, action) {
      switch (action.type) {
        case 'changeMonthLoading':
          {
            return _objectSpread$3({}, state, {
              loadingQueue: state.loadingQueue + 1,
              slideDirection: action.direction,
              currentMonth: action.newMonth,
              isMonthSwitchingAnimating: !reduceAnimations
            });
          }

        case 'changeMonth':
          {
            return _objectSpread$3({}, state, {
              slideDirection: action.direction,
              currentMonth: action.newMonth,
              isMonthSwitchingAnimating: !reduceAnimations
            });
          }

        case 'popLoadingQueue':
          {
            return _objectSpread$3({}, state, {
              loadingQueue: state.loadingQueue <= 0 ? 0 : state.loadingQueue - 1
            });
          }

        case 'finishMonthSwitchingAnimation':
          {
            return _objectSpread$3({}, state, {
              isMonthSwitchingAnimating: false
            });
          }

        case 'changeFocusedDay':
          {
            var needMonthSwitch = !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
            return _objectSpread$3({}, state, {
              focusedDay: action.focusedDay,
              isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations,
              currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
              slideDirection: utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
            });
          }
      }
    };
  };
  function useCalendarState(_ref) {
    var date = _ref.date,
        reduceAnimations = _ref.reduceAnimations,
        onMonthChange = _ref.onMonthChange,
        disablePast = _ref.disablePast,
        disableFuture = _ref.disableFuture,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        shouldDisableDate = _ref.shouldDisableDate,
        _ref$disableSwitchToM = _ref.disableSwitchToMonthOnDayFocus,
        disableSwitchToMonthOnDayFocus = _ref$disableSwitchToM === void 0 ? false : _ref$disableSwitchToM;
    var now = useNow();
    var utils = useUtils();
    var reducerFn = React.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils));

    var _React$useReducer = React.useReducer(reducerFn.current, {
      isMonthSwitchingAnimating: false,
      loadingQueue: 0,
      focusedDay: date,
      currentMonth: utils.startOfMonth(date),
      slideDirection: 'left'
    }),
        _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
        _React$useReducer2$ = _React$useReducer2[0],
        loadingQueue = _React$useReducer2$.loadingQueue,
        calendarState = _objectWithoutProperties(_React$useReducer2$, ["loadingQueue"]),
        dispatch = _React$useReducer2[1];

    var handleChangeMonth = React.useCallback(function (payload) {
      var returnedPromise = onMonthChange && onMonthChange(payload.newMonth);

      if (returnedPromise) {
        dispatch(_objectSpread$3({
          type: 'changeMonthLoading'
        }, payload));
        returnedPromise.then(function () {
          return dispatch({
            type: 'popLoadingQueue'
          });
        });
      } else {
        dispatch(_objectSpread$3({
          type: 'changeMonth'
        }, payload));
      }
    }, [onMonthChange]);
    var changeMonth = React.useCallback(function (date) {
      if (utils.isSameMonth(date, calendarState.currentMonth)) {
        return;
      }

      handleChangeMonth({
        newMonth: utils.startOfMonth(date),
        direction: utils.isAfterDay(date, calendarState.currentMonth) ? 'left' : 'right'
      });
    }, [calendarState.currentMonth, handleChangeMonth, utils]);
    var validateMinMaxDate = React.useCallback(function (day) {
      return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, minDate) || maxDate && utils.isAfterDay(day, maxDate));
    }, [disableFuture, disablePast, maxDate, minDate, now, utils]);
    var isDateDisabled = React.useCallback(function (day) {
      return validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
    }, [shouldDisableDate, validateMinMaxDate]);
    var onMonthSwitchingAnimationEnd = React.useCallback(function () {
      dispatch({
        type: 'finishMonthSwitchingAnimation'
      });
    }, []);
    var changeFocusedDay = React.useCallback(function (newFocusedDate) {
      return dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate
      });
    }, []);
    return {
      loadingQueue: loadingQueue,
      calendarState: calendarState,
      changeMonth: changeMonth,
      changeFocusedDay: changeFocusedDay,
      isDateDisabled: isDateDisabled,
      onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
      handleChangeMonth: handleChangeMonth
    };
  }

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
  }

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (typeof element.className === 'string') {
      element.className = replaceClassName(element.className, className);
    } else {
      element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
  }

  var config = {
    disabled: false
  };

  var timeoutsShape =  propTypes.oneOfType([propTypes.number, propTypes.shape({
    enter: propTypes.number,
    exit: propTypes.number,
    appear: propTypes.number
  }).isRequired]) ;
  var classNamesShape =  propTypes.oneOfType([propTypes.string, propTypes.shape({
    enter: propTypes.string,
    exit: propTypes.string,
    active: propTypes.string
  }), propTypes.shape({
    enter: propTypes.string,
    enterDone: propTypes.string,
    enterActive: propTypes.string,
    exit: propTypes.string,
    exitDone: propTypes.string,
    exitActive: propTypes.string
  })]) ;

  var TransitionGroupContext = React__default.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    }; // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }


    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = ReactDOM.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(node, appearing);

        _this2.onTransitionEnd(node, enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    _proto.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
        return;
      }

      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children"]); // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        // allows for nested Transitions
        return React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, children(status, childProps));
      }

      var child = React__default.Children.only(children);
      return (// allows for nested Transitions
        React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, React__default.cloneElement(child, childProps))
      );
    };

    return Transition;
  }(React__default.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes =  {
    /**
     * A `function` child can be used instead of a React element. This function is
     * called with the current transition status (`'entering'`, `'entered'`,
     * `'exiting'`, `'exited'`), which can be used to apply context
     * specific props to a component.
     *
     * ```jsx
     * <Transition in={this.state.in} timeout={150}>
     *   {state => (
     *     <MyComponent className={`fade fade-${state}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: propTypes.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: propTypes.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: propTypes.bool,

    /**
     * Normally a component is not transitioned if it is shown when the
     * `<Transition>` component mounts. If you want to transition on the first
     * mount set `appear` to `true`, and the component will transition in as soon
     * as the `<Transition>` mounts.
     *
     * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
     * > only adds an additional enter transition. However, in the
     * > `<CSSTransition>` component that first enter transition does result in
     * > additional `.appear-*` classes, that way you can choose to style it
     * > differently.
     */
    appear: propTypes.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: propTypes.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: propTypes.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided.
     *
     * You may specify a single timeout for all transitions:
     *
     * ```jsx
     * timeout={500}
     * ```
     *
     * or individually:
     *
     * ```jsx
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * - `appear` defaults to the value of `enter`
     * - `enter` defaults to `0`
     * - `exit` defaults to `0`
     *
     * @type {number | { enter?: number, exit?: number, appear?: number }}
     */
    timeout: function timeout(props) {
      var pt = timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return pt.apply(void 0, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: propTypes.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: propTypes.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: propTypes.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: propTypes.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: propTypes.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: propTypes.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: propTypes.func // Name the function so it is clearer in the documentation

  } ;

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  var _addClass = function addClass$1(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return addClass(node, c);
    });
  };

  var removeClass$1 = function removeClass$1(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return removeClass(node, c);
    });
  };
  /**
   * A transition component inspired by the excellent
   * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
   * using CSS transitions or animations. It's built upon the
   * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
   * component, so it inherits all of its props.
   *
   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
   * and `exit` states of the transition. The first class is applied and then a
   * second `*-active` class in order to activate the CSS transition. After the
   * transition, matching `*-done` class names are applied to persist the
   * transition state.
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
   *         <div>
   *           {"I'll receive my-node-* classes"}
   *         </div>
   *       </CSSTransition>
   *       <button type="button" onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the `in` prop is set to `true`, the child component will first receive
   * the class `example-enter`, then the `example-enter-active` will be added in
   * the next tick. `CSSTransition` [forces a
   * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * between before adding the `example-enter-active`. This is an important trick
   * because it allows us to transition between `example-enter` and
   * `example-enter-active` even though they were added immediately one after
   * another. Most notably, this is what makes it possible for us to animate
   * _appearance_.
   *
   * ```css
   * .my-node-enter {
   *   opacity: 0;
   * }
   * .my-node-enter-active {
   *   opacity: 1;
   *   transition: opacity 200ms;
   * }
   * .my-node-exit {
   *   opacity: 1;
   * }
   * .my-node-exit-active {
   *   opacity: 0;
   *   transition: opacity 200ms;
   * }
   * ```
   *
   * `*-active` classes represent which styles you want to animate **to**.
   *
   * **Note**: If you're using the
   * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
   * prop, make sure to define styles for `.appear-*` classes as well.
   */


  var CSSTransition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(CSSTransition, _React$Component);

    function CSSTransition() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.appliedClasses = {
        appear: {},
        enter: {},
        exit: {}
      };

      _this.onEnter = function (node, appearing) {
        _this.removeClasses(node, 'exit');

        _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

        if (_this.props.onEnter) {
          _this.props.onEnter(node, appearing);
        }
      };

      _this.onEntering = function (node, appearing) {
        var type = appearing ? 'appear' : 'enter';

        _this.addClass(node, type, 'active');

        if (_this.props.onEntering) {
          _this.props.onEntering(node, appearing);
        }
      };

      _this.onEntered = function (node, appearing) {
        var type = appearing ? 'appear' : 'enter';

        _this.removeClasses(node, type);

        _this.addClass(node, type, 'done');

        if (_this.props.onEntered) {
          _this.props.onEntered(node, appearing);
        }
      };

      _this.onExit = function (node) {
        _this.removeClasses(node, 'appear');

        _this.removeClasses(node, 'enter');

        _this.addClass(node, 'exit', 'base');

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      };

      _this.onExiting = function (node) {
        _this.addClass(node, 'exit', 'active');

        if (_this.props.onExiting) {
          _this.props.onExiting(node);
        }
      };

      _this.onExited = function (node) {
        _this.removeClasses(node, 'exit');

        _this.addClass(node, 'exit', 'done');

        if (_this.props.onExited) {
          _this.props.onExited(node);
        }
      };

      _this.getClassNames = function (type) {
        var classNames = _this.props.classNames;
        var isStringClassNames = typeof classNames === 'string';
        var prefix = isStringClassNames && classNames ? classNames + "-" : '';
        var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
        var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
        var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
        return {
          baseClassName: baseClassName,
          activeClassName: activeClassName,
          doneClassName: doneClassName
        };
      };

      return _this;
    }

    var _proto = CSSTransition.prototype;

    _proto.addClass = function addClass(node, type, phase) {
      var className = this.getClassNames(type)[phase + "ClassName"];

      if (type === 'appear' && phase === 'done') {
        className += " " + this.getClassNames('enter').doneClassName;
      } // This is for to force a repaint,
      // which is necessary in order to transition styles when adding a class name.


      if (phase === 'active') {
        /* eslint-disable no-unused-expressions */
        node && node.scrollTop;
      }

      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    };

    _proto.removeClasses = function removeClasses(node, type) {
      var _this$appliedClasses$ = this.appliedClasses[type],
          baseClassName = _this$appliedClasses$.base,
          activeClassName = _this$appliedClasses$.active,
          doneClassName = _this$appliedClasses$.done;
      this.appliedClasses[type] = {};

      if (baseClassName) {
        removeClass$1(node, baseClassName);
      }

      if (activeClassName) {
        removeClass$1(node, activeClassName);
      }

      if (doneClassName) {
        removeClass$1(node, doneClassName);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          _ = _this$props.classNames,
          props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);

      return React__default.createElement(Transition, _extends$1({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };

    return CSSTransition;
  }(React__default.Component);

  CSSTransition.defaultProps = {
    classNames: ''
  };
  CSSTransition.propTypes =  _extends$1({}, Transition.propTypes, {
    /**
     * The animation classNames applied to the component as it appears, enters,
     * exits or has finished the transition. A single name can be provided and it
     * will be suffixed for each stage: e.g.
     *
     * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
     * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
     * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
     *
     * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
     * This allows you to define different behavior for when appearing is done and
     * when regular entering is done, using selectors like
     * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
     * epic entrance animation when element first appears in the DOM using
     * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
     * simply use `fade-enter-done` for defining both cases.
     *
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *  appear: 'my-appear',
     *  appearActive: 'my-active-appear',
     *  appearDone: 'my-done-appear',
     *  enter: 'my-enter',
     *  enterActive: 'my-active-enter',
     *  enterDone: 'my-done-enter',
     *  exit: 'my-exit',
     *  exitActive: 'my-active-exit',
     *  exitDone: 'my-done-exit',
     * }}
     * ```
     *
     * If you want to set these classes using CSS Modules:
     *
     * ```js
     * import styles from './styles.css';
     * ```
     *
     * you might want to use camelCase in your CSS file, that way could simply
     * spread them instead of listing them one by one:
     *
     * ```js
     * classNames={{ ...styles }}
     * ```
     *
     * @type {string | {
     *  appear?: string,
     *  appearActive?: string,
     *  appearDone?: string,
     *  enter?: string,
     *  enterActive?: string,
     *  enterDone?: string,
     *  exit?: string,
     *  exitActive?: string,
     *  exitDone?: string,
     * }}
     */
    classNames: classNamesShape,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
     * applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEnter: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter-active' or
     * 'appear-active' class is applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or
     * 'appear' classes are **removed** and the `done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntered: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' class is
     * applied.
     *
     * @type Function(node: HtmlElement)
     */
    onExit: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
     *
     * @type Function(node: HtmlElement)
     */
    onExiting: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' classes
     * are **removed** and the `exit-done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement)
     */
    onExited: propTypes.func
  }) ;

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!React.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
    /**
     * The `<TransitionGroup>` component manages a set of transition components
     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
     * components, `<TransitionGroup>` is a state machine for managing the mounting
     * and unmounting of components over time.
     *
     * Consider the example below. As items are removed or added to the TodoList the
     * `in` prop is toggled automatically by the `<TransitionGroup>`.
     *
     * Note that `<TransitionGroup>`  does not define any animation behavior!
     * Exactly _how_ a list item animates is up to the individual transition
     * component. This means you can mix and match animations across different list
     * items.
     */

  };

  var TransitionGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized$1(_assertThisInitialized$1(_this))); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends$1({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return React__default.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, React__default.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(React__default.Component);

  TransitionGroup.propTypes =  {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: propTypes.any,

    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     *
     * While this component is meant for multiple `Transition` or `CSSTransition`
     * children, sometimes you may want to have a single transition child with
     * content that you want to be transitioned out and in when you change it
     * (e.g. routes, images etc.) In that case you can change the `key` prop of
     * the transition child as you change its content, this will cause
     * `TransitionGroup` to transition the child out and back in.
     */
    children: propTypes.node,

    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: propTypes.bool,

    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: propTypes.bool,

    /**
     * A convenience prop that enables or disables exit animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    exit: propTypes.bool,

    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: propTypes.func
  } ;
  TransitionGroup.defaultProps = defaultProps;

  var animationDuration = 500;
  var useStyles$g = styles$1.makeStyles(function (theme) {
    return {
      transitionContainer: {
        display: 'block',
        position: 'relative'
      },
      fadeEnter: {
        willChange: 'transform',
        opacity: 0
      },
      fadeEnterActive: {
        opacity: 1,
        transition: theme.transitions.create('opacity', {
          duration: animationDuration
        })
      },
      fadeExit: {
        opacity: 1
      },
      fadeExitActive: {
        opacity: 0,
        transition: theme.transitions.create('opacity', {
          duration: animationDuration / 2
        })
      }
    };
  }, {
    name: 'MuiPickersFadeTransition'
  });
  var FadeTransitionGroup = function FadeTransitionGroup(_ref) {
    var children = _ref.children,
        transKey = _ref.transKey,
        reduceAnimations = _ref.reduceAnimations,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className;
    var classes = useStyles$g();

    if (reduceAnimations) {
      return children;
    }

    var transitionClasses = {
      exit: classes.fadeExit,
      enterActive: classes.fadeEnterActive,
      enter: classes.fadeEnter,
      exitActive: classes.fadeExitActive
    };
    return React.createElement(TransitionGroup, {
      className: clsx(classes.transitionContainer, className),
      childFactory: function childFactory(element) {
        return React.cloneElement(element, {
          classNames: transitionClasses
        });
      }
    }, React.createElement(CSSTransition, {
      mountOnEnter: true,
      unmountOnExit: true,
      key: transKey,
      timeout: {
        appear: animationDuration,
        enter: animationDuration / 2,
        exit: 0
      },
      classNames: transitionClasses,
      children: children
    }));
  };

  var useStyles$h = styles$1.makeStyles(function (theme) {
    return {
      day: {
        width: DAY_SIZE,
        height: DAY_SIZE,
        borderRadius: '50%',
        padding: 0,
        // background required here to prevent collides with the other days when animating with transition group
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        '&:hover': {
          backgroundColor: styles$1.fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
        },
        '&:focus': {
          backgroundColor: styles$1.fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
          '&$daySelected': {
            willChange: 'background-color',
            backgroundColor: theme.palette.primary.dark
          }
        }
      },
      dayWithMargin: {
        margin: "0px ".concat(DAY_MARGIN, "px")
      },
      dayOutsideMonth: {
        color: theme.palette.text.hint
      },
      hidden: {
        opacity: 0,
        pointerEvents: 'none'
      },
      today: {
        '&:not($daySelected)': {
          border: "1px solid ".concat(theme.palette.text.hint)
        }
      },
      daySelected: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration["short"]
        }),
        '&:hover': {
          willChange: 'background-color',
          backgroundColor: theme.palette.primary.dark
        }
      },
      dayDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      },
      dayLabel: {// need for overrides
      }
    };
  }, {
    name: 'MuiPickersDay'
  });

  var PureDay = function PureDay(_ref) {
    var className = _ref.className,
        day = _ref.day,
        disabled = _ref.disabled,
        hidden = _ref.hidden,
        isInCurrentMonth = _ref.inCurrentMonth,
        isToday = _ref.today,
        selected = _ref.selected,
        _ref$focused = _ref.focused,
        focused = _ref$focused === void 0 ? false : _ref$focused,
        _ref$focusable = _ref.focusable,
        focusable = _ref$focusable === void 0 ? false : _ref$focusable,
        isAnimating = _ref.isAnimating,
        onDayFocus = _ref.onDayFocus,
        onDaySelect = _ref.onDaySelect,
        onFocus = _ref.onFocus,
        onClick = _ref.onClick,
        onKeyDown = _ref.onKeyDown,
        _ref$disableMargin = _ref.disableMargin,
        disableMargin = _ref$disableMargin === void 0 ? false : _ref$disableMargin,
        allowKeyboardControl = _ref.allowKeyboardControl,
        _ref$disableHighlight = _ref.disableHighlightToday,
        disableHighlightToday = _ref$disableHighlight === void 0 ? false : _ref$disableHighlight,
        _ref$showDaysOutsideC = _ref.showDaysOutsideCurrentMonth,
        showDaysOutsideCurrentMonth = _ref$showDaysOutsideC === void 0 ? false : _ref$showDaysOutsideC,
        other = _objectWithoutProperties(_ref, ["className", "day", "disabled", "hidden", "inCurrentMonth", "today", "selected", "focused", "focusable", "isAnimating", "onDayFocus", "onDaySelect", "onFocus", "onClick", "onKeyDown", "disableMargin", "allowKeyboardControl", "disableHighlightToday", "showDaysOutsideCurrentMonth"]);

    var ref = React.useRef(null);
    var utils = useUtils();
    var classes = useStyles$h();
    React.useEffect(function () {
      if (focused && !disabled && !isAnimating && isInCurrentMonth && ref.current && allowKeyboardControl) {
        ref.current.focus();
      }
    }, [allowKeyboardControl, disabled, focused, isAnimating, isInCurrentMonth]);

    var handleFocus = function handleFocus(e) {
      if (!focused) {
        onDayFocus(day);
      }

      if (onFocus) {
        onFocus(e);
      }
    };

    var handleClick = function handleClick(e) {
      if (!disabled) {
        onDaySelect(day, true);
      }

      if (onClick) {
        onClick(e);
      }
    };

    var handleKeyDown = onSpaceOrEnter(function () {
      if (!disabled) {
        onDaySelect(day, FORCE_FINISH_PICKER);
      }
    }, onKeyDown);
    var isHidden = !isInCurrentMonth && !showDaysOutsideCurrentMonth;
    return React.createElement(ButtonBase, _extends({
      "aria-hidden": isHidden,
      ref: ref,
      centerRipple: true,
      "data-mui-test": "day",
      "aria-label": utils.format(day, 'fullDate'),
      tabIndex: focused || focusable ? 0 : -1,
      className: clsx(classes.day, className, selected && classes.daySelected, disabled && classes.dayDisabled, !disableMargin && classes.dayWithMargin, !disableHighlightToday && isToday && classes.today, isHidden && classes.hidden, !isInCurrentMonth && showDaysOutsideCurrentMonth && classes.dayOutsideMonth)
    }, other, {
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onClick: handleClick
    }), React.createElement("span", {
      className: classes.dayLabel
    }, utils.format(day, 'dayOfMonth')));
  };

  var areDayPropsEqual = function areDayPropsEqual(prevProps, nextProps) {
    return prevProps.focused === nextProps.focused && prevProps.focusable === nextProps.focusable && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.allowKeyboardControl === nextProps.allowKeyboardControl && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
  };
  var Day = React.memo(PureDay, areDayPropsEqual);
  PureDay.displayName = 'Day';
   PureDay.propTypes = {
    today: propTypes_2,
    disabled: propTypes_2,
    selected: propTypes_2
  } ;
  PureDay.defaultProps = {
    disabled: false,
    today: false,
    selected: false
  };

  var slideAnimationDuration = 350;
  var useStyles$i = styles$1.makeStyles(function (theme) {
    var slideTransition = theme.transitions.create('transform', {
      duration: slideAnimationDuration,
      easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
    });
    return {
      transitionContainer: {
        display: 'block',
        position: 'relative',
        overflowX: 'hidden',
        '& > *': {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0
        }
      },
      'slideEnter-left': {
        willChange: 'transform',
        transform: 'translate(100%)',
        zIndex: 1
      },
      'slideEnter-right': {
        willChange: 'transform',
        transform: 'translate(-100%)',
        zIndex: 1
      },
      slideEnterActive: {
        transform: 'translate(0%)',
        transition: slideTransition
      },
      slideExit: {
        transform: 'translate(0%)'
      },
      'slideExitActiveLeft-left': {
        willChange: 'transform',
        transform: 'translate(-100%)',
        transition: slideTransition,
        zIndex: 0
      },
      'slideExitActiveLeft-right': {
        willChange: 'transform',
        transform: 'translate(100%)',
        transition: slideTransition,
        zIndex: 0
      }
    };
  }, {
    name: 'MuiPickersSlideTransition'
  });
  var SlideTransition = function SlideTransition(_ref) {
    var children = _ref.children,
        transKey = _ref.transKey,
        reduceAnimations = _ref.reduceAnimations,
        slideDirection = _ref.slideDirection,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? undefined : _ref$className,
        other = _objectWithoutProperties(_ref, ["children", "transKey", "reduceAnimations", "slideDirection", "className"]);

    var classes = useStyles$i();

    if (reduceAnimations) {
      return React.createElement("div", {
        className: className
      }, children);
    }

    var transitionClasses = {
      exit: classes.slideExit,
      enterActive: classes.slideEnterActive,
      // @ts-ignore
      enter: classes['slideEnter-' + slideDirection],
      // @ts-ignore
      exitActive: classes['slideExitActiveLeft-' + slideDirection]
    };
    return React.createElement(TransitionGroup, {
      className: clsx(classes.transitionContainer, className),
      childFactory: function childFactory(element) {
        return React.cloneElement(element, {
          classNames: transitionClasses
        });
      }
    }, React.createElement(CSSTransition, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      key: transKey,
      timeout: slideAnimationDuration,
      classNames: transitionClasses,
      children: children
    }, other)));
  };

  var useStyles$j = styles$1.makeStyles(function (theme) {
    return {
      transitionContainer: {
        minHeight: (DAY_SIZE + DAY_MARGIN * 4) * 6
      },
      transitionContainerOverflowAllowed: {
        overflowX: 'visible'
      },
      progressContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      week: {
        margin: "".concat(DAY_MARGIN, "px 0"),
        display: 'flex',
        justifyContent: 'center'
      },
      iconButton: {
        zIndex: 1,
        backgroundColor: theme.palette.background.paper
      },
      previousMonthButton: {
        marginRight: 12
      },
      daysHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      dayLabel: {
        width: 36,
        height: 40,
        margin: '0 2px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.hint
      }
    };
  });
  var Calendar = function Calendar(_ref) {
    var _useGlobalKeyDown;

    var date = _ref.date,
        isMonthSwitchingAnimating = _ref.isMonthSwitchingAnimating,
        onMonthSwitchingAnimationEnd = _ref.onMonthSwitchingAnimationEnd,
        focusedDay = _ref.focusedDay,
        changeFocusedDay = _ref.changeFocusedDay,
        onChange = _ref.onChange,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        slideDirection = _ref.slideDirection,
        disableFuture = _ref.disableFuture,
        disablePast = _ref.disablePast,
        currentMonth = _ref.currentMonth,
        renderDay = _ref.renderDay,
        reduceAnimations = _ref.reduceAnimations,
        allowKeyboardControl = _ref.allowKeyboardControl,
        isDateDisabled = _ref.isDateDisabled,
        disableHighlightToday = _ref.disableHighlightToday,
        showDaysOutsideCurrentMonth = _ref.showDaysOutsideCurrentMonth,
        className = _ref.className,
        TransitionProps = _ref.TransitionProps;
    var now = useNow();
    var utils = useUtils();
    var theme = styles$1.useTheme();
    var classes = useStyles$j();
    var handleDaySelect = React.useCallback(function (day) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      onChange(Array.isArray(date) ? day : utils.mergeDateAndTime(day, date), isFinish);
    }, [date, onChange, utils]);
    var initialDate = Array.isArray(date) ? date[0] : date;
    React.useEffect(function () {
      if (initialDate && isDateDisabled(initialDate)) {
        var closestEnabledDate = findClosestEnabledDate({
          utils: utils,
          date: initialDate,
          minDate: utils.date(minDate),
          maxDate: utils.date(maxDate),
          disablePast: Boolean(disablePast),
          disableFuture: Boolean(disableFuture),
          shouldDisableDate: isDateDisabled
        });
        handleDaySelect(closestEnabledDate, false);
      }
    }, []); // eslint-disable-line

    var nowFocusedDay = focusedDay || initialDate;
    useGlobalKeyDown(Boolean(allowKeyboardControl), (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
      return changeFocusedDay(utils.addDays(nowFocusedDay, -7));
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
      return changeFocusedDay(utils.addDays(nowFocusedDay, 7));
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowLeft, function () {
      return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? -1 : 1));
    }), _defineProperty(_useGlobalKeyDown, keycode.ArrowRight, function () {
      return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? 1 : -1));
    }), _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
      return changeFocusedDay(utils.startOfWeek(nowFocusedDay));
    }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
      return changeFocusedDay(utils.endOfWeek(nowFocusedDay));
    }), _defineProperty(_useGlobalKeyDown, keycode.PageUp, function () {
      return changeFocusedDay(utils.getNextMonth(nowFocusedDay));
    }), _defineProperty(_useGlobalKeyDown, keycode.PageDown, function () {
      return changeFocusedDay(utils.getPreviousMonth(nowFocusedDay));
    }), _useGlobalKeyDown));
    var currentMonthNumber = utils.getMonth(currentMonth);
    var selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(function (selectedDateItem) {
      return utils.startOfDay(selectedDateItem);
    });
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: classes.daysHeader
    }, utils.getWeekdays().map(function (day, i) {
      return React.createElement(Typography, {
        "aria-hidden": true,
        key: day + i.toString(),
        variant: "caption",
        className: classes.dayLabel,
        children: day.charAt(0).toUpperCase()
      });
    })), React.createElement(SlideTransition, _extends({
      transKey: currentMonthNumber,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations: reduceAnimations,
      slideDirection: slideDirection,
      className: clsx(classes.transitionContainer, className)
    }, TransitionProps), React.createElement("div", {
      role: "grid",
      style: {
        overflow: 'hidden'
      }
    }, utils.getWeekArray(currentMonth).map(function (week) {
      return React.createElement("div", {
        role: "row",
        key: "week-".concat(week[0].toString()),
        className: classes.week
      }, week.map(function (day) {
        var _ref2;

        var disabled = isDateDisabled(day);
        var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
        var dayProps = {
          key: (_ref2 = day) === null || _ref2 === void 0 ? void 0 : _ref2.toString(),
          day: day,
          role: 'cell',
          isAnimating: isMonthSwitchingAnimating,
          disabled: disabled,
          allowKeyboardControl: allowKeyboardControl,
          focused: allowKeyboardControl && Boolean(focusedDay) && utils.isSameDay(day, focusedDay),
          today: utils.isSameDay(day, now),
          inCurrentMonth: isDayInCurrentMonth,
          selected: selectedDates.some(function (selectedDate) {
            return utils.isSameDay(selectedDate, day);
          }),
          disableHighlightToday: disableHighlightToday,
          showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
          focusable: allowKeyboardControl && Boolean(nowFocusedDay) && utils.toJsDate(nowFocusedDay).getDate() === utils.toJsDate(day).getDate(),
          onDayFocus: changeFocusedDay,
          onDaySelect: handleDaySelect
        };
        return renderDay ? renderDay(day, selectedDates, dayProps) : React.createElement(Day, dayProps);
      }));
    }))));
  };
  Calendar.displayName = 'Calendar';

  var ArrowDropDownIcon = utils.createSvgIcon(React__default.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), 'ArrowDropDownIcon');

  var useStyles$k = styles$1.makeStyles(function (theme) {
    return {
      switchHeader: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 8,
        paddingLeft: 24,
        paddingRight: 12,
        // prevent jumping in safari
        maxHeight: 30,
        minHeight: 30
      },
      yearSelectionSwitcher: {
        marginRight: 'auto'
      },
      previousMonthButton: {
        marginRight: 24
      },
      switchViewDropdown: {
        willChange: 'transform',
        transition: theme.transitions.create('transform'),
        transform: 'rotate(0deg)'
      },
      switchViewDropdownDown: {
        transform: 'rotate(180deg)'
      },
      monthTitleContainer: {
        flex: 1,
        display: 'flex',
        maxHeight: 30,
        overflow: 'hidden',
        cursor: 'pointer'
      },
      monthText: {
        marginRight: 4
      }
    };
  }, {
    name: 'MuiPickersCalendarHeader'
  });

  function getSwitchingViewAriaText(view) {
    return view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view';
  }

  var CalendarHeader = function CalendarHeader(_ref) {
    var view = _ref.view,
        views = _ref.views,
        month = _ref.currentMonth,
        changeView = _ref.changeView,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        disablePast = _ref.disablePast,
        disableFuture = _ref.disableFuture,
        onMonthChange = _ref.onMonthChange,
        reduceAnimations = _ref.reduceAnimations,
        leftArrowButtonProps = _ref.leftArrowButtonProps,
        rightArrowButtonProps = _ref.rightArrowButtonProps,
        leftArrowIcon = _ref.leftArrowIcon,
        rightArrowIcon = _ref.rightArrowIcon,
        _ref$leftArrowButtonT = _ref.leftArrowButtonText,
        leftArrowButtonText = _ref$leftArrowButtonT === void 0 ? 'previous month' : _ref$leftArrowButtonT,
        _ref$rightArrowButton = _ref.rightArrowButtonText,
        rightArrowButtonText = _ref$rightArrowButton === void 0 ? 'next month' : _ref$rightArrowButton,
        _ref$getViewSwitching = _ref.getViewSwitchingButtonText,
        getViewSwitchingButtonText = _ref$getViewSwitching === void 0 ? getSwitchingViewAriaText : _ref$getViewSwitching;
    var utils = useUtils();
    var classes = useStyles$k();

    var selectNextMonth = function selectNextMonth() {
      return onMonthChange(utils.getNextMonth(month), 'left');
    };

    var selectPreviousMonth = function selectPreviousMonth() {
      return onMonthChange(utils.getPreviousMonth(month), 'right');
    };

    var isNextMonthDisabled = useNextMonthDisabled(month, {
      disableFuture: disableFuture,
      maxDate: maxDate
    });
    var isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
      disablePast: disablePast,
      minDate: minDate
    });

    var toggleView = function toggleView() {
      if (views.length === 1) {
        return;
      }

      if (views.length === 2) {
        changeView(views.find(function (v) {
          return v !== view;
        }) || views[0]);
      } else {
        // switching only between first 2
        var nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
        changeView(views[nextIndexToOpen]);
      }
    };

    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: classes.switchHeader
    }, React.createElement("div", {
      className: classes.monthTitleContainer,
      onClick: toggleView
    }, React.createElement(FadeTransitionGroup, {
      reduceAnimations: reduceAnimations,
      transKey: utils.format(month, 'month')
    }, React.createElement(Typography, {
      "aria-live": "polite",
      "data-mui-test": "calendar-month-text",
      align: "center",
      variant: "subtitle1",
      className: classes.monthText,
      children: utils.format(month, 'month')
    })), React.createElement(FadeTransitionGroup, {
      reduceAnimations: reduceAnimations,
      transKey: utils.format(month, 'year')
    }, React.createElement(Typography, {
      "aria-live": "polite",
      "data-mui-test": "calendar-year-text",
      align: "center",
      variant: "subtitle1",
      children: utils.format(month, 'year')
    })), views.length > 1 && React.createElement(IconButton, {
      size: "small",
      "data-mui-test": "calendar-view-switcher",
      onClick: toggleView,
      className: classes.yearSelectionSwitcher,
      "aria-label": getViewSwitchingButtonText(view)
    }, React.createElement(ArrowDropDownIcon, {
      className: clsx(classes.switchViewDropdown, view === 'year' && classes.switchViewDropdownDown)
    }))), React.createElement(Fade, {
      "in": view === 'date'
    }, React.createElement(ArrowSwitcher, {
      leftArrowButtonProps: leftArrowButtonProps,
      rightArrowButtonProps: rightArrowButtonProps,
      leftArrowButtonText: leftArrowButtonText,
      rightArrowButtonText: rightArrowButtonText,
      leftArrowIcon: leftArrowIcon,
      rightArrowIcon: rightArrowIcon,
      onLeftClick: selectPreviousMonth,
      onRightClick: selectNextMonth,
      isLeftDisabled: isPreviousMonthDisabled,
      isRightDisabled: isNextMonthDisabled
    }))));
  };
  CalendarHeader.displayName = 'CalendarHeader';
   CalendarHeader.propTypes = {
    leftArrowIcon: propTypes_13,
    rightArrowIcon: propTypes_13,
    leftArrowButtonText: propTypes_6,
    rightArrowButtonText: propTypes_6
  } ;

  var useStyles$l = styles$1.makeStyles({
    viewTransitionContainer: {
      overflowY: 'auto'
    },
    gridFullHeight: {
      flex: 1,
      minHeight: VIEW_HEIGHT - 60,
      height: '100%'
    }
  }, {
    name: 'MuiPickersCalendarView'
  });
  var defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
  var CalendarView = function CalendarView(_ref) {
    var date = _ref.date,
        view = _ref.view,
        onChange = _ref.onChange,
        changeView = _ref.changeView,
        onMonthChange = _ref.onMonthChange,
        _ref$minDate = _ref.minDate,
        unparsedMinDate = _ref$minDate === void 0 ? new Date('1900-01-01') : _ref$minDate,
        _ref$maxDate = _ref.maxDate,
        unparsedMaxDate = _ref$maxDate === void 0 ? new Date('2100-01-01') : _ref$maxDate,
        _ref$reduceAnimations = _ref.reduceAnimations,
        reduceAnimations = _ref$reduceAnimations === void 0 ? defaultReduceAnimations : _ref$reduceAnimations,
        _ref$loadingIndicator = _ref.loadingIndicator,
        loadingIndicator = _ref$loadingIndicator === void 0 ? React.createElement(CircularProgress, {
      "data-mui-test": "loading-progress"
    }) : _ref$loadingIndicator,
        shouldDisableDate = _ref.shouldDisableDate,
        allowKeyboardControlProp = _ref.allowKeyboardControl,
        disablePast = _ref.disablePast,
        disableFuture = _ref.disableFuture,
        other = _objectWithoutProperties(_ref, ["date", "view", "onChange", "changeView", "onMonthChange", "minDate", "maxDate", "reduceAnimations", "loadingIndicator", "shouldDisableDate", "allowKeyboardControl", "disablePast", "disableFuture"]);

    var classes = useStyles$l();
    var minDate = useParsedDate(unparsedMinDate);
    var maxDate = useParsedDate(unparsedMaxDate);
    var wrapperVariant = React.useContext(WrapperVariantContext);
    var allowKeyboardControl = allowKeyboardControlProp !== null && allowKeyboardControlProp !== void 0 ? allowKeyboardControlProp : wrapperVariant !== 'static';

    var _useCalendarState = useCalendarState({
      date: date,
      reduceAnimations: reduceAnimations,
      onMonthChange: onMonthChange,
      minDate: minDate,
      maxDate: maxDate,
      shouldDisableDate: shouldDisableDate,
      disablePast: disablePast,
      disableFuture: disableFuture
    }),
        loadingQueue = _useCalendarState.loadingQueue,
        calendarState = _useCalendarState.calendarState,
        changeFocusedDay = _useCalendarState.changeFocusedDay,
        changeMonth = _useCalendarState.changeMonth,
        isDateDisabled = _useCalendarState.isDateDisabled,
        handleChangeMonth = _useCalendarState.handleChangeMonth,
        onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd;

    React.useEffect(function () {
      changeMonth(date);
    }, [date]); // eslint-disable-line

    React.useEffect(function () {
      if (view === 'date') {
        changeFocusedDay(date);
      }
    }, [view]); // eslint-disable-line

    return React.createElement(React.Fragment, null, React.createElement(CalendarHeader, _extends({}, other, {
      view: view,
      currentMonth: calendarState.currentMonth,
      changeView: changeView,
      onMonthChange: function onMonthChange(newMonth, direction) {
        return handleChangeMonth({
          newMonth: newMonth,
          direction: direction
        });
      },
      minDate: minDate,
      maxDate: maxDate,
      reduceAnimations: reduceAnimations
    })), React.createElement(FadeTransitionGroup, {
      reduceAnimations: reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view
    }, React.createElement("div", null, view === 'year' && React.createElement(YearSelection, _extends({}, other, {
      date: date,
      onChange: onChange,
      minDate: minDate,
      maxDate: maxDate,
      isDateDisabled: isDateDisabled,
      allowKeyboardControl: allowKeyboardControl
    })), view === 'month' && React.createElement(MonthSelection, _extends({}, other, {
      date: date,
      onChange: onChange,
      minDate: minDate,
      maxDate: maxDate,
      onMonthChange: onMonthChange
    })), view === 'date' && (loadingQueue > 0 ? React.createElement(Grid, {
      className: classes.gridFullHeight,
      container: true,
      alignItems: "center",
      justify: "center"
    }, loadingIndicator) : React.createElement(Calendar, _extends({}, other, calendarState, {
      onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
      changeFocusedDay: changeFocusedDay,
      reduceAnimations: reduceAnimations,
      date: date,
      onChange: onChange,
      minDate: minDate,
      maxDate: maxDate,
      isDateDisabled: isDateDisabled,
      allowKeyboardControl: allowKeyboardControl
    }))))));
  };

  var useStyles$m = styles$1.makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    containerLandscape: {
      flexDirection: 'row'
    },
    pickerView: {
      overflowX: 'hidden',
      width: DIALOG_WIDTH,
      maxHeight: VIEW_HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto'
    },
    pickerViewLandscape: {
      padding: '0 8px'
    }
  }, {
    name: 'MuiPickersBasePicker'
  });

  var isTimePickerByViews = function isTimePickerByViews(views) {
    return !views.some(function (view) {
      return view === 'year' || view === 'month' || view === 'date';
    });
  };

  function Picker(_ref) {
    var date = _ref.date,
        _ref$openTo = _ref.openTo,
        openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
        _ref$views = _ref.views,
        views = _ref$views === void 0 ? ['year', 'month', 'date', 'hours', 'minutes', 'seconds'] : _ref$views,
        toolbarTitle = _ref.toolbarTitle,
        showToolbar = _ref.showToolbar,
        onDateChange = _ref.onDateChange,
        _ref$ToolbarComponent = _ref.ToolbarComponent,
        ToolbarComponent = _ref$ToolbarComponent === void 0 ? function () {
      return null;
    } : _ref$ToolbarComponent,
        orientation = _ref.orientation,
        DateInputProps = _ref.DateInputProps,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
        toolbarFormat = _ref.toolbarFormat,
        other = _objectWithoutProperties(_ref, ["date", "openTo", "views", "toolbarTitle", "showToolbar", "onDateChange", "ToolbarComponent", "orientation", "DateInputProps", "isMobileKeyboardViewOpen", "toggleMobileKeyboardView", "toolbarFormat"]);

    var classes = useStyles$m();
    var isLandscape = useIsLandscape(views, orientation);
    var wrapperVariant = React.useContext(WrapperVariantContext);
    var onChange = React.useCallback(function (date, isFinish) {
      onDateChange(date, wrapperVariant, isFinish);
    }, [onDateChange, wrapperVariant]);
    var toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;

    var _useViews = useViews({
      views: views,
      openTo: openTo,
      onChange: onChange,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView
    }),
        openView = _useViews.openView,
        nextView = _useViews.nextView,
        previousView = _useViews.previousView,
        setOpenView = _useViews.setOpenView,
        handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

    return React.createElement("div", {
      className: clsx(classes.container, isLandscape && classes.containerLandscape)
    }, toShowToolbar && React.createElement(ToolbarComponent, _extends({}, other, {
      views: views,
      isLandscape: isLandscape,
      date: date,
      onChange: onChange,
      setOpenView: setOpenView,
      openView: openView,
      toolbarTitle: toolbarTitle,
      toolbarFormat: toolbarFormat,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView
    })), React.createElement("div", {
      className: clsx(classes.pickerView, isLandscape && classes.pickerViewLandscape)
    }, isMobileKeyboardViewOpen ? React.createElement(MobileKeyboardInputView, null, React.createElement(KeyboardDateInput, _extends({}, DateInputProps, {
      ignoreInvalidInputs: true,
      disableOpenPicker: true,
      fullWidth: true
    }))) : React.createElement(React.Fragment, null, (openView === 'year' || openView === 'month' || openView === 'date') && React.createElement(CalendarView, _extends({
      date: date,
      changeView: setOpenView // @ts-ignore
      ,
      views: views,
      onChange: handleChangeAndOpenNext,
      view: openView
    }, other)), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && React.createElement(ClockView, _extends({}, other, {
      date: date,
      type: openView,
      onDateChange: onChange,
      onChange: handleChangeAndOpenNext,
      openNextView: function openNextView() {
        return setOpenView(nextView);
      },
      openPreviousView: function openPreviousView() {
        return setOpenView(previousView);
      },
      nextViewAvailable: !Boolean(nextView),
      previousViewAvailable: !Boolean(previousView),
      showViewSwitcher: isTimePickerByViews(views) && wrapperVariant === 'desktop'
    })))));
  }
  Picker.displayName = 'Picker';

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function makePickerWithStateAndWrapper(Wrapper, _ref) {
    var useDefaultProps = _ref.useDefaultProps,
        DefaultToolbarComponent = _ref.DefaultToolbarComponent;
    var PickerWrapper = makeWrapperComponent(Wrapper, {
      KeyboardDateInputComponent: KeyboardDateInput,
      PureDateInputComponent: PureDateInput
    });

    function PickerWithState(props) {
      var utils = useUtils();
      var defaultProps = useDefaultProps(props);

      var allProps = _objectSpread$4({}, defaultProps, {}, props);

      var _usePickerState = usePickerState(allProps, {
        emptyValue: null,
        parseInput: parsePickerInputValue,
        validateInput: validateDateValue,
        areValuesEqual: function areValuesEqual(a, b) {
          return utils.isEqual(a, b);
        }
      }),
          pickerProps = _usePickerState.pickerProps,
          inputProps = _usePickerState.inputProps,
          wrapperProps = _usePickerState.wrapperProps;

      var allowKeyboardControl = allProps.allowKeyboardControl,
          ampm = allProps.ampm,
          ampmInClock = allProps.ampmInClock,
          dateRangeIcon = allProps.dateRangeIcon,
          disableFuture = allProps.disableFuture,
          disableHighlightToday = allProps.disableHighlightToday,
          disablePast = allProps.disablePast,
          disableTimeValidationIgnoreDatePart = allProps.disableTimeValidationIgnoreDatePart,
          hideTabs = allProps.hideTabs,
          leftArrowButtonProps = allProps.leftArrowButtonProps,
          leftArrowButtonText = allProps.leftArrowButtonText,
          leftArrowIcon = allProps.leftArrowIcon,
          loadingIndicator = allProps.loadingIndicator,
          maxDate = allProps.maxDate,
          maxTime = allProps.maxTime,
          minDate = allProps.minDate,
          minDateTime = allProps.minDateTime,
          maxDateTime = allProps.maxDateTime,
          minTime = allProps.minTime,
          minutesStep = allProps.minutesStep,
          onMonthChange = allProps.onMonthChange,
          onYearChange = allProps.onYearChange,
          openTo = allProps.openTo,
          orientation = allProps.orientation,
          renderDay = allProps.renderDay,
          rightArrowButtonProps = allProps.rightArrowButtonProps,
          rightArrowButtonText = allProps.rightArrowButtonText,
          rightArrowIcon = allProps.rightArrowIcon,
          shouldDisableDate = allProps.shouldDisableDate,
          shouldDisableTime = allProps.shouldDisableTime,
          showDaysOutsideCurrentMonth = allProps.showDaysOutsideCurrentMonth,
          showToolbar = allProps.showToolbar,
          timeIcon = allProps.timeIcon,
          _allProps$ToolbarComp = allProps.ToolbarComponent,
          ToolbarComponent = _allProps$ToolbarComp === void 0 ? DefaultToolbarComponent : _allProps$ToolbarComp,
          toolbarFormat = allProps.toolbarFormat,
          toolbarTitle = allProps.toolbarTitle,
          value = allProps.value,
          views = allProps.views,
          restPropsForTextField = _objectWithoutProperties(allProps, ["allowKeyboardControl", "ampm", "ampmInClock", "dateRangeIcon", "disableFuture", "disableHighlightToday", "disablePast", "disableTimeValidationIgnoreDatePart", "hideTabs", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "loadingIndicator", "maxDate", "maxTime", "minDate", "minDateTime", "maxDateTime", "minTime", "minutesStep", "onMonthChange", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "shouldDisableDate", "shouldDisableTime", "showDaysOutsideCurrentMonth", "showToolbar", "timeIcon", "ToolbarComponent", "toolbarFormat", "toolbarTitle", "value", "views"]);

      return React.createElement(PickerWrapper, _extends({
        inputProps: inputProps,
        wrapperProps: wrapperProps
      }, restPropsForTextField), React.createElement(Picker, _extends({}, pickerProps, {
        DateInputProps: _objectSpread$4({}, inputProps, {}, restPropsForTextField),
        allowKeyboardControl: allowKeyboardControl,
        ampm: ampm,
        ampmInClock: ampmInClock,
        dateRangeIcon: dateRangeIcon,
        disableFuture: disableFuture,
        disableHighlightToday: disableHighlightToday,
        disablePast: disablePast,
        disableTimeValidationIgnoreDatePart: disableTimeValidationIgnoreDatePart,
        hideTabs: hideTabs,
        leftArrowButtonProps: leftArrowButtonProps,
        leftArrowIcon: leftArrowIcon,
        leftArrowButtonText: leftArrowButtonText,
        loadingIndicator: loadingIndicator,
        maxDate: maxDate,
        maxTime: maxTime,
        minDate: minDate,
        minTime: minTime,
        minutesStep: minutesStep,
        onMonthChange: onMonthChange,
        onYearChange: onYearChange,
        openTo: openTo,
        orientation: orientation,
        renderDay: renderDay,
        rightArrowButtonProps: rightArrowButtonProps,
        rightArrowIcon: rightArrowIcon,
        rightArrowButtonText: rightArrowButtonText,
        shouldDisableDate: shouldDisableDate,
        shouldDisableTime: shouldDisableTime,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        showToolbar: showToolbar,
        timeIcon: timeIcon,
        ToolbarComponent: ToolbarComponent,
        toolbarFormat: toolbarFormat,
        toolbarTitle: toolbarTitle || (restPropsForTextField === null || restPropsForTextField === void 0 ? void 0 : restPropsForTextField.label),
        views: views
      })));
    }

    var FinalPickerComponent = withDateAdapterProp(PickerWithState);
    return React.forwardRef(function (props, ref) {
      return React.createElement(FinalPickerComponent, _extends({}, props, {
        forwardedRef: ref
      }));
    });
  }

  var useStyles$n = styles$1.makeStyles(function (theme) {
    return {
      staticWrapperRoot: {
        overflow: 'hidden',
        minWidth: DIALOG_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper
      }
    };
  }, {
    name: 'MuiPickersStaticWrapper'
  });
  var StaticWrapper = function StaticWrapper(_ref) {
    var _ref$displayStaticWra = _ref.displayStaticWrapperAs,
        displayStaticWrapperAs = _ref$displayStaticWra === void 0 ? 'static' : _ref$displayStaticWra,
        children = _ref.children;
    var classes = useStyles$n();
    return React.createElement(WrapperVariantContext.Provider, {
      value: displayStaticWrapperAs
    }, React.createElement("div", {
      className: classes.staticWrapperRoot,
      children: children
    }));
  };

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var datePickerConfig = {
    DefaultToolbarComponent: DatePickerToolbar,
    useDefaultProps: function useDefaultProps(_ref) {
      var _ref$openTo = _ref.openTo,
          openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
          _ref$views = _ref.views,
          views = _ref$views === void 0 ? ['year', 'date'] : _ref$views;
      var utils = useUtils();
      return _objectSpread$5({}, datePickerDefaultProps, {
        views: views,
        openTo: openTo,
        mask: '__/__/____',
        inputFormat: getFormatByViews(views, utils)
      });
    }
  };
  var DatePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, datePickerConfig);
  var MobileDatePicker = makePickerWithStateAndWrapper(MobileWrapper, datePickerConfig);
  var DesktopDatePicker = makePickerWithStateAndWrapper(DesktopWrapper, datePickerConfig);
  var StaticDatePicker = makePickerWithStateAndWrapper(StaticWrapper, datePickerConfig);

  var ClockIcon = utils.createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), React__default.createElement("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })), 'ClockIcon');

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function getTextFieldAriaText$1(value, utils) {
    return value && utils.isValid(utils.date(value)) ? "Choose time, selected time is ".concat(utils.format(utils.date(value), 'fullTime')) : 'Choose time';
  }

  function useDefaultProps(_ref) {
    var ampm = _ref.ampm,
        mask = _ref.mask,
        inputFormat = _ref.inputFormat,
        _ref$openTo = _ref.openTo,
        openTo = _ref$openTo === void 0 ? 'hours' : _ref$openTo,
        _ref$views = _ref.views,
        views = _ref$views === void 0 ? ['hours', 'minutes'] : _ref$views;
    var utils = useUtils();
    var willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();
    return _objectSpread$6({}, timePickerDefaultProps, {
      views: views,
      openTo: openTo,
      ampm: willUseAmPm,
      acceptRegex: willUseAmPm ? /[\dapAP]/gi : /\d/gi,
      mask: mask || willUseAmPm ? '__:__ _M' : '__:__',
      getOpenDialogAriaText: getTextFieldAriaText$1,
      keyboardIcon: React__default.createElement(ClockIcon, null),
      inputFormat: pick12hOr24hFormat(inputFormat, ampm, {
        localized: utils.formats.fullTime,
        '12h': utils.formats.fullTime12h,
        '24h': utils.formats.fullTime24h
      })
    });
  }

  var TimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar
  });
  var DesktopTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar
  });
  var MobileTimePicker = makePickerWithStateAndWrapper(MobileWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar
  });
  var StaticTimePicker = makePickerWithStateAndWrapper(StaticWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar
  });

  var TimeIcon = utils.createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), React__default.createElement("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })), 'TimeIcon');

  var DateRangeIcon = utils.createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
    d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
  }), React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })), 'DateRangeIcon');

  var viewToTabIndex = function viewToTabIndex(openView) {
    if (openView === 'date' || openView === 'year') {
      return 'date';
    }

    return 'time';
  };

  var tabIndexToView = function tabIndexToView(tab) {
    if (tab === 'date') {
      return 'date';
    }

    return 'hours';
  };

  var useStyles$o = styles$1.makeStyles(function (theme) {
    // prettier-ignore
    var tabsBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
    return {
      tabs: {
        color: theme.palette.getContrastText(tabsBackground),
        backgroundColor: tabsBackground
      }
    };
  }, {
    name: 'MuiPickerDTTabs'
  });
  var DateTimePickerTabs = function DateTimePickerTabs(_ref) {
    var view = _ref.view,
        onChange = _ref.onChange,
        dateRangeIcon = _ref.dateRangeIcon,
        timeIcon = _ref.timeIcon;
    var classes = useStyles$o();
    var theme = styles$1.useTheme();
    var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

    var handleChange = function handleChange(e, value) {
      if (value !== viewToTabIndex(view)) {
        onChange(tabIndexToView(value));
      }
    };

    return React.createElement(Paper, null, React.createElement(Tabs, {
      variant: "fullWidth",
      value: viewToTabIndex(view),
      onChange: handleChange,
      className: classes.tabs,
      indicatorColor: indicatorColor
    }, React.createElement(Tab, {
      value: "date",
      "aria-label": "pick date",
      icon: React.createElement(React.Fragment, null, dateRangeIcon)
    }), React.createElement(Tab, {
      value: "time",
      "aria-label": "pick time",
      icon: React.createElement(React.Fragment, null, timeIcon)
    })));
  };
  DateTimePickerTabs.defaultProps = {
    dateRangeIcon: React.createElement(DateRangeIcon, null),
    timeIcon: React.createElement(TimeIcon, null)
  };

  var useStyles$p = styles$1.makeStyles(function (_) {
    return {
      toolbar: {
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-around'
      },
      separator: {
        margin: '0 4px 0 2px',
        cursor: 'default'
      },
      timeContainer: {
        display: 'flex'
      },
      dateContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      },
      timeTypography: {},
      penIcon: {
        position: 'absolute',
        top: 8,
        right: 8
      }
    };
  }, {
    name: 'MuiPickerDTToolbar'
  });
  var DateTimePickerToolbar = function DateTimePickerToolbar(_ref) {
    var date = _ref.date,
        openView = _ref.openView,
        setOpenView = _ref.setOpenView,
        ampm = _ref.ampm,
        hideTabs = _ref.hideTabs,
        dateRangeIcon = _ref.dateRangeIcon,
        timeIcon = _ref.timeIcon,
        toolbarFormat = _ref.toolbarFormat,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
        _ref$toolbarTitle = _ref.toolbarTitle,
        toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE & TIME' : _ref$toolbarTitle;
    var utils = useUtils();
    var classes = useStyles$p();
    var showTabs = !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;
    return React.createElement(React.Fragment, null, React.createElement(PickerToolbar, {
      toolbarTitle: toolbarTitle,
      isLandscape: false,
      penIconClassName: classes.penIcon,
      className: classes.toolbar,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView
    }, React.createElement("div", {
      className: classes.dateContainer
    }, React.createElement(ToolbarButton, {
      tabIndex: -1,
      variant: "subtitle1",
      onClick: function onClick() {
        return setOpenView('year');
      },
      selected: openView === 'year',
      value: utils.format(date, 'year')
    }), React.createElement(ToolbarButton, {
      tabIndex: -1,
      variant: "h4",
      "data-mui-test": "datetimepicker-toolbar-date",
      onClick: function onClick() {
        return setOpenView('date');
      },
      selected: openView === 'date',
      value: toolbarFormat ? utils.formatByString(date, toolbarFormat) : utils.format(date, 'shortDate')
    })), React.createElement("div", {
      className: classes.timeContainer
    }, React.createElement(ToolbarButton, {
      tabIndex: -1,
      variant: "h3",
      onClick: function onClick() {
        return setOpenView('hours');
      },
      selected: openView === 'hours',
      value: ampm ? utils.format(date, 'hours12h') : utils.format(date, 'hours24h'),
      typographyClassName: classes.timeTypography
    }), React.createElement(ToolbarText, {
      variant: "h3",
      value: ":",
      className: classes.separator
    }), React.createElement(ToolbarButton, {
      tabIndex: -1,
      variant: "h3",
      onClick: function onClick() {
        return setOpenView('minutes');
      },
      selected: openView === 'minutes',
      value: utils.format(date, 'minutes'),
      typographyClassName: classes.timeTypography
    }))), showTabs && React.createElement(DateTimePickerTabs, {
      dateRangeIcon: dateRangeIcon,
      timeIcon: timeIcon,
      view: openView,
      onChange: setOpenView
    }));
  };

  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function useDefaultProps$1(_ref) {
    var ampm = _ref.ampm,
        mask = _ref.mask,
        inputFormat = _ref.inputFormat,
        maxDateTime = _ref.maxDateTime,
        minDateTime = _ref.minDateTime,
        _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
        _ref$openTo = _ref.openTo,
        openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
        _ref$views = _ref.views,
        views = _ref$views === void 0 ? ['year', 'date', 'hours', 'minutes'] : _ref$views;
    var utils = useUtils();
    var willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();

    if (orientation !== 'portrait') {
      throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
    }

    return _objectSpread$7({}, dateTimePickerDefaultProps, {
      openTo: openTo,
      views: views,
      ampm: willUseAmPm,
      wider: true,
      ampmInClock: true,
      orientation: orientation,
      showToolbar: true,
      minDate: minDateTime,
      minTime: minDateTime,
      maxDate: maxDateTime,
      maxTime: maxDateTime,
      disableTimeValidationIgnoreDatePart: Boolean(minDateTime || maxDateTime),
      acceptRegex: willUseAmPm ? /[\dap]/gi : /\d/gi,
      mask: mask || willUseAmPm ? '__/__/____ __:__ _M' : '__/__/____ __:__',
      inputFormat: pick12hOr24hFormat(inputFormat, ampm, {
        localized: utils.formats.keyboardDateTime,
        '12h': utils.formats.keyboardDateTime12h,
        '24h': utils.formats.keyboardDateTime24h
      })
    });
  }

  var DateTimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, {
    useDefaultProps: useDefaultProps$1,
    DefaultToolbarComponent: DateTimePickerToolbar
  });
  var DesktopDateTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, {
    useDefaultProps: useDefaultProps$1,
    DefaultToolbarComponent: DateTimePickerToolbar
  });
  var MobileDateTimePicker = makePickerWithStateAndWrapper(MobileWrapper, {
    useDefaultProps: useDefaultProps$1,
    DefaultToolbarComponent: DateTimePickerToolbar
  });
  var StaticDateTimePicker = makePickerWithStateAndWrapper(StaticWrapper, {
    useDefaultProps: useDefaultProps$1,
    DefaultToolbarComponent: DateTimePickerToolbar
  });

  function calculateRangeChange(_ref) {
    var utils = _ref.utils,
        range = _ref.range,
        selectedDate = _ref.newDate,
        currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd;

    var _range = _slicedToArray(range, 2),
        start = _range[0],
        end = _range[1];

    if (currentlySelectingRangeEnd === 'start') {
      return Boolean(end) && utils.isAfter(selectedDate, end) ? {
        nextSelection: 'end',
        newRange: [selectedDate, null]
      } : {
        nextSelection: 'end',
        newRange: [selectedDate, end]
      };
    } else {
      return Boolean(start) && utils.isBefore(selectedDate, start) ? {
        nextSelection: 'end',
        newRange: [selectedDate, null]
      } : {
        nextSelection: 'start',
        newRange: [start, selectedDate]
      };
    }
  }
  function calculateRangePreview(options) {
    if (!options.newDate) {
      return [null, null];
    }

    var _options$range = _slicedToArray(options.range, 2),
        start = _options$range[0],
        end = _options$range[1];

    var _calculateRangeChange = calculateRangeChange(options),
        newRange = _calculateRangeChange.newRange;

    if (!start || !end) {
      return newRange;
    }

    var _newRange = _slicedToArray(newRange, 2),
        previewStart = _newRange[0],
        previewEnd = _newRange[1]; // prettier-ignore


    return options.currentlySelectingRangeEnd === 'end' ? [end, previewEnd] : [previewStart, start];
  }

  var useStyles$q = styles$1.makeStyles(function (theme) {
    return {
      rangeInputsContainer: _defineProperty({
        display: 'flex',
        alignItems: 'center'
      }, theme.breakpoints.down('xs'), {
        flexDirection: 'column'
      }),
      toLabelDelimiter: _defineProperty({
        margin: '8px 0'
      }, theme.breakpoints.up('sm'), {
        margin: '0 16px'
      })
    };
  }, {
    name: 'MuiPickersDateRangePickerInput'
  });
  var DateRangePickerInput = function DateRangePickerInput(_ref) {
    var _ref$toText = _ref.toText,
        toText = _ref$toText === void 0 ? 'to' : _ref$toText,
        rawValue = _ref.rawValue,
        onChange = _ref.onChange,
        onClick = _ref.onClick,
        _ref$parsedDateValue = _slicedToArray(_ref.parsedDateValue, 2),
        start = _ref$parsedDateValue[0],
        end = _ref$parsedDateValue[1],
        id = _ref.id,
        open = _ref.open,
        className = _ref.className,
        containerRef = _ref.containerRef,
        forwardedRef = _ref.forwardedRef,
        currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
        setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
        openPicker = _ref.openPicker,
        onFocus = _ref.onFocus,
        readOnly = _ref.readOnly,
        disableOpenPicker = _ref.disableOpenPicker,
        startText = _ref.startText,
        endText = _ref.endText,
        other = _objectWithoutProperties(_ref, ["toText", "rawValue", "onChange", "onClick", "parsedDateValue", "id", "open", "className", "containerRef", "forwardedRef", "currentlySelectingRangeEnd", "setCurrentlySelectingRangeEnd", "openPicker", "onFocus", "readOnly", "disableOpenPicker", "startText", "endText"]);

    var utils = useUtils();
    var classes = useStyles$q();
    var startRef = React.useRef(null);
    var endRef = React.useRef(null);
    React.useEffect(function () {
      if (!open) {
        return;
      }

      if (currentlySelectingRangeEnd === 'start') {
        var _startRef$current;

        (_startRef$current = startRef.current) === null || _startRef$current === void 0 ? void 0 : _startRef$current.focus();
      } else if (currentlySelectingRangeEnd === 'end') {
        var _endRef$current;

        (_endRef$current = endRef.current) === null || _endRef$current === void 0 ? void 0 : _endRef$current.focus();
      }
    }, [currentlySelectingRangeEnd, open]);

    var handleStartChange = function handleStartChange(date, inputString) {
      if (date === null || utils.isValid(date)) {
        onChange([date, end], inputString);
      }
    };

    var handleEndChange = function handleEndChange(date, inputString) {
      if (date === null || utils.isValid(date)) {
        onChange([start, date], inputString);
      }
    };

    var openRangeStartSelection = function openRangeStartSelection() {
      if (setCurrentlySelectingRangeEnd) {
        setCurrentlySelectingRangeEnd('start');
      }

      if (!disableOpenPicker) {
        openPicker();
      }
    };

    var openRangeEndSelection = function openRangeEndSelection() {
      if (setCurrentlySelectingRangeEnd) {
        setCurrentlySelectingRangeEnd('end');
      }

      if (!disableOpenPicker) {
        openPicker();
      }
    };

    return React.createElement("div", {
      id: id,
      className: clsx(classes.rangeInputsContainer, className),
      ref: mergeRefs([containerRef, forwardedRef])
    }, React.createElement(KeyboardDateInput, _extends({}, other, {
      open: open,
      forwardedRef: startRef,
      rawValue: start,
      parsedDateValue: start,
      onChange: handleStartChange,
      disableOpenPicker: true,
      openPicker: doNothing,
      readOnly: readOnly,
      label: startText,
      focused: open && currentlySelectingRangeEnd === 'start',
      onClick: readOnly ? createDelegatedEventHandler(openRangeStartSelection, onClick) : undefined,
      onFocus: !readOnly ? createDelegatedEventHandler(openRangeStartSelection, onFocus) : undefined
    })), React.createElement(Typography, {
      className: classes.toLabelDelimiter
    }, toText), React.createElement(KeyboardDateInput, _extends({}, other, {
      open: open,
      forwardedRef: endRef,
      rawValue: end,
      parsedDateValue: end,
      onChange: handleEndChange,
      disableOpenPicker: true,
      openPicker: doNothing,
      readOnly: readOnly,
      label: endText,
      focused: open && currentlySelectingRangeEnd === 'end',
      onClick: readOnly ? createDelegatedEventHandler(openRangeEndSelection, onClick) : undefined,
      onFocus: !readOnly ? createDelegatedEventHandler(openRangeEndSelection, onFocus) : undefined
    })));
  };

  var useStyles$r = styles$1.makeStyles({
    penIcon: {
      position: 'relative',
      top: 4
    },
    dateTextContainer: {
      display: 'flex'
    }
  }, {
    name: 'MuiPickersDatePickerRoot'
  });
  var DateRangePickerToolbar = function DateRangePickerToolbar(_ref) {
    var _ref$date = _slicedToArray(_ref.date, 2),
        start = _ref$date[0],
        end = _ref$date[1],
        toolbarFormat = _ref.toolbarFormat,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
        currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
        setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
        startText = _ref.startText,
        endText = _ref.endText,
        _ref$toolbarTitle = _ref.toolbarTitle,
        toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE RANGE' : _ref$toolbarTitle;

    var utils = useUtils();
    var classes = useStyles$r();
    var startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
    var endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
    return React.createElement(PickerToolbar, {
      toolbarTitle: toolbarTitle,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView,
      isLandscape: false,
      penIconClassName: classes.penIcon
    }, React.createElement("div", {
      className: classes.dateTextContainer
    }, React.createElement(ToolbarButton, {
      variant: Boolean(start) ? 'h5' : 'h6',
      value: startDateValue,
      selected: currentlySelectingRangeEnd === 'start',
      onClick: function onClick() {
        return setCurrentlySelectingRangeEnd('start');
      }
    }), React.createElement(Typography, {
      variant: "h5"
    }, "\xA0", '–', "\xA0"), React.createElement(ToolbarButton, {
      variant: Boolean(end) ? 'h5' : 'h6',
      value: endDateValue,
      selected: currentlySelectingRangeEnd === 'end',
      onClick: function onClick() {
        return setCurrentlySelectingRangeEnd('end');
      }
    })));
  };

  function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var endBorderStyle = {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%'
  };
  var startBorderStyle = {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%'
  };
  var useStyles$s = styles$1.makeStyles(function (theme) {
    return {
      rangeIntervalDay: {
        '&:first-child $rangeIntervalDayPreview': _objectSpread$8({}, startBorderStyle, {
          borderLeftColor: theme.palette.divider
        }),
        '&:last-child $rangeIntervalDayPreview': _objectSpread$8({}, endBorderStyle, {
          borderRightColor: theme.palette.divider
        })
      },
      rangeIntervalDayHighlight: {
        borderRadius: 0,
        color: theme.palette.primary.contrastText,
        backgroundColor: styles$1.fade(theme.palette.primary.light, 0.6),
        '&:first-child': startBorderStyle,
        '&:last-child': endBorderStyle
      },
      rangeIntervalDayHighlightStart: _objectSpread$8({}, startBorderStyle, {
        paddingLeft: 0,
        marginLeft: DAY_MARGIN / 2
      }),
      rangeIntervalDayHighlightEnd: _objectSpread$8({}, endBorderStyle, {
        paddingRight: 0,
        marginRight: DAY_MARGIN / 2
      }),
      day: {
        // Required to overlap preview border
        transform: 'scale(1.1)',
        '& > *': {
          transform: 'scale(0.9)'
        }
      },
      dayOutsideRangeInterval: {
        '&:hover': {
          border: "1px solid ".concat(theme.palette.grey[500])
        }
      },
      dayInsideRangeInterval: {
        color: theme.palette.getContrastText(styles$1.fade(theme.palette.primary.light, 0.6))
      },
      notSelectedDate: {
        backgroundColor: 'transparent'
      },
      rangeIntervalPreview: {
        // replace default day component margin with transparent border to avoid jumping on preview
        border: '2px solid transparent'
      },
      rangeIntervalDayPreview: {
        borderRadius: 0,
        border: "2px dashed ".concat(theme.palette.divider),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        '&$rangeIntervalDayPreviewStart': _objectSpread$8({
          borderLeftColor: theme.palette.divider
        }, startBorderStyle),
        '&$rangeIntervalDayPreviewEnd': _objectSpread$8({
          borderRightColor: theme.palette.divider
        }, endBorderStyle)
      },
      rangeIntervalDayPreviewStart: {},
      rangeIntervalDayPreviewEnd: {}
    };
  }, {
    name: 'MuiPickersDateRangeDay'
  });
  var PureDateRangeDay = function PureDateRangeDay(_ref) {
    var day = _ref.day,
        className = _ref.className,
        selected = _ref.selected,
        isPreviewing = _ref.isPreviewing,
        isStartOfPreviewing = _ref.isStartOfPreviewing,
        isEndOfPreviewing = _ref.isEndOfPreviewing,
        isHighlighting = _ref.isHighlighting,
        isEndOfHighlighting = _ref.isEndOfHighlighting,
        isStartOfHighlighting = _ref.isStartOfHighlighting,
        inCurrentMonth = _ref.inCurrentMonth,
        other = _objectWithoutProperties(_ref, ["day", "className", "selected", "isPreviewing", "isStartOfPreviewing", "isEndOfPreviewing", "isHighlighting", "isEndOfHighlighting", "isStartOfHighlighting", "inCurrentMonth"]);

    var utils = useUtils();
    var classes = useStyles$s();
    var isEndOfMonth = utils.isSameDay(day, utils.endOfMonth(day));
    var isStartOfMonth = utils.isSameDay(day, utils.startOfMonth(day));
    var shouldRenderHighlight = isHighlighting && inCurrentMonth;
    var shouldRenderPreview = isPreviewing && inCurrentMonth;
    return React.createElement("div", {
      "data-mui-test": shouldRenderHighlight ? 'DateRangeHighlight' : undefined,
      className: clsx(classes.rangeIntervalDay, (isEndOfHighlighting || isEndOfMonth) && classes.rangeIntervalDayHighlightEnd, (isStartOfHighlighting || isStartOfMonth) && classes.rangeIntervalDayHighlightStart, shouldRenderHighlight && classes.rangeIntervalDayHighlight)
    }, React.createElement("div", {
      "data-mui-test": shouldRenderPreview ? 'DateRangePreview' : undefined,
      className: clsx(classes.rangeIntervalPreview, (isEndOfPreviewing || isEndOfMonth) && classes.rangeIntervalDayPreviewEnd, (isStartOfPreviewing || isStartOfMonth) && classes.rangeIntervalDayPreviewStart, shouldRenderPreview && classes.rangeIntervalDayPreview)
    }, React.createElement(Day, _extends({
      allowKeyboardControl: false,
      disableMargin: true
    }, other, {
      day: day,
      selected: selected,
      inCurrentMonth: inCurrentMonth,
      "data-mui-test": "DateRangeDay",
      className: clsx(classes.day, className, !selected && [classes.notSelectedDate, isHighlighting && classes.dayInsideRangeInterval], !isHighlighting && classes.dayOutsideRangeInterval)
    }))));
  };
  PureDateRangeDay.displayName = 'DateRangeDay';
  var DateRangeDay = React.memo(PureDateRangeDay, function (prevProps, nextProps) {
    return prevProps.isHighlighting === nextProps.isHighlighting && prevProps.isEndOfHighlighting === nextProps.isEndOfHighlighting && prevProps.isStartOfHighlighting === nextProps.isStartOfHighlighting && prevProps.isPreviewing === nextProps.isPreviewing && prevProps.isEndOfPreviewing === nextProps.isEndOfPreviewing && prevProps.isStartOfPreviewing === nextProps.isStartOfPreviewing && areDayPropsEqual(prevProps, nextProps);
  });

  var onlyDateView = ['date'];
  var DateRangePickerViewMobile = function DateRangePickerViewMobile(_ref) {
    var date = _ref.date,
        changeMonth = _ref.changeMonth,
        leftArrowButtonProps = _ref.leftArrowButtonProps,
        leftArrowButtonText = _ref.leftArrowButtonText,
        leftArrowIcon = _ref.leftArrowIcon,
        rightArrowButtonProps = _ref.rightArrowButtonProps,
        rightArrowButtonText = _ref.rightArrowButtonText,
        rightArrowIcon = _ref.rightArrowIcon,
        onChange = _ref.onChange,
        other = _objectWithoutProperties(_ref, ["date", "changeMonth", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "onChange"]);

    var utils = useUtils();
    return React.createElement(React.Fragment, null, React.createElement(CalendarHeader, _extends({
      view: "date",
      views: onlyDateView,
      changeView: function changeView() {
        return {};
      },
      onMonthChange: changeMonth,
      leftArrowButtonProps: leftArrowButtonProps,
      leftArrowButtonText: leftArrowButtonText,
      leftArrowIcon: leftArrowIcon,
      rightArrowButtonProps: rightArrowButtonProps,
      rightArrowButtonText: rightArrowButtonText,
      rightArrowIcon: rightArrowIcon
    }, other)), React.createElement(Calendar, _extends({}, other, {
      date: date,
      onChange: onChange,
      renderDay: function renderDay(day, _, DayProps) {
        return React.createElement(DateRangeDay, _extends({
          isPreviewing: false,
          isStartOfPreviewing: false,
          isEndOfPreviewing: false,
          isHighlighting: isWithinRange(utils, day, date),
          isStartOfHighlighting: isStartOfRange(utils, day, date),
          isEndOfHighlighting: isEndOfRange(utils, day, date)
        }, DayProps));
      }
    })));
  };

  var useStyles$t = styles$1.makeStyles(function (theme) {
    return {
      dateRangeContainer: {
        display: 'flex',
        flexDirection: 'row'
      },
      rangeCalendarContainer: {
        '&:not(:last-child)': {
          borderRight: "2px solid ".concat(theme.palette.divider)
        }
      },
      calendar: {
        minWidth: 312,
        minHeight: 288
      },
      arrowSwitcher: {
        padding: '16px 16px 8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    };
  }, {
    name: 'MuiPickersDesktopDateRangeCalendar'
  });

  function getCalendarsArray(calendars) {
    switch (calendars) {
      case 1:
        return [0];

      case 2:
        return [0, 0];

      case 3:
        return [0, 0, 0];
      // this will not work in IE11, but allows to support any amount of calendars

      default:
        return new Array(calendars).fill(0);
    }
  }

  var DateRangePickerViewDesktop = function DateRangePickerViewDesktop(_ref) {
    var date = _ref.date,
        _ref$calendars = _ref.calendars,
        calendars = _ref$calendars === void 0 ? 2 : _ref$calendars,
        changeMonth = _ref.changeMonth,
        leftArrowButtonProps = _ref.leftArrowButtonProps,
        leftArrowButtonText = _ref.leftArrowButtonText,
        leftArrowIcon = _ref.leftArrowIcon,
        rightArrowButtonProps = _ref.rightArrowButtonProps,
        rightArrowButtonText = _ref.rightArrowButtonText,
        rightArrowIcon = _ref.rightArrowIcon,
        onChange = _ref.onChange,
        disableFuture = _ref.disableFuture,
        disablePast = _ref.disablePast,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
        currentMonth = _ref.currentMonth,
        other = _objectWithoutProperties(_ref, ["date", "calendars", "changeMonth", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "onChange", "disableFuture", "disablePast", "minDate", "maxDate", "currentlySelectingRangeEnd", "currentMonth"]);

    var utils = useUtils();
    var classes = useStyles$t();

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        rangePreviewDay = _React$useState2[0],
        setRangePreviewDay = _React$useState2[1];

    var isNextMonthDisabled = useNextMonthDisabled(currentMonth, {
      disableFuture: disableFuture,
      maxDate: maxDate
    });
    var isPreviousMonthDisabled = usePreviousMonthDisabled(currentMonth, {
      disablePast: disablePast,
      minDate: minDate
    });
    var previewingRange = calculateRangePreview({
      utils: utils,
      range: date,
      newDate: rangePreviewDay,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd
    });
    var handleDayChange = React.useCallback(function (day) {
      setRangePreviewDay(null);
      onChange(day);
    }, [onChange]);

    var handlePreviewDayChange = function handlePreviewDayChange(newPreviewRequest) {
      if (!isWithinRange(utils, newPreviewRequest, date)) {
        setRangePreviewDay(newPreviewRequest);
      } else {
        setRangePreviewDay(null);
      }
    };

    var CalendarTransitionProps = React.useMemo(function () {
      return {
        onMouseLeave: function onMouseLeave() {
          return setRangePreviewDay(null);
        }
      };
    }, []);
    var selectNextMonth = React.useCallback(function () {
      changeMonth(utils.getNextMonth(currentMonth));
    }, [changeMonth, currentMonth, utils]);
    var selectPreviousMonth = React.useCallback(function () {
      changeMonth(utils.getPreviousMonth(currentMonth));
    }, [changeMonth, currentMonth, utils]);
    return React.createElement("div", {
      className: classes.dateRangeContainer
    }, getCalendarsArray(calendars).map(function (_, index) {
      var monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
      return React.createElement("div", {
        key: index,
        className: classes.rangeCalendarContainer
      }, React.createElement(ArrowSwitcher, {
        className: classes.arrowSwitcher,
        onLeftClick: selectPreviousMonth,
        onRightClick: selectNextMonth,
        isLeftHidden: index !== 0,
        isRightHidden: index !== calendars - 1,
        isLeftDisabled: isPreviousMonthDisabled,
        isRightDisabled: isNextMonthDisabled,
        leftArrowButtonProps: leftArrowButtonProps,
        leftArrowButtonText: leftArrowButtonText,
        leftArrowIcon: leftArrowIcon,
        rightArrowButtonProps: rightArrowButtonProps,
        rightArrowButtonText: rightArrowButtonText,
        rightArrowIcon: rightArrowIcon,
        text: utils.format(monthOnIteration, 'monthAndYear')
      }), React.createElement(Calendar, _extends({}, other, {
        key: index,
        date: date,
        minDate: minDate,
        maxDate: maxDate,
        disablePast: disablePast,
        disableFuture: disableFuture,
        className: classes.calendar,
        onChange: handleDayChange,
        currentMonth: monthOnIteration,
        TransitionProps: CalendarTransitionProps,
        renderDay: function renderDay(day, _, DayProps) {
          return React.createElement(DateRangeDay, _extends({
            isPreviewing: isWithinRange(utils, day, previewingRange),
            isStartOfPreviewing: isStartOfRange(utils, day, previewingRange),
            isEndOfPreviewing: isEndOfRange(utils, day, previewingRange),
            isHighlighting: isWithinRange(utils, day, date),
            isStartOfHighlighting: isStartOfRange(utils, day, date),
            isEndOfHighlighting: isEndOfRange(utils, day, date),
            onMouseEnter: function onMouseEnter() {
              return handlePreviewDayChange(day);
            }
          }, DayProps));
        }
      })));
    }));
  };

  function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var DateRangePickerView = function DateRangePickerView(_ref) {
    var open = _ref.open,
        _ref$calendars = _ref.calendars,
        calendars = _ref$calendars === void 0 ? 2 : _ref$calendars,
        currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
        date = _ref.date,
        _ref$disableAutoMonth = _ref.disableAutoMonthSwitching,
        disableAutoMonthSwitching = _ref$disableAutoMonth === void 0 ? false : _ref$disableAutoMonth,
        disableFuture = _ref.disableFuture,
        disableHighlightToday = _ref.disableHighlightToday,
        disablePast = _ref.disablePast,
        _ref$maxDate = _ref.maxDate,
        unparsedMaxDate = _ref$maxDate === void 0 ? new Date('2100-01-01') : _ref$maxDate,
        _ref$minDate = _ref.minDate,
        unparsedMinDate = _ref$minDate === void 0 ? new Date('1900-01-01') : _ref$minDate,
        onDateChange = _ref.onDateChange,
        onMonthChange = _ref.onMonthChange,
        _ref$reduceAnimations = _ref.reduceAnimations,
        reduceAnimations = _ref$reduceAnimations === void 0 ? defaultReduceAnimations : _ref$reduceAnimations,
        setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
        shouldDisableDate = _ref.shouldDisableDate,
        toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
        isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
        showToolbar = _ref.showToolbar,
        startText = _ref.startText,
        endText = _ref.endText,
        DateInputProps = _ref.DateInputProps,
        other = _objectWithoutProperties(_ref, ["open", "calendars", "currentlySelectingRangeEnd", "date", "disableAutoMonthSwitching", "disableFuture", "disableHighlightToday", "disablePast", "maxDate", "minDate", "onDateChange", "onMonthChange", "reduceAnimations", "setCurrentlySelectingRangeEnd", "shouldDisableDate", "toggleMobileKeyboardView", "isMobileKeyboardViewOpen", "showToolbar", "startText", "endText", "DateInputProps"]);

    var now = useNow();
    var utils = useUtils();
    var wrapperVariant = React.useContext(WrapperVariantContext);
    var minDate = useParsedDate(unparsedMinDate);
    var maxDate = useParsedDate(unparsedMaxDate);

    var _date = _slicedToArray(date, 2),
        start = _date[0],
        end = _date[1];

    var _useCalendarState = useCalendarState({
      date: start || end || now,
      minDate: minDate,
      maxDate: maxDate,
      reduceAnimations: reduceAnimations,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onMonthChange: onMonthChange,
      shouldDisableDate: shouldDisableDate,
      disableSwitchToMonthOnDayFocus: true
    }),
        changeMonth = _useCalendarState.changeMonth,
        calendarState = _useCalendarState.calendarState,
        isDateDisabled = _useCalendarState.isDateDisabled,
        onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd,
        changeFocusedDay = _useCalendarState.changeFocusedDay;

    var toShowToolbar = showToolbar !== null && showToolbar !== void 0 ? showToolbar : wrapperVariant !== 'desktop';

    var scrollToDayIfNeeded = function scrollToDayIfNeeded(day) {
      var displayingMonthRange = wrapperVariant === 'mobile' ? 0 : calendars - 1;
      var currentMonthNumber = utils.getMonth(calendarState.currentMonth);
      var requestedMonthNumber = utils.getMonth(day);

      if (requestedMonthNumber < currentMonthNumber || requestedMonthNumber > currentMonthNumber + displayingMonthRange) {
        var newMonth = currentlySelectingRangeEnd === 'start' ? start : // If need to focus end, scroll to the state when "end" is displaying in the last calendar
        utils.addMonths(end, -displayingMonthRange);
        changeMonth(newMonth);
      }
    };

    React.useEffect(function () {
      if (disableAutoMonthSwitching || !open) {
        return;
      }

      if (currentlySelectingRangeEnd === 'start' && start === null || currentlySelectingRangeEnd === 'end' && end === null) {
        return;
      }

      scrollToDayIfNeeded(currentlySelectingRangeEnd === 'start' ? start : end);
    }, [currentlySelectingRangeEnd, date]); // eslint-disable-line

    var handleChange = React.useCallback(function (newDate) {
      var _calculateRangeChange = calculateRangeChange({
        newDate: newDate,
        utils: utils,
        range: date,
        currentlySelectingRangeEnd: currentlySelectingRangeEnd
      }),
          nextSelection = _calculateRangeChange.nextSelection,
          newRange = _calculateRangeChange.newRange;

      setCurrentlySelectingRangeEnd(nextSelection);
      var isFullRangeSelected = currentlySelectingRangeEnd === 'end' && isRangeValid(utils, newRange);
      onDateChange(newRange, wrapperVariant, isFullRangeSelected ? FORCE_FINISH_PICKER : true);
    }, [currentlySelectingRangeEnd, date, onDateChange, setCurrentlySelectingRangeEnd, utils, wrapperVariant]);

    var renderView = function renderView() {
      var sharedCalendarProps = _objectSpread$9({
        date: date,
        isDateDisabled: isDateDisabled,
        changeFocusedDay: changeFocusedDay,
        onChange: handleChange,
        reduceAnimations: reduceAnimations,
        disableHighlightToday: disableHighlightToday,
        onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
        changeMonth: changeMonth,
        currentlySelectingRangeEnd: currentlySelectingRangeEnd,
        disableFuture: disableFuture,
        disablePast: disablePast,
        minDate: minDate,
        maxDate: maxDate
      }, calendarState, {}, other);

      switch (wrapperVariant) {
        case 'desktop':
          {
            return React.createElement(DateRangePickerViewDesktop, _extends({
              calendars: calendars
            }, sharedCalendarProps));
          }

        default:
          {
            return React.createElement(DateRangePickerViewMobile, sharedCalendarProps);
          }
      }
    };

    return React.createElement(React.Fragment, null, toShowToolbar && React.createElement(DateRangePickerToolbar, {
      date: date,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText
    }), isMobileKeyboardViewOpen ? React.createElement(MobileKeyboardInputView, null, React.createElement(DateRangePickerInput, _extends({
      disableOpenPicker: true,
      ignoreInvalidInputs: true,
      startText: startText,
      endText: endText,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd
    }, DateInputProps))) : renderView());
  };

  function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function parseRangeInputValue(now, utils, _ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? [null, null] : _ref$value,
        defaultHighlight = _ref.defaultHighlight;
    return value.map(function (date) {
      return date === null ? null : utils.startOfDay(parsePickerInputValue(now, utils, {
        value: date,
        defaultHighlight: defaultHighlight
      }));
    });
  }
  function makeRangePicker(Wrapper) {
    var WrapperComponent = makeWrapperComponent(Wrapper, {
      KeyboardDateInputComponent: DateRangePickerInput,
      PureDateInputComponent: DateRangePickerInput
    });

    function RangePickerWithStateAndWrapper(_ref2) {
      var calendars = _ref2.calendars,
          minDate = _ref2.minDate,
          maxDate = _ref2.maxDate,
          disablePast = _ref2.disablePast,
          disableFuture = _ref2.disableFuture,
          shouldDisableDate = _ref2.shouldDisableDate,
          showDaysOutsideCurrentMonth = _ref2.showDaysOutsideCurrentMonth,
          onMonthChange = _ref2.onMonthChange,
          disableHighlightToday = _ref2.disableHighlightToday,
          reduceAnimations = _ref2.reduceAnimations,
          value = _ref2.value,
          onChange = _ref2.onChange,
          _ref2$mask = _ref2.mask,
          mask = _ref2$mask === void 0 ? '__/__/____' : _ref2$mask,
          _ref2$variant = _ref2.variant,
          variant = _ref2$variant === void 0 ? 'outlined' : _ref2$variant,
          _ref2$startText = _ref2.startText,
          startText = _ref2$startText === void 0 ? 'Start' : _ref2$startText,
          _ref2$endText = _ref2.endText,
          endText = _ref2$endText === void 0 ? 'End' : _ref2$endText,
          passedInputFormat = _ref2.inputFormat,
          restPropsForTextField = _objectWithoutProperties(_ref2, ["calendars", "minDate", "maxDate", "disablePast", "disableFuture", "shouldDisableDate", "showDaysOutsideCurrentMonth", "onMonthChange", "disableHighlightToday", "reduceAnimations", "value", "onChange", "mask", "variant", "startText", "endText", "inputFormat"]);

      var utils = useUtils();

      var _React$useState = React.useState('start'),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          currentlySelectingRangeEnd = _React$useState2[0],
          setCurrentlySelectingRangeEnd = _React$useState2[1];

      var pickerStateProps = _objectSpread$a({}, restPropsForTextField, {
        value: value,
        onChange: onChange,
        inputFormat: passedInputFormat || utils.formats.keyboardDate
      });

      var _usePickerState = usePickerState(pickerStateProps, {
        parseInput: parseRangeInputValue,
        areValuesEqual: function areValuesEqual(a, b) {
          return utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1]);
        },
        validateInput: function validateInput() {
          return undefined;
        },
        emptyValue: [null, null]
      }),
          pickerProps = _usePickerState.pickerProps,
          inputProps = _usePickerState.inputProps,
          wrapperProps = _usePickerState.wrapperProps;

      var DateInputProps = _objectSpread$a({}, inputProps, {}, restPropsForTextField, {
        currentlySelectingRangeEnd: currentlySelectingRangeEnd,
        setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
        startText: startText,
        endText: endText,
        mask: mask,
        variant: variant
      });

      return React.createElement(WrapperComponent, _extends({
        wrapperProps: wrapperProps,
        inputProps: DateInputProps
      }, restPropsForTextField), React.createElement(DateRangePickerView, _extends({
        open: wrapperProps.open,
        DateInputProps: DateInputProps,
        calendars: calendars,
        minDate: minDate,
        maxDate: maxDate,
        disablePast: disablePast,
        disableFuture: disableFuture,
        shouldDisableDate: shouldDisableDate,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        onMonthChange: onMonthChange,
        disableHighlightToday: disableHighlightToday,
        reduceAnimations: reduceAnimations,
        currentlySelectingRangeEnd: currentlySelectingRangeEnd,
        setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
        startText: startText,
        endText: endText
      }, pickerProps)));
    }

    return React.forwardRef(function (props, ref) {
      return React.createElement(RangePickerWithStateAndWrapper, _extends({}, props, {
        forwardedRef: ref
      }));
    });
  } // TODO replace with new export type syntax

  var DateRangePicker = makeRangePicker(ResponsivePopperWrapper);
  var DesktopDateRangePicker = makeRangePicker(DesktopPopperWrapper);
  var MobileDateRangePicker = makeRangePicker(MobileWrapper);
  var StaticDateRangePicker = makeRangePicker(StaticWrapper);

  exports.Calendar = Calendar;
  exports.CalendarView = CalendarView;
  exports.Clock = Clock;
  exports.ClockView = ClockView;
  exports.DatePicker = DatePicker;
  exports.DateRangePicker = DateRangePicker;
  exports.DateTimePicker = DateTimePicker;
  exports.Day = Day;
  exports.DesktopDatePicker = DesktopDatePicker;
  exports.DesktopDateRangePicker = DesktopDateRangePicker;
  exports.DesktopDateTimePicker = DesktopDateTimePicker;
  exports.DesktopTimePicker = DesktopTimePicker;
  exports.LocalizationProvider = LocalizationProvider;
  exports.MobileDatePicker = MobileDatePicker;
  exports.MobileDateRangePicker = MobileDateRangePicker;
  exports.MobileDateTimePicker = MobileDateTimePicker;
  exports.MobileTimePicker = MobileTimePicker;
  exports.MuiPickersContext = MuiPickersAdapterContext;
  exports.Picker = Picker;
  exports.StaticDatePicker = StaticDatePicker;
  exports.StaticDateRangePicker = StaticDateRangePicker;
  exports.StaticDateTimePicker = StaticDateTimePicker;
  exports.StaticTimePicker = StaticTimePicker;
  exports.TimePicker = TimePicker;
  exports.TimePickerView = ClockView$1;
  exports.defaultReduceAnimations = defaultReduceAnimations;
  exports.getTextFieldAriaText = getTextFieldAriaText$1;
  exports.makePickerWithState = makePickerWithStateAndWrapper;
  exports.makeRangePicker = makeRangePicker;
  exports.parseRangeInputValue = parseRangeInputValue;
  exports.usePickerState = usePickerState;
  exports.useStyles = useStyles$l;
  exports.useUtils = useUtils;
  exports.validate = validateDateValue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
