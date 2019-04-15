// This is a place holder for the initial application state.
// This grabs the DOM element to be used to mount React components.
//import NavTitle from './NavTitle';
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
            <th style={{textAlign:'center'}}><a href="/view01.html">Encode</a></th>
            <th style={{textAlign:'right'}}><a href="/view02.html">Decode</a></th>
            <th style={{textAlign:'center'}}><a href="/view03.html">How It Works</a></th>
        </table>
      </div>
    );
  }
}

class Body extends React.Component {
  constructor(state) {
    super();
    this.state = {orgMsg: 'Enter message here!', value: null, codedMsg: ''};
    this.clickButton = this.clickButton.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){this.setState({orgMsg: event.target.value}); }

  clickButton(event){ //caesarian encoding cypher
    let offset = 1 + (Math.random() * 24);
    let msg = this.state.orgMsg, newmsg = "";
    let letter = 0, min = 0;
    for (let i = 0; i < msg.length; i++){
      let value = msg.charCodeAt(i);
      if (value == 32) { newmsg += " "; continue; }//account for whitespace in messages
      else if (value >= 97){ min = 97; }//account for lowercase letters
      else if (value >= 65){ min = 65; }//account for uppercase letters
      letter = min + ((value + offset - min) % 26);
      newmsg += String.fromCharCode(letter);
    }
    let val = parseInt(offset,10);
    this.setState({value: val});
    this.setState({codedMsg: newmsg});
    fetch('/post', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ _id: newmsg, offset: val})
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div style = {{position: 'fixed', align: 'center', top: '150px', left: '150px'}}>
          <form onSubmit = {this.clickButton}>
            <textarea name="userMessage" rows='5' cols='20' 
                      onChange={this.onChange} value={this.state.orgMsg}/>
            <div style = {{position: 'fixed'}}><input type="submit" value="Encode" /></div>
          </form>
        </div>
        <div style={{width: '300px', height: '225px', textAlign: 'center',
          align: 'right', position: 'fixed', top: '140px', left: '700px',
          border: '1px solid black', padding: '20px'}}>
          <p>{this.state.codedMsg} {this.state.value}</p>
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
        <hr />
        <Body />
      </div>
    );
  }
}


// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
