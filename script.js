const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const sections=[...document.querySelectorAll('main section[id]')], links=[...document.querySelectorAll('.nav-links a')];
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id||(!e.target.id&&l.getAttribute('href')==='#home')))}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>obs.observe(s));
window.addEventListener('scroll',()=>{document.querySelector('.nav').classList.toggle('scrolled',scrollY>20)});
