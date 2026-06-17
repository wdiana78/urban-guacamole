# JavaScript Variables

## 1. What Are JavaScript Variables?

Variables are used to store and refer to values using a name.

For example, when we write `let x = 23`, x is the name given to the value 23.
Instead of writing 23 repeatedly, the variable x can be used to represent that value.

**Real life example:**
It is like saving someone's contact as "Mum" on a phone. Instead of memorizing the phone number, the name "Mum" is used to find the number.
The name is the variable, and the number is the value.


## 2. How Do You Declare Variables in JavaScript?

Variables are declared using  let , const  or var.  var  is an older way of declaring variables and is generally avoided in modern JavaScript.

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
    let totalScore5 = 100

    
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



## 6. Primitive Data Types

A primitive data type stores a single simple value. JavaScript has the following primitive types:

### Numbers
Numbers can be whole, floating point, or negative.

    let number1 = 67        // whole number
    let number2 = 84.34     // floating point
    let number3 = -34       // negative number

The biggest number JavaScript can hold is 1.7976931348623157 × 10^308. This is the largest finite number. Beyond this, JS returns Infinity. 

### Strings
A string stores a sequence of characters. There are 3 ways to create one:

1. Double quotes: `let str1 = "I am Diana"`
2. Single quotes: `let str2 = 'I am Diana'`
3. Backticks: `let str3 = \`I am Diana\``

Different quote types allow strings to contain other quote characters without escaping.

 e.g. `'Daniel said "23 is a number"'`

Note: `"23"` is a string not a number because it has quotes around it.

**Escape sequences** are special characters used inside strings:
 
Escape sequences
\n new line
\t tab
\' single quote escape
\" double quote escape



**Backticks** make it possible to:

 

 - Press Enter for a multiline string without getting an error 
 - Use both single and double quotes inside freely without *escaping*

### Boolean
Stores either `true` or `false`.

    let johnIsMale = true
    console.log(johnIsMale) //true
    
    let johnIsMarried = false
    console.log(johnIsMarried) //false

### Null
`null` represents an intentional absence of a value. It is assigned manually when a value is currently empty or unknown.

    let customerAge = null

Real world example: `let patientDetails = null` while waiting for a server response. Once data arrives it becomes an object. 

If a variable has been declared but no value has been assigned, JavaScript automatically gives it the value **undefined**.

### Undefined
`undefined` means a variable has been declared but no value has been assigned.

The JS engine sets it automatically.

    let undefinedVal2;   // js engine sets it to undefined

**Difference between null and undefined:**
-  Null - you set it yourself when you want a variable to have no value.

- `undefined` - the JS engine sets it automatically. Avoid manually assigning `undefined`.`undefined`. 

Use `null` when intentionally representing an empty value.
