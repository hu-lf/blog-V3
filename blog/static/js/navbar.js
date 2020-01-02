

$(function () {

    // 导航栏的向上slidey隐藏
    var beforePos = 0;

    $(window).scroll(function () {
        var nowPos = $(window).scrollTop();

        if (nowPos > beforePos) {
            $(".navbar").addClass("navbar-slide-up");
        } else {
            $(".navbar").removeClass("navbar-slide-up");
        }
        beforePos = nowPos;
    })

    // 导航栏  透明的背景
    $(window).scroll(function () {
        $(".navbar").toggleClass("navbar-transparent",
        $(window).scrollTop() == 0);
    })

    // 导航栏的媒体查询
    $(".navbar-toggle").click(function() {
        $(".navbar-collapse").slideToggle(400);
        // jquery的预设动画
    })
})