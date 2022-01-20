$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      800:{
          items:4
      },
      1000:{
          items:5
      }
  }
})

function enviarParaNetflix() {
  window.open('https://www.netflix.com/br/title/80002479', '_blank');
}