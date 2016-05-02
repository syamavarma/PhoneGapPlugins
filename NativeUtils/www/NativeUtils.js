/*
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011-2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 * Author: Harpreet Singh
 */

/* global PhoneGap: false, cordova: false, cordova, console, window */
/* exported PhoneGap */

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