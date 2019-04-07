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
    this.state = {orgMsg: 'Enter message here!', value: 0, codedMsg: ''};
    this.clickButton = this.clickButton.bind(this);
    this.caesar = this.caesar.bind(this);
    this.update = this.update.bind(this);
    this.reference = this.reference.bind(this);
    let text = null;
  }

  caesar(){
    let offset = 1 + (Math.random() * 24);
    let msg = this.state.orgMsg;
    let newmsg = "";
    let letter = 0;
    let min = 0; 
    let max = 0;
    for (let i = 0; i < msg.length; i++){
      let value = msg.charCodeAt(i);
      if (value == 32) { //account for whitespace in messages
        newsmsg.push(value);
        continue;
      }
      else if (value >= 90){ //lowercase letters
        min = 97;
        max = 122;
      }
      else if (value >= 65){ //uppercase letters
        min = 65;
        max = 90;
      }
      letter = min + (((max - value) + offset) % 25);
      newmsg.concat(String.CharCodeFrom(letter));
    }
    this.setState({value: offset});
    this.setState({codedMsg: newmsg});
  }

  clickButton(){
    this.caesar();
  }

  reference(element){
    this.text = element;
  }

  update(){
    if (this.text) this.setState({orgMsg: this.text.value})
  }

  render() {
    return (
      <div>
        <div style={{textAlign:'left', align: 'left', position: 'fixed', top: '150px', left: '200px',
          fontsize: '16', padding: '10px'}}>
          <textarea rows="5" cols="25" name = "InputMessage" 
                    placeholder="Enter Message To Be Encoded" value= {this.state.orgMsg}
                    onChange = {this.update()} ref={this.reference()}> </textarea>
          </div>
          <div style ={{align: 'center-left', position: 'fixed', top: '255px', left: '348px'}}>
          <button onClick={() => {this.clickButton()}}>Encode</button>
        </div> 
        <div style={{width: '300px', height: '225px', textAlign: 'center',
          align: 'right', position: 'fixed', top: '140px', left: '700px',
          border: '1px solid black', padding: '20px'}}>
          <p>{this.state.orgMsg}</p>
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
