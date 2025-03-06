fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

/*  
########################################Promises:---------------------------------------------------------
 Essential for handling asynchronous operations in JavaScript. Promises interact with methods like fetch, resolve, and reject to manage async tasks.

------------------------------------------- Fetch API:------------------------
A modern approach for making network requests, replacing XMLHttpRequest. It was initially designed for browsers but is now supported in Node.js as well.

----------------------------------------Handling Responses with Promises: 
Use methods like then(), catch(), and finally() for chaining responses. Promises return data or errors through resolve/reject.

-------------------------------------------Evolution of Fetch API:--------------------------
 Fetch transitioned from browser-only to being integrated into Node.js. It simplifies asynchronous requests, overcoming the complexity of older methods like XMLHttpRequest.

----------------------------------------- How Fetch Works:---------------------------------------------
 Fetch uses the fetch() method to make HTTP requests, returning promises for cleaner, more readable code. It also allows customization of requests with headers, methods (GET, POST), and body data.

 ------------------------------------------Error Handling:----------------------------------------------
 Fetch handles errors using the catch() block. However, HTTP errors (like 404 or 500) don't trigger automatic rejection and need manual handling.

 -----------------------------------------------Microtasks and Task Queue:------------------------------------
 Fetch operations are given higher priority in JavaScript's task queue, ensuring faster processing compared to other tasks.

 -----------------------------------------------Fetch in Web and Node.js:----------------------------------
Fetch is now supported in both browsers and Node.js, though the two environments handle requests slightly differently.

-----------------------------------------------internal workings of fetch()--------------------------------
fetch operates in two parts:

Part 1 (Memory Management):
Memory is reserved for data, managed with two states: onfulfilled (promise resolved) and onrejected (promise failed).
These states are private and inaccessible directly.
Part 2 (Web Browser/Node):
Handles the network request through a browser or node environment.
A resource is required to send the request.
Handling Network Request:

Response Handling:
If successful, data goes to onfulfilled; if failed, goes to onrejected (e.g., errors like 404 goes to onfulfilled).
Data Flow:

Reserved memory is filled when the request is fulfilled and stored in the response variable.
Role of onfulfilled and onrejected:

These states manage the promise resolution and rejection, controlling how network requests are handled.




*/