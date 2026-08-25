# Example variables
x = 10                 # Integer
y = 3.14               # Float
z = "Hello"            # String
a = True               # Boolean <True, False>
b = [1, 2, 3, 4]       # List <Array> Mutable <By value>
c = {1, 2, 3}          # Set
d = (1, 2, 3)          # Tuple <Lists> Immutable
e = {"key": "value"}
# Dictionary <Object; JS>
# For dictionary use bracket notation


# Determining the types
# `y is ${}`
# Determining the types

print("X is ", x, "Its type ", type(x))              # Output: <class 'int'>
print(f"Y is {y} its type is {type(y)}")              # Output: <class 'float'>
print("Z is ", z, "Its type ", type(z))              # Output: <class 'str'>
print(f"A is {a} its type is {type(a)}")              # Output: <class 'bool'>
print("B is ", b, "Its type ", type(b))              # Output: <class 'list'>
print(f"C is {c} its type is {type(c)}")              # Output: <class 'set'>
print("D is ", d, "Its type ", type(d))              # Output: <class 'tuple'>
print(f"E is {e} its type is {type(e)}")              # Output: <class 'dict'>