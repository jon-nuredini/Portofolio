// Smooth scroll for button
document.querySelector('.btn').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Fade-in sections
const faders = document.querySelectorAll('section, .skill-card, .project-card');
const appearOptions = { threshold:0.2, rootMargin:"0px 0px -30px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => { fader.classList.add('opacity-0'); appearOnScroll.observe(fader); });
