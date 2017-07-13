// JavaScript File
$( document ).ready(function() {
    $('ul li').click(function(){
        var clicked_tab = $(this);
        clicked_tab.addClass('active');
        clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
        var clicked_href = $(this).children('a').attr('href');
        $("#dog").hide();
        $("#home").hide();
        $("#supplies").hide();
        $("#cart").hide();
        $(clicked_href).show();
    });
    $("#pic1").click(function(){
        $("#gallery-main").attr("src","http://images8.wookmark.com/129580_animals-dogs-puppies-1280x1024-wallpaper_www.wallpapermi.com_5.jpg");
    });
    $("#pic2").click(function(){
        $("#gallery-main").attr("src","https://sites.google.com/site/westsidebeagles/_/rsrc/1367458451260/dogsandpuppiesforsale/DeeDee%27s_Beagle_Puppies_at_4_weeks_002.JPG?height=320&width=400");
    });
    $("#pic3").click(function(){
        $("#gallery-main").attr("src","http://2.bp.blogspot.com/-RSo7DR8Yipk/ToJ8dzbStTI/AAAAAAAACbk/qM0NN5oXlUQ/s400/golden-retriever-puppies%25281%2529.jpg");
    });
});