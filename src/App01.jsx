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
      <div align ="center">
        <h1>Euler on Canvas</h1>
      </div>
    );
  }
}

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="topnav">
        <div class="topnav-centered">
          <h2>Decode</h2>
        </div>
        <div class="topnav-left">
          <h2>Encode</h2>
        </div>
        <div class="topnav-right">
          <h2>How It Works</h2>
        </div>
      </div>
    );
  };
}

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div align="center">
        <Title />
        <NavBar />
        <hr />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
