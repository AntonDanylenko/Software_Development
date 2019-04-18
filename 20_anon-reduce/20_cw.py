from functools import reduce

fd = open('book.txt', 'r')
book = fd.read().lower()
fd.close()

alphabet = "abcdefghijklmnopqrstuvwxyz"
# z=0
# words = [x for x in book if x in alphabet else ',' if ]
# words.split(',')
words = []
current = ""
for char in book:
    if char in alphabet:
        current+=char
    elif current!="":
        words.append(current)
        current=""
#print(words)

print("Count of proletariat: " + str(book.count('proletariat')))
print("Count of 'working class': " + str(book.count('working class')))


# count=0
# for x in words:
#     if x=="proletariat":
#         count+=1
# print(count)

common_words = ["the", "and", "to", "by", "is", "in", "of", "a", "that", "it", "them"]
max_word = ""
max_count = 0
for x in words:
    if words.count(x)>max_count and x not in common_words:
        max_count = words.count(x)
        max_word = x
print("Max uncommon word: " + str(max_word) + "; Count: " + str(max_count))

max_char = ""
max_count_char = 0
for x in book:
    if book.count(x)>max_count_char:
        max_count_char = book.count(x)
        max_char = x
print("Max character: " + str(max_char) + "; Count: " + str(max_count_char))
