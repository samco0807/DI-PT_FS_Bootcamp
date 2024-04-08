# print("Hello World")
# a=42
# print(type(a))
# b=4.2
# print(type(b))
# print(a+b)


# age=input("Enter your age: ")
# print(age)

# sentence="Hello World\n"
# print(sentence*4)

# calculation=(99^3)*8
# print(calculation)

# 5<3
# "Hello" == "hello"

# computer_brand="Asus"
# print(f"my computer brand is {computer_brand}")

# name="Samuel"
# age=31
# shoes_size=41
# info="I love israeli music"
# sentence= f"my name is {name}. I'm {age}. My shoes are {shoes_size} and {info}."
# print(sentence)

# a=6
# b=7
# if a>b:
#     print("Hello World")
# else:
#     print("b is greater and a")

# my_name="Samuel"
# name=input("Enter your name: ")
# if name==my_name:
#     print("Yeah! We have the same name!")
# else:
#     print("we don't not have the same name.")

# user_height=int(input("Enter you height in cm: "))
# height_ride=145
# if user_height<height_ride:
#     print("You are not tall enough to ride")
# else:
#     print("You can ride")

# user_string="HelloWorld"
# substring=""
# user_string_lenth=len(user_string)
# if user_string_lenth<10:
#     print("string not long enough")
# elif user_string_lenth>10:
#     print("string too long")
# else:
#     print("perfect string")

# print(user_string)
# print (user_string[0], user_string[-1])

# for i in user_string:
#     substring+=i
#     print(substring)

my_fav_numbers=set()
my_fav_numbers.add(3)
my_fav_numbers.add(5)
my_fav_numbers.add(6)
# print(my_fav_numbers)

my_fav_numbers.remove(6)
# print(my_fav_numbers)

friend_fav_numbers=set()
friend_fav_numbers.add(7)
friend_fav_numbers.add(8)

fav_numbers=f"{my_fav_numbers.union(friend_fav_numbers)}"
# print(fav_numbers)

# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# Answer: No, tuple are immuable

# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# print(basket)
# basket.pop(0)
# print(basket)
# basket.pop(-1)
# print(basket)
# basket.append("Kiwi")
# print(basket)
# basket.insert(0, "Apples")
# print(basket)
# apples=basket.count("Apples")
# print(apples)
# basket.clear()
# print(basket)

my_username="Samuel"


# while True:
#     username_input=input("Enter your username: ")
#     if username_input!= my_username :
#         print("Try again. Enter your username: ")
#     else:
#         print("You got the same name")
#         break

# user_favorite_fruits_list=[]
# user_favorite_fruits=input("Enter your favorite fruits separated by comma: ")
# user_favorite_fruits_list=user_favorite_fruits.split(", ")
# # print("Here are your favorite fruits : ", user_favorite_fruits_list)

# user_fruits_choice=input("Choose a fruit: ")
# if user_fruits_choice in user_favorite_fruits_list :
#     # print("You chose one of your favorite fruits! Enjoy!")
# else:
#     # print("You chose a new fruit. I hope you enjoy")

# number=int(input("Enter a number: "))
# length=int(input("Enter a length: "))

# list_multiples=[]

# for i in range(1, length+1):
    
#     if i%number==0
#     list_multiples.append(i)
#     print(list_multiples)

# word=input("Enter a string: ")
# for i in word:
#     if i[index]=i[index+=]
#     word.remove(i[index+1])
#     print(word)

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# # zip the keys and values
# result=zip(keys, values)

# # Creating empty dictionnary
# dict={}

# # Appeding the zip to the dictionnary using update
# dict.update(result)

# print(dict)

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_free=0
# total_teens=0
# total_adults=0

# for name, age in family.items():
#     if age<3:
#         ticket=0;
#         total_free+=0
#         print(f"{name} ticket is free.")
#     elif 3<=age<12:
#         ticket=10
#         total_teens+=10
#         print(f"{name} has to pay $10.")
#     else:
#         ticket=15
#         total_adults+=15
#         print(f"{name} has to pay $15.")

# total=total_teens+total_free+total_adults
# print(f"The family final cost is {total}")

# brand={
# "name": "Zara",
# "creation_date": 1975,
# "creator_name": "Amancio Ortega Gaona" ,
# "type_of_clothes": ["men", "women", "children", "home"],
# "international_competitors": ["Gap","H&M", "Benetton"] ,
# "number_stores": 7000,
# "major_color":{
#     "France": "blue", 
#     "Spain": "red", 
#     "US": ["pink", "green"]
#     }
# }

# # 3. Change the number of stores to 2.
# brand["number_stores"]=2
# print(brand)

# # 4. Print a sentence that explains who Zaras clients are.
# print("Client Zara are", brand['type_of_clothes'])

# # 5. Add a key called country_creation with a value of Spain.
# brand["country_creation"]="Spain"

# # 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# key_to_check = "international_competitors"
# if key_to_check in brand:
#     print(f"The key {key_to_check} is in the dictionnary.") 
#     brand["international_competitors"].append("Designal"),
#     print(brand["international_competitors"])
# else:
#     print(f"The lkey {value_to_check} is not in the dictionnary.")

# # 7. Delete the information about the date of creation.
# del brand["creation_date"]

# # 8. Print the last international competitor.
# last_competitor=brand['international_competitors'][-1]
# print(last_competitor)

# # 9. Print the major clothes colors in the US.
# major_color_us=brand['major_color']['US']
# print(major_color_us)

# # 11. Print the keys of the dictionary.
# for keys, values in brand.items():
#     print(keys)

# # 12. Create another dictionary called more_on_zara with the following details:
# more_on_zara={
# "creation_date": 1975,
# "number_stores": 10000
# }

# brand.update(more_on_zara)
# print(brand)

# print(brand['number_stores'])

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# dict={}
# for user, index in enumerate(users):
#     dict[user]=index
#     print(dict)


# word=input("Enter a word: ")
# print(word)
# # create an empty dictionnary
# dict={}

# for index, letter in enumerate(word):
#     if letter in dict:
#         dict[letter].append(index)
#     else:
#         dict[letter]=[index]

# print(dict)

# The key is the product, the value is the price

items = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"
wallet_int=int(wallet)
product=[]
for item in items:
    if item[value]<wallet_int:
        dict[item]=[product]
        print(product)
    else:
        print("the item is too expensive for you")
