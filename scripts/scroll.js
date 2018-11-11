$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

$('.navigation').on('click', function(){
    $this = $(this);
    $siblings = $('.navigation');
    $siblings.removeClass('active');
    $this.addClass('active');
});
