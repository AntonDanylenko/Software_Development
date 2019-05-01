#Anton Danylenko
#04/30/19
#22: Closure

#1
def repeat(word):
    def times(x):
        return word*x
    return times

r1 = repeat('hello')
r2 = repeat('goodbye')

print("r1(2): ", r1(2))
print("r2(2): ", r2(2))
print("repeat('cool')(3): ", repeat('cool')(3))

# def outer():
#     x = "foo"
#     def inner():
#         nonlocal x
#         x = "bar"
#     inner()
#     return x
#
# print(outer())

#2
def make_counter():
    x=0
    def count():
        nonlocal x
        x+=1
        return x
    return count

ctr1 = make_counter()
print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())
