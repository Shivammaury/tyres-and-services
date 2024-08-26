
const navItems = document.querySelectorAll('.nav-item.dropdown');

// Loop through each nav item and apply hover functionality
navItems.forEach(navItem => {
    const dropdownMenu = navItem.querySelector('.dropdown-menu');

    // Show dropdown on hover
    navItem.addEventListener('mouseenter', function() {
        dropdownMenu.style.display = 'block';
    });

    // Hide dropdown when not hovering
    navItem.addEventListener('mouseleave', function() {
        dropdownMenu.style.display = 'none';
    });
});


// slider javascript
$(document).ready(function(){
    $('.review-slider').slick({
      autoplay: false,             // Autoplay is off
      infinite: true,              // Enable infinite loop
      slidesToShow: 3,             // Show 3 slides at a time
      slidesToScroll: 1,           // Scroll 1 slide at a time
      arrows: false,                // Show navigation arrows
      dots: false,                  // Show navigation dots
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,      // Show 2 slides at a time for screens <= 1024px
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,      // Show 1 slide at a time for screens <= 600px
            slidesToScroll: 1,
          }
        }
      ]
    });

    // Initialize the slick slider
    $('.shop-img').slick({
        slidesToShow: 2,            // Show 2 images at a time
        slidesToScroll: 1,          // Scroll 1 image at a time
        infinite: true,             // Enable infinite loop
        arrows: false,               // Show navigation arrows
        dots: false,                 // Show navigation dots
        autoplay: false,            // Autoplay is off
        responsive: [
          {
            breakpoint: 1024,       // At screen width 1024px or less
            settings: {
              slidesToShow: 2,      // Show 2 slides
              slidesToScroll: 1,    // Scroll 1 slide
            }
          },
          {
            breakpoint: 768,        // At screen width 768px or less
            settings: {
              slidesToShow: 1,      // Show 1 slide
              slidesToScroll: 1,    // Scroll 1 slide
            }
          },
          {
            breakpoint: 480,        // At screen width 480px or less
            settings: {
              slidesToShow: 1,      // Show 1 slide
              slidesToScroll: 1,    // Scroll 1 slide
            }
          }
        ]
      });
  
      // Initialize Magnific Popup
      $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true, // Enable gallery mode
        },
      });

// deal slide javascript
      $('.deal-slider').slick({
        slidesToShow: 5,            // Show 5 items at a time
        slidesToScroll: 1,          // Scroll 1 item at a time
        infinite: true,             // Enable infinite loop
        arrows: false,               // Show navigation arrows
        dots: false,                 // Show navigation dots
        autoplay: false,            // Autoplay is off
        responsive: [
          {
            breakpoint: 1024,       // At screen width 1024px or less
            settings: {
              slidesToShow: 4,      // Show 4 items
              slidesToScroll: 1,    // Scroll 1 item
            }
          },
          {
            breakpoint: 768,        // At screen width 768px or less
            settings: {
              slidesToShow: 3,      // Show 3 items
              slidesToScroll: 1,    // Scroll 1 item
            }
          },
          {
            breakpoint: 480,        // At screen width 480px or less
            settings: {
              slidesToShow: 2,      // Show 2 items
              slidesToScroll: 1,    // Scroll 1 item
            }
          }
        ]
      });



      // Services section javascript

      $('.services-slider').slick({
        slidesToShow: 4,            // Show 4 items at a time
        slidesToScroll: 1,          // Scroll 1 item at a time
        infinite: true,             // Enable infinite loop
        arrows: false,               // Show navigation arrows
        dots: false,                 // Show navigation dots
        autoplay: false,            // Autoplay is off
        responsive: [
          {
            breakpoint: 1024,       // At screen width 1024px or less
            settings: {
              slidesToShow: 3,      // Show 3 items
              slidesToScroll: 1,    // Scroll 1 item
            }
          },
          {
            breakpoint: 768,        // At screen width 768px or less
            settings: {
              slidesToShow: 2,      // Show 2 items
              slidesToScroll: 1,    // Scroll 1 item
            }
          },
          {
            breakpoint: 480,        // At screen width 480px or less
            settings: {
              slidesToShow: 1,      // Show 1 item
              slidesToScroll: 1,    // Scroll 1 item
            }
          }
        ]
      });
    
  });
  


  // have a question form js 
  $(document).ready(function() {
    $('#question-input').on('input', function() {
      if ($(this).val().trim() !== "") {
        $('#submit-btn').show();  // Show the button when input has text
      } else {
        $('#submit-btn').hide();  // Hide the button when input is empty
      }
    });


    // Initially hide all boxes except the first 2
    $(".content").hide().slice(0, 8).show();
  
    // Load More Functionality
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".content:hidden").slice(0, 4).slideDown();  // Load 2 more items on each click
      if($(".content:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
    // Filter Functionality
    $(".filter-btn").on("click", function(){
      var category = $(this).attr("data-filter");
  
      // Activate the clicked filter button
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");
  
      if(category === "all") {
        $(".content").hide().slice(0, 4).show(); // Show first 2 items of all categories
      } else {
        $(".content").hide().filter('[data-category="' + category + '"]').slice(0, 4).show(); // Show first 2 items of the selected category
      }
  
      $("#loadMore").text("Load More").removeClass("noContent").show(); // Reset Load More button
    });
    
    // Ensure Load More works after filtering
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      var category = $(".filter-btn.active").attr("data-filter");
      if(category === "all") {
        $(".content:hidden").slice(0, 4).slideDown();
      } else {
        $('.content:hidden[data-category="' + category + '"]').slice(0, 4).slideDown();
      }
      if($(".content:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });  


  });


  function toggleDropdown(dropdownId) {
    document.getElementById(dropdownId).classList.toggle("show");
}

function filterFunction(dropdownId, searchInputId) {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById(searchInputId);
    filter = input.value.toUpperCase();
    ul = document.getElementById(dropdownId).querySelector("ul");
    li = ul.getElementsByClassName("dropdown-option");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

// header fixed javascript 

let lastScrollTop = 0;
const navHeader = document.getElementById('nav-header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll Down
        navHeader.style.top = '-60px'; // Adjust based on the height of your navbar
    } else {
        // Scroll Up
        navHeader.style.top = '0';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});




 
    
 
  
  
 

  
