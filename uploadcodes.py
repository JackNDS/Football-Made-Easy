import requests
from sys import argv

url = 'https://www4.sidelinesports.com/xpsweb/secretlist/?action=add&value='

with open(argv[-1], 'r') as f:
    data = f.read().splitlines(True)
lines = [line.strip() for line in data]
for line in lines:
    x = requests.post(url+line+"&category="+argv[-2])
    print(x.text)
    x.close()
