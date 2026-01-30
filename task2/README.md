API:  https://jsonplaceholder.typicode.com/users/

<!-- How to run: -->
1. npm install
2. npm run dev

<!-- Explanation: -->
UseEffect is used to fetch user data when the component mounts or when userId changes.
AbortController is used to cancel the fetch request cleanup to prevent memory leaks.
userId is included in the dependency array so a new request is made when it changes.