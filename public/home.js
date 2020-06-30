$(document).ready(function() {

    var images = Array("https://images3.alphacoders.com/151/151005.jpg",
        "https://images2.alphacoders.com/915/thumb-1920-915220.jpg",
        "https://images4.alphacoders.com/797/thumb-1920-797952.jpg",
        "https://images8.alphacoders.com/742/thumb-1920-742586.jpg");
    var currimg = 0;

    $("body").css("background-image", "url(https://images8.alphacoders.com/742/thumb-1920-742586.jpg)");

    function loadimg() {
        $('body').animate({ opacity: 1 }, 7000, function() {

            //finished animating, minifade out and fade new back in           
            $('body').fadeOut(1000, function() {

                currimg++;

                if (currimg > images.length - 1) {

                    currimg = 0;

                }

                var newimage = images[currimg];

                //swap out bg src                
                $('body').css("background-image", "url(" + newimage + ")");

                //animate fully back in
                $('body').fadeIn(1000, function() {

                    //set timer for next
                    setTimeout(loadimg, 7000);

                });

            });

        });

    }
    setTimeout(loadimg, 1000);

});

setTimeout(function() {
    $('.alert').fadeOut('fast');
}, 3000);