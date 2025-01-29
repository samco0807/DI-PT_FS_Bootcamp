# Exercise1

# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
def display_message():
    course="python"
    # print(f"I'm learning {course}.")

# Call the function, and make sure the message displays correctly.
display_message()

# Exercise2:
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.
def favorite_book(title):
  print(f"My favorite book is {title}.")

favorite_book("Harry Potter")

# Exercise5:

# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt1(size, message):
  print(f"The size of the shirt is {size} and the text is '{message}'.")

# make_shirt(16, "Am Israel Hai")

def make_shirt2(size="L", message="I love Python"):
  print(f"The size of the shirt is {size} and the text is '{message}'.")

def make_shirt(size, message):
  print(f"The size of the shirt is {size} and the text is '{message}'.")

# Bonus: Call the function make_shirt() using keyword arguments.
make_shirt(size="L", message="I love Python")

# Exercise6:

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

def show_magicians():
  for name in magician_names:
    print(name)

show_magicians()

def make_great():
  phrase="The Great "
  for name in range(len(magician_names)) :
    magician_names[name]=phrase+magician_names[name]
    print(magician_names)

make_great()

# Exercise7:

from random import randint

def get_random_temp():
  number = randint(-10,40)

  return f"{number}\u00b0C"

print(get_random_temp())

def main():
  temperature=get_random_temp()
  return f"The temperature right now is {temperature} degrees Celcius"
  if temperature<0:
    return "Brrr, that’s freezing! Wear some extra layers today"
  elif 0<=temperature<16:
    return "Quite chilly! Don’t forget your coat"
  elif 16<=temperature<23:
    return "Too cold for the beach!"
  elif 24<temperature<32:
    return "Amesome weather! Enjoy!"
  else:
    return "Think about drinking!"

def get_random_temp2(season):
  number=0
  if season=="winter": 
    number = randint(-10,16)
  elif season=="spring" or season=="autumn":
    number = randint(15,25)
  elif season=="summer": 
    number = randint(25,32)
  else:
    return "The season is not recognized. Enter a season:"

(get_random_temp2())

def main2(season):
  # userinput=input("Enter a season: ")
  temperature=get_random_temp2()
  print(f"The temperature right now is {temperature} degrees Celcius")
  if temperature<0:
    print ("Brrr, that’s freezing! Wear some extra layers today")
  elif 0<=temperature<16:
    print ("Quite chilly! Don’t forget your coat")
  elif 16<=temperature<23:
    print ("Too cold for the beach!")
  elif 24<temperature<32:
    print ("Amesome weather! Enjoy!")
  else:
    print ("Think about drinking!")

main2("summer")

# Exercise8:
# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.

correct_count=0
wrong_count=0
wrong_answers=[]

def quizz():
  
  for question_data in data:
    question_to_user=question_data['question']
    correct_answer_to_question=question_data['answer']
    user_answer=input(f"{question_to_user}: ")
    if user_answer.lower() !=correct_answer_to_question.lower() :
      print("False")
      wrong_answers.append(user_answer)
      wrong_count+=1
    else:
      print("Good job!")
      correct_count+=1

def answers():
    quizz()
    return correct_count, wrong_count

