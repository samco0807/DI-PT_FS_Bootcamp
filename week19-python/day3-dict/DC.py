
# Challenge1:

word=input("Enter a word: ")
print(word)
# create an empty dictionnary
dict={}

for index, letter in enumerate(word):
    if letter in dict:
        dict[letter].append(index)
    else:
        dict[letter]=[index]

print(dict)

# Challenge2:

# Shop with the articles
products = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

money = "$300"
# convert prices without currency and comma
wallet=int(money[1:].replace(",",""))

# Create an empty array to store the affordable products
basket=[]

# For every item of the products dictionary
for item, value in products.items():
  price=int(value[1:].replace(",","")) # convert prices without currency and comma
  if price<=wallet: # if the value of the key is less or equal to the wallet
    basket.append(item) # Add the product in the basket array
  elif price>wallet: # if the value of the product is too expensive
    print("the item is too expensive for you")
  else: # if all the products are too expensive
    print("you cannot buy anything from the store")

print(basket)