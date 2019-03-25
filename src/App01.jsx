// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ textAlign:'center'}}>
        <h1>Euler on Canvas</h1>
      </div>
    );
  }
}

class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ textAlign:'center', padding: '14px 16px'}}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ textAlign:'center'}}>
        <Title />
        <Nav />
        <hr />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
