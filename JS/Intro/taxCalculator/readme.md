// TAX CALCULATION

# Tax Calculator

## Deductions

1. PAYE - tax paid to the government based on your salary bracket

2. NSSF Tier 1 and Tier 2 - social security deductions, capped at a maximum amount

3. SHIF (2.75% of gross salary) - health insurance fund

4. Housing Levy (2.75% of gross salary) - the employer contributes an equal amount

5. Personal Relief - a fixed deduction of KES 2,400

6. Employer -> Employee Contributions - contributions made by the employer on behalf of the employee

## Breakdown

1. Gross Salary - the total amount the employee earns before deductions

2. PAYE Calculation - calculated based on tax brackets

3. NSSF - calculated based on Tier 1 and Tier 2 limits

4. SHIF/SHA - calculated as 2.75% of gross salary

5. Housing Levy - calculated as 2.75% of gross salary

## Gross Salary

- Use `prompt()` to enter the gross salary

- Use `isNaN()` to check whether the input is a number

- Use a conditional (`if` statement) to check whether the value is greater than zero

- Use a `while` loop to keep asking until a valid input is entered

- Once valid, convert the value to a number using `Number()` and store it in `grossMonthlySalary`

## PAYE Calculation

- Use `if` statements to check which tax bracket the gross salary falls into

- When using independent `if` statements, set both a minimum and maximum value using `&&` (AND) to define the range, e.g. `(grossMonthlySalary >= 24001 && grossMonthlySalary <= 32333)`. This prevents multiple brackets from matching the same salary.

- When using an `if/else if` chain, only a maximum value is needed since each condition is checked only if the previous one failed

- Once the bracket is identified, multiply the gross salary by the bracket rate to calculate PAYE

- Store the bracket label in a `tier` variable so you know which bracket was applied

- Use `console.log()` with a template string to display both the PAYE amount and the tier

//TAX CALCULATION

# Tax Calculator

## Deductions

1. PAYE - tax paid to the government based on your salary bracket

2. NSSF Tier 1 and Tier 2 - social security deductions, capped at a maximum

3. SHIF (2.75% of gross) - health insurance fund

4. Housing Levy (2.75% of gross) - employer contributes double the employee amount

5. Personal Relief - fixed deduction of KES 2,400

6. Employer -> Employee - contributions made on behalf of the employee

## Break Down

1. Gross Salary - the total amount the employee earns before deductions

2. PAYE Calculation - calculated based on tax brackets

3. NSSF - calculated based on tier 1 and tier 2 limits

4. SHIF/SHA - calculated as 2.75% of gross salary

5. Housing Levy - calculated as 2.75% of gross salary

## Gross Salary

- Use prompt to enter gross salary

- Use isNaN() to check if the input is a number

- Use a conditional (if statement) to check if it is greater than zero

- Use a while loop to keep asking until we get a valid input

- Once valid, convert to a number using Number() and store in grossMonthlySalary

## PAYE Calculation

- Use if statements to check which tax bracket the gross salary falls in

- When using independent if statements, set both a lower and upper bound using && (AND) to define the range eg (grossMonthlySalary >= 24001 && grossMonthlySalary <= 32333) - this prevents multiple brackets from matching the same salary

- When using if/else if chain, only an upper bound is needed since each condition is only checked if the previous one failed

- Once the bracket is identified, multiply gross salary by the bracket rate to get PAYE

- Store the bracket label in a tier variable so we know which bracket was applied

- Use console.log with a template string to display both paye and tier
