document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",e=>{const target=document.querySelector(link.getAttribute("href"));if(target){e.preventDefault();target.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}}));

// Subtle scroll-in motion; content remains visible when observers are unavailable.
const revealTargets=document.querySelectorAll('.section, .project, .skill, .cta, footer');
revealTargets.forEach((el,index)=>{el.classList.add('reveal');if(el.classList.contains('project')||el.classList.contains('skill'))el.style.transitionDelay=`${(index%3)*70}ms`;});
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});revealTargets.forEach(el=>observer.observe(el));}else{revealTargets.forEach(el=>el.classList.add('is-visible'));}

// Add gentle staggered reveals and a subtle hero-card pointer glow.
const heroCard=document.querySelector('.hero-card');
if(heroCard && !matchMedia('(prefers-reduced-motion: reduce)').matches){heroCard.addEventListener('pointermove',e=>{const r=heroCard.getBoundingClientRect();heroCard.style.setProperty('--pointer-x',`${e.clientX-r.left}px`);heroCard.style.setProperty('--pointer-y',`${e.clientY-r.top}px`);});}
