$(function(){
  // ハンバーガー
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.phone-nav').slideToggle();
    return false;
  });
  // phone-nav
  $('.phone-nav').hide();
  // nav-trigger
  $('.nav-trigger').click(function(){
    $('.phone-nav').slideToggle(200);
    $('.btn-trigger').toggleClass('active')
  });
  
  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 100;
    $('html, body').animate({scrollTop: target}, 500);
    return false;
  });
  // よくある質問
  $('.open').show();
  $('dt').click(function(){
    $(this).next().slideToggle(200);
  });
  // お問い合わせ
  const $submitBtn = $('#submitBtn')
  $('.form input,.form textarea').on('change',function(){
    if (
      $('.form input[type="name"]').val() !== "" &&
      $('.form input[type="email"]').val() !== "" &&
      $('.form #message').val() !== "" &&
      $('.form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled',false);
    } else{
      $submitBtn.prop('disabled',true);
      $('.error').show()
    }
  });
  // AOS.js
  AOS.init()
  // swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    
    slidesPerView: 1.6,
    spaceBetween: 30,
    
    breakpoints: {
      650: {
        slidesPerView: 3.3,
      },
      990: { 
        slidesPerView: 3.8,
      },
      1100: {
        spaceBetween: 62
        
      }
    },
    centeredSlides : true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    
    autoplay: {
      delay: 5000,
    }
    // watchSlidesVisibility: true,
  });
});