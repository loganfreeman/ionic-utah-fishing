This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTutorial tutorial
```

Then, to run it, cd into `myTutorial` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.


### How to run
```shell
ionic cordova platform add browser
ionic cordova run browser

# run on device
ionic cordova run android --device
```


### How to install plugin
```
ionic cordova plugin add cordova-plugin-http
```

### How to debug
```
ionic cordova run <ios or android> --device -l --debug
```

- For Android open Chrome and go to `Web Inspector`.
`Open ~ ⠇> More tools > Remote devices`
Select your device and click Inspect.
- For iOS open Safari and enable `Develop Menu`.
`Open ~ Develop > my device > my ip address`.
