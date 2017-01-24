/**
 * Created by namik on 10.01.17.
 */

$(function () {
    /*implementation*/
    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = $(".carousel");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 2000);
    }

});
