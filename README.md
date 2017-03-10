# my-starter-kit
My node starter kit for app development

#The setup
Using NodeJS, ExpressJS, MongoDB, React, Browserify, Gulp and Flux dispatcher for web apps development

# To launch:
1. Navigate to folder and created "db" folder.
```
$ mkdir db
```

2. Start mongo service using mongod
```
$ sudo mongod --dbpath "./db"
```

3. Launch mongo and create the user (adjust credentials and db name from .env file)
eg: 
```
$ mongo
> use DEVDB
> db.createUser({user: "appAdmin", pwd: "123" , roles: ["dbAdmin"]})
```

4. run gulp
```
$ gulp
```

5. Start nodemon on app.js  
```
$ nodemon app.js
```
