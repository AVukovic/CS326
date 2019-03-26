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
      <div style={{textAlign:'center'}}>
        <table style={{textAlign: 'center', width:'100%'}}>
          <tr>
            <th style={{textAlign:'center'}}><a href="/view01.html">Encode</a></th>
            <th style={{textAlign:'right'}}><a href="/view02.html">Decode</a></th>
            <th style={{textAlign:'center'}}><a href="/view03.html">How It Works</a></th>
          </tr>
        </table>
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
      <div>
        <div style={{width: '300px', height: '225px',
          align: 'center', position: 'fixed', top: '175px', left: '115px',
          border: '3px solid black', padding: '20px'}}>
          <p style = {{textAlign:'center'}}>Reference photo 1</p>
        </div>

        <div style={{textAlign:'left', align: 'center', position: 'fixed', top: '150px', left: '500px',
          fontsize: '16', padding: '20px'}}>
          <textarea rows="20" cols="50" placeholder="Put describtion here..."></textarea>
        </div>

        <div style={{width: '300px', height: '225px',
          align: 'center', position: 'fixed', top: '175px', left: '1000px',
          border: '3px solid black', padding: '20px'}}>
          <p style = {{textAlign:'center'}}>Reference photo 2</p>
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
        <Body />
        <hr />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
