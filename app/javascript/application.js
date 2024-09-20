// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.accordion-list > li > .answer').forEach((el) => {
    el.style.display = 'none';
  });

  document.querySelectorAll('.accordion-list > li').forEach((item) => {
    item.addEventListener('click', function() {
      const isActive = this.classList.contains('active');
      document.querySelectorAll('.accordion-list > li.active .answer').forEach((el) => {
        el.style.display = 'none';
      });
      document.querySelectorAll('.accordion-list > li.active').forEach((el) => {
        el.classList.remove('active');
      });

      if (!isActive) {
        this.classList.add('active');
        this.querySelector('.answer').style.display = 'block';
      }
    });
  });
});
$('.tab-menu li a').on('click', function(){
  var target = $(this).attr('data-rel');
$('.tab-menu li a').removeClass('active');
  $(this).addClass('active');
  $("#"+target).fadeIn('slow').siblings(".tab-box").hide();
  return false;
});
