var ul = document.querySelector('nav ul')
var show = document.querySelector('nav ul li a')
var product = document.querySelector('#aproduct')
var about = document.querySelector('#aabout')
var contact = document.querySelector('#acontact')
var menuBtn = document.querySelector('.menu-btn i')
var w = document.querySelector('body')
function onScroll() {

  console.log(scrollY)
}
function hoverHome() {
  if (scrollY > 0) {
    show.classList.add('active')
  }if (scrollY > 699) {
    show.classList.remove('active')
  }
}
function hoverProduct() {
  if (scrollY > 699) {
    product.classList.add('active')
  }if (scrollY > 2175) {
    product.classList.remove('active')
  }if (scrollY < 699) {
    product.classList.remove('active')
  }
}
function hoverAbout() {
  if (scrollY > 2176) {
    about.classList.add('active')
  }if (scrollY > 3414) {
    about.classList.remove('active')
  }if (scrollY < 2176) {
    about.classList.remove('active')
  }
}
function hoverContact() {
  if (scrollY > 3414) {
    contact.classList.add('active')
  }if (scrollY > 9950) {
    contact.classList.remove('active')
  }if (scrollY < 3414) {
    contact.classList.remove('active')
  }
}

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  } else {
    ul.classList.add('open')
  }
}
function closeMenu() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  }
}
function hidden() {
  if (w.classList.contains('hidden')) {
    w.classList.remove('hidden')
  } else {
    w.classList.add('hidden')
  }
}

function menuShoww() {
  menuShow()
  hidden()
}
ScrollReveal({
  origin: 'top',
  distance: '90px',
  duration: 800,
}).reveal(`header,
header button,
header img,
#product .practice h2,
#product .practice p,
#product .advice h2,
#product .advice p,
#product .practice .cards,
#product .advice .cartoes,
#product .advice .cartao,
#product .advice .cartao h3,
#product .advice .cartao img,
#product .advice .cartao2,
#product .advice .cartao3,
#about h2,
#about p,
#about img,
#about .container h4,
#logos,
#logos .subscribe h2,
#logos .subscribe label,
#logos,
#contact h2,
#contact p,
#contact .cardsContact,
#contact .cardContact2,
#contact .cardContact3,
#contact h2,
#contact button,
footer .links,
footer .touch .touch1,
footer .touch .touch2,
footer .touch .touch3,
footer h4,
footer ul`);


function all() {
onScroll();
hoverHome();
hoverProduct();
hoverAbout();
hoverContact()
}

















// function woman() {
//   if (w.classList.contains('moca')) {
//     w.classList.add('moca1')
//   }else {
//     ul.classList.remove('moca1')
//   }}
//   function showwoman() {
//     if (w.classList.contains('moca1')) {
//       w.classList.remove('moca1')
//     }}
//   function menuShoww() {
//     menuShow();
//     woman();
//     showwoman()
//   }