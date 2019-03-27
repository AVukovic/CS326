'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.


// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { textAlign: 'center' } },
        React.createElement(
          'h1',
          null,
          'Euler on Canvas'
        )
      );
    }
  }]);

  return Title;
}(React.Component);

var Nav = function (_React$Component2) {
  _inherits(Nav, _React$Component2);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { textAlign: 'center' } },
        React.createElement(
          'table',
          { style: { textAlign: 'center', width: '100%' } },
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              { style: { textAlign: 'center' } },
              React.createElement(
                'a',
                { href: '/view01.html' },
                'Encode'
              )
            ),
            React.createElement(
              'th',
              { style: { textAlign: 'right' } },
              React.createElement(
                'a',
                { href: '/view02.html' },
                'Decode'
              )
            ),
            React.createElement(
              'th',
              { style: { textAlign: 'center' } },
              React.createElement(
                'a',
                { href: '/view03.html' },
                'How It Works'
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

var Body = function (_React$Component3) {
  _inherits(Body, _React$Component3);

  function Body(state) {
    _classCallCheck(this, Body);

    var _this3 = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));

    _this3.state = { msg: 'Empty' };
    _this3.clickButton = _this3.clickButton.bind(_this3);
    return _this3;
  }

  _createClass(Body, [{
    key: 'clickButton',
    value: function clickButton() {
      this.setState({ msg: "Image would be uploaded here" });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { textAlign: 'left', align: 'left', position: 'fixed', top: '150px', left: '200px',
              fontsize: '16', padding: '10px' } },
          React.createElement('textarea', { rows: '5', cols: '25', name: 'InputMessage', placeholder: 'Enter Message To Be Encoded' })
        ),
        React.createElement(
          'div',
          { style: { align: 'center-left', position: 'fixed', top: '255px', left: '348px' } },
          React.createElement(
            'button',
            { onClick: function onClick() {
                _this4.clickButton();
              } },
            'Encode'
          )
        ),
        React.createElement(
          'div',
          { style: { width: '300px', height: '225px', textAlign: 'center',
              align: 'right', position: 'fixed', top: '140px', left: '700px',
              border: '1px solid black', padding: '20px' } },
          React.createElement(
            'p',
            null,
            this.state.msg
          )
        )
      );
    }
  }]);

  return Body;
}(React.Component);

var MyComponent = function (_React$Component4) {
  _inherits(MyComponent, _React$Component4);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { align: 'center' } },
        React.createElement(Title, null),
        React.createElement(Nav, null),
        React.createElement(Body, null),
        React.createElement('hr', null)
      );
    }
  }]);

  return MyComponent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);