// JavaScript File
$( document ).ready(function() {
    $("#pic1").click(function(){
        $("#gallery-main").attr("src","http://images8.wookmark.com/129580_animals-dogs-puppies-1280x1024-wallpaper_www.wallpapermi.com_5.jpg");
    });
    $("#pic2").click(function(){
        $("#gallery-main").attr("src","https://sites.google.com/site/westsidebeagles/_/rsrc/1367458451260/dogsandpuppiesforsale/DeeDee%27s_Beagle_Puppies_at_4_weeks_002.JPG?height=320&width=400");
    });
    $("#pic3").click(function(){
        $("#gallery-main").attr("src","http://2.bp.blogspot.com/-RSo7DR8Yipk/ToJ8dzbStTI/AAAAAAAACbk/qM0NN5oXlUQ/s400/golden-retriever-puppies%25281%2529.jpg");
    });
    $("#suppliesbtn").click(function(){
        $("#cart").hide();
    });
    $("#cartbtn").click(function(){
        $("#supplies").hide();
        $("#cart").show();
    });
    $("body").click(function(){
        console.log(event.target);
    });
    $("#b1").click(function(){
        $("#1").clone().appendTo($("#list"));
    });
    $("#b2").click(function(){
        $("#2").clone().appendTo($("#list"));
    });
    $("#b3").click(function(){
        $("#3").clone().appendTo($("#list"));
    });
    $("#b4").click(function(){
        $("#4").clone().appendTo($("#list"));
    });
    $("#b5").click(function(){
        $("#5").clone().appendTo($("#list"));
    });
    $("#b6").click(function(){
        $("#6").clone().appendTo($("#list"));
    });
    $("#b7").click(function(){
        $("#7").clone().appendTo($("#list"));
    });
    $("#b8").click(function(){
        $("#8").clone().appendTo($("#list"));
    });
    $("#b9").click(function(){
        $("#9").clone().appendTo($("#list"));
    });
    $("#b10").click(function(){
        $("#10").clone().appendTo($("#list"));
    });
    $("#b11").click(function(){
        $("#11").clone().appendTo($("#list"));
    });
    $("#b12").click(function(){
        $("#12").clone().appendTo($("#list"));
    });
    $("#b13").click(function(){
        $("#13").clone().appendTo($("#list"));
    });
    $("#b14").click(function(){
        $("#14").clone().appendTo($("#list"));
    });
    $("#b15").click(function(){
        $("#15").clone().appendTo($("#list"));
    });
    $("#b16").click(function(){
        $("#16").clone().appendTo($("#list"));
    });
    $("#b17").click(function(){
        $("#17").clone().appendTo($("#list"));
    });
    $("#b18").click(function(){
        $("#18").clone().appendTo($("#list"));
    });
    $("#b19").click(function(){
        $("#19").clone().appendTo($("#list"));
    });
    $("#b20").click(function(){
        $("#20").clone().appendTo($("#list"));
    });
    $("#b21").click(function(){
        $("#21").clone().appendTo($("#list"));
    });
    $("#b22").click(function(){
        $("#22").clone().appendTo($("#list"));
    });
    $("#b23").click(function(){
        $("#23").clone().appendTo($("#list"));
    });
    $("#b24").click(function(){
        $("#24").clone().appendTo($("#list"));
    });
    var sum = 0;
    $("#b19").click(function(){
        var x = document.querySelector(".aPrice").textContent;
        var tempX = x.substring(1, x.length);
        var tempXInt = parseFloat(tempX);
        sum += tempXInt;
        document.getElementById("subtotal").innerHTML ="$"+ sum;
        document.getElementById("itemsprice").innerHTML ="$"+ sum;
        document.getElementById("totalNotax").innerHTML ="$"+ sum;
        document.getElementById("total").innerHTML ="$"+ sum;
    });
    function sumOfTotal(item) {
        sum += item;
        return sum;
    }
});