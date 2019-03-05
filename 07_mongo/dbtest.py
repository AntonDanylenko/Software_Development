import pymongo
from pprint import pprint

SERVER_ADDR="104.248.119.62"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants
