// This is a place holder for the initial application state.

//import NavBar from './NavBar.jsx';
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
  constructor(state) {
    super();
    this.state = {msg: 'Empty'}
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton(){
    this.setState({msg: "Image would be uploaded here"});
  }

  render() {
    return (
      <div>
        <div style={{textAlign:'left', align: 'left', position: 'fixed', top: '150px', left: '200px',
          fontsize: '16', padding: '10px'}}>
          <textarea rows="5" cols="25" name = "InputMessage" placeholder="Enter Message To Be Encoded"></textarea>
          </div>
          <div style ={{align: 'center-left', position: 'fixed', top: '255px', left: '348px'}}>
          <button onClick={() => {this.clickButton()}}>Encode</button>
        </div>
        <div style={{width: '300px', height: '225px', textAlign: 'center',
          align: 'right', position: 'fixed', top: '140px', left: '700px',
          border: '1px solid black', padding: '20px'}}>
          <p>{this.state.msg}</p>
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
      <div style={{align:'center'}}>
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
