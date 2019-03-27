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
        <div style={{width: '200px', height: '200px',
          align: 'center', position: 'fixed', top: '135px', left: '55px',
          border: '3px solid black', padding: '20px'}}>
          <p style = {{textAlign:'center'}}>Reference photo 1</p>
        </div>

        <div style={{textAlign:'left', align: 'center', position: 'fixed', top: '130px', left: '350px',
          fontsize: '16', padding: '20px'}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Vestibulum urna ante, elementum volutpat purus non, sodales lobortis eros.<br />
          Aliquam id hendrerit urna, a luctus nulla. <br />
          Duis non elit sed dolor auctor posuere a et felis. <br />
          Donec convallis dui non auctor semper. <br />
          Etiam dignissim lobortis felis. <br />
          Mauris a ligula eget dui sagittis accumsan. <br />
          Nulla facilisis risus mauris, hendrerit tempus sem viverra in. <br />
          Sed augue quam, tristique sit amet volutpat non, porttitor et eros. <br />
          Cras eleifend, purus aliquet tempus condimentum, <br />
          ligula justo fringilla sapien, vel posuere ipsum turpis vitae mi. <br />
          <br />
          Sed turpis dui, faucibus et libero at, condimentum viverra ipsum. <br />
          Sed et nibh ut lorem egestas eleifend. <br />
          Vivamus convallis ipsum nec justo tempor rutrum.</p>
        </div>

        <div style={{width: '200px', height: '200px',
          align: 'center', position: 'fixed', top: '275px', left: '885px',
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
