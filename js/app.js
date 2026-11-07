"use strict";
(function(){var d=document,h=d.documentElement,EN=h.lang==="en",R=matchMedia("(prefers-reduced-motion:reduce)").matches,c=navigator.connection||{},lite=!!(c.saveData||(navigator.deviceMemory&&navigator.deviceMemory<=4)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)),q=function(s,x){return[].slice.call((x||d).querySelectorAll(s))};
h.classList.add("js");if(lite)h.classList.add("lite");
var nv=q("#nv")[0],bg=q("#bg")[0];bg.onclick=function(){var o=nv.classList.toggle("o");bg.setAttribute("aria-expanded",o)};
var p=d.createElement("div");p.id="pg";d.body.appendChild(p);var hd=q("header")[0],cta=q(".cta")[0],tk=0;
function sc(){tk=0;var y=scrollY,m=h.scrollHeight-innerHeight;p.style.transform="scaleX("+(m>0?y/m:0)+")";hd.classList.toggle("sc",y>20);if(cta)cta.classList.toggle("on",y>300)}
addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(sc)}},{passive:true});sc();
if(!lite&&"IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px 18% 0px",threshold:.01});
q("main h2:not(.hh), main .cd, .pc, .sgn, .st li, .tm li, .vc").forEach(function(n){n.classList.add("rv");io.observe(n)})}
var v=q(".hvid")[0];if(v&&!c.saveData&&!R){v.src=v.dataset.src;v.addEventListener("canplay",function(){v.play().catch(function(){})},{once:true});
if("IntersectionObserver"in window)new IntersectionObserver(function(es){var e=es[0];if(v.readyState>1){if(e.isIntersecting)v.play().catch(function(){});else v.pause()}}).observe(v)}
function burst(el){if(R)return;var b=el.getBoundingClientRect();for(var i=0;i<16;i++){var s=d.createElement("span"),a=Math.random()*6.28,r=60+Math.random()*120;s.className="cf";s.style.cssText="background:"+["#008650","#fbd016","#e7112d"][i%3]+";left:"+(b.left+b.width/2)+"px;top:"+b.top+"px;--x:"+Math.cos(a)*r+"px;--y:"+(Math.sin(a)*r-90)+"px;--r:"+(Math.random()*720-360)+"deg";d.body.appendChild(s);(function(s){setTimeout(function(){s.remove()},1500)})(s)}}
q(".hv h1, .hv .hh, .hx h1").forEach(function(h){var t=h.textContent.trim().split(/\s+/);h.setAttribute("aria-label",t.join(" "));h.textContent="";t.forEach(function(w,i){var a=d.createElement("span"),b=d.createElement("span");a.className="wd";a.setAttribute("aria-hidden","true");b.textContent=w;b.style.setProperty("--i",i);a.appendChild(b);h.appendChild(a);h.appendChild(d.createTextNode(" "))})});
var nf=lite?4:(innerWidth<760?6:9),fls=[];
if(!R)q(".sl, .hx").forEach(function(s){var f=d.createElement("div");f.className="fls";f.setAttribute("aria-hidden","true");f.style.setProperty("--h",(s.offsetHeight+180)+"px");for(var i=0;i<nf;i++){var e=d.createElement("span");e.className="fl t"+((i+(Math.random()*7|0))%7);e.style.cssText="--x:"+(Math.random()*92)+"%;--sz:"+(26+Math.random()*32)+"px;--du:"+(12+Math.random()*10)+"s;--dy:-"+(i*2.6)+"s;--dx:"+(Math.random()*80-40)+"px;--rot:"+(Math.random()*360-180)+"deg";f.appendChild(e)}s.insertBefore(f,s.querySelector(".hvc,.hxc"));fls.push(f)});
if(fls.length&&"IntersectionObserver"in window){var fo=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle("pz",!e.isIntersecting)})});fls.forEach(function(f){fo.observe(f)})}
var hs=q(".hs")[0];if(hs){var sl=q(".sl",hs),dt=q(".dt"),ci=0,st=0,paused=false,user=false;sl[0].classList.add("on");
function go(n){n=(n+sl.length)%sl.length;hs.scrollTo({left:n*hs.clientWidth,behavior:R?"auto":"smooth"})}
function upd(){st=0;var n=Math.round(hs.scrollLeft/hs.clientWidth);if(n===ci)return;ci=n;dt.forEach(function(b,k){b.setAttribute("aria-current",k===n)});sl.forEach(function(s,k){s.classList.toggle("on",k===n)})}
hs.addEventListener("scroll",function(){if(!st){st=1;requestAnimationFrame(upd)}},{passive:true});
dt.forEach(function(b,k){b.onclick=function(){go(k)}});q(".hp")[0].onclick=function(){go(ci-1)};q(".hq")[0].onclick=function(){go(ci+1)};
hs.onkeydown=function(e){if(e.key==="ArrowLeft")go(ci-1);if(e.key==="ArrowRight")go(ci+1)};
var hz=q(".hz")[0],hv=hs.parentNode;hz.onclick=function(){user=!user;hz.setAttribute("aria-pressed",user);hz.setAttribute("aria-label",user?(EN?"Resume autoplay":"Reprendre le défilement"):(EN?"Pause autoplay":"Mettre en pause le défilement"))};
["pointerenter","focusin","touchstart"].forEach(function(ev){hv.addEventListener(ev,function(){paused=true},{passive:true})});["pointerleave","focusout","touchend"].forEach(function(ev){hv.addEventListener(ev,function(){paused=false},{passive:true})});
if(!R)setInterval(function(){if(!paused&&!user&&!d.hidden&&scrollY<hv.offsetHeight)go(ci+1)},7000)}
var fd=q("#fd")[0];if(fd)fd.onsubmit=function(e){e.preventDefault();q("#fo")[0].textContent=fd.dataset.ok;burst(fd.querySelector("button"))};
q("[data-mail]").forEach(function(f){f.onsubmit=function(e){e.preventDefault();var x=new FormData(f),b=["Nom: "+x.get("n"),"E-mail: "+x.get("e"),x.get("t")?"Type: "+x.get("t"):"",x.get("m")||""].join("\n");f.querySelector(".ms").textContent=EN?"Opening your email app…":"Ouverture de votre messagerie…";location.href="mailto:ongohanabenin@gmail.com?subject="+encodeURIComponent("Site OHANA – "+f.dataset.mail)+"&body="+encodeURIComponent(b);burst(f.querySelector("button"))}});
q(".nm").forEach(function(n){var to=+n.dataset.to,from=+(n.dataset.from||0),done=0;function go(){if(done)return;done=1;if(R||lite){n.textContent=to;return}var t0=performance.now();(function f(t){var k=Math.min((t-t0)/1200,1),e=1-Math.pow(1-k,3);n.textContent=Math.round(from+(to-from)*e);if(k<1)requestAnimationFrame(f)})(t0)}
if("IntersectionObserver"in window){var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){go();o.disconnect()}});o.observe(n)}else go()});
var figs=q(".ms2 figure");if(figs.length){
q(".chips button").forEach(function(b){b.onclick=function(){q(".chips button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});figs.forEach(function(f){f.hidden=!(b.dataset.f==="all"||f.dataset.c===b.dataset.f)})}});
var lb=d.createElement("dialog");lb.className="lb";lb.setAttribute("aria-label","Photo");lb.innerHTML='<img alt=""><button type="button" class="lbx" aria-label="'+(EN?"Close":"Fermer")+'">\u00d7</button><button type="button" class="lbn" style="left:-8px" aria-label="'+(EN?"Previous":"Précédente")+'">\u2039</button><button type="button" class="lbn" style="right:-8px" aria-label="'+(EN?"Next":"Suivante")+'">\u203a</button>';d.body.appendChild(lb);
var li=lb.querySelector("img"),cur=0,vis=function(){return figs.filter(function(f){return!f.hidden})};
function show(i){var vv=vis();cur=(i+vv.length)%vv.length;var m=vv[cur].querySelector("img");li.src=m.src;li.alt=m.alt}
figs.forEach(function(f){var m=f.querySelector("img");m.tabIndex=0;m.setAttribute("role","button");function o(){show(vis().indexOf(f));if(lb.showModal)lb.showModal()}m.onclick=o;m.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();o()}}});
var bs=lb.querySelectorAll("button");bs[0].onclick=function(){lb.close()};bs[1].onclick=function(e){e.stopPropagation();show(cur-1)};bs[2].onclick=function(e){e.stopPropagation();show(cur+1)};
lb.onclick=function(e){if(e.target===lb||e.target===li)lb.close()};lb.onkeydown=function(e){if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)}}
})();
