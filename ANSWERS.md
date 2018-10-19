<!-- Answers to the Short Answer Essay Questions go here -->

1.	What is the purpose of using _sessions_?
*	`Sessions` keep users logged in, or authenticated, when they perform an action like reloading the page. By using sessions, you don't have to log in every time you request a new page or resource.
---
2.	What does bcrypt do to help us store passwords in a secure manner?
*	The `bcrypt` function hashes passwords with a salt in order to resist against certain kinds of attacks like brute-force and dictionary attacks.
---
3.	What does bcrypt do to slow down attackers?
*	It `hashes` your passwords using a `salt`(additional random data). This increases the computational demand, thus increasing the amount of time, an attacker might need to theoretically guess your password.
---
4.	What are the three parts of the JSON Web Token?
*	`Header`
*	`Payload`
*	`Signature`
