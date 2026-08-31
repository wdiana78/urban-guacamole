"""
Decorators are powerful tools for
modifying or extending the behaviour of functions
or methods without changing their code.
"""

"""
A decorator function should take
another function as an argument/parameter.
It should have a wrapper function.
This function should be able to call the passed function.

To use a decorator, you use
@<decorator function> before the function definition.
"""


def my_deco(func):
    def wrapper():
        print("Before we call the function")
        func()
        print("After we call the function")

    return wrapper


def hello():
    print("Hello world function executes")
    print("Hello World")


@my_deco
def french_hello():
    print("french hello function")
    print("Bonjour World")


# → french_hello → my_deco(french_hello) → wrapper() → french_hello
# → hello() → hello

french_hello()