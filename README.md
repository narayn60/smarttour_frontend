Jaffna Tour
===========

## Description
The front end for the SmartTours application. Allows users to create tours based on QR codes and then 
tag the information through the Web application.

## Steps
1. Create certs by running `chmod +x nginx/cert_setup.sh` and then `nginx/cert_setup.sh`, this creates
   self signed certificates for the site.
2. Run `docker-compose build` and then `docker-compose up` to build the site.
3. Setup authentication within app/server/config/auth.js
4. Navigate to `https://localhost:80` to view the website.
