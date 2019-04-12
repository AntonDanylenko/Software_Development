LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMBERS = "0123456789"
SPECIAL = ".?!&#,;:-_*"

def meets_min(password):
    converted = [1 if x in LC_LETTERS
                else 2 if x in UC_LETTERS
                else 3 if x in NUMBERS
                else 0
                for x in password]
    #print(converted)
    if converted.count(1)>0 and converted.count(2)>0 and converted.count(3)>0:
        return True
    return False

def pass_strength(password):
    converted = [1 if x in LC_LETTERS
                else 2 if x in UC_LETTERS
                else 3 if x in NUMBERS
                else 4 if x in SPECIAL
                else 0
                for x in password]
    #print(converted)
    if not(meets_min(password)):
        return 0
    strength = 0
    strength+=converted.count(1) if converted.count(1)<3 else 3
    strength+=converted.count(2) if converted.count(2)<3 else 3
    strength+=converted.count(3) if converted.count(3)<3 else 3
    if converted.count(4)>0: strength+=1
    return strength

def main():
    p0 = "0aBcD1234"
    p1 = "abadfgasdD12"
    p2 = "ABcasdfVAbasd12"
    p3 = "??????bRuH!11!"
    print(meets_min(p0))
    print(pass_strength(p0))
    print(pass_strength(p1))
    print(pass_strength(p2))
    print(pass_strength(p3))

#main()
