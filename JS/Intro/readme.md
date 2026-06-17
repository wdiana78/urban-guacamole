# JavaScript Variables

## 1. What Are JavaScript Variables?

Variables are used to refer to values using a name.
For example, when we write `x = 23`, x is the name given to the value 23.
Instead of writing 23 repeatedly, the variable x can be used to represent that value.

**Real life example:**
It is like saving someone's contact as "Mum" on a phone. Instead of memorizing the phone number, the name "Mum" is used to find the number.
The name is the variable, and the number is the value.


## 2. How Do You Declare Variables in JavaScript?

Variables are declared using  let , const. Var  is an older way of declaring variables and is generally avoided in modern JavaScript.

**let** is used when the value can change.

    let age = 23
    let score = 50

**const** is used when the value will not change

    const country = "Kenya"
    const pi = 3.14


## 3. Rules For Creating Variables

1. Spaces are not allowed.
2. Only letters, digits, underscores, and dollar signs can be used.
3. A variable name cannot start with a number.
4. JavaScript keywords like `let`, `const`, and `if` cannot be used as variable names.
5. Variable names are case sensitive, for instance,  `myAge` and `myage` are not the same thing.
    
    **valid names**
    
    let myAge = 23
    let _count = 0   
    let totalscore 5
    
    
**Invalid names:**

let my age = 23    // spaces not allowed
let 5score = 100   // cannot start with a number
let let = "hello"  // let is a keyword


## 4. Variable Naming Styles

### Pascal Case
The first letter of every word is capitalized, including the first word.

    MyAgeInTheNext5Years = 45
    TotalAmountDue = 5000

Used mainly for JavaScript classes.

### Camel Case
Similar to Pascal Case, but the first letter is lowercase while the first letter of each following word is capitalized.

    myAgeInTheNext5Years = 45
    totalAmountDue = 5000
    
This is the recommended naming style for regular variables and functions in JavaScript.

### Snake Case
All letters are lowercase and words are separated using underscores.

    my_age_in_the_next_5_years = 45
    total_amount_due = 5000

Mostly used in Python.



## 5. Summary

Variables are labels used to store and refer to values without repeatedly writing the actual value.
`let` is used when a value can change, while `const` is used when a value should remain the same.
Variable names must follow certain rules, such as not containing spaces, not starting with numbers, and not using JavaScript keywords.
Different programming languages and situations use different naming styles. JavaScript commonly uses camelCase for variables, PascalCase for classes, and snake_case is mostly used in Python.
