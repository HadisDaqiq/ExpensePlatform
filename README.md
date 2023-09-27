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
