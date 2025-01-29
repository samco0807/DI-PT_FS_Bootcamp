# Exercise1

# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers=set()
my_fav_numbers.add(3)
my_fav_numbers.add(5)
my_fav_numbers.add(6)
print(my_fav_numbers)

my_fav_numbers.remove(6)
print(my_fav_numbers)

friend_fav_numbers=set()
friend_fav_numbers.add(7)
friend_fav_numbers.add(8)

fav_numbers=f"{my_fav_numbers.union(friend_fav_numbers)}"
print(fav_numbers)

# Exercise2:
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# Answer: No, tuple are immuable

# Exercise3:
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
print(basket)
basket.pop(0)
print(basket)
basket.pop(-1)
print(basket)
basket.append("Kiwi")
print(basket)
basket.insert(0, "Apples")
print(basket)
apples=basket.count("Apples")
print(apples)
basket.clear()
print(basket)

# Exercise4:
# Recap – What is a float? What is the difference between an integer and a float?
# integer=14
# float=1.4
list=[1,1.5,2,2.5,3]

# Exercise5
list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for i in list:
    print(i)

for index in list:
    if index%2==0:
        print(index)

# Exercise6:

my_username="Samuel"

while True:
    username_input=input("Enter your username: ")
    if username_input!= my_username :
        print("Try again. Enter your username: ")
    else:
        print("You got the same name")
        break

# Exercise7:
user_favorite_fruits_list=[]
user_favorite_fruits=input("Enter your favorite fruits separated by comma: ")
user_favorite_fruits_list=user_favorite_fruits.split(", ")
# print("Here are your favorite fruits : ", user_favorite_fruits_list)

user_fruits_choice=input("Choose a fruit: ")
if user_fruits_choice in user_favorite_fruits_list:
        print("You chose one of your favorite fruits! Enjoy!")
else:
        # print("You chose a new fruit. I hope you enjoy")





