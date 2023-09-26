# ExpensePlatform
Repository Description
This repository contains the data models and structures for managing user expenses. It provides an efficient way to create, delete, and edit user records, as well as handle expenses and categories. The data models are designed for optimal performance and scalability.

Users Data Model
The users collection represents the structure of user records. Each user is identified by a UUID and has the following attributes:

first_name: The first name of the user.
last_name: The last name of the user.
expenses: A set of UUIDs representing the user's expenses.
totalExpenses: The total expenses of the user.
By organizing the data model in this way, we achieve constant time complexity for managing user records.

Expenses Data Model
The expenses collection represents the structure of expense records. Each expense is identified by a UUID and has the following attributes:

description: The description of the expense.
user_uuid: The UUID of the user associated with the expense.
categories: A list of categories to which the expense belongs.
name: The name of the expense.
cost: The cost of the expense.
Creating, editing, and deleting expenses are constant time operations. When modifying or creating an expense, the corresponding user record is updated, and the information is also sent to the categories section.

Categories
The categories section provides a way to organize expenses into different categories. Each category is represented by a key-value pair, where the key is the category name and the value is a set of expense UUIDs belonging to that category.

When displaying expenses to the user, we retrieve the UUIDs in each category and pull the corresponding expense information. As we iterate through the data, the time complexity becomes linear.

Please refer to the code and documentation for more details on how to use and integrate these data models into your project.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

