// JavaScript File
$( document ).ready(function() {
    $('ul li').click(function(){
    var clicked_tab = $(this);
    clicked_tab.addClass('active');
    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
    var clicked_href = $(this).children('a').attr('href');
    $('img').hide();
    $(clicked_href).show();
});
});