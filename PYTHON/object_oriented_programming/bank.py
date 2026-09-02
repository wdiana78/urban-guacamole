"""
Object oriented programming.
<JS, Python, C++, JAVA, etc>
________________________________

Concept in programming to make
work easy by using principles.

1. Encapsulation
   - keeping data and methods <functions>
     inside a class
     while restricting direct access to internal data.

2. Abstraction
   - Hiding unnecessary complexity or implementation details.

3. Inheritance
   - one class to reuse or extend properties
     and methods of another class.

4. Polymorphism
   - appearing in different forms. Method can
     have different behaviours.
________________________________

JS and Python are object oriented.
→ number.toString(), string.toLowerCase()
"""


"""
→ class →
  - blueprint for an object.

→ class could be an architectural drawing of a house.
  object → implementation of the drawing.
"""


# is to have the name Capitalized
# fields <properties>

class House:
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 120
    owner = ""
    location = ""
    architect = "KIMANI"


    # CONSTRUCTOR
    # __init__ is the constructor
    # constructor runs automatically when an object is created
    # self = the particular object being created
    # owner and location = information given to the constructor
    def __init__(self, owner, location):
        print("Class house created - initializer called")
        self.owner = owner
        self.location = location


    # METHOD 1: config
    # self = the particular object using this method
    # owner and location = information given to the method
    def config(self, owner, location):
        print("Config method has run")
        self.owner = owner
        self.location = location


    # METHOD 2: print_self
    # self = the particular object using this method
    def print_self(self):
        print(self)
        print(self.__dict__)  # dictionary containing the object's own properties


# When access object properties use dot notation
# Bracket notation is for dictionary


# ---------------- MACRINE'S HOUSE ----------------

# Instantiate class → create an object from a class
macrine_house = House(owner="Macrine", location="Kikuyu")

# The constructor runs automatically when the object is created
# macrine_house.__init__()
# macrine_house.owner = "Macrine"
# macrine_house.location = "Kikuyu"

# We can also change the properties using the config method
# macrine_house.config(owner="Macrine", location="Kikuyu")

print(f"Macrines House Owner {macrine_house.owner}")
print(f"Macrines Location {macrine_house.location}")
print(f"Macrines House Bedrooms {macrine_house.bedrooms}")
print(f"Macrines House Bathrooms {macrine_house.bathrooms}")
print(f"Macrines House Floors {macrine_house.floors}")
print(f"Macrines House Area {macrine_house.area}")
print(f"Macrines House Designer {macrine_house.architect}")

print("Printing macrines house")
macrine_house.print_self()

print("End of print macrines")


# ---------------- DANIEL'S HOUSE ----------------

# Instantiate class → create another object from the class
daniel_house = House(owner="Daniel", location="Muranga")

# The constructor runs automatically when the object is created
# daniel_house.__init__()
# daniel_house.owner = "Daniel"
# daniel_house.location = "Muranga"

# We can also change the properties using the config method
# daniel_house.config(owner="Daniel", location="Muranga")

print(f"Daniels House Owner {daniel_house.owner}")
print(f"Daniels Location {daniel_house.location}")
print(f"Daniels House Bedrooms {daniel_house.bedrooms}")
print(f"Daniels House Bathroom {daniel_house.bathrooms}")
print(f"Daniels House Floors {daniel_house.floors}")
print(f"Daniels House Area {daniel_house.area}")
print(f"Daniels House Designer {daniel_house.architect}")

print("Printing daniels house")
daniel_house.print_self()

print("End of print daniels")