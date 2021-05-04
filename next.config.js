module.exports = {
    env: {
        customKey: "my-value", //環境変数の使用を試みたが、他のファイルがTypeScriptだからなのか、他の理由によるのか、うまくいかなかった。エラーは出ていなかった。 → ⭕️「ビルド時にprocess.env.customKeyを'my-value'に置き換えます」なので、ビルドすればうまくいくのかも。
    },
}