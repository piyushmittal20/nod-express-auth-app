To Run Application on your machine you need to follow following steps:

1. You need to clone the repository in your computer. you can using following command to do it.
```
git clone <repository_link>
```

2. Once you are done with cloning repo you have to install all the necessary packages and modules. And make sure you are using node version 14, as this project supports Node14:
```
npm install
```

3. To run this project use the following command:
```
npm run dev
```

4. There are three different APIs in this project, create-account, login, and user-details.

```
http://4000/auth/create-account -> POST Request

Body: {
    "firstName": "Ram",
    "lastName": "Gupta",
    "username": "ram330",
    "email": "ram22@gmail.com",
    "password": "ramgupta"
}
```

```
http://4000/auth/login -> POST Request

Body {
    "email": "ram22@gmail.com",
    "password": "ramgupta"
}
```

```
http://4000/user/user-details -> GET Request
```

NOTE: I am using a free MySQL DB service on cloud and data is not persisted on it. The platform removed it after sometime.  So, If you add any data and when you try to fetch it if you don't get it then please add data again because platform removed your data from db.