// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ textAlign:'center'}}>
        <h1 className="display-1"> Euler on Canvas</h1>
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
      <div style={{textAlign:'center'}}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="/view01.html">Encode</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view02.html">Decode</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/view03.html">How it Works</a>
          </li>
      </ul>
    </div>
    );
  }
}

class Body extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col-2"></div><div className="col-2"></div>
        <div className="col-4 align-items-center" style={{ textAlign:'center' }}>
          <p className="text-justify">Euler on Canvas is an app that allows you to encrpyt messages and decrpyt them at a later date. <br /><br /> 
          We achieve this through a classic method of encryption- the <b>Caesarian Cypher</b>. The Caesarian Cypher works by offsetting each letter in a given string of text by a number between <b>1</b> and <b>25</b>. For example, if our offset value is <b>2</b>, the message <b>abc</b> would become <b>cde</b>. If our offset was <b>25</b>, the message would become <b>zab</b>.<br/><br />
          In order to decrypt messages, we use the coded messages and apply the inverse of the original cypher. The inverse is found by subtracting the offset from <b>26</b>. Harkening back to our original example, the inverted offset of <b>2</b> is now <b>24</b>. The string <b>cde</b> offset by <b>24</b> yields <b>abc</b>, our original message.</p>
        </div>
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
        <Body />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
