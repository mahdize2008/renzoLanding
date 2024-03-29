$('.go-up').on('click',function(e){
    e.preventDefault();
    $('html , body').animate({scrollTop:'0'},500)
})

$('.btn-open-menu').on('click',function(e){
    e.preventDefault()
    $('.menu').animate({right:0})
    $('.backdrop').fadeIn(100)
})
$('.btn-close-menu,.backdrop').on('click',function(e){
    e.preventDefault()
    $('.menu').animate({right:'-100%'})
    $('.backdrop').fadeOut(100)
})