# openshift-sails
Sails on Openshift. Answers [this question](http://stackoverflow.com/questions/31394012/deploy-sails-js-on-openshift)

### Create an app first

Use below command to create an app with the specified cartridge.

```
rhc create-app <your-app-name> "http://cartreflect-claytondev.rhcloud.com/reflect?github=aug70/openshift-origin-cartridge-nodejs"
```

(Alternatively use wshearn/openshift-origin-cartridge-nodejs, this is the project where mine is forked.)

This will give node v0.12.2 and npm 2.7.4 on your app.

### Alternative #1 Then clone this repo on top of it.

Couple important points;
* config/local.js is checked in and has important config for app to work in OpenShift.

### Alternative #2 Let sails create app

Using Sails v0.11 (July 2015)

```
sails new <myapp>
```

to create a new sails app
Make sure 

* config/local.js 
* package.json

is good.


### Resources

* [wshearn/openshift-origin-cartridge-nodejs](https://github.com/wshearn/openshift-origin-cartridge-nodejs)
* [How you get Sail.js running on Openshift](https://gist.github.com/mdunisch/4a56bdf972c2f708ccc6)
