# labs & homework

### A. loops practice

https://gist.github.com/epoch/c05113c6b3666711c773

# Title: Guess The Number

### Activity:
- You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.

### Specification:
- The user should be asked to guess a number
- If the user's guess is correct, the user should see a congratulatory message
- If the user's guess is not correct, the user should be asked to guess the number again.

### Extensions:
- Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
- Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


### B. arrays practice

https://gist.github.com/epoch/8292180

### 1. Create an array of the days of the week
- Create a variable named `days_of_the_week` as an array of the following:
    - Monday
    - Tuesday
    - Wednesday
    - Thursday
    - Friday
    - Saturday
    - Sunday

### 2. My calendar says the first day is Sunday...
- Remove Sunday from the last postion and move it to the first position.  Use array methods.

### 3. Create a new array of the days of the week:
- The first inner array should be the weekdays
- The second inner array should be the weekend days

### 4. Remove either the weekdays or the weekends
Your choice...

### 5. Sort the remaining days alphabetically


### C. crappy calculator as a command line program (sorry)

https://gist.github.com/epoch/c860e4c5126482502fc8

Calculator

Explanation

You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
Specification:

A user should be given a menu of operations
A user should be able to choose from the menu
A user should be able to enter numbers to perform the operation on
A user should be shown the result
This process should continue until the user selects a quit option from the menu
Phase 1

Calculator functionality
Calculator should be able to do basic arithmetic (+,-,x,/)

Phase 2

Advanced Calculator functionality
Calculator should be able to do basic arithmetic (exponents, square roots)
Phase 3

User should be given a menu of Calculator functionality
User should be able to choose intended functionality
Optional Extensions

Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4


### D. groups by (bonus)

https://gist.github.com/epoch/b1414952f7bd1b21945ae34b7310826d

# groups of

write a program in ruby that randomly organize a list of things into groups

1. prompts the user for a list of things and store them inside an array
2. prompts the user for a group size
3. randomly assign things into groups with size given
4. print out the groups in whatever way you like

```
enter a list:
bart,homer,lisa,maggie
enter group size:
2

[['bart','lisa'],['maggie','homer']]
```

if there are left overs with the given group size just assign them to the last group

```
enter a list:
bart,homer,lisa,maggie,ned
enter group size:
2

[['bart','lisa'],['ned','homer','maggie']]
```
