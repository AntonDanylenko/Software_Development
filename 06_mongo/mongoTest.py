import pymongo
from pprint import pprint

SERVER_ADDR="104.248.119.62"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

#[pprint(post) for post in collection.find({"name":"Wendy's"})]

def boro(b):
    #All restaurants in a specified borough.
    [pprint(post) for post in collection.find({"borough":b})]
#boro("Brooklyn")

def zip(z):
#All restaurants in a specified zip code.
    [pprint(post) for post in collection.find({"address.zipcode":z})]
#zip("11209")

def zopzip(zip,grade):
    #All restaurants in a specified zip code and with a specified grade.
    [pprint(post) for post in collection.find({"address.zipcode":zip,"grades.grade":grade})]
#zopzip("10282","A")

def threshold(zip,threshold):
    [pprint(post) for post in collection.find({"address.zipcode":zip,"grades.score": {"$lt":threshold} })]
#threshold("10282",5)

def basicAnalysis():
    #you rolled the brown serpent - Tracy Jordan
    print("Finding the best borough to get a pick me up cup of joe")
    total=collection.find({"cuisine":"Café/Coffee/Tea"})
    tcounter=0
    for p in total:
        tcounter+=1
    boroughs=["Brooklyn","Queens","Bronx","Manhattan","Staten Island"]
    percents=[]
    for boro in boroughs:
        counter=0.0
        for p in collection.find({"cuisine":"Café/Coffee/Tea","borough":boro}):
            counter+=1
        percents.append(counter*100/tcounter)
    for i in range(5):
        print(boroughs[i]+": "+str(percents[i])+"%")
#basicAnalysis()
