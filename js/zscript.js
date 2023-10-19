const nav = document.querySelector(".navbar");
let isScrolled = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 90 && !isScrolled) {
    isScrolled = true;
    window.addEventListener("scroll", handleScroll);
  }
});

function handleScroll() {
  if (window.scrollY > 90) {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("navbar--hidden");
    } else {
      nav.classList.remove("navbar--hidden");
    }
    lastScrollY = window.scrollY;
  } else {
    nav.classList.remove("navbar--hidden");
    window.removeEventListener("scroll", handleScroll);
    isScrolled = false;
  }
}

let lastScrollY = window.scrollY;

// window.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var navbar = document.querySelector('.navbar');
//   var navbarLinks = navbar.querySelectorAll('a');

//   if (scrollPosition > 85) {
//     navbar.classList.add('navbar-scrolled');
//     navbarLinks.forEach(function(link) {
//       link.style.color = 'white';
//     });
//   } else {
//     navbar.classList.remove('navbar-scrolled');
//     navbarLinks.forEach(function(link) {
//       link.style.color = 'white';
//     });
//   }
// });

$('.dropDown-burger').hide();

$('.dropDown-product').hide();

const body = document.querySelector('body')
const navbar = document.querySelector('.navbar')

$('#nav-product').on('click', function(e) {
    e.preventDefault();
    if ($('.dropDown-product').is(':hidden')){
      body.style.overflow = 'hidden'
      $('.dropDown-product').css({
        display: 'block',
        left: '-100%'
      }).animate({
        left: '0'
      }, 600)
    } else {
      body.style.overflow = 'auto'
      setTimeout(() => {
        navbar.style.position = 'sticky'
      }, 200)
      $('.dropDown-product').animate({
        left: '-100%'
      }, 600, function() {
        $(this).css('display', 'none')
      });
    }
  }
)

$('.sort-btn-list').hide()

// if($('.sort-btn-list').is(':hidden')){
//   $('.sort-btn').on('click', function(e){
//     e.preventDefault()
//     $('.sort-btn-list').animate({}, 800, function(){
//       $(this).css('display','flex')
//       $(this).css('flex-direction', 'column')
//     })
//   })
// } else {
//   $('.sort-btn').on('click', function(e){
//     e.preventDefault()
//     $('.sort-btn-list').animate({}, 800, function(){
//       $(this).css('display','none')
//     })
//   })
// }

$('.sort-btn').on('click', function(e){
  e.preventDefault()
  $('.sort-btn-list').slideToggle('fast')
})

function showNotification(message){
  e.preventDefault()
  var notification = document.getElementById('notification');
  var notificationText = document.getElementById('notification-text');

  notificationText.message
  notification.style.display = 'block'

  setTimeout(function () {
    hideNotification();
  }, 3000);
}

function hideNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "none";
}

var saveBtn = document.getElementsByClassName('save-btn')

$(saveBtn).on('click', function(){
  showNotification("Saved!");
})

//
$(document).ready(function() {
  $('.expandable-box').click(function(e) {
    if($(this).hasClass('open')) {
      $('.expandable-box.out').not($(this)).removeClass('out');
      $(this).removeClass('open');
    }
    else {
      $('.expandable-box').not($(this)).addClass('out');
      $(this).addClass('open');
    }
  });
});

$('#register-list').hide();

$('#register-trigger').on('click', function(e) {
  e.preventDefault();
  if ($('#register-list').is(':hidden')){
    body.style.overflow = 'hidden'
    $('#register-list').css({
      display: 'block',
      right: '-100%'
    }).animate({
      right: '0'
    }, 600)
  } else {
    body.style.overflow = 'auto'
    setTimeout(() => {
      navbar.style.position = 'sticky'
    }, 200)
    $('#register-list').animate({
      right: '-100%'
    }, 600, function() {
      $(this).css('display', 'none')
    });
  }
}
)

const card = document.querySelector('.card');

card.addEventListener('mousedown', () => {
  card.classList.add('active');
});

card.addEventListener('mouseup', () => {
  card.classList.remove('active');
});

const popUp = document.querySelector('.pop-up')
const overlay = document.querySelector('.overlay')

popUp.classList.add("active");
overlay.classList.add("active");

overlay.addEventListener("click", () => {
  popUp.classList.remove("active");
  overlay.classList.remove("active");
});

function redirectOriginalLarge(){
  window.location.href = "../ProductPage/ProductDetails/original-large.html";
}

function redirectOriginalMedium(){
  window.location.href = "../ProductPage/ProductDetails/original-medium.html";
}

function redirectOriginalSmall(){
  window.location.href = "../ProductPage/ProductDetails/original-small.html";
}

