# Access-Platform-Providers



 - Install MongoDB
   First you need to install MongoDB on your system or on docker, Please visit MonogoDB site and download it.
   
   1. docker pull mongo
   2. docker run -d --name YOUR_CONTAINER_NAME_HERE -p YOUR_LOCALHOST_PORT_HERE:27017 -e MONGO_INITDB_ROOT_USERNAME=YOUR_USERNAME_HERE -e MONGO_INITDB_ROOT_PASSWORD=YOUR_PASSWORD_HERE mongo
   3. docker exec -it YOUR_CONTAINER_NAME_HERE bash
   4. mongosh --username YOUR_USERNAME_HERE --password YOUR_PASSWORD_HERE
   5. To create database "use provider-a"
   
 - install NodeJS
   Please visit NodeJS site and download installer, Install on your system, It also install NPM or Node Package Manager
   
 - To Run the project
   1. Clone the repo to your machine
   2. Install packages in package.json by npm install
   3. Run client and server seperatly using this command  DEBUG=access-platform-providers:* npm start
   4. Now open the browser and type the address below and you can see the running project.
   
      client-http://localhost:4000
      
      server-http://localhost:4001
 
