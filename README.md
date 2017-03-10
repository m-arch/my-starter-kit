# my-starter-kit
My node starter kit for app development

#The setup
Using NodeJS, ExpressJS, MongoDB, React, Browserify, Gulp and Flux dispatcher, and nodemon on development for web apps development

# To launch:
Navigate to folder and create "db" folder.
```
$ mkdir db
```

Start mongo service using mongod
```
$ sudo mongod --dbpath "./db"
```

Launch mongo and create the user (adjust credentials and db name from .env file)
eg: 
```
$ mongo
> use DEVDB
> db.createUser({user: "appAdmin", pwd: "123" , roles: ["dbAdmin"]})
```

run gulp
```
$ gulp
```

Start nodemon on app.js  
```
$ nodemon app.js
```
