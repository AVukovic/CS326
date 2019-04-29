"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: { textAlign: 'center' } },
        React.createElement(
          "h1",
          { className: "display-1" },
          " Euler on Canvas"
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: { textAlign: 'center' } },
        React.createElement(
          "ul",
          { className: "nav justify-content-center" },
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link", href: "/view01.html" },
              "Encode"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link", href: "/view02.html" },
              "Decode"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link disabled", href: "/view03.html" },
              "How it Works"
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

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));
  }

  _createClass(Body, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { style: { width: '200px', height: '200px',
              align: 'center', position: 'fixed', top: '135px', left: '55px',
              border: '3px solid black', padding: '20px' } },
          React.createElement(
            "p",
            { style: { textAlign: 'center' } },
            "Reference photo 1"
          )
        ),
        React.createElement(
          "div",
          { style: { textAlign: 'left', align: 'center', position: 'fixed', top: '130px', left: '350px',
              fontsize: '16', padding: '20px' } },
          React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            React.createElement("br", null),
            "Vestibulum urna ante, elementum volutpat purus non, sodales lobortis eros.",
            React.createElement("br", null),
            "Aliquam id hendrerit urna, a luctus nulla. ",
            React.createElement("br", null),
            "Duis non elit sed dolor auctor posuere a et felis. ",
            React.createElement("br", null),
            "Donec convallis dui non auctor semper. ",
            React.createElement("br", null),
            "Etiam dignissim lobortis felis. ",
            React.createElement("br", null),
            "Mauris a ligula eget dui sagittis accumsan. ",
            React.createElement("br", null),
            "Nulla facilisis risus mauris, hendrerit tempus sem viverra in. ",
            React.createElement("br", null),
            "Sed augue quam, tristique sit amet volutpat non, porttitor et eros. ",
            React.createElement("br", null),
            "Cras eleifend, purus aliquet tempus condimentum, ",
            React.createElement("br", null),
            "ligula justo fringilla sapien, vel posuere ipsum turpis vitae mi. ",
            React.createElement("br", null),
            React.createElement("br", null),
            "Sed turpis dui, faucibus et libero at, condimentum viverra ipsum. ",
            React.createElement("br", null),
            "Sed et nibh ut lorem egestas eleifend. ",
            React.createElement("br", null),
            "Vivamus convallis ipsum nec justo tempor rutrum."
          )
        ),
        React.createElement(
          "div",
          { style: { width: '200px', height: '200px',
              align: 'center', position: 'fixed', top: '275px', left: '885px',
              border: '3px solid black', padding: '20px' } },
          React.createElement(
            "p",
            { style: { textAlign: 'center' } },
            "Reference photo 2"
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: { textAlign: 'center' } },
        React.createElement(Title, null),
        React.createElement(Nav, null),
        React.createElement(Body, null),
        React.createElement("hr", null)
      );
    }
  }]);

  return MyComponent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);