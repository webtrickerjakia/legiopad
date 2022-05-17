(function ($) {
  $(function () {

      $('.hamburger').click(function () {
          $("body").toggleClass("navshown");
          $('.nav-wrap').fadeToggle();
      });



      $(".down-btn").click(function () {
          $('html, body').animate({
              scrollTop: $("#flavors-wrap").offset().top
          }, 100);

      });




      $('.has-sub-nav').click(function () {
          $('.dropdown-wrap').fadeToggle()
      })

      // $('.tab-trigger-li').click(function () {
      //     $('.tab-trigger-li').removeClass('tab-active');
      //     $(this).addClass('tab-active');
      //     $('.idos-item-wrap .idos-item').hide();

      //     var activeTab = $(this).find('a').attr('href');
      //     $(activeTab).fadeIn();
      //     return false;
      // });

      $('.main-nav ul li a').click(function () {
        $("body").removeClass("navshown");
        $('.nav-wrap').fadeOut();
    });
      
      // $('.idos-item-tab-trigger ul li').click(function () {
      //     $('.idos-item-tab-trigger ul li').removeClass('idos-active');
      //     $(this).addClass('idos-active');
      //     $('.idos-tab-item-wrap .idos-tab-item').hide();

      //     var activeTab = $(this).find('a').attr('href');
      //     $(activeTab).fadeIn();
      //     return false;
      // });
      
      
      $('.connect').click(function (e) {
          e.preventDefault()
          $("body").addClass("pupupShown");
      });
      $('.connect-wallet-close').click(function () {
          $("body").removeClass("pupupShown");
      });

      



      $('.idos-item-tab-trigger-li').click(function () {
          $('.idos-item-tab-trigger-li').removeClass('idos-active');
          $(this).addClass('idos-active');
          $('.idos-tab-item-wrap .idos-tab-item').hide();
          var activeTab = $(this).find('a').attr('href');
          $(activeTab).fadeIn();
          return false;
      });

      $('.idos-item-tab-trigger ul li.staked a').click(function (e) {
          e.preventDefault()
          $(".idos-item-tab-trigger ul li.staked").toggleClass("idos-active");
      });


      $(".farming-item-accordion").each(function(){
          var $this = $(this);
          $this.find(" .farming-item-accordion-heading").on("click touch", function(){
              $(".farming-item-accordion").removeClass("accordion-active")
              $(".farming-item-accordion-content-wrap").slideUp();
              if($this.find(".farming-item-accordion-content-wrap:visible").length){
                  $(".farming-item-accordion").removeClass("accordion-active")
                  $(".farming-item-accordion-content-wrap").slideUp();
              }
              else{
                  $this.addClass("accordion-active")
                  $(".farming-item-accordion-content-wrap").slideUp();
                  $this.find(".farming-item-accordion-content-wrap").slideDown();
              }
          })
      });



  // Calender
if($('#calendarContainer').length){

  function createDummyData() {
    var date = new Date();
    var data = {};
  
    for (var i = 0; i < 10; i++) {
      data[date.getFullYear() + i] = {};
  
      for (var j = 0; j < 12; j++) {
        data[date.getFullYear() + i][j + 1] = {};
  
        for (var k = 0; k < Math.ceil(Math.random() * 10); k++) {
          var l = Math.ceil(Math.random() * 28);
  
          try {
            data[date.getFullYear() + i][j + 1][l].push({
              startTime: "10:00",
              endTime: "12:00",
              text: "Some Event Here"
            });
          } catch (e) {
            data[date.getFullYear() + i][j + 1][l] = [];
            data[date.getFullYear() + i][j + 1][l].push({
              startTime: "10:00",
              endTime: "12:00",
              text: "Some Event Here"
            });
          }
        }
      }
    }
  
    return data;
  }
  
  // creating the dummy static data
  var data = createDummyData();
  
  // initializing a new calendar object, that will use an html container to create itself
  var calendar = new Calendar(
    "calendarContainer", // id of html container for calendar
    "small", // size of calendar, can be small | medium | large
    [
      "Wednesday", // left most day of calendar labels
      3 // maximum length of the calendar labels
    ],
    [
      "#E91E63", // primary color
      "#C2185B", // primary dark color
      "#FFFFFF", // text color
      "#F8BBD0" // text dark color
    ]
  );
  

}




    $('.cjslib-day').on('click', function(e) {
      e.preventDefault();
      var positionX = $(this).offset().left,
          positionY = $(this).offset().top;
          $('.modal-event').toggleClass('is-visible');
          $('.modal-event').css({'left': positionX, 'top': positionY})
    });


$('.idos-item').each(function(){

  var $this = $(this);

  $this.find('.day-btn a').click(function(e){
    e.preventDefault()
    var $$this = $(this);
    var $$thisVal = $$this.attr('title');
    var $$thisText = $$this.text();
    console.log($$thisVal)

    $this.find('.day-btn a').removeClass('alizarin-crimson bg-rgba-concrete border-0')
    $this.find('.day-btn a').addClass('text-white')

    $$this.addClass('alizarin-crimson bg-rgba-concrete border-0')
    $$this.removeClass('text-white')
    

    $('.main-text-change').text($$thisVal)
    $('.text-change span').text($$thisText)



  })
})
   


    // const progress = document.querySelector('.progress-done');

    // setTimeout(() => {
    //   progress.style.opacity = 1;
    //   progress.style.width = progress.getAttribute('data-done') + '%';
    // }, 500)
    



    var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '100');
    });
    
    








  }) // End ready function.






})(jQuery)
