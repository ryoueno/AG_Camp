//音声
var sound_num = 3;
var now_sound = null;
var sounds = [
    'test.wav',
    'test.wav',
    'kansei.mp3'
];

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

// Audio 用の buffer を読み込む
var getAudioBuffer = function(url, fn) {
    var req = new XMLHttpRequest();
    // array buffer を指定
    req.responseType = 'arraybuffer';

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 0 || req.status === 200) {
                // array buffer を audio buffer に変換
                context.decodeAudioData(req.response, function(buffer) {
                    // コールバックを実行
                    fn(buffer);
                });
            }
        }
    };
    req.open('GET', url, true);
    req.send('');
};

// サウンドを再生
var playSound = function(buffer) {
    // source を作成
    var source = context.createBufferSource();
    // buffer をセット
    source.buffer = buffer;
    // context に connect
    source.connect(context.destination);
    // 再生
    source.start(0);
};


// main
window.onload = function() {
    // サウンドを読み込む

    getAudioBuffer('/sound/test.wav', function(buffer,i) {
        // 読み込み完了後にボタンにクリックイベントを登録
        str_id = 'btn1';
        var btn = document.getElementById(str_id);
        btn.onclick = function() {
            // サウンドを再生
            playSound(buffer);
            now_sound = 1;
        };
    });
    getAudioBuffer('/sound/kansei.mp3', function(buffer,i) {
        // 読み込み完了後にボタンにクリックイベントを登録
        str_id = 'btn2';
        var btn = document.getElementById(str_id);
        btn.onclick = function() {
            // サウンドを再生
            playSound(buffer);
            now_sound = 2;
        };
    });

};

//******

var se_max = 20;//最大インスタンス
var se = 1;//現在インスタンス
el = [];

function start(){
    el[se].play();
    $(function(){
        setTimeout(function(){
            //何もしない
        },200);
    });
}

(function() {

    for(i=1;i<=se_max;i++){
        el[i] = new Audio('sound/test.wav');
    }
    window.addEventListener("devicemotion", function(e){
        //加速度
        var acc = e.acceleration;
        var x = obj2NumberFix(acc.x, 5);
        var y = obj2NumberFix(acc.y, 5);
        var z = obj2NumberFix(acc.z, 5);

        var sensitivity = 20;

        if(x > sensitivity || y > sensitivity || z > sensitivity){
            //Debug
            $(document.body).css( "background", "yellow" );
            //音声出力、インスタンスを変更
            start();
            getAudioBuffer('/sound/'+sounds[now_sound], function(buffer) {
                playSound(buffer);
            });
            se = se >= se_max ? 1 : se+1;
        }else{
            $(document.body).css( "background", "white" );
        }

        //Debug
        $('#acc-x').html(x);
        $('#acc-y').html(y);
        $('#acc-z').html(z);

        function obj2NumberFix(obj, fix_deg){
            return Number(obj).toFixed(fix_deg);
        }
    });
})();


// Geolocation
// APIに対応している
if(navigator.geolocation){

    // オプション・オブジェクト
    var optionObj = {
        "enableHighAccuracy": false ,
        "timeout": 8000 ,
        "maximumAge": 5000 ,
    } ;
    navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj ) ;

}else{
    // 現在位置を取得できない場合の処理
    alert("あなたの端末では、現在位置を取得できません。");
    alert("ごめんなさい( ；´Д｀)");
}

function successFunc(position){
    $('#latitude').html(position.coords.latitude);
    $('#longitude').html(position.coords.longitude);
}

function errorFunc(error){
    // エラーコードのメッセージを定義
    var errorMessage = {
        0: "原因不明のエラーが発生しました…。" ,
        1: "位置情報の取得が許可されませんでした…。" ,
        2: "電波状況などで位置情報が取得できませんでした…。" ,
        3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
    } ;

    // エラーコードに合わせたエラー内容をアラート表示
    //alert(errorMessage[error.code]);
    $('#location').html(errorMessage[error.code]);
}





