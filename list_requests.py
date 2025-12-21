#!/usr/bin/env python3
import cgi
import cgitb
import os
import json

cgitb.enable()
print("Content-Type: application/json\n")

ADMIN_PASSWORD = "password"  # Password set as requested
save_dir = "/var/www/requests"

form = cgi.FieldStorage()
password = form.getfirst("password", "")

if password != ADMIN_PASSWORD:
    print(json.dumps({"error": "Access denied"}))
    exit(0)

requests = []
if os.path.isdir(save_dir):
    for fname in sorted(os.listdir(save_dir)):
        if fname.endswith(".json"):
            try:
                with open(os.path.join(save_dir, fname), "r") as f:
                    data = json.load(f)
                    data["_filename"] = fname
                    requests.append(data)
            except Exception as e:
                continue
print(json.dumps(requests))
