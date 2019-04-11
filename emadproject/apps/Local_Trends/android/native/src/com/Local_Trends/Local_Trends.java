package com.Local_Trends;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.content.pm.PackageManager;
import android.os.Bundle;

import org.apache.cordova.CordovaActivity;

import com.worklight.androidgap.api.WL;
import com.worklight.androidgap.api.WLInitWebFrameworkResult;
import com.worklight.wlclient.api.WLClient;
import com.worklight.androidgap.api.WLInitWebFrameworkListener;

public class Local_Trends extends CordovaActivity implements WLInitWebFrameworkListener {
	
	@Override
	public void onCreate(Bundle savedInstanceState){
		super.onCreate(savedInstanceState);

		WL.createInstance(this);

		WL.getInstance().showSplashScreen(this);

		WL.getInstance().initializeWebFramework(getApplicationContext(), this);
		
	}

	/**
	 * The IBM MobileFirst Platform calls this method after its initialization is complete and web resources are ready to be used.
	 */
 	public void onInitWebFrameworkComplete(WLInitWebFrameworkResult result){
		if (result.getStatusCode() == WLInitWebFrameworkResult.SUCCESS) {
			super.loadUrl(WL.getInstance().getMainHtmlFilePath());
		} else {
			handleWebFrameworkInitFailure(result);
		}
		if (! (WLClient.getInstance().getContext().checkSelfPermission(android.Manifest.permission.ACCESS_FINE_LOCATION)== PackageManager.PERMISSION_GRANTED)) {
	        requestPermissions(new String[]{android.Manifest.permission.ACCESS_FINE_LOCATION}, 0);
	    }
	}

	private void handleWebFrameworkInitFailure(WLInitWebFrameworkResult result){
		AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(this);
		alertDialogBuilder.setNegativeButton(R.string.close, new OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which){
				finish();
			}
		});

		alertDialogBuilder.setTitle(R.string.error);
		alertDialogBuilder.setMessage(result.getMessage());
		alertDialogBuilder.setCancelable(false).create().show();
	}
}
