$(document).ready(function(){
    $("#slider").bxSlider({
        randomStart: true,
        captions:true,
        speed: 2000,
        minSlides:1,
        maxSlides: 1, 
        slideWidth: 500,
        pagerType:'short',
        pagerSelector:'#id_pager'
    })
})