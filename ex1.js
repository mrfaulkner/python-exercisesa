/*
Task:
We will be experimenting with usa.gov API's to familiarize ourselves with JSON values.

1. Find the number of people visiting a U.S. government website right now using this website.

https://analytics.usa.gov/data/live/realtime.json
*/


import requests

url = "https://analytics.usa.gov/data/live/browsers.json"

r = requests.get(url)

print(r.json()['totals']['browser']['Nintendo Browser'])
