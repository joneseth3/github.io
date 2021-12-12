$(document).ready(function(){
    $("#slider").bxSlider({
        randomStart: true,
        speed: 2000,
        minSlides:1,
        maxSlides: 1, 
        slideWidth: 500,
        slideHeight: 400,
        pagerType:'short',
        pagerSelector:'#id_pager'
    })
})