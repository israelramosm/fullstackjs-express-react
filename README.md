[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Express-React Template
An express react template with tests to learn more about Javascript.

## Run

To run the application first install all the dependencies

```sh
npm install
```

* For development mode

```sh
npm run build:dev
```

* or for production mode

```sh
npm run build:prod
```

* and then 

```sh
npm run start
```

To run the test or coverage

```sh
npm run tests
npm run coverage
```

## Configuration

### Jest and Express
Needs `target` and `node` in `.babelrc` file to run async await functions inside jest tests. And transpile js code to run express app.

```json
{
    "presets": [
        [
        "@babel/preset-env", {
            "targets": {
            "node": "current"
            }
        }
        ]
    ]
}
```

### React

Needs custom presets inside the webpack build to detected `jsx` and syntax.
If it's not configure with this the unglify plugin for the production build in webpack will fail, it won't detect the <App /> syntax.

```js
    {
        // Transpiles ES6-8 into ES5 for React App
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                "@babel/preset-env",
                "@babel/preset-react"
                ],
                plugins: ["@babel/plugin-proposal-class-properties","@babel/plugin-proposal-export-default-from"]
          }
        }
    },
```
### esLint

I'am using [standardx](https://github.com/standard/standardx) based on the [standard](https://github.com/standard/standard) project

## References
[Creating a Node Express-Webpack App with Dev and Prod Builds](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)

