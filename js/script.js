window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  // Page Loader
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});
// Toggle Navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

// Active Section
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.remove("hide-scrolling");
    }
    setTimeout(() => {
      document.querySelector("section.active").classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});
// About Tabs
const tabContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// Portfolio Popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when click outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// Float Button onclick show the list div
const floatBtn = document.querySelector('.float-btn');
floatBtn.addEventListener('click', () => {
  const wa = document.querySelector('.wa');
  const ig = document.querySelector('.ig');
  const tt = document.querySelector('.tt');
  wa.classList.toggle('open-btn');
  ig.classList.toggle('open-btn');
  tt.classList.toggle('open-btn');
  floatBtn.classList.toggle('rotate');

  wa.addEventListener('click', () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=%2B6281910090007&text=Halo"
  })
  ig.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/nathan5aja"
  })
  tt.addEventListener('click', () => {
    window.location.href = "https://www.tiktok.com/@nathaann_20"
  })

  if(floatBtn.classList.contains('rotate')){
    anime({
    targets: floatBtn,
    autoplay: true,
    scaleX: 0.2,
    rotate: 45,
    translateY: 60,
    direction: 'alternate',
    duration: 150,
    easing: 'easeOutSine'
  });
  } else {
    anime({
    targets: floatBtn,
    autoplay: true,
    scaleX: 0.2,
    translateY: 60,
    rotate: 45,
    direction: 'alternate',
    duration: 150,
    easing: 'easeOutSine'
  })
  }
})

// Animate bg
anime({
  targets: '.circle-3',
  translateY: 20,
  scale: 0.8,
  easing: 'easeOutSine',
  loop: true,
  direction: 'alternate',
  duration: 2000,
})
anime({
  targets: '.circle-4',
  translateX: 50,
  scale: 0.8,
  easing: 'easeOutSine',
  loop: true,
  direction: 'alternate',
  duration: 1500,
})


// Fetch Contact data
const scriptURL = "https://script.google.com/macros/s/AKfycbxaQwcFp6ydQKk1m8CIOTdatw90rzM2a_-OtC1nrkPf75wo1msK3UlRgRQR0Ck_0p4c/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
