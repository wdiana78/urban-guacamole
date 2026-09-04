"""
Abstractions.

Bank Class:
- Deposits
- Withdrawal
- Show account details
- Getter and setter

Possible account functions:
- Login account
- Create account
    - Deposit
    - Withdrawal
    - Account balance
"""


"""
Class properties:
- Belong to the class.
- Shared by instances of the class.

Static method:
- A function that belongs to the class but does not need
  access to the class or an individual object.

Class method:
- A function that belongs to the class and receives the class
  itself through `cls`.

Why would you want to use a class property?
"""


class BankAccount:

    clients = 0
    bank_name = "Post Bank"

    def __init__(self, name, balance, account_no):
        self.name = name
        self._balance = balance
        self.account_no = account_no

        BankAccount.add_client()

    # Property used to control how the balance is read.
    @property
    def balance(self):
        print("Somebody tried to read the account balance")
        return self._balance

    # Setter used to control how the balance is updated.
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for the new balance")
            return

        if value < 0:
            print("The new balance must not be less than 0")
            return

        self._balance = value

    # Instance methods operate on a specific BankAccount object.
    def deposit(self):
        pass

    def withdrawal(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")

    # Static method:
    # Does not receive `self` or `cls`.
    @staticmethod
    def calculate_interest(amount, year):
        rate = 10
        interest_per_year = amount * (rate / 100)
        interest_total = interest_per_year * year
        total = amount + interest_total

        print(
            f"If you take a loan of ${amount}, "
            f"interest rate per year {interest_per_year}"
        )
        print(
            f"Total interest {interest_total}, "
            f"total to pay {total} after {year} years"
        )

    # Class method:
    # Receives the class itself through `cls`.
    @classmethod
    def add_client(cls):
        cls.clients = cls.clients + 1


john = BankAccount(
    name="John Mwangi",
    balance=0,
    account_no="223344223"
)

john.show_account_details()

print("Total clients", BankAccount.clients)

samuel = BankAccount(
    name="Samuel",
    balance=0,
    account_no="223344223"
)

print("Total clients", BankAccount.clients)

BankAccount.calculate_interest(50000, 3)