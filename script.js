
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function goToPage2() {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
  startTimer();
}


function startTimer() {
  let counter = 10;
  const timerEl = document.getElementById('timer');
  const interval = setInterval(() => {
    counter--;
    timerEl.textContent = counter;
    if (counter === 0) {
      clearInterval(interval);
      document.getElementById('page2').classList.remove('active');
      document.getElementById('page3').classList.add('active');
    }
  }, 1000);
}

const track = document.getElementById('carousel-track');
const track2 = document.getElementById('carousel-track2');
const track3 = document.getElementById('carousel-track3');
const totalSlides = 5;
let currentIndex = 0;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track.style.transform = `translateX(-${300 * currentIndex}px)`;
}

function moveCarousel2() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track2.style.transform = `translateX(-${320 * currentIndex}px)`;
}

function moveCarousel3() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track3.style.transform = `translateX(-${320 * currentIndex}px)`;
}

setInterval(moveCarousel, 5000); // 5 seconds interval
setInterval(moveCarousel2, 5000); // 5 seconds interval
setInterval(moveCarousel3, 5000); // 5 seconds interval


const heroTrack = document.getElementById("hero-carousel-track");
const heroDots = document.querySelectorAll(".hero-dot");
let heroIndex = 0;

function heroUpdateCarousel() {
  heroIndex = (heroIndex + 1) % 3;
  heroTrack.style.transform = `translateX(-${200 * heroIndex}px)`;
  heroDots.forEach(dot => dot.classList.remove("hero-active"));
  heroDots[heroIndex].classList.add("hero-active");
}

setInterval(heroUpdateCarousel, 3000);



  const swiper = new Swiper(".hero-swiper-container", {
    slidesPerView: 3, // default: 3 visible
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });