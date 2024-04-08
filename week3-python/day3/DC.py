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