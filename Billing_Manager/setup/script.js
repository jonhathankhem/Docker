db.billing_info.insertOne({});
db.billing_info.remove({});
db.customer_info.insertOne({});
db.customer_info.remove({});
db.business_user_info.insertMany([{  "name": "Ishwar Chand Anil Kumar Sarraf",  "address1": "SARRAFA BAZAR, SAHARANPUR-247001",  "gstin": "09ADNPV6199F1ZN",  "hsn": "7113",  "pan": "test08098098",  "accountdetails": [    {      "name": "ICICI BANK",      "branch": "0498",      "number": "12345678910",      "ifsc": "ICICI000000865"    },    {      "name": "HDFC BANK",      "branch": "0432",      "number": "10987654321",      "ifsc": "HDFC000000563"    }  ]}]);
db.login.insertMany([{    "uname": "admin",  "pass": "@dmin"},{   "uname": "anoop",  "pass": "anoop@123"}]);