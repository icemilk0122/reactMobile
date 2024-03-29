# react-native-webpack-starter-kit

[![Build Status](https://travis-ci.org/jhabdas/react-native-webpack-starter-kit.svg?branch=master)](https://travis-ci.org/jhabdas/react-native-webpack-starter-kit)
[![Dependency Status](https://david-dm.org/jhabdas/react-native-webpack-starter-kit.svg)](https://david-dm.org/jhabdas/react-native-webpack-starter-kit)
[![devDependency Status](https://david-dm.org/jhabdas/react-native-webpack-starter-kit/dev-status.svg)](https://david-dm.org/jhabdas/react-native-webpack-starter-kit#info=devDependencies)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/jhabdas/react-native-webpack-starter-kit)

A future-facing starter kit for React Native apps.

![React Native Webpack Starter Kit](https://dl.dropboxusercontent.com/u/10150480/rn-starter-kit-hero-wordswag.jpg)

Takes a minimalistic lean on tooling. Follows the latest React Native stable release. Uses Babel 6 for ES6-style JSX transpilation with ES7 Stage 1 support, and Webpack as a dev server and module bundler. Provides static code linting using ESLint and build output in the same console window, and Source Maps for debugging in the browser.

Leverages [`react-native-webpack-server`](https://github.com/mjohnston/react-native-webpack-server). Incorporates sane default linting rules. Uses [Greenkeeper](https://github.com/greenkeeperio/greenkeeper) to help keep dependencies fresh. Unprescriptive in terms of test frameworks and Flux implementations. Use with [EditorConfig](http://editorconfig.org/) to help code consistency between editors. Try with [`webpack-notifier`](https://github.com/Turbo87/webpack-notifier) for desktop notifications on OS X.

For an example implementation take a look at [Lumpen Radio](https://github.com/jhabdas/lumpen-radio). Or check out a few other [Awesome React Boilerplates](http://habd.as/awesome-react-boilerplates/#react-native).

## Requirements

- [Node](https://nodejs.org) 4.x or better
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional)
- [Android SDK](https://developer.android.com/sdk/) for Android development (optional)
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or better for Android device testing (optional)

## Stack

- [React Native](http://facebook.github.io/react-native/) for native app development
- [Babel](http://babeljs.io/) for ES6+ support
- [Webpack](https://webpack.github.io/) module loader and bundler

## Installation

Start by cloning this repo and installing dependencies:

```sh
git clone https://github.com/jhabdas/react-native-webpack-starter-kit.git react-native-kit && cd $_
npm install # or simply npm i
```

## Before running

solve the collision issue

- [React Native] "0.19.0"
- [react-redux] "4.1.2"
- [redux] "3.1.7"
- [redux-thunk] "^1.0.3"

```sh
npm clean
```

## Running

Once dependencies are installed, run the kit with:

```sh
npm start
```

This will start a [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) and React Packager. The dev server will watch your JS files for changes and automatically lint and generate the `index.[platform].js` files expected by your React Native iOS or Android app.

### iOS

Open `ios/App.xcodeproj` in Xcode, build and run the project.

Unlike the app currently generated by `react-native init` this app removes the `UIViewControllerBasedStatusBarAppearance` key to prevent the app from logging an error in Xcode and leading to an App Store rejection. The key may be added back, if desired, but its value must be set to `true` to prevent unexpected rejection during the review process.

### Android

For android development use the following:

```sh
npm run android-setup-port # Note that this option is available on devices running android 5.0+ (API 21)
react-native run-android
```

Note Android support in React Native is relatively new, so expect some hiccups. Please see the official [Android Setup](http://facebook.github.io/react-native/docs/android-setup.html#content) documentation for getting set-up and the [`README` in RNWS](https://github.com/mjohnston/react-native-webpack-server/blob/27218e70f655983aff99a8a31d258eda5254aaf6/README.md) for additional information. And here's some [helpful npm scripts](https://github.com/mjohnston/react-native-webpack-server/issues/65#issuecomment-151222398) courtesy of [@niftylettuce](https://github.com/niftylettuce).

If you run into any issues please see the [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) guide for React Native before submitting an issue.

## Testing

As a minimalist seed this project does not introduce a testing framework. Instead it leverages simple static code analysis to help prevent coding mistakes and introduce some good practices for building React Native apps with ES6 and ES7.

Webpack is configured with a pre-loader to lint the application with ESLint using the Babel parser during app development. And the `npm test` command may be run at anytime to lint source code otherwise. See the `.eslintrc` file to adjust [linter rules](http://eslint.org/docs/rules/) to your liking.

## Bundling

Building the app for distribution.

1. Execute `npm run bundle` to generate the [offline JS bundle](https://facebook.github.io/react-native/docs/running-on-device-ios.html#using-offline-bundle).
2. For iOS, update `AppDelegate.m` to load from pre-bundled file on disk.
3. Test the application, create an archive and submit to the store.

## Submitting to Store

Please see [Submitting to App Store](http://habd.as/reflecting-on-react-native-development/#submitting-to-app-store) for instructions on iOS. If you have any good Android instructions, please send a PR this way. Good luck and have fun out there!
