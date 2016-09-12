(function() {
        window.addEventListener("devicemotion", function(e){
        //加速度
        var acc = e.acceleration;
        var x = obj2NumberFix(acc.x, 5);
        var y = obj2NumberFix(acc.y, 5);
        var z = obj2NumberFix(acc.z, 5);

        var sensitivity = 20;

        if(x > sensitivity || y > sensitivity || z > sensitivity){
            $(document.body).css( "background", "yellow" );
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