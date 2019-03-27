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
        <div style={{textAlign:'left', align: 'right', position: 'fixed', top: '150px', left: '847px',
          fontsize: '16', padding: '10px'}}>
          <textarea rows="5" cols="25" placeholder="Message will be recovered here."></textarea>
          </div>
        <div style={{width: '300px', height: '225px', position: 'fixed',
          align: 'center', top: '120px', left: '150px',
          border: '1px solid black', padding: '20px'}}>
          <p style = {{textAlign:'center'}}>
          Image will be uploaded here.</p>
        </div>
        <div style ={{align: 'center-left', position: 'fixed', top: '400px', left: '288px'}}>
          <button onClick={null}>Decode</button>
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