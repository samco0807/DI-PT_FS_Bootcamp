class Farm():

    def __init__(self, animals, animal_category, number_of_animals):
        self.animals=[]
        self.animal_category=animal_category
        self.number_of_animals=int(number_of_animals)
        print(f"McDonald's farm \n{self.animal_category}: {self.number_of_animals}\n")
     
    def add_animal(self, animal_category, number_of_animals):
        self.animals.append((animal_category, number_of_animals))

    def get_animal_types(self):
        print(self.animals.sort())

    def get_short_info(self):
        print(f"McDonald's farm has {self.animals[0][0]}")
        if self.number_of_animals>1:
            for animal in self.animals:
                animals.append(range(len[-1]), "s")