# Exercise1:
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

Cat1=Cat("Bobi", 5)
Cat2=Cat("Bamboo", 9)
Cat3=Cat("Mila", 10)

def oldest_cat(self):
        cat_age.max()

        print(f"The oldest cat is {self.name} and is {self.age} years old.")

# Exercise2:
class Dog():

    def __init__(self, name, height):
        self.name=name
        self.height=height

    def bark(self):
        print(f"{self.name} goes woof")
    
    def jump(self):
        self.x=height*2
        print(f"{self.name} jumps {self.x}cm high!")

davids_dog=Dog("Rex", 50)
print(f"David's dog is {davids_dog.name} and {davids_dog.height}cm")

davids_dog.bark()
davids_dog.jump()


sarahs_dog=Dog("Teacup",20)
print(f"Sarah's dog is {sarahs_dog.name} and {sarahs_dog.height}cm")

sarahs_dog.bark()
sarahs_dog.jump()

if sarahs_dog.height>davids_dog.height:
    print(f"{sarahs_dog.name} is taller than David's")
else:
    print(f"{davids_dog.name} is taller than Sarah's")

# Exercise3:
class Song():

def __init__(self, lyrics):
    self.lyrics=[]

def sing_me_a_song(self):
    song=",\n".join(lyrics)
    print(song)
        
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()
