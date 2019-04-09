# express-template
A express template to learn more about Javascript 


## Configuration

Needs `target` and `node` in `.babelrc` file to run async await functions inside jest tests.

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


Based on: https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334

