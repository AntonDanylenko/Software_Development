def r1(x):
    return "hello"*x

def r2(x):
    return "goodbye"*x

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer())
