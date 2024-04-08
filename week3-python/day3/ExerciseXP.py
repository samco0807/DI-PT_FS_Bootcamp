# Exercise1:
# Convert the two following lists, into dictionaries.

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# zip the keys and values
result=zip(keys, values)

# Creating empty dictionnary
dict={}

# Appending the result of the zip to the dictionnary using update method
dict.update(result)

print(dict)

# Exercice2:
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_free=0
total_teens=0
total_adults=0

for name, age in family.items():
    if age<3:
        ticket=0;
        total_free+=0
        print(f"{name} ticket is free.")
    elif 3<=age<12:
        ticket=10
        total_teens+=10
        print(f"{name} has to pay $10.")
    else:
        ticket=15
        total_adults+=15
        print(f"{name} has to pay $15.")

total=total_teens+total_free+total_adults
print(f"The family final cost is {total}")

# Exercice3:

brand={
"name": "Zara",
"creation_date": 1975,
"creator_name": "Amancio Ortega Gaona" ,
"type_of_clothes": ["men", "women", "children", "home"],
"international_competitors": ["Gap","H&M", "Benetton"] ,
"number_stores": 7000,
"major_color":{
    "France": "blue", 
    "Spain": "red", 
    "US": ["pink", "green"]
    }
}

# 3. Change the number of stores to 2.
brand["number_stores"]=2
print(brand)

# 4. Print a sentence that explains who Zaras clients are.
print("Client Zara are", brand['type_of_clothes'])

# 5. Add a key called country_creation with a value of Spain.
brand["country_creation"]="Spain"

# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
key_to_check = "international_competitors"
if key_to_check in brand:
    print(f"The key {key_to_check} is in the dictionnary.") 
    brand["international_competitors"].append("Designal"),
    print(brand["international_competitors"])
else:
    print(f"The lkey {value_to_check} is not in the dictionnary.")

# 7. Delete the information about the date of creation.
del brand["creation_date"]

# 8. Print the last international competitor.
last_competitor=brand['international_competitors'][-1]
print(last_competitor)

# 9. Print the major clothes colors in the US.
major_color_us=brand['major_color']['US']
print(major_color_us)

# 11. Print the keys of the dictionary.
for keys, values in brand.items():
    print(keys)

# 12. Create another dictionary called more_on_zara with the following details:
more_on_zara={
"creation_date": 1975,
"number_stores": 10000
}

brand.update(more_on_zara)
print(brand)

print(brand['number_stores'])

