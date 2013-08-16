function Controller() {
    function changeIconDialog() {
        var optionDialog = Ti.UI.createOptionDialog({
            options: [ "カメラで撮る", "ギャラリーから選択", "キャンセル" ],
            cancel: 2
        });
        optionDialog.addEventListener("click", function(e) {
            var mediaOptions = {
                mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ],
                saveToPhotoGallery: true,
                success: function(camera) {
                    var photo = camera.media;
                    $.iconImage.image = photo;
                },
                error: function() {
                    alert("このデバイスでは撮影できません");
                }
            };
            0 === e.index ? Ti.Media.showCamera(mediaOptions) : 1 === e.index && Ti.Media.openPhotoGallery(mediaOptions);
        });
        optionDialog.show();
    }
    function openWeb(e) {
        var row = e.row;
        var socialType = row.id;
        var socialAccount = row.title;
        var webWindow = Alloy.createController("web", {
            type: socialType,
            account: socialAccount
        }).getView();
        webWindow.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId2 = [];
    $.__views.iconAndName = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#333333",
        id: "iconAndName"
    });
    __alloyId2.push($.__views.iconAndName);
    $.__views.iconImage = Ti.UI.createImageView({
        height: "100dp",
        top: "10dp",
        id: "iconImage",
        image: "http://placehold.jp/100x100.png"
    });
    $.__views.iconAndName.add($.__views.iconImage);
    changeIconDialog ? $.__views.iconImage.addEventListener("longpress", changeIconDialog) : __defers["$.__views.iconImage!longpress!changeIconDialog"] = true;
    $.__views.nameLabel = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: "16sp"
        },
        color: "#FFFFFF",
        top: "4dp",
        id: "nameLabel"
    });
    $.__views.iconAndName.add($.__views.nameLabel);
    $.__views.message = Ti.UI.createView({
        id: "message"
    });
    __alloyId2.push($.__views.message);
    $.__views.profileLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        color: "#333333",
        id: "profileLabel"
    });
    $.__views.message.add($.__views.profileLabel);
    $.__views.__alloyId1 = Ti.UI.createScrollableView({
        width: Ti.UI.FILL,
        height: "160dp",
        top: "0dp",
        views: __alloyId2,
        showPagingControl: "true",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.__alloyId4 = Ti.UI.createTableViewSection({
        headerTitle: "Twitter",
        id: "__alloyId4"
    });
    var __alloyId5 = [];
    __alloyId5.push($.__views.__alloyId4);
    $.__views.twitter = Ti.UI.createTableViewRow({
        height: "66dp",
        className: "socialRow",
        font: {
            fontSize: "18sp",
            fontWeight: "bold"
        },
        color: "#333333",
        id: "twitter"
    });
    $.__views.__alloyId4.add($.__views.twitter);
    openWeb ? $.__views.twitter.addEventListener("click", openWeb) : __defers["$.__views.twitter!click!openWeb"] = true;
    $.__views.__alloyId6 = Ti.UI.createTableViewSection({
        headerTitle: "Facebook",
        id: "__alloyId6"
    });
    __alloyId5.push($.__views.__alloyId6);
    $.__views.facebook = Ti.UI.createTableViewRow({
        height: "66dp",
        className: "socialRow",
        font: {
            fontSize: "18sp",
            fontWeight: "bold"
        },
        color: "#333333",
        id: "facebook"
    });
    $.__views.__alloyId6.add($.__views.facebook);
    openWeb ? $.__views.facebook.addEventListener("click", openWeb) : __defers["$.__views.facebook!click!openWeb"] = true;
    $.__views.__alloyId7 = Ti.UI.createTableViewSection({
        headerTitle: "GitHub",
        id: "__alloyId7"
    });
    __alloyId5.push($.__views.__alloyId7);
    $.__views.github = Ti.UI.createTableViewRow({
        height: "66dp",
        className: "socialRow",
        font: {
            fontSize: "18sp",
            fontWeight: "bold"
        },
        color: "#333333",
        id: "github"
    });
    $.__views.__alloyId7.add($.__views.github);
    openWeb ? $.__views.github.addEventListener("click", openWeb) : __defers["$.__views.github!click!openWeb"] = true;
    $.__views.__alloyId3 = Ti.UI.createTableView({
        top: "0dp",
        data: __alloyId5,
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.nameLabel.text = Alloy.CFG.name;
    $.profileLabel.text = Alloy.CFG.profile;
    $.twitter.title = Alloy.CFG.twitter;
    $.facebook.title = Alloy.CFG.facebook;
    $.github.title = Alloy.CFG.github;
    $.index.open();
    __defers["$.__views.iconImage!longpress!changeIconDialog"] && $.__views.iconImage.addEventListener("longpress", changeIconDialog);
    __defers["$.__views.twitter!click!openWeb"] && $.__views.twitter.addEventListener("click", openWeb);
    __defers["$.__views.facebook!click!openWeb"] && $.__views.facebook.addEventListener("click", openWeb);
    __defers["$.__views.github!click!openWeb"] && $.__views.github.addEventListener("click", openWeb);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;