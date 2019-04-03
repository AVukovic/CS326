// NEW: added the import for react.
import React from 'react';
import { Link } from 'react-router';

export default class IssueFilter extends React.Component {
  render() {
    const Separator = () => <span> | </span>;
    return (
      <div>
        <Link to="/issues">All Issues</Link>
        <Separator />
        <Link to={{ pathname: '/issues', query: { status: 'Open' } }}>
          Open Issues
        </Link>
        <Separator />
        <Link to={{ pathname: '/issues', query: { status: 'Assigned' } }}>
          Assigned Issues
        </Link>
      </div>);
  }
}