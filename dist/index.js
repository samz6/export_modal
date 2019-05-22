'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var Icon = _interopDefault(require('@material-ui/core/Icon'));
var styles = require('@material-ui/core/styles');
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var List = _interopDefault(require('@material-ui/core/List'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Chip = _interopDefault(require('@material-ui/core/Chip'));
var Input = _interopDefault(require('@material-ui/core/Input'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var Modal = _interopDefault(require('@material-ui/core/Modal'));
var Select = _interopDefault(require('@material-ui/core/Select'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var PropTypes = _interopDefault(require('prop-types'));
var core = require('@material-ui/core');

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  min-height: 20px;\n  width: 100%;\n  background-color: ", ";\n  font-weight: ", ";\n  padding: 15px;\n  transition: all 0.4s ease;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  min-height: 20px;\n  width: 100%;\n  background-color: ", ";\n  font-weight: ", ";\n  padding: 15px;\n  transition: all 0.4s ease;\n"]),
    _templateObject2 = taggedTemplateLiteral(["\n  display: ", ";\n"], ["\n  display: ", ";\n"]);

var MainContainer = styled__default.div(_templateObject, function (props) {
  return props.selected ? "#ccc" : "#fff";
}, function (props) {
  return props.selected ? "bold" : "normal";
});

var SelectIcon = styled__default(Icon)(_templateObject2, function (props) {
  return props.selected ? "block" : "none";
});

var styles$1 = function styles$$1(theme) {
  return {};
};

var CheckableItem = function (_React$Component) {
  inherits(CheckableItem, _React$Component);

  function CheckableItem() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, CheckableItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = CheckableItem.__proto__ || Object.getPrototypeOf(CheckableItem)).call.apply(_ref, [this].concat(args))), _this), _this.clickHandler = function () {
      _this.props.onSelectionChange(!_this.props.selected);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(CheckableItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        MainContainer,
        { selected: this.props.selected, onClick: this.clickHandler },
        React.createElement(
          "div",
          null,
          this.props.label
        ),
        React.createElement(
          SelectIcon,
          { selected: this.props.selected },
          "done"
        )
      );
    }
  }]);
  return CheckableItem;
}(React.Component);

// export default CheckableItem;
var CheckableItemWrapped = styles.withStyles(styles$1)(CheckableItem);

var _templateObject$1 = taggedTemplateLiteral(["\n  align-self: flex-end;\n  color: darkgray;\n  padding: 1rem;\n  margin-right: 0.5rem;\n"], ["\n  align-self: flex-end;\n  color: darkgray;\n  padding: 1rem;\n  margin-right: 0.5rem;\n"]),
    _templateObject2$1 = taggedTemplateLiteral(["\n  elevation: ", ";\n  margin: 0 1rem 2rem 1rem;\n  border-top: 5px solid teal;\n  box-shadow: 0px 2px 5px grey;\n"], ["\n  elevation: ", ";\n  margin: 0 1rem 2rem 1rem;\n  border-top: 5px solid teal;\n  box-shadow: 0px 2px 5px grey;\n"]),
    _templateObject3 = taggedTemplateLiteral(["\n  top: 0;\n  height: 100vh;\n  width: 50%;\n  min-height: 450px;\n  min-width: 500px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  position: absolute;\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: ", ";\n  outline: none;\n"], ["\n  top: 0;\n  height: 100vh;\n  width: 50%;\n  min-height: 450px;\n  min-width: 500px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  position: absolute;\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: ", ";\n  outline: none;\n"]),
    _templateObject4 = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem;\n"]),
    _templateObject5 = taggedTemplateLiteral(["\n  width: 50%;\n"], ["\n  width: 50%;\n"]),
    _templateObject6 = taggedTemplateLiteral(["\n  margin: 3rem 1rem 1rem 1rem;\n"], ["\n  margin: 3rem 1rem 1rem 1rem;\n"]),
    _templateObject7 = taggedTemplateLiteral(["\n  display: flex;\n  justify-items: flex-start;\n  flex-direction: row;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-items: flex-start;\n  flex-direction: row;\n  justify-content: space-between;\n"]),
    _templateObject8 = taggedTemplateLiteral(["\n  border: 1px solid darkgray;\n  margin-right: 0.5rem !important;\n  flex: 1;\n  max-height: calc(100vh - 230px);\n  overflow-y: scroll;\n"], ["\n  border: 1px solid darkgray;\n  margin-right: 0.5rem !important;\n  flex: 1;\n  max-height: calc(100vh - 230px);\n  overflow-y: scroll;\n"]),
    _templateObject9 = taggedTemplateLiteral(["\n\n  border: 1px solid darkgray;\n  margin-left: 0.5rem !important;\n  flex: 1;\n  max-height: calc(100vh - 230px);\n  overflow-y: scroll;\n"], ["\n\n  border: 1px solid darkgray;\n  margin-left: 0.5rem !important;\n  flex: 1;\n  max-height: calc(100vh - 230px);\n  overflow-y: scroll;\n"]);

var IconButtonStyled = styled__default(IconButton)(_templateObject$1);

var MainContainerStyled = styled__default(Paper)(_templateObject2$1, function (_ref) {
  var theme = _ref.theme;
  return theme.elevation;
});

var MyPaper = styled__default.div(_templateObject3, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.background.paper;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.shadows[5];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.unit * 4;
});

var ExportOptionHeaderStyled = styled__default.div(_templateObject4);

var ExportOptionSelectStyled = styled__default(FormControl)(_templateObject5);

var ExportFieldSelectionContainerStyled = styled__default.div(_templateObject6);

var SelectionListContainerStyled = styled__default.div(_templateObject7);

var ColumnSelectionListStyled = styled__default(List)(_templateObject8);

var RegionSelectionListStyled = styled__default(List)(_templateObject9);

var styles$2 = function styles$$1(theme) {
  return {
    listItemOverride: {
      padding: "0"
    }
  };
};

var theme = core.createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

var ExportModal = function (_React$Component) {
  inherits(ExportModal, _React$Component);

  function ExportModal(props) {
    classCallCheck(this, ExportModal);

    var _this = possibleConstructorReturn(this, (ExportModal.__proto__ || Object.getPrototypeOf(ExportModal)).call(this, props));

    _this.exportOptions = [{
      label: "CSV",
      value: "csv"
    }, {
      label: "Excel",
      value: "xls"
    }];

    _this.closeModal = function () {
      _this.setState({ modalIsOpen: false });
    };

    _this.exportOptionOnChangeHandler = function (event) {
      _this.setState({
        selectedExportOption: event.target.value
      });
    };

    _this.selectAllHandler = function (event) {
      var columns = _this.state.columnsDetail;
      columns = columns.map(function (column) {
        column.isSelected = true;
        return column;
      });

      _this.setState({ columnsDetail: columns });
    };

    _this.columnSelectionHandler = function (selectedColumn) {
      return function () {
        var currentIndex = _this.state.columnsDetail.findIndex(function (column) {
          return column.columnName === selectedColumn.columnName;
        });

        var columns = _this.state.columnsDetail;

        columns[currentIndex].isSelected = !columns[currentIndex].isSelected;

        _this.setState(_extends({}, _this.state, { columnsDetail: columns }));
      };
    };

    _this.state = {
      modalIsOpen: false,
      selectedExportOption: ["pdf"],
      selectedColumns: [],
      columnsDetail: [{ columnName: "Organization Name", isSelected: true }, { columnName: "Plan Code/Contract #", isSelected: false }, { columnName: "PBP", isSelected: false }, { columnName: "Segment", isSelected: true }, { columnName: "Plan Name", isSelected: true }, { columnName: "Product Type", isSelected: false }, { columnName: "Plan Type", isSelected: false }, { columnName: "Region", isSelected: true }, { columnName: "County", isSelected: false }, { columnName: "Current Enrollees", isSelected: false }]
    };
    return _this;
  }

  createClass(ExportModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        console.log(nextProps);
        this.setState({
          modalIsOpen: nextProps.modalProps.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;


      return React.createElement(
        "div",
        null,
        React.createElement(
          Modal,
          {
            "aria-labelledby": "simple-modal-title",
            "aria-describedby": "simple-modal-description",
            open: this.state.modalIsOpen,
            onClose: this.closeModal
          },
          React.createElement(
            styled.ThemeProvider,
            { theme: theme },
            React.createElement(
              MyPaper,
              null,
              React.createElement(
                IconButtonStyled,
                { color: "secondary" },
                React.createElement(
                  Icon,
                  null,
                  "close"
                )
              ),
              React.createElement(
                MainContainerStyled,
                { elevation: 1 },
                React.createElement(
                  ExportOptionHeaderStyled,
                  null,
                  React.createElement(
                    Typography,
                    { variant: "subtitle2", gutterBottom: true },
                    "Export Option"
                  ),
                  React.createElement(
                    ExportOptionSelectStyled,
                    null,
                    React.createElement(
                      Select,
                      {
                        multiple: true,
                        onChange: this.exportOptionOnChangeHandler,
                        renderValue: function renderValue(selected) {
                          return React.createElement(
                            "div",
                            { className: classes.chips },
                            selected.map(function (value) {
                              return React.createElement(Chip, { key: value, label: value });
                            })
                          );
                        },
                        value: this.state.selectedExportOption,
                        input: React.createElement(Input, { id: "select-multiple" }),
                        MenuProps: MenuProps
                      },
                      this.exportOptions.map(function (option) {
                        return React.createElement(
                          MenuItem,
                          { key: option.label, value: option.value },
                          option.label
                        );
                      })
                    )
                  )
                ),
                React.createElement(
                  ExportFieldSelectionContainerStyled,
                  null,
                  React.createElement(
                    Typography,
                    { variant: "subtitle2", gutterBottom: true },
                    "Export Field Selection"
                  ),
                  React.createElement(
                    SelectionListContainerStyled,
                    null,
                    React.createElement(
                      ColumnSelectionListStyled,
                      null,
                      React.createElement(
                        ListItem,
                        { onClick: this.selectAllHandler },
                        "Select All"
                      ),
                      this.state.columnsDetail.map(function (column) {
                        return React.createElement(
                          ListItem,
                          {
                            key: column.columnName,
                            button: true,
                            className: classes.listItemOverride
                          },
                          React.createElement(CheckableItemWrapped, {
                            onSelectionChange: _this2.columnSelectionHandler(column),
                            label: column.columnName,
                            selected: column.isSelected
                          })
                        );
                      })
                    ),
                    React.createElement(
                      RegionSelectionListStyled,
                      null,
                      [0, 1, 2, 3].map(function (value) {
                        return React.createElement(
                          ListItem,
                          {
                            key: value,
                            button: true,
                            className: classes.listItemOverride
                          },
                          React.createElement(CheckableItemWrapped, {
                            onSelectionChange: _this2.columnSelectionHandler(value),
                            label: "Line item " + (value + 1),
                            selected: _this2.state.selectedColumns.indexOf(value) !== -1
                          })
                        );
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return ExportModal;
}(React.Component);

ExportModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
var ExportModalWrapped = styles.withStyles(styles$2)(ExportModal);

module.exports = ExportModalWrapped;
//# sourceMappingURL=index.js.map
