[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Express-React Template
An express react template with tests to learn more about Javascript.

## Run

To run the application first install all the dependencies

```sh
$ yarn install
```

* Start the db, I recommend to check the mongo configuration

```sh
$ yarn run db
```

* For development mode

```sh
$ yarn run start:backend
or
$ yarn run start
```

* or for production mode

```sh
$ yarn run build:project
```

To run the test or coverage, the test can be run without mongo installed on the machine

```sh
$ yarn run tests
```

## Configuration

### Mongo
Quick configuration to use mongod with authentication

```shell
$ mongod --dbpath "C:\dbpath"
```

In another console

```shell

$ mongod
> use admin
> db.createUser({user: 'username', pwd:'password', roles:[{role:'userAdminAnyDatabase',db: 'admin'}]})
> use <dbname>
> db.createUser({user: 'username', pwd:'password', roles:[{role:'readWrite',db: '<dbname>'}]})
```

Then we can restart the process of mongod using auth

```shell
$ mongod --auth --dbpath "C:\dbpath"
```

### esLint

I'am using [standardx](https://github.com/standard/standardx) based on the [standard](https://github.com/standard/standard) project, also the plugin [Prettier-Standard - JavaScript formatter](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode) to format the files using prettier

## References
[Creating a Node Express-Webpack App with Dev and Prod Builds](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)

[To Handle Authentication With Node JS, Express, Mongo, JWT](https://codeburst.io/to-handle-authentication-with-node-js-express-mongo-jwt-7e55f5818181)
