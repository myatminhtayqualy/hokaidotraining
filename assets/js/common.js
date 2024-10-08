document.addEventListener("DOMContentLoaded", () => {

     const headers = document.querySelectorAll('.accordion-header');
   
   
     headers.forEach(header => {
         header.addEventListener('click',function(){
             const content = this.nextElementSibling;
             const icon = header.querySelector('.headertext');
   
             icon.classList.toggle('newicon');
     
             content.classList.toggle('show');
           
           
         });  
   
       
     });
});
   


$(document).ready(function() {
    

     $(".navbartogellericon").on('click',function(e){
          $(this).toggleClass('show');
          $('.menuitems').toggleClass('show');
          $('.customnavbar').toggleClass('bgchange');
          $("body").toggleClass("noscroll");
          $(".navbarcontainerfluid").toggleClass("bgchange");
     });

     $(".nav-link").on('click',function(e){
        $(".nav-link").removeClass("active");

        $(this).addClass("active");
     });

    
          $(window).scroll(function(){
               const footerMain = $("#footer-main");
               const scrollPosition = $(window).scrollTop();
               const windowHeight = $(window).height();
               const footerMainOffset = footerMain.offset().top;

               if (scrollPosition <= 300) {
                 $(".pagetop").addClass("d-none");
               } else {
                 $(".pagetop").removeClass("d-none");
               }
           
               if ($(window).width() <= 768) {
                    
                 if (scrollPosition + windowHeight >= footerMainOffset) {
                   $(".floatbutton").addClass("pos");
                 } else {
                   $(".floatbutton").removeClass("pos");
                 }
               } else {
                 if (scrollPosition + windowHeight >= footerMainOffset) {
                   $(".floatbutton").addClass("pos");
                 } else {
                   $(".floatbutton").removeClass("pos");
                 }
               }

               //To Top Click
               setTimeout(() => {
                    $(".pagetop").click(() => {
                    window.scrollTo(0, 0);
                    });
               }, 300);
          });



});



