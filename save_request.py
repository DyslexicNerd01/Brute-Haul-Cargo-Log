#!/usr/bin/env python3
import cgi
import cgitb
import os
import json
from datetime import datetime

cgitb.enable()  # Enable debugging
print("Content-Type: text/html\n")

form = cgi.FieldStorage()
data = {key: form.getvalue(key) for key in form.keys()}

save_dir = "/var/www/requests"
os.makedirs(save_dir, exist_ok=True)
filename = f"request_{datetime.now().strftime('%Y%m%d_%H%M%S_%f')}.json"
filepath = os.path.join(save_dir, filename)

with open(filepath, "w") as f:
    json.dump(data, f)

print("Request saved successfully!")
