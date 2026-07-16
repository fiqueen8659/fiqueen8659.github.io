const config=window.SITE_CONFIG||{},zh=document.documentElement.lang.toLowerCase().startsWith('zh');
if(config.colours){const root=document.documentElement.style;root.setProperty('--accent',config.colours.accent);root.setProperty('--red',config.colours.red);root.setProperty('--bg',config.colours.background);root.setProperty('--dark',config.colours.dark)}
document.querySelectorAll('.mark').forEach(e=>e.textContent=config.initials||'BC');
document.querySelectorAll('.wordmark b,.footer b').forEach(e=>e.textContent=config.name||'Brandon Chen');
document.querySelectorAll('.wordmark small').forEach(e=>e.textContent=zh?config.tagline?.zh:config.tagline?.en);
document.querySelectorAll('a[href^="mailto:"]').forEach(e=>e.href=`mailto:${config.email}`);
document.querySelectorAll('a').forEach(e=>{if(e.textContent.trim()==='LinkedIn')e.href=config.linkedin;if(e.textContent.trim()==='ORCID')e.href=config.orcid});
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
