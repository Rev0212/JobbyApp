# Jobby App

A ReactJS application for job listings and search with authentication and dynamic filtering. This app includes routes for Login, Home, Jobs, Job Item Details, and Not Found. Each route has specific functionality, with API integrations for job data and user management.Its made from the assignment of Nxtwave

## Features

### Login Route
- **Invalid Credentials**: Displays error message when credentials are incorrect.
- **Successful Login**: Navigates to Home Route on valid credentials.
- **Route Protection**: Unauthenticated users accessing protected routes (Home, Jobs, Job Item Details) are redirected to Login. Authenticated users are redirected to Home when accessing Login.

### Home Route
- **Authenticated Access**: Only authenticated users can view the Home route.
- **Find Jobs**: Redirects to Jobs Route when clicked.

### Jobs Route
- **Profile Data**: Fetches and displays user profile data via HTTP GET request. Shows loader while fetching.
- **Job List**: Fetches job listings with filters for employment type, salary range, and search. Displays loader during data fetch.
- **Failure Handling**: Shows a failure view on API errors, with retry options.
- **Filtering and Search**:
  - **Search**: Fetches jobs by search term.
  - **Employment Type**: Fetches jobs by selected employment type(s).
  - **Salary Range**: Fetches jobs by selected salary range.
  - **Combined Filters**: Applies all selected filters in a single API request.
  - **Empty Results**: Shows "No Jobs" view when no jobs match the filters.
- **Job Details**: Navigates to Job Item Details when a job is clicked.

### Job Item Details Route
- **Job Details Fetch**: Retrieves job details and similar jobs.
- **Failure Handling**: Displays failure view on API error with retry option.
- **Visit Company Website**: Opens the job's company website in a new tab.

### Not Found Route
- **Invalid Path Handling**: Redirects to Not Found Route for non-existent URLs.

### Header
- **Navigation**:
  - **Logo**: Redirects to Home.
  - **Home & Jobs Links**: Redirects to respective routes.
  - **Logout**: Redirects to Login.

## App Data
- **Employment Types**: Provided list of employment type objects with `employmentTypeId` and `label`.
- **Salary Ranges**: Provided list of salary range objects with `salaryRangeId` and `label`.

## API Requests & Responses
The app interacts with Profile, Jobs, and Job Details API endpoints, implementing GET requests and handling responses.
- **Login API** : https://apis.ccbp.in/login
- **Jobs API** : https://apis.ccbp.in/jobs
- **Profile API** : ttps://apis.ccbp.in/profile

## User Credentials
- **Test User Credentials for Login**:
  - Username: `rahul`
  - Password: `rahul@2021`

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app with `npm start`.

## Contributing
Feel free to open issues or submit pull requests for improvements.
