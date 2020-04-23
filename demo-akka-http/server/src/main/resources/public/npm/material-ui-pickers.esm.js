import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React__default, { createContext, useMemo, createElement, useContext, useRef, useState, useEffect, useLayoutEffect, useCallback, useDebugValue, Component, Fragment, memo, forwardRef, useReducer, cloneElement } from 'react';
import { func, oneOfType, object, string, node, number, instanceOf, oneOf, bool } from 'prop-types';
import clsx from 'clsx';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { createSvgIcon } from '@material-ui/core/utils';
import { makeStyles, useTheme, styled, withStyles, createStyles, fade } from '@material-ui/core/styles';
import _typeof from '@babel/runtime/helpers/esm/typeof';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Rifm } from 'rifm';
import Popover from '@material-ui/core/Popover';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import TrapFocus from '@material-ui/core/Modal/TrapFocus';
import Popper from '@material-ui/core/Popper';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import ButtonBase from '@material-ui/core/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Fade from '@material-ui/core/Fade';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

var MuiPickersAdapterContext = createContext(null);
var LocalizationProvider = function LocalizationProvider(_ref) {
  var Utils = _ref.dateAdapter,
      children = _ref.children,
      locale = _ref.locale,
      libFormats = _ref.dateFormats,
      libInstance = _ref.dateLibInstance;
  var utils = useMemo(function () {
    return new Utils({
      locale: locale,
      formats: libFormats,
      instance: libInstance
    });
  }, [Utils, locale, libFormats, libInstance]);
  return createElement(MuiPickersAdapterContext.Provider, {
    value: utils,
    children: children
  });
};
process.env.NODE_ENV !== "production" ? LocalizationProvider.propTypes = {
  dateAdapter: func.isRequired,
  locale: oneOfType([object, string]),

  /**
   * Your component tree.
   */
  children: node.isRequired
} : void 0;

// TODO uncomment when syntax will be allowed by next babel
function checkUtils(utils)
/* : asserts utils is MuiPickersUtils */
{
  if (!utils) {
    throw new Error('Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
  }
}

function useUtils() {
  var utils = useContext(MuiPickersAdapterContext);
  checkUtils(utils);
  return utils;
}
function useNow() {
  var utils = useUtils();
  var now = useRef(utils.date());
  return now.current;
}

var PenIcon = createSvgIcon(React__default.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'PenIcon');

var KeyboardIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'KeyboardIcon');

var useStyles = makeStyles(function (theme) {
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
  return createElement(Toolbar, _extends({
    "data-mui-test": "picker-toolbar",
    className: clsx(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
  }, other), createElement(Typography, {
    "data-mui-test": "picker-toolbar-title",
    color: "inherit",
    variant: "overline"
  }, toolbarTitle), createElement(Grid, {
    container: true,
    justify: "space-between",
    className: classes.dateTitleContainer,
    direction: isLandscape ? landscapeDirection : 'row',
    alignItems: isLandscape ? 'flex-start' : 'flex-end'
  }, children, createElement(IconButton, {
    onClick: toggleMobileKeyboardView,
    className: penIconClassName,
    color: "inherit",
    "data-mui-test": "toggle-mobile-keyboard-view",
    "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen)
  }, isMobileKeyboardViewOpen ? createElement(KeyboardIcon, {
    color: "inherit"
  }) : createElement(PenIcon, {
    color: "inherit"
  }))));
};

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

var useStyles$1 = makeStyles({
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
  var dateText = useMemo(function () {
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
  return createElement(PickerToolbar, {
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: isLandscape,
    penIconClassName: classes.penIcon
  }, createElement(Typography, {
    variant: "h4",
    children: dateText,
    "data-mui-test": "datepicker-toolbar-date",
    align: isLandscape ? 'left' : 'center',
    className: clsx(isLandscape && classes.dateTitleLandscape)
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var date = oneOfType([object, string, number, instanceOf(Date)]);
var datePickerView = oneOf(['year', 'month', 'day']);
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

var useStyles$2 = makeStyles({
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
  return createElement(Dialog, _extends({
    onClose: onDismiss,
    classes: {
      container: classes.dialogContainer,
      paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
    }
  }, other), createElement(DialogContent, {
    children: children,
    className: classes.dialog
  }), createElement(DialogActions, {
    className: clsx((clearable || showTodayButton) && classes.withAdditionalAction)
  }, clearable && createElement(Button, {
    "data-mui-test": "clear-action-button",
    color: "primary",
    onClick: onClear
  }, clearLabel), showTodayButton && createElement(Button, {
    "data-mui-test": "today-action-button",
    color: "primary",
    onClick: onSetToday
  }, todayLabel), cancelLabel && createElement(Button, {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), okLabel && createElement(Button, {
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

  if (!isMaskValid && process.env.NODE_ENV !== 'production') {
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
  var PureDateInputProps = useMemo(function () {
    return _objectSpread$1({}, InputProps, {
      readOnly: true
    });
  }, [InputProps]);
  var inputValue = getDisplayDate(rawValue, utils, {
    inputFormat: inputFormat,
    emptyInputText: emptyLabel
  });
  return createElement(TextFieldComponent, _extends({
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
var WrapperVariantContext = createContext(null);

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

  return createElement(WrapperVariantContext.Provider, {
    value: "mobile"
  }, createElement(PureDateInputComponent, _extends({
    readOnly: true
  }, other, DateInputProps)), createElement(ModalDialog, _extends({
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
process.env.NODE_ENV !== "production" ? MobileWrapper.propTypes = {
  okLabel: node,
  cancelLabel: node,
  clearLabel: node,
  clearable: bool,
  todayLabel: node,
  showTodayButton: bool,
  DialogProps: object
} : void 0;
MobileWrapper.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  todayLabel: 'Today',
  clearable: false,
  showTodayButton: false
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
      keyboardIcon = _ref$keyboardIcon === void 0 ? createElement(KeyboardIcon, null) : _ref$keyboardIcon,
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

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isFocused = _React$useState2[0],
      setIsFocused = _React$useState2[1];

  var getInputValue = function getInputValue() {
    return getDisplayDate(rawValue, utils, {
      inputFormat: inputFormat,
      emptyInputText: emptyLabel
    });
  };

  var _React$useState3 = useState(getInputValue()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      innerInputValue = _React$useState4[0],
      setInnerInputValue = _React$useState4[1];

  var _React$useMemo = useMemo(function () {
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


  var formatter = useMemo(function () {
    return shouldUseMaskedInput && mask ? maskedDateFormatter(mask, maskChar, acceptRegex) : function (st) {
      return st;
    };
  }, [shouldUseMaskedInput, mask, maskChar, acceptRegex]);
  useEffect(function () {
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
    InputProps: _objectSpread$2({}, InputProps, _defineProperty({}, "".concat(adornmentPosition, "Adornment"), hideOpenPickerButton ? undefined : createElement(InputAdornment, _extends({
      position: adornmentPosition
    }, InputAdornmentProps), createElement(IconButton, _extends({
      edge: adornmentPosition,
      "data-mui-test": "open-picker-from-keyboard",
      disabled: disabled,
      "aria-label": getOpenDialogAriaText(rawValue, utils)
    }, KeyboardButtonProps, {
      onClick: onOpen
    }), keyboardIcon))))
  });

  if (!shouldUseMaskedInput) {
    return createElement(TextFieldComponent, _extends({
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

  return createElement(Rifm, {
    key: mask,
    value: innerInputValue || '',
    onChange: handleChange,
    accept: acceptRegex,
    format: rifmFormatter || formatter
  }, function (_ref2) {
    var onChange = _ref2.onChange,
        value = _ref2.value;
    return createElement(TextFieldComponent, _extends({
      value: value,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur
    }, inputProps));
  });
};

var useStyles$3 = makeStyles({
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

  var ref = useRef(null);
  var classes = useStyles$3();
  return createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, createElement(KeyboardDateInputComponent, _extends({}, other, DateInputProps, {
    containerRef: ref
  })), createElement(Popover, _extends({
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
process.env.NODE_ENV !== "production" ? DesktopWrapper.propTypes = {
  onOpen: func,
  onClose: func,
  PopoverProps: object
} : void 0;

var useIsomorphicEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useGlobalKeyDown(active, keyHandlers) {
  var keyHandlersRef = useRef(keyHandlers);
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

var useStyles$4 = makeStyles(function (theme) {
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
  var inputRef = useRef(null);
  var popperRef = useRef(null);
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

  return createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, createElement(KeyboardDateInputComponent, _extends({}, other, DateInputProps, {
    onBlur: createDelegatedEventHandler(handleBlur, DateInputProps.onBlur),
    containerRef: inputRef
  })), createElement(Popper, _extends({
    transition: true,
    placement: "bottom",
    open: open,
    anchorEl: inputRef.current
  }, PopperProps, {
    className: clsx(classes.popper, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className)
  }), function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return createElement(TrapFocus, {
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
    }, createElement(TransitionComponent, _extends({}, TransitionProps, {
      timeout: 350
    }), createElement(Paper, {
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

    var theme = useTheme();
    var isDesktop = useMediaQuery(theme.breakpoints.up(desktopModeBreakpoint));
    return isDesktop ? createElement(DesktopWrapperComponent, _extends({
      PopperProps: PopperProps,
      TransitionComponent: TransitionComponent,
      PopoverProps: PopoverProps
    }, other)) : createElement(MobileWrapperComponent, _extends({
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
  var isControllingOpenProp = useRef(typeof open === 'boolean').current;

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      _open = _React$useState2[0],
      _setIsOpen = _React$useState2[1]; // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)


  useEffect(function () {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }

      _setIsOpen(open);
    }
  }, [isControllingOpenProp, open]);
  var setIsOpen = useCallback(function (newIsOpen) {
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

  var _useState = useState(date),
      _useState2 = _slicedToArray(_useState, 2),
      pickerDate = _useState2[0],
      setPickerDate = _useState2[1]; // Mobile keyboard view is a special case.
  // When it's open picker should work like closed, cause we are just showing text field


  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMobileKeyboardViewOpen = _useState4[0],
      setMobileKeyboardViewOpen = _useState4[1];

  var _useOpenState = useOpenState(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  useEffect(function () {
    if (!valueManager.areValuesEqual(pickerDate, date)) {
      setPickerDate(date);
    }
  }, [value]); // eslint-disable-line

  var acceptDate = useCallback(function (acceptedDate, needClosePicker) {
    onChange(acceptedDate);

    if (needClosePicker) {
      setIsOpen(false);

      if (onAccept) {
        onAccept(acceptedDate);
      }
    }
  }, [onAccept, onChange, setIsOpen]);
  var wrapperProps = useMemo(function () {
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
  var pickerProps = useMemo(function () {
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
  useEffect(function () {
    if (onError) {
      onError(validationError, value);
    }
  }, [onError, validationError, value]);
  var inputProps = useMemo(function () {
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
  useDebugValue(pickerState, function () {
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
      return createElement(MuiPickersAdapterContext.Provider, {
        value: dateAdapter
      }, createElement(Component, other));
    }

    return createElement(Component, other);
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

  var _React$useState = useState(openTo && arrayIncludes(views, openTo) ? openTo : views[0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openView = _React$useState2[0],
      _setOpenView = _React$useState2[1];

  var setOpenView = useCallback(function () {
    if (isMobileKeyboardViewOpen) {
      toggleMobileKeyboardView();
    }

    _setOpenView.apply(void 0, arguments);
  }, [isMobileKeyboardViewOpen, toggleMobileKeyboardView]);
  var previousView = views[views.indexOf(openView) - 1];
  var nextView = views[views.indexOf(openView) + 1];
  var openNext = useCallback(function () {
    if (nextView) {
      setOpenView(nextView);
    }
  }, [nextView, setOpenView]);
  var handleChangeAndOpenNext = useCallback(function (date, isFinishedSelectionInCurrentView) {
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
  var _React$useState = useState(getOrientation()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  var eventHandler = useCallback(function () {
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

var MobileKeyboardInputView = styled('div')({
  padding: '16px 24px'
});

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

      return createElement("div", _extends({}, other, {
        style: this.getAngleStyle(),
        className: clsx(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
      }), createElement("div", {
        className: clsx(classes.thumb, hasSelected && classes.noPoint)
      }));
    }
  }]);

  return ClockPointer;
}(Component);

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
  return createStyles({
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
var ClockPointer$1 = withStyles(styles, {
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

var useStyles$5 = makeStyles(function (theme) {
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
  var wrapperVariant = useContext(WrapperVariantContext);
  var isMoving = useRef(false);
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

  var hasSelected = useMemo(function () {
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
  return createElement("div", {
    className: classes.container
  }, createElement("div", {
    className: classes.clock
  }, createElement("div", {
    role: "menu",
    tabIndex: -1,
    className: classes.squareMask,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove
  }), !isSelectedTimeDisabled && createElement(Fragment, null, createElement("div", {
    className: classes.pin
  }), createElement(ClockPointer$1, {
    type: type,
    value: value,
    isInner: isPointerInner,
    hasSelected: hasSelected,
    "aria-live": "polite",
    "aria-label": "Selected time ".concat(utils.format(date, 'fullTime'))
  })), numbersElementsArray), ampm && (wrapperVariant === 'desktop' || ampmInClock) && createElement(Fragment, null, createElement(IconButton, {
    "data-mui-test": "in-clock-am-btn",
    onClick: function onClick() {
      return handleMeridiemChange('am');
    },
    className: clsx(classes.amButton, meridiemMode === 'am' && classes.meridiemButtonSelected)
  }, createElement(Typography, {
    variant: "caption"
  }, "AM")), createElement(IconButton, {
    "data-mui-test": "in-clock-pm-btn",
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    },
    className: clsx(classes.pmButton, meridiemMode === 'pm' && classes.meridiemButtonSelected)
  }, createElement(Typography, {
    variant: "caption"
  }, "PM"))));
};
Clock.defaultProps = {
  ampm: bool,
  minutesStep: number
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
var useStyles$6 = makeStyles(function (theme) {
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
      color: fade(clockNumberColor, 0.2)
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
  var ref = useRef(null);
  var classes = useStyles$6();
  var className = clsx(classes.clockNumber, selected && classes.clockNumberSelected, disabled && classes.clockNumberDisabled);
  var transformStyle = useMemo(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  useEffect(function () {
    if (selected && ref.current) {
      ref.current.focus();
    }
  }, [selected]);
  return createElement(ButtonBase, {
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
  }, createElement(Typography, {
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
    hourNumbers.push(createElement(ClockNumber, {
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

    return createElement(ClockNumber, {
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

var useStyles$7 = makeStyles(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
  return {
    toolbarTxt: {
      transition: theme.transitions.create('color'),
      color: fade(textColor, 0.54)
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
  return createElement(Typography, _extends({
    children: label,
    className: clsx(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
  }, other));
};

var useStyles$8 = makeStyles({
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
  return createElement(Button, _extends({
    variant: "text",
    className: clsx(classes.toolbarBtn, className)
  }, other), createElement(ToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    value: label,
    selected: selected
  }));
};
ToolbarButton.displayName = 'ToolbarButton';

var useStyles$9 = makeStyles({
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
  var handleMeridiemChange = useCallback(function (mode) {
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
  var theme = useTheme();
  var classes = useStyles$9();
  var showAmPmControl = ampm && !ampmInClock;

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var separator = createElement(ToolbarText, {
    tabIndex: -1,
    value: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  });
  return createElement(PickerToolbar, {
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: clsx(isLandscape && classes.penIconLandscape)
  }, createElement("div", {
    className: clsx(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, theme.direction === 'rtl' && classes.hourMinuteLabelReverse)
  }, arrayIncludes(views, 'hours') && createElement(ToolbarButton, {
    "data-mui-test": "hours",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: ampm ? utils.format(date, 'hours12h') : utils.format(date, 'hours24h')
  }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && createElement(ToolbarButton, {
    "data-mui-test": "minutes",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: utils.format(date, 'minutes')
  }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && createElement(ToolbarButton, {
    "data-mui-test": "seconds",
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('seconds');
    },
    selected: openView === 'seconds',
    value: utils.format(date, 'seconds')
  })), showAmPmControl && createElement("div", {
    className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape)
  }, createElement(ToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    "data-mui-test": "toolbar-am-btn",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), createElement(ToolbarButton, {
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
  return useMemo(function () {
    return typeof possiblyUnparsedValue === 'undefined' ? undefined : utils.date(possiblyUnparsedValue);
  }, [possiblyUnparsedValue, utils]);
}
function useNextMonthDisabled(month, _ref) {
  var disableFuture = _ref.disableFuture,
      maxDate = _ref.maxDate;
  var utils = useUtils();
  return useMemo(function () {
    var now = utils.date();
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils]);
}
function usePreviousMonthDisabled(month, _ref2) {
  var disablePast = _ref2.disablePast,
      minDate = _ref2.minDate;
  var utils = useUtils();
  return useMemo(function () {
    var now = utils.date();
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils]);
}

var ArrowLeftIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
})), 'ArrowLeftIcon');

var ArrowRightIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
})), 'ArrowRightIcon');

var useStyles$a = makeStyles(function (theme) {
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
      leftArrowIcon = _ref$leftArrowIcon === void 0 ? createElement(ArrowLeftIcon, null) : _ref$leftArrowIcon,
      _ref$rightArrowIcon = _ref.rightArrowIcon,
      rightArrowIcon = _ref$rightArrowIcon === void 0 ? createElement(ArrowRightIcon, null) : _ref$rightArrowIcon,
      text = _ref.text,
      other = _objectWithoutProperties(_ref, ["className", "leftArrowButtonProps", "leftArrowButtonText", "rightArrowButtonProps", "rightArrowButtonText", "isLeftHidden", "isRightHidden", "isLeftDisabled", "isRightDisabled", "onLeftClick", "onRightClick", "leftArrowIcon", "rightArrowIcon", "text"]);

  var classes = useStyles$a();
  var theme = useTheme();
  var isRtl = theme.direction === 'rtl';
  return createElement("div", _extends({
    className: className
  }, other), createElement(IconButton, _extends({
    "data-mui-test": "previous-arrow-button",
    size: "small",
    "aria-label": leftArrowButtonText
  }, leftArrowButtonProps, {
    disabled: isLeftDisabled,
    onClick: onLeftClick,
    className: clsx(classes.iconButton, leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className, Boolean(isLeftHidden) && classes.hidden, !Boolean(text) && classes.previousMonthButtonMargin)
  }), isRtl ? rightArrowIcon : leftArrowIcon), text && createElement(Typography, {
    variant: "subtitle1",
    display: "inline"
  }, text), createElement(IconButton, _extends({
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
var ArrowSwitcher = memo(PureArrowSwitcher);

var useStyles$b = makeStyles(function () {
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

  var isTimeDisabled = useCallback(function (rawValue, type) {
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
  var viewProps = useMemo(function () {
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
  return createElement(Fragment, null, showViewSwitcher && createElement(ArrowSwitcher, {
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
  }), createElement(Clock, _extends({
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
process.env.NODE_ENV !== "production" ? ClockView.propTypes = {
  date: object.isRequired,
  onChange: func.isRequired,
  ampm: bool,
  minutesStep: number,
  type: oneOf(['minutes', 'hours', 'seconds']).isRequired
} : void 0;
ClockView.displayName = 'ClockView';
var ClockView$1 = memo(ClockView);

var useStyles$c = makeStyles(function (theme) {
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
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
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
  var ref = useRef(null);
  var wrapperVariant = useContext(WrapperVariantContext);
  useEffect(function () {
    if (focused && ref.current && !disabled && allowKeyboardControl) {
      ref.current.focus();
    }
  }, [allowKeyboardControl, disabled, focused]);
  return createElement("div", {
    role: "button",
    ref: forwardedRef,
    onClick: function onClick() {
      return onSelect(value);
    },
    className: clsx(classes.yearButtonContainer, wrapperVariant === 'desktop' && classes.yearButtonContainerDesktop)
  }, createElement(Typography, _extends({
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
var Year$1 = forwardRef(function (props, ref) {
  return createElement(Year, _extends({}, props, {
    forwardedRef: ref
  }));
});

var useStyles$d = makeStyles({
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
  var theme = useTheme();
  var utils = useUtils();
  var classes = useStyles$d();
  var currentYear = utils.getYear(date);

  var _React$useState = useState(currentYear),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedYear = _React$useState2[0],
      setFocused = _React$useState2[1];

  var wrapperVariant = useContext(WrapperVariantContext);
  var selectedYearRef = useRef(null);
  useEffect(function () {
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

  var handleYearSelection = useCallback(function (year) {
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
  return createElement("div", null, createElement("div", {
    className: classes.container
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return createElement(Year$1, {
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

var useStyles$e = makeStyles(function (theme) {
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
  var handleSelection = useCallback(function () {
    onSelect(value);
  }, [onSelect, value]);
  return createElement(Typography, _extends({
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

var useStyles$f = makeStyles({
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

  var onMonthSelect = useCallback(function (month) {
    var newDate = utils.setMonth(date, month);
    onChange(newDate, true);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }, [date, onChange, onMonthChange, utils]);
  return createElement("div", {
    className: classes.container
  }, utils.getMonthArray(date).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'monthShort');
    return createElement(Month, {
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
  var reducerFn = useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils));

  var _React$useReducer = useReducer(reducerFn.current, {
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

  var handleChangeMonth = useCallback(function (payload) {
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
  var changeMonth = useCallback(function (date) {
    if (utils.isSameMonth(date, calendarState.currentMonth)) {
      return;
    }

    handleChangeMonth({
      newMonth: utils.startOfMonth(date),
      direction: utils.isAfterDay(date, calendarState.currentMonth) ? 'left' : 'right'
    });
  }, [calendarState.currentMonth, handleChangeMonth, utils]);
  var validateMinMaxDate = useCallback(function (day) {
    return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, minDate) || maxDate && utils.isAfterDay(day, maxDate));
  }, [disableFuture, disablePast, maxDate, minDate, now, utils]);
  var isDateDisabled = useCallback(function (day) {
    return validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
  }, [shouldDisableDate, validateMinMaxDate]);
  var onMonthSwitchingAnimationEnd = useCallback(function () {
    dispatch({
      type: 'finishMonthSwitchingAnimation'
    });
  }, []);
  var changeFocusedDay = useCallback(function (newFocusedDate) {
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

var animationDuration = 500;
var useStyles$g = makeStyles(function (theme) {
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
  return createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, createElement(CSSTransition, {
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

var useStyles$h = makeStyles(function (theme) {
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
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
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

  var ref = useRef(null);
  var utils = useUtils();
  var classes = useStyles$h();
  useEffect(function () {
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
  return createElement(ButtonBase, _extends({
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
  }), createElement("span", {
    className: classes.dayLabel
  }, utils.format(day, 'dayOfMonth')));
};

var areDayPropsEqual = function areDayPropsEqual(prevProps, nextProps) {
  return prevProps.focused === nextProps.focused && prevProps.focusable === nextProps.focusable && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.allowKeyboardControl === nextProps.allowKeyboardControl && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};
var Day = memo(PureDay, areDayPropsEqual);
PureDay.displayName = 'Day';
process.env.NODE_ENV !== "production" ? PureDay.propTypes = {
  today: bool,
  disabled: bool,
  selected: bool
} : void 0;
PureDay.defaultProps = {
  disabled: false,
  today: false,
  selected: false
};

var slideAnimationDuration = 350;
var useStyles$i = makeStyles(function (theme) {
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
    return createElement("div", {
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
  return createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, createElement(CSSTransition, _extends({
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: slideAnimationDuration,
    classNames: transitionClasses,
    children: children
  }, other)));
};

var useStyles$j = makeStyles(function (theme) {
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
  var theme = useTheme();
  var classes = useStyles$j();
  var handleDaySelect = useCallback(function (day) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    onChange(Array.isArray(date) ? day : utils.mergeDateAndTime(day, date), isFinish);
  }, [date, onChange, utils]);
  var initialDate = Array.isArray(date) ? date[0] : date;
  useEffect(function () {
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
  return createElement(Fragment, null, createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, i) {
    return createElement(Typography, {
      "aria-hidden": true,
      key: day + i.toString(),
      variant: "caption",
      className: classes.dayLabel,
      children: day.charAt(0).toUpperCase()
    });
  })), createElement(SlideTransition, _extends({
    transKey: currentMonthNumber,
    onExited: onMonthSwitchingAnimationEnd,
    reduceAnimations: reduceAnimations,
    slideDirection: slideDirection,
    className: clsx(classes.transitionContainer, className)
  }, TransitionProps), createElement("div", {
    role: "grid",
    style: {
      overflow: 'hidden'
    }
  }, utils.getWeekArray(currentMonth).map(function (week) {
    return createElement("div", {
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
      return renderDay ? renderDay(day, selectedDates, dayProps) : createElement(Day, dayProps);
    }));
  }))));
};
Calendar.displayName = 'Calendar';

var ArrowDropDownIcon = createSvgIcon(React__default.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDownIcon');

var useStyles$k = makeStyles(function (theme) {
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

  return createElement(Fragment, null, createElement("div", {
    className: classes.switchHeader
  }, createElement("div", {
    className: classes.monthTitleContainer,
    onClick: toggleView
  }, createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'month')
  }, createElement(Typography, {
    "aria-live": "polite",
    "data-mui-test": "calendar-month-text",
    align: "center",
    variant: "subtitle1",
    className: classes.monthText,
    children: utils.format(month, 'month')
  })), createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'year')
  }, createElement(Typography, {
    "aria-live": "polite",
    "data-mui-test": "calendar-year-text",
    align: "center",
    variant: "subtitle1",
    children: utils.format(month, 'year')
  })), views.length > 1 && createElement(IconButton, {
    size: "small",
    "data-mui-test": "calendar-view-switcher",
    onClick: toggleView,
    className: classes.yearSelectionSwitcher,
    "aria-label": getViewSwitchingButtonText(view)
  }, createElement(ArrowDropDownIcon, {
    className: clsx(classes.switchViewDropdown, view === 'year' && classes.switchViewDropdownDown)
  }))), createElement(Fade, {
    "in": view === 'date'
  }, createElement(ArrowSwitcher, {
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
process.env.NODE_ENV !== "production" ? CalendarHeader.propTypes = {
  leftArrowIcon: node,
  rightArrowIcon: node,
  leftArrowButtonText: string,
  rightArrowButtonText: string
} : void 0;

var useStyles$l = makeStyles({
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
      loadingIndicator = _ref$loadingIndicator === void 0 ? createElement(CircularProgress, {
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
  var wrapperVariant = useContext(WrapperVariantContext);
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

  useEffect(function () {
    changeMonth(date);
  }, [date]); // eslint-disable-line

  useEffect(function () {
    if (view === 'date') {
      changeFocusedDay(date);
    }
  }, [view]); // eslint-disable-line

  return createElement(Fragment, null, createElement(CalendarHeader, _extends({}, other, {
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
  })), createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    className: classes.viewTransitionContainer,
    transKey: view
  }, createElement("div", null, view === 'year' && createElement(YearSelection, _extends({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    isDateDisabled: isDateDisabled,
    allowKeyboardControl: allowKeyboardControl
  })), view === 'month' && createElement(MonthSelection, _extends({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    onMonthChange: onMonthChange
  })), view === 'date' && (loadingQueue > 0 ? createElement(Grid, {
    className: classes.gridFullHeight,
    container: true,
    alignItems: "center",
    justify: "center"
  }, loadingIndicator) : createElement(Calendar, _extends({}, other, calendarState, {
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

var useStyles$m = makeStyles({
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
  var wrapperVariant = useContext(WrapperVariantContext);
  var onChange = useCallback(function (date, isFinish) {
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

  return createElement("div", {
    className: clsx(classes.container, isLandscape && classes.containerLandscape)
  }, toShowToolbar && createElement(ToolbarComponent, _extends({}, other, {
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
  })), createElement("div", {
    className: clsx(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, isMobileKeyboardViewOpen ? createElement(MobileKeyboardInputView, null, createElement(KeyboardDateInput, _extends({}, DateInputProps, {
    ignoreInvalidInputs: true,
    disableOpenPicker: true,
    fullWidth: true
  }))) : createElement(Fragment, null, (openView === 'year' || openView === 'month' || openView === 'date') && createElement(CalendarView, _extends({
    date: date,
    changeView: setOpenView // @ts-ignore
    ,
    views: views,
    onChange: handleChangeAndOpenNext,
    view: openView
  }, other)), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && createElement(ClockView, _extends({}, other, {
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

    return createElement(PickerWrapper, _extends({
      inputProps: inputProps,
      wrapperProps: wrapperProps
    }, restPropsForTextField), createElement(Picker, _extends({}, pickerProps, {
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
  return forwardRef(function (props, ref) {
    return createElement(FinalPickerComponent, _extends({}, props, {
      forwardedRef: ref
    }));
  });
}

var useStyles$n = makeStyles(function (theme) {
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
  return createElement(WrapperVariantContext.Provider, {
    value: displayStaticWrapperAs
  }, createElement("div", {
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

var ClockIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
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

var TimeIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), React__default.createElement("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
})), 'TimeIcon');

var DateRangeIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
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

var useStyles$o = makeStyles(function (theme) {
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
  var theme = useTheme();
  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return createElement(Paper, null, createElement(Tabs, {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, createElement(Tab, {
    value: "date",
    "aria-label": "pick date",
    icon: createElement(Fragment, null, dateRangeIcon)
  }), createElement(Tab, {
    value: "time",
    "aria-label": "pick time",
    icon: createElement(Fragment, null, timeIcon)
  })));
};
DateTimePickerTabs.defaultProps = {
  dateRangeIcon: createElement(DateRangeIcon, null),
  timeIcon: createElement(TimeIcon, null)
};

var useStyles$p = makeStyles(function (_) {
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
  return createElement(Fragment, null, createElement(PickerToolbar, {
    toolbarTitle: toolbarTitle,
    isLandscape: false,
    penIconClassName: classes.penIcon,
    className: classes.toolbar,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }, createElement("div", {
    className: classes.dateContainer
  }, createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "subtitle1",
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    value: utils.format(date, 'year')
  }), createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "h4",
    "data-mui-test": "datetimepicker-toolbar-date",
    onClick: function onClick() {
      return setOpenView('date');
    },
    selected: openView === 'date',
    value: toolbarFormat ? utils.formatByString(date, toolbarFormat) : utils.format(date, 'shortDate')
  })), createElement("div", {
    className: classes.timeContainer
  }, createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: ampm ? utils.format(date, 'hours12h') : utils.format(date, 'hours24h'),
    typographyClassName: classes.timeTypography
  }), createElement(ToolbarText, {
    variant: "h3",
    value: ":",
    className: classes.separator
  }), createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: utils.format(date, 'minutes'),
    typographyClassName: classes.timeTypography
  }))), showTabs && createElement(DateTimePickerTabs, {
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

var useStyles$q = makeStyles(function (theme) {
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
  var startRef = useRef(null);
  var endRef = useRef(null);
  useEffect(function () {
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

  return createElement("div", {
    id: id,
    className: clsx(classes.rangeInputsContainer, className),
    ref: mergeRefs([containerRef, forwardedRef])
  }, createElement(KeyboardDateInput, _extends({}, other, {
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
  })), createElement(Typography, {
    className: classes.toLabelDelimiter
  }, toText), createElement(KeyboardDateInput, _extends({}, other, {
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

var useStyles$r = makeStyles({
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
  return createElement(PickerToolbar, {
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: false,
    penIconClassName: classes.penIcon
  }, createElement("div", {
    className: classes.dateTextContainer
  }, createElement(ToolbarButton, {
    variant: Boolean(start) ? 'h5' : 'h6',
    value: startDateValue,
    selected: currentlySelectingRangeEnd === 'start',
    onClick: function onClick() {
      return setCurrentlySelectingRangeEnd('start');
    }
  }), createElement(Typography, {
    variant: "h5"
  }, "\xA0", '–', "\xA0"), createElement(ToolbarButton, {
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
var useStyles$s = makeStyles(function (theme) {
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
      backgroundColor: fade(theme.palette.primary.light, 0.6),
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
      color: theme.palette.getContrastText(fade(theme.palette.primary.light, 0.6))
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
  return createElement("div", {
    "data-mui-test": shouldRenderHighlight ? 'DateRangeHighlight' : undefined,
    className: clsx(classes.rangeIntervalDay, (isEndOfHighlighting || isEndOfMonth) && classes.rangeIntervalDayHighlightEnd, (isStartOfHighlighting || isStartOfMonth) && classes.rangeIntervalDayHighlightStart, shouldRenderHighlight && classes.rangeIntervalDayHighlight)
  }, createElement("div", {
    "data-mui-test": shouldRenderPreview ? 'DateRangePreview' : undefined,
    className: clsx(classes.rangeIntervalPreview, (isEndOfPreviewing || isEndOfMonth) && classes.rangeIntervalDayPreviewEnd, (isStartOfPreviewing || isStartOfMonth) && classes.rangeIntervalDayPreviewStart, shouldRenderPreview && classes.rangeIntervalDayPreview)
  }, createElement(Day, _extends({
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
var DateRangeDay = memo(PureDateRangeDay, function (prevProps, nextProps) {
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
  return createElement(Fragment, null, createElement(CalendarHeader, _extends({
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
  }, other)), createElement(Calendar, _extends({}, other, {
    date: date,
    onChange: onChange,
    renderDay: function renderDay(day, _, DayProps) {
      return createElement(DateRangeDay, _extends({
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

var useStyles$t = makeStyles(function (theme) {
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

  var _React$useState = useState(null),
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
  var handleDayChange = useCallback(function (day) {
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

  var CalendarTransitionProps = useMemo(function () {
    return {
      onMouseLeave: function onMouseLeave() {
        return setRangePreviewDay(null);
      }
    };
  }, []);
  var selectNextMonth = useCallback(function () {
    changeMonth(utils.getNextMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  var selectPreviousMonth = useCallback(function () {
    changeMonth(utils.getPreviousMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  return createElement("div", {
    className: classes.dateRangeContainer
  }, getCalendarsArray(calendars).map(function (_, index) {
    var monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
    return createElement("div", {
      key: index,
      className: classes.rangeCalendarContainer
    }, createElement(ArrowSwitcher, {
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
    }), createElement(Calendar, _extends({}, other, {
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
        return createElement(DateRangeDay, _extends({
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
  var wrapperVariant = useContext(WrapperVariantContext);
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

  useEffect(function () {
    if (disableAutoMonthSwitching || !open) {
      return;
    }

    if (currentlySelectingRangeEnd === 'start' && start === null || currentlySelectingRangeEnd === 'end' && end === null) {
      return;
    }

    scrollToDayIfNeeded(currentlySelectingRangeEnd === 'start' ? start : end);
  }, [currentlySelectingRangeEnd, date]); // eslint-disable-line

  var handleChange = useCallback(function (newDate) {
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
          return createElement(DateRangePickerViewDesktop, _extends({
            calendars: calendars
          }, sharedCalendarProps));
        }

      default:
        {
          return createElement(DateRangePickerViewMobile, sharedCalendarProps);
        }
    }
  };

  return createElement(Fragment, null, toShowToolbar && createElement(DateRangePickerToolbar, {
    date: date,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd,
    setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
    startText: startText,
    endText: endText
  }), isMobileKeyboardViewOpen ? createElement(MobileKeyboardInputView, null, createElement(DateRangePickerInput, _extends({
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

    var _React$useState = useState('start'),
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

    return createElement(WrapperComponent, _extends({
      wrapperProps: wrapperProps,
      inputProps: DateInputProps
    }, restPropsForTextField), createElement(DateRangePickerView, _extends({
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

  return forwardRef(function (props, ref) {
    return createElement(RangePickerWithStateAndWrapper, _extends({}, props, {
      forwardedRef: ref
    }));
  });
} // TODO replace with new export type syntax

var DateRangePicker = makeRangePicker(ResponsivePopperWrapper);
var DesktopDateRangePicker = makeRangePicker(DesktopPopperWrapper);
var MobileDateRangePicker = makeRangePicker(MobileWrapper);
var StaticDateRangePicker = makeRangePicker(StaticWrapper);

export { Calendar, CalendarView, Clock, ClockView, DatePicker, DateRangePicker, DateTimePicker, Day, DesktopDatePicker, DesktopDateRangePicker, DesktopDateTimePicker, DesktopTimePicker, LocalizationProvider, MobileDatePicker, MobileDateRangePicker, MobileDateTimePicker, MobileTimePicker, MuiPickersAdapterContext as MuiPickersContext, Picker, StaticDatePicker, StaticDateRangePicker, StaticDateTimePicker, StaticTimePicker, TimePicker, ClockView$1 as TimePickerView, defaultReduceAnimations, getTextFieldAriaText$1 as getTextFieldAriaText, makePickerWithStateAndWrapper as makePickerWithState, makeRangePicker, parseRangeInputValue, usePickerState, useStyles$l as useStyles, useUtils, validateDateValue as validate };
//# sourceMappingURL=material-ui-pickers.esm.js.map
