# Cask-Ui Components

  This is the repo that hosts all the zip files of component that will be used common
  across CDAP and Coopr UI projects inside cask. A way to share bower components
  and not push it to bower repo but our own.

## Set Up

    > npm install
    > gulp zip

  If any new directive/services/filters needs to be added a new folder needs to
  be created under it and all required files should be added under it.

  A corresponding zip file will be created under "zip" folder once
  the ```gulp zip``` command is run.

## Development

  To develop/add a new component to the repo the following are assumed for the build
  process.

  1. The module should have module.js which "defines" the angular module

     For Example,
     ```javascript
     angular.module("newModule", []);
     ```

  2. The bower.json in the module should define the ```main``` property with files that are
     important to the module. The first file in the array should be module.js.
     This is necessary for the build process as angular expects the module to defined
     before adding a directive/service/filter/controller to it.

     For Example,
     ```javascript
     angular.module("newModule").controller("somecontr", function() {...})
     ```
     Will fail if it is not defined before. So by defining the module in module.js
     and adding it as the first file in the main we make sure during the build
     process we have module definition as the first step before adding anything
     to the module.

    So your bower.json file will look like this,

    ```javascript
    "name": "newModule",
    "version": "0.0.1",
    "main": [
      "module.js",
      "myDirective.js",
      ...
    ]
    ```

  3. Any html files under your module will be compiled and added to template cache
     under the name "tpl.html.js". So if you have html files you just need to add
     tpl.html.js to your ```main``` property in bower.json
