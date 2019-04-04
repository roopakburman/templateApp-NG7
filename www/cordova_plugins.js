cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-googleplus.GooglePlus",
    "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
    "pluginId": "cordova-plugin-googleplus",
    "clobbers": [
      "window.plugins.googleplus"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.mainHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
    "pluginId": "cordova-plugin-nativestorage",
    "clobbers": [
      "NativeStorage"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.LocalStorageHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-nativestorage.NativeStorageError",
    "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-googleplus": "7.0.0",
  "cordova-plugin-nativestorage": "2.3.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic-webview": "3.1.2",
  "cordova-plugin-ionic-keyboard": "2.1.3"
};
// BOTTOM OF METADATA
});