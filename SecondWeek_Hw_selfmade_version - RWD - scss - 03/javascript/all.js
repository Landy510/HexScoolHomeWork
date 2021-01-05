$(document).ready(function(){
    $('.rwd-hamburger-btn').click(function(e){
        e.preventDefault();
        $('.rwd-nav-option').slideToggle();
    })
    
    $('.special_lecture_btn').click(function(e){
        e.preventDefault();
        $('.special_lecture_section').siblings().slideUp();
        $('.special_lecture_section').delay(500).slideToggle(1000);
    })

    $('.popular_lecture_btn').click(function(e){
        e.preventDefault();
        $('.popular_lecture_section').siblings().slideUp();
        $('.popular_lecture_section').delay(500).slideToggle(1000);
    })
    $('.fancy_product_btn').click(function(e){
        e.preventDefault();
        $('.fancy_product_section').siblings().slideUp();
        $('.fancy_product_section').delay(500).slideToggle(1000);
    })
})
