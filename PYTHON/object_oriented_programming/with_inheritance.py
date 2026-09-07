"""
Shape class.
    properties and methods common to all shapes.
    
rectangle can inherit from the square and square can inherit from rectangle
"""

class Shape:
    def __init__(self,shape_name):
        self.shape_name=shape_name

    def describe(self):
        print(f"This is a {self.shape_name}")

    def display_info(self):
        print("-----------------------------------------")
        print(f"Shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("-----------------------------------------")


#inheritance class Name (<class inheriting from>)
#Rectangle
class Rectangle(Shape):

    def __init__(self,length,width):
        #name shape shape
        #super <class we are inheriting from>
        #self <specific object created the class>
        super().__init__(shape_name="Rectangle")

        self.length=length
        self.width=width

    def area(self):
        return self.length*self.width

    def perimeter(self):
        return 2*(self.length+self.width)


r1=Rectangle(length=20,width=12)

print("Shape name",r1.shape_name) #shape name
print("Area is",r1.area()) #coming from the Rectangle class Rectangle. area <>
r1.describe() # coming from the Shape class
r1.display_info()# coming from the shape class



#Square
class Square(Rectangle):
    #square is inheriting from rectangle class >super class

    def __init__(self, side):
        super().__init__(length=side,width=side)
        self.shape_name="Square"
       

s1=Square(side=20)


print("Shape name",s1.shape_name) #shape name
print("Area is",s1.area()) #coming from the Rectangle class Rectangle. area <>
s1.describe() # coming from the Shape class
s1.display_info()# coming from the shape class





#Triangle
class Triangle(Shape):

    def __init__(self,base,height,side_a,side_b,side_c):
        super().__init__(shape_name="Triangle")

        self.base=base
        self.height=height
        self.side_a=side_a
        self.side_b=side_b
        self.side_c=side_c

    def area(self):
        return 0.5*self.base*self.height

    def perimeter(self):
        return self.side_a+self.side_b+self.side_c


t1=Triangle(base=10,height=8,side_a=10,side_b=8,side_c=8)


print("Shape name",t1.shape_name) #shape name
print("Area is",t1.area()) #coming from the Triangle class
t1.describe() # coming from the Shape class
t1.display_info() # coming from the Shape class