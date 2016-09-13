//音声

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





