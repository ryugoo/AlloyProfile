function changeIconDialog() {
    var optionDialog = Ti.UI.createOptionDialog({
        options: ['カメラで撮る', 'ギャラリーから選択', 'キャンセル'],
        cancel: 2
    });
    optionDialog.addEventListener('click', function(e) {
        var mediaOptions = {
            mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
            saveToPhotoGallery: true,
            success: function(camera) {
                var photo = camera.media;
                $.iconImage.image = photo;
            },
            error: function(error) {
                alert('このデバイスでは撮影できません');
            }
        };
        if (e.index === 0) {
            Ti.Media.showCamera(mediaOptions);
        } else if (e.index === 1) {
            Ti.Media.openPhotoGallery(mediaOptions);
        }
    });
    optionDialog.show();
}

function openWeb(e) {
    var row = e.row;
    var socialType = row.id;
    var socialAccount = row.title;
    var webWindow = Alloy.createController('web', {
        type: socialType,
        account: socialAccount
    }).getView();
    webWindow.open();
}

$.nameLabel.text = Alloy.CFG.name;
$.profileLabel.text = Alloy.CFG.profile;
$.twitter.title = Alloy.CFG.twitter;
$.facebook.title = Alloy.CFG.facebook;
$.github.title = Alloy.CFG.github;
$.index.open();
