"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        { className: "row" },
        React.createElement("div", { className: "col-2" }),
        React.createElement("div", { className: "col-2" }),
        React.createElement(
          "div",
          { className: "col-4 align-items-center", style: { textAlign: 'center' } },
          React.createElement(
            "p",
            { className: "text-justify" },
            "Euler on Canvas is an app that allows you to encrpyt messages and decrpyt them at a later date. ",
            React.createElement("br", null),
            React.createElement("br", null),
            "We achieve this through a classic method of encryption- the ",
            React.createElement(
              "b",
              null,
              "Caesarian Cypher"
            ),
            ". The Caesarian Cypher works by offsetting each letter in a given string of text by a number between ",
            React.createElement(
              "b",
              null,
              "1"
            ),
            " and ",
            React.createElement(
              "b",
              null,
              "25"
            ),
            ". For example, if our offset value is ",
            React.createElement(
              "b",
              null,
              "2"
            ),
            ", the message ",
            React.createElement(
              "b",
              null,
              "abc"
            ),
            " would become ",
            React.createElement(
              "b",
              null,
              "cde"
            ),
            ". If our offset was ",
            React.createElement(
              "b",
              null,
              "25"
            ),
            ", the message would become ",
            React.createElement(
              "b",
              null,
              "zab"
            ),
            ".",
            React.createElement("br", null),
            React.createElement("br", null),
            "In order to decrypt messages, we use the coded messages and apply the inverse of the original cypher. The inverse is found by subtracting the offset from ",
            React.createElement(
              "b",
              null,
              "26"
            ),
            ". Harkening back to our original example, the inverted offset of ",
            React.createElement(
              "b",
              null,
              "2"
            ),
            " is now ",
            React.createElement(
              "b",
              null,
              "24"
            ),
            ". The string ",
            React.createElement(
              "b",
              null,
              "cde"
            ),
            " offset by ",
            React.createElement(
              "b",
              null,
              "24"
            ),
            " yields ",
            React.createElement(
              "b",
              null,
              "abc"
            ),
            ", our original message."
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
        React.createElement("hr", null),
        React.createElement(Body, null)
      );
    }
  }]);

  return MyComponent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);