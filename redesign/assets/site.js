const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
function closeMenu(){nav?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
function openFragment(){let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}if(!id)return;const el=document.getElementById(id);if(el){const detail=el.matches('details')?el:el.closest('details');if(detail)detail.open=true;requestAnimationFrame(()=>el.scrollIntoView({block:'start'}));}}
window.addEventListener('hashchange',openFragment);openFragment();
const form=document.querySelector('#contact-form');
form?.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#form-status');status.textContent='This is a local preview. Your message has not been sent or saved. To contact the firm, call 209-835-9590.';status.focus();});
if(form)form.querySelector('button[type="submit"]').disabled=false;
