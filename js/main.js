// SideBar Toggle Shadow by each Button

$(document).ready(function () {
    $(".headset-btn").click(function () {
        $(".menu-sidebar").toggleClass("sidebar-box1");
    });
});

$(document).ready(function () {
    $(".clubs-btn").click(function () {
        $(".menu-sidebar").toggleClass("sidebar-box2");
    });
});

$(document).ready(function () {
    $(".accessories-btn").click(function () {
        $(".menu-sidebar").toggleClass("sidebar-box2");
    });
});

// Flickity Slider
$(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    draggable: false,
    pageDots: false,
    wrapAround: true,
});
