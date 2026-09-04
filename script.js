
const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(btn && nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const box=document.createElement('div');
box.className='lightbox';
box.innerHTML='<button class="lightbox-close" aria-label="Close image">×</button><img alt="">';
document.body.appendChild(box);
const boxImg=box.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(img=>{
  img.style.cursor='zoom-in';
  img.addEventListener('click',()=>{
    boxImg.src=img.src;
    boxImg.alt=img.alt||'Expanded project image';
    box.classList.add('open');
  });
});
function closeBox(){box.classList.remove('open');boxImg.src='';}
box.addEventListener('click',e=>{if(e.target===box||e.target.classList.contains('lightbox-close'))closeBox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox();});
