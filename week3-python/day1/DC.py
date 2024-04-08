# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

user_string=input("")
user_string_lenth=len(user_string)
# if user_string_lenth<10:
#     print("string not long enough")
# elif user_string_lenth>10:
#     print("string too long")
# else:
#     print("perfect string")

print(user_string)
print (user_string[0], user_string[-1])


substring=""
for i in user_string:
    substring+=i
    print(substring)


