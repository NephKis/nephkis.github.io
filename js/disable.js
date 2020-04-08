$(document).ready(function(){
    $("*").keydown(function (e) {//判断按键
        e = window.event || e || e.which;
        if ( e.keyCode == 123) {
            e.keyCode = 0;
            return false;
        }
    });
    window.onhelp = function () { return false };

    $(document).bind("contextmenu",function(e){
        return false;
    });
});