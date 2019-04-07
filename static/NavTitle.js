'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var NavTitle = function (_React$Component3) {
  _inherits(NavTitle, _React$Component3);

  function NavTitle() {
    _classCallCheck(this, NavTitle);

    return _possibleConstructorReturn(this, (NavTitle.__proto__ || Object.getPrototypeOf(NavTitle)).call(this));
  }

  _createClass(NavTitle, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { align: 'center' } },
        React.createElement(Title, null),
        React.createElement(Nav, null)
      );
    }
  }]);

  return NavTitle;
}(React.Component);

exports.default = NavTitle;