$('.layui-nav-item.nav-item a').click(function(){
    var url = $(this).attr('lay-href');
    $('#iframe').attr('src',url);
})