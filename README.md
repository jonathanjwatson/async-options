# async-options


## What is it? Why is it a problem?

One task has to complete before the next task can start. 

i.e. If I want to view employees by department, I must first run a query to get all departments. 

If using inquirer, I have to prompt the user, wait for the response, then run the query, then display the options to the user, then accept the user's selection, then . . .


## Options to Resolve Asynchronicity

### Callbacks

### Promises

### Async/Await