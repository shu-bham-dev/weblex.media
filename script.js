/* NAV */
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>40));

/* HAMBURGER */
const ham=document.getElementById('ham'),mob=document.getElementById('mob');
ham.addEventListener('click',()=>{ham.classList.toggle('open');mob.classList.toggle('open')});
function closeM(){ham.classList.remove('open');mob.classList.remove('open')}

/* SCROLL REVEAL — use threshold:0.05 so elements near the fold appear */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:0.05,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* COUNT-UP */
function countUp(el,target,dur){
  let s=0,step=target/(dur/16);
  const t=setInterval(()=>{
    s+=step;if(s>=target){s=target;clearInterval(t)}
    el.textContent=Math.floor(s);
  },16);
}
const cobs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      countUp(e.target,parseInt(e.target.dataset.count),1400);
      cobs.unobserve(e.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>cobs.observe(el));

/* INDUSTRY TABS */
function setInd(id,tab){
  document.querySelectorAll('.ind-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ind-panel').forEach(p=>p.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById('ip-'+id).classList.add('active');
}
