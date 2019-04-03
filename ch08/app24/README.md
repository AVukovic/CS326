# Application 24 - Programmatic Navigation

Chapter 8 - React Router

The goal of this version of the application is to provide page programmatic navigation and nested routes.

* Now that we have the basics for react router, we would like to provide programmatic navigation. We first refactor `src/App.jsx` to use `withRouter`. This function adds an additional prop to the `IssueList` component when we navigate to it. To do this, we import the `withRouter` function and then use that function as part of the `IssueList` route. 
* Next, we define a method called `setFilter()` that will allow us to append a filter query such as `{ status: 'Open' }` to the location path and "push" it on the router. This will allow us to programmatically change the router path. We also pass the `setFilter()` method to the `IssueFilter` component so that it can make a change to the router when we click on a filter.
* Now, we modify `/src/IssueFilter.jsx` to create a constructor that binds three new methods, `setFilterOpen()`, `setFilterAssigned()`, and `clearFilter()` to call the passed in `setFilter()` method from `IssueList` with an appropriate filter object to cause the router to change with the appropriate filter. We replace the `<Link>` tag to be a regular `<a>` tag with an event handler to call the appropriate "filter" method to filter the list of issues. 