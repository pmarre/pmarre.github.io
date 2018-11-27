function openNav() {
    document.getElementById('myNav').style.height = "100%";
};

function closeNav() {
    document.getElementById('myNav').style.height = "0%";
};


const home = $('#banner').offset().top;
const about = $('#about').offset().top;
const port = $('#portfolio').offset().top;
const education = $('#education').offset().top;

$(document).scroll(function() {
    var scroll = $(document).scrollTop();
    if (scroll >= home && scroll < about) {
        $('.nav-item').css('border', 'none');
        $('.nav1').css('border-bottom', '3px coral solid');
    } else if (scroll >= port && scroll < education) {
        $('.nav-item').css('border', 'none');
         $('.nav2').css('border-bottom', '3px coral solid');
    } else if (scroll >= education) {
        $('.nav-item').css('border', 'none');
         $('.nav3').css('border-bottom', '3px coral solid');
    }
});
