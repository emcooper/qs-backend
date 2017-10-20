# qs-backend

This project is the backend of a single user calory tracking application built in NodeJS and Express. The frontend can be viewed at https://github.com/emcooper/Quantified-Self.

## To Run the App Locally
1. Clone this repo
2. Install Node Packages:
```
npm init
npm i express --save
npm install nodemon --save-dev
npm install knex pg --save
npm install knex -g
```
3. setup the database: 
```
$ psql
CREATE DATABASE secrets;
CREATE DATABASE secrets_test;
```
4. run migrations and seeds:
```
knex migrate:latest
knex seed:run
```
## To Contribute
Pull Requests are welcome.
