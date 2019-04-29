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
            <a className="nav-link disabled" href="/view02.html">Decode</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view03.html">How it Works</a>
          </li>
      </ul>
    </div>
    );
  }
}

class Body extends React.Component {
  constructor(state) {
    super();
    this.state = {orgMsg: 'Enter message here!', value: 0, codedMsg: ' '};
    this.clickButton = this.clickButton.bind(this);
    this.onChange = this.onChange.bind(this);
    //this.onOffsetChange = this.onOffsetChange.bind(this);
  }

  onChange(event){this.setState({orgMsg: event.target.value}); }
  //onOffsetChange(event){ this.setState({value: parseInt(event.target.value)}); }

  clickButton(event){
    fetch('/get/' + this.state.orgMsg).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({value: data.offset});
          let offset = (26 - this.state.value);
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
          this.setState({codedMsg: newmsg});
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch issues:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
    event.preventDefault();
  }

  render() {
    return (
    <form>
      <div className="row">
        <div className="col-2"></div><div className="col-2"></div>
        <div className="form-group col-4 align-items-center" style={{ textAlign:'center' }}>
            <textarea className="form-control" onChange={this.onChange} 
                      placeholder={this.state.orgMsg} rows="3" style ={{ resize: 'none'}}></textarea>
        </div>
      </div>
      <div className="row">
      <div className="col-2"></div><div className="col-2"></div>
        <div className="form-group col-4 align-items-center" style={{ textAlign:'center' }}>
          <button type="button" className="btn btn-outline-secondary" onClick={this.clickButton}>Decode</button>
        </div>
      </div>
      <div className="row">
      <div className="col-2"></div><div className="col-2"></div>
        <div className="col-4 align-items-center" style={{ textAlign:'center' }}>
          <div class="card">
            <div class="card-body">
              <h6>Decoded Message:</h6>
              <textarea className="border-0" rows='5' cols='20' 
                onChange={this.onChange} value={this.state.codedMsg} 
                style={{ resize: 'none', textAlign: 'center'}}/>
            </div>
          </div>
        </div>
      </div>
    </form>
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