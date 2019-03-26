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
<<<<<<< HEAD
            <th style={{textAlign:'center'}}>Encode</th>
            <th style={{textAlign:'right'}}>Decode</th>
            <th style={{textAlign:'center'}}>How It Works</th>
=======
            <th style={{textAlign:'center'}}><a href="/view01.html">Encode</a></th>
            <th style={{textAlign:'right'}}><a href="/view02.html">Decode</a></th>
            <th style={{textAlign:'center'}}><a href="/view03.html">How It Works</a></th>
>>>>>>> 575d88e37b751da8de0c663b702556b3adc609cb
          </tr>
        </table>
      </div>
    );
  }
}

<<<<<<< HEAD
class Body extends React.Component {
=======
class MyComponent extends React.Component {
>>>>>>> 575d88e37b751da8de0c663b702556b3adc609cb
  constructor() {
    super();
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <div style={{width: '300px', height: '225px',
          align: 'center', position: 'fixed', top: '175px', left: '115px',
          border: '3px solid black', padding: '20px'}}>
          <p style = {{textAlign:'center'}}>
          Image to be decoded</p>
        </div>
        <div style={{textAlign:'left',	width: '300px', height: '50px',
          align: 'center', position: 'fixed', top: '175px', left: '550px',
          border: '3px solid black', fontsize: '16', padding: '20px'}}>
          <p>Decoded text will appear here</p>
        </div>

        <div style={{width: '75px', height: '50px', position: 'fixed', top: '490px', 
        left: '380px', border: '3px solid black', bottompadding: '20px', toppadding: '20px'}}>
          <p style = {{textAlign:'center'}}> UPLOAD</p>
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
=======
      <div style={{ textAlign:'center'}}>
        <Title />
        <Nav />
>>>>>>> 575d88e37b751da8de0c663b702556b3adc609cb
        <hr />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);