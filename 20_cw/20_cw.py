from functools import reduce

fd = open('book.txt', 'r')
f = fd.read()
fd.close()

#print(f)

print(f.count('proletariat'))


book = f
alhpabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
words = []
current = ""
for char in f:
    

#print(f)
