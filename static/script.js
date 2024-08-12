
/* click "Explore More.." button to auto scroll down to main content */

document.querySelector('.explore-button').addEventListener('click', function() {
    document.getElementById('more-content').scrollIntoView({ behavior: 'smooth' });
});
/* click "Explore More.." button to auto scroll down to main content */



/*video section carousel button slider functionality */

const slides = document.querySelector('.slides');
const slideCount = slides.children.length;
const indicators = document.querySelector('.indicators');
let currentIndex = 1;
let isTransitioning = false;

// Clone first and last slides for infinite looping
const firstClone = slides.children[0].cloneNode(true);
const lastClone = slides.children[slideCount - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slides.children[0]);

const updatedSlideCount = slides.children.length;
slides.style.transform = `translateX(-${currentIndex * 100}%)`;

// Create indicators
for (let i = 0; i < slideCount; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(i + 1));
    indicators.appendChild(indicator);
}

const updateIndicators = () => {
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === (currentIndex - 1) % slideCount);
    });
};

const goToSlide = (index) => {
    if (isTransitioning) return;
    isTransitioning = true;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updateIndicators();
};

const handleTransitionEnd = () => {
    isTransitioning = false;
    if (currentIndex === 0) {
        slides.style.transition = 'none';
        currentIndex = slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === slideCount + 1) {
        slides.style.transition = 'none';
        currentIndex = 1;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
};

slides.addEventListener('transitionend', handleTransitionEnd);

document.querySelector('.next').addEventListener('click', () => {
    if (!isTransitioning) {
        goToSlide(currentIndex + 1);
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if (!isTransitioning) {
        goToSlide(currentIndex - 1);
    }
});

/*video section carousel button slider functionality */


/*transform to full width and fixing the position of navigation bar*/

window.addEventListener('scroll', function() {
    const fixed = document.getElementById('fixed');
    const widen = document.getElementById('widen');
    var links = document.querySelectorAll('.navigation-bar a');
    const threshold = 80; 
  
    if (window.scrollY > threshold) {
        fixed.classList.add('fixed-nav');
        widen.classList.add('widen-nav');
        links.forEach(function(link) {
            link.classList.add("no-radius");
        });
    }

     else {
        fixed.classList.remove('fixed-nav');
        widen.classList.remove('widen-nav');
        links.forEach(function(link) {
            link.classList.remove("no-radius");
        });
    }
  });

  function onPageLoad() {
    updateNavOnScroll();
}



/*transform to full width and fixing the position of navigation bar*/

  // Toggle Menu
  document.getElementById('toggle-button').addEventListener('click', function() {
    var navWrapper = document.getElementById('fixed');
    var body = document.body;
    var button = this;

    navWrapper.classList.toggle('active');
    button.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Toggle scroll behavior
});