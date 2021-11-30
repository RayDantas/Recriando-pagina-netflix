$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{ /*tamanho de tela pequeno*/
            items:1
        },
        600:{ /*tamanho de tela ate 600*/
            items:3
        },
        1000:{
            items:5 /*tamanho de tela grande*/
        }
    }
})
