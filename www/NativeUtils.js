

(function () {
    "use strict";

    var NativeUtils = function () {};

    

    NativeUtils.prototype.getDeviceLocale = function (successCallback, failureCallback) {
        // successCallback and failureCallback required
        if (typeof successCallback !== "function" || typeof failureCallback !== "function") {
            console.log("NativeUtils Error: success or error Callback is not a function");
            return;
        }

        if (typeof cordova !== "undefined") {
            cordova.exec(successCallback, failureCallback, "NativeUtils", "getDeviceLocale", []);
        }
    };

    if (typeof cordova !== "undefined" && typeof cordova !== null) {
        cordova.addConstructor(function () {
            if (!window.plugins) {
                window.plugins = {};
            }
            window.plugins.NativeUtils = new NativeUtils();
        });
    }
}());
