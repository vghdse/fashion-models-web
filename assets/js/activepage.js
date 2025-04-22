//MOBILE NAVIGATION
const toggleBtn = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('#navBar');
const navWrap = document.querySelector('.menu-section');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    navWrap.classList.toggle('menuFixed');
    navMenu.classList.toggle('openNav');
  });
};

//FORM VALIDATE
$(function () {
  $('#inputForm').validate({
    rules: {
      firstName: "required",
      lastName: "required",
      email: "required",
      phone: "required",
      password: "required",
      password: {
        minlength: 6
      },
      confirmPassword: {
        minlength: 6,
        equalTo: '[name="password"]'
      }
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('.scrollToTop').click(function () {
    $('.scrollToTop').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('.scrollToTop').tooltip('show');
});