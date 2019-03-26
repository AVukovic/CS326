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
            <th style={{textAlign:'center'}}>Encode</th>
            <th style={{textAlign:'right'}}>Decode</th>
            <th style={{textAlign:'center'}}>How It Works</th>
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
        <div style={{textAlign:'left',	width: '300px', height: '50px',
          align: 'center', position: 'fixed', top: '177px', left: '115px',
          border: '3px solid black', fontsize: '16', padding: '20px'}}>
          <p>Enter text to be encoded</p>
        </div>
        <div style={{width: '300px', height: '225px',
          align: 'center', position: 'fixed', top: '177px', left: '550px',
          border: '3px solid black', padding: '20px'}}>
          <p style = {{textAlign:'center'}}>
          Image will be generated here</p>
        </div>
        <div style={{width: '75px', height: '50px', position: 'fixed', top: '307px', 
        left: '380px', border: '3px solid black', bottompadding: '20px', toppadding: '20px'}}>
          <p style = {{textAlign:'center'}}> ENCODE</p>
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
