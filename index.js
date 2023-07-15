// navifation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});
//sevices section - modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    })
})

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        }) 
    })
});

//porfolio section-modal

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
       portfolioModal(i);
    })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        }) 
    })
});

//website dark/light theme

// Scroll to top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// scroll effect

// Smooth scrolling effect
document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('a.scroll-link');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const targetOffset = targetElement.offsetTop;
  
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  