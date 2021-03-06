const issues = [
  {
    id: 1,
    status: "Open",
    owner: "Ravan",
    created: new Date("2016-08-15"),
    effort: 5,
    completionDate: undefined,
    title: "Error in console when clicking Add"
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    created: new Date("2016-08-15"),
    effort: 14,
    completionDate: new Date("2016-08-30"),
    title: "Missing bottom border on panel"
  }
];

var contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the Issue Filter.</div>;
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>
          {issue.completionDate ? issue.completionDate.toDateString() : ""}
        </td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => (
      <IssueRow key={issue.id} issue={issue} />
    ));
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  // NEW: Added constructor.
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // NEW: added a method to handle adding a new issue.
  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date(),
    });
    // Clear the form for the next input.
    form.owner.value = '';
    form.title.value = '';
  }

  // NEW: added a form to provide input for new tasks.
  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    // NEW: we initialize the issues to the empty array.
    this.state = { issues: [] };

    // NEW: rewrote this to be simpler.
    this.createTestIssue = this.createTestIssue.bind(this);
    setTimeout(this.createTestIssue, 2000);
  }

  // NEW: this is part of the life cycle methods for a
  // component. It will be called after the component
  // has been mounted in the DOM.
  componentDidMount() {
    this.loadData();
  }

  // NEW: simulates setting the state after an asynchronous
  // call. This is how it will work when we talk to the
  // server API later on.
  loadData() {
    setTimeout(() => {
      this.setState({
        issues: issues
      });
    }, 500);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  createTestIssue() {
    this.createIssue({
      status: 'New',
      owner: 'Pieta',
      created: new Date(),
      title: 'Completion date should be optional',
    });
  }

  // NEW: added a button with an event handler to create a
  // new test issue.
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <button onClick={this.createTestIssue}>Add</button>
        <hr />
        <IssueAdd />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<IssueList />, contentNode);
