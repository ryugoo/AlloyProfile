function Controller() {
    function close() {
        $.webWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "web";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.webWindow = Ti.UI.createWindow({
        id: "webWindow",
        modal: "true"
    });
    $.__views.webWindow && $.addTopLevelView($.__views.webWindow);
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "閉じる",
        id: "__alloyId9"
    });
    close ? $.__views.__alloyId9.addEventListener("click", close) : __defers["$.__views.__alloyId9!click!close"] = true;
    $.__views.webWindow.rightNavButton = $.__views.__alloyId9;
    $.__views.webView = Ti.UI.createWebView({
        id: "webView"
    });
    $.__views.webWindow.add($.__views.webView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var type = args.type;
    var account = args.account;
    switch (type) {
      case "twitter":
        $.webWindow.title = "Twitter";
        $.webView.url = "https://twitter.com/" + account;
        break;

      case "facebook":
        $.webWindow.title = "Facebook";
        var http = Ti.Network.createHTTPClient();
        http.open("GET", "http://graph.facebook.com/" + account);
        http.onload = function() {
            var json = JSON.parse(http.responseText);
            var id = json.id;
            $.webView.url = "https://facebook.com/" + id;
        };
        http.onerror = function() {
            alert("Facebook API の呼び出しに失敗しました");
            $.webWindow.close();
        };
        http.send(null);
        break;

      case "github":
        $.webWindow.title = "GitHub";
        $.webView.url = "https://github.com/" + account;
    }
    __defers["$.__views.__alloyId9!click!close"] && $.__views.__alloyId9.addEventListener("click", close);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;