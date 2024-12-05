# Incorrect Usage of $inc Operator in MongoDB Update Operation
This repository demonstrates an uncommon bug related to the incorrect usage of the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment a numeric field by a specified value. However, if the document to be updated does not exist, the `$inc` operator will not create it. This can lead to unexpected behavior in applications.

The `bug.js` file shows the incorrect usage of `$inc` without the `upsert` option. The `bugSolution.js` file demonstrates the correct usage with the `upsert` option, which creates the document if it does not exist before performing the increment operation.  This ensures that the operation always succeeds regardless of document existence.

## How to Reproduce
1. Clone this repository.
2. Make sure you have MongoDB running.
3. Run `bug.js` and observe the output.
4. Run `bugSolution.js` and observe the output.

## Solution
Always use the `upsert: true` option with the `updateOne` method when you want to create a document if it doesn't exist and then increment a field.