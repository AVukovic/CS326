# Application 23 - Basic React Router Routes

Chapter 8 - React Router

The goal of this version of the application is to provide page transitions between different views using the React Router component.

* First, we need to install the `react-router` library:
  * `npm install --save-dev react-router@2.7.0`, pay attention to the version of the library.
* Next, add `react-router` to the list of libraries in the `webpack.config.js` file that will compiled into the `vendor.bundle.js` file.
* Created `src/IssueEdit.jsx`. This is a view that is used to edit an issue.
* Refactored `src/App.jsx` to use React Router.
* Refactored `src/IssueList.jsx` in the `IssueRow` react component to turn the id of the issue into a link to the new view (IssueEdit) for that issue. We also shortened the id to make it easier to read.
* Refactored `server.js` to filter issues when a query is received with a GET request on route `/api/issues`. The query "filter" parameter is passed along to the `find()` query to MongoDB to filter the results that are returned.
* Refactored `src/IssueFilter.jsx` to include hard-coded links to filter the results in the issue list.
* Refactored `src/IssueList.jsx`. The `IssueList.loadData()` method was modified to pass the search criteria from the `props` to the back-end API.
* Refactored `IssueList` to include the `componentDidUpdate()` lifecycle method. This will allow the issue list to reload after a filter link has been clicked.