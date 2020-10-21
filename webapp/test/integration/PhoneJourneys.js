jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/hat/HATOfflineDemo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/hat/HATOfflineDemo/test/integration/pages/App",
	"com/sap/hat/HATOfflineDemo/test/integration/pages/Browser",
	"com/sap/hat/HATOfflineDemo/test/integration/pages/Master",
	"com/sap/hat/HATOfflineDemo/test/integration/pages/Detail",
	"com/sap/hat/HATOfflineDemo/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.hat.HATOfflineDemo.view."
	});

	sap.ui.require([
		"com/sap/hat/HATOfflineDemo/test/integration/NavigationJourneyPhone",
		"com/sap/hat/HATOfflineDemo/test/integration/NotFoundJourneyPhone",
		"com/sap/hat/HATOfflineDemo/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});