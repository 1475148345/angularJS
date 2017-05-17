$(function () {
    //默认显示html
    $('.content-show ul').eq(0).show().siblings('ul').hide();
    $('.content-nav li').on('click', function (e) {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.content-show ul').eq($(this).index()).show().siblings('ul').hide();
    });
});