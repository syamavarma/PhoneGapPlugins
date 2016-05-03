
package com.syama;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.Locale;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Environment;
import android.util.Base64;
import android.util.Log;
import android.webkit.CookieManager;

public class NativeUtils extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        PluginResult.Status status = PluginResult.Status.ERROR;
        String result = "";

        if ("getDeviceLocale".equals(action)) {
            callbackContext.sendPluginResult(this.getDeviceLocale(args));
            return true;
        } else  {
            status = PluginResult.Status.INVALID_ACTION;
        }

        callbackContext.sendPluginResult(new PluginResult(status, result));
        return false;
    }

    

    private PluginResult getDeviceLocale(JSONArray args) {
        return new PluginResult(PluginResult.Status.OK, Locale.getDefault().getLanguage());
    }

}

