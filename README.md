# Docker

1. Place the zip "Billing_Manager.zip" under C: drive. Unzip it under C: drive directly.
2. Go to "C:\Billing_Manager\docker-setup" which has the setup file.
3. Execute below commands:
    docker-compose up -d
    docker network create --driver=bridge --subnet=172.28.0.0/16 --ip-range=172.28.0.0/24 --gateway=172.28.0.254 br0
    docker network connect --ip 172.28.0.2 br0 TomcatBilling
    docker network connect --ip 172.28.0.3 br0 MongoBilling
    java -jar MonitorDirectory.jar
4. Go to browser and run "http://localhost:8088/Billing_Manager/Login.html"
