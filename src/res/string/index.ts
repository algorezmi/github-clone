const string = Object.freeze({
  title: {
    homeTitle: "Home",
    searchTitle: "Search",
    peopleTitle: "People",
    organizationTitle: "Organization",
  },
  shared: {
    searchDescription: "ErrorSearch all of github for People and Organizations",
    searchTitle: "Find your stuff",
    errorTitle: "Error",
    searchHistory: "Search History",
  },
  errors: {
    networkError: "Please check your internet connection and try again",
    requestTimeout: "Your internet connection isn't stable",
    serverError: "Something went wrong, please contact us",
    generalError: "Something went wrong, please try again later",
    unauthorizedError: "You aren't authorized, please re-login and check again",
    forbiddenError: "You don't have access to perform this request",
    rejectError: "You aren't authorized to perform this request",
    badDataError: "Something went wrong when parsing data, please try again later",
    exceptionError: "Something went wrong when performing request, please contact us",
    resourceNotFound: "Resource does not exist",
  },
})

export default string
