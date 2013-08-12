// iOS 限定で閉じるボタンが押されたらウィンドウを閉じる
function close() {
    $.webWindow.close();
}

// 引数を取得
var args = arguments[0] || {};
var type = args.type;
var account = args.account;

// 引数に応じた処理
switch(type) {
    case 'twitter':
        $.webWindow.title = 'Twitter';
        $.webView.url = 'https://twitter.com/' + account;
        break;
    case 'facebook':
        $.webWindow.title = 'Facebook';
        var http = Ti.Network.createHTTPClient();
        http.open('GET', 'http://graph.facebook.com/' + account);
        http.onload = function() {
            var json = JSON.parse(http.responseText);
            var id = json.id;
            $.webView.url = 'https://facebook.com/' + id;
        };
        http.onerror = function() {
            alert('Facebook API の呼び出しに失敗しました');
            $.webWindow.close();
        };
        http.send(null);
        break;
    case 'github':
        $.webWindow.title = 'GitHub';
        $.webView.url = 'https://github.com/' + account;
        break;
}