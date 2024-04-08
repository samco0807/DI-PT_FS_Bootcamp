number=int(input("Enter a number: "))
length=int(input("Enter a length: "))

list_multiples=[]

for i in range(1, length+1):
    if i%number==0:
        list_multiples.append(i)
        print(list_multiples)