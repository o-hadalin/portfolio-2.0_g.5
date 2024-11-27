import{S as E,A as S,a as k}from"./assets/vendor-0GtopXCv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{const s=new E(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,loop:!1,freeMode:!1,breakpoints:{360:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},1280:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}},on:{slideChange:()=>{r()}}});o();async function o(){const t=document.getElementById("reviews-list"),e=document.getElementById("error-message");try{const n=await fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)throw new Error(`Failed to fetch reviews: ${n.status}`);const a=await n.json();c(a,t),s.update()}catch(n){console.error("Error fetching reviews:",n),e.textContent="Reviews not found",e.classList.remove("hidden")}}function c(t,e){e.innerHTML="",t.forEach(n=>{const a=document.createElement("li");a.className="swiper-slide";const u=document.createElement("p");u.className="review-text",u.textContent=n.review;const l=document.createElement("div");l.className="reviewer-info";const i=document.createElement("img");i.className="review-photo",i.src=n.avatar_url,i.alt=`${n.author}'s photo`;const d=document.createElement("p");d.className="reviewer-name",d.textContent=n.author,l.appendChild(i),l.appendChild(d),a.appendChild(u),a.appendChild(l),e.appendChild(a)})}function r(){const t=document.querySelector(".swiper-button-next"),e=document.querySelector(".swiper-button-prev");t.disabled=s.isEnd,e.disabled=s.isBeginning,t.classList.toggle("disabled",s.isEnd),e.classList.toggle("disabled",s.isBeginning)}r()});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".list-projects .list-project-item"),o=document.querySelector(".load-btn"),c=3;let r=3;const t=()=>{for(let e=r;e<r+c;e++)s[e]&&(s[e].style.display="flex");r+=c,r>=s.length&&(o.style.display="none")};s.forEach((e,n)=>{e.style.display=n<r?"block":"none"}),o.addEventListener("click",t)});document.addEventListener("DOMContentLoaded",()=>{new S(".accordion-container",{duration:300,openOnInit:[0],collapse:!0})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".contact-form"),o=document.querySelector(".contact-input"),c=document.querySelector(".contact-textarea");document.querySelector(".contact-btn");const r=document.querySelector(".confirmation-modal-overlay"),t=document.querySelector(".close-confirmation-btn"),e=document.querySelector(".message"),n=document.querySelector(".filled-icon"),a=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function u(){r.classList.add("is-open"),document.body.classList.add("modal-open")}function l(){r.classList.remove("is-open"),document.body.classList.remove("modal-open")}localStorage.getItem("email")&&(o.value=localStorage.getItem("email")),localStorage.getItem("message")&&(c.value=localStorage.getItem("message")),o.addEventListener("input",function(){localStorage.setItem("email",o.value)}),c.addEventListener("input",function(){localStorage.setItem("message",c.value)}),o.addEventListener("blur",function(){a.test(o.value)?(o.classList.add("valid"),o.classList.remove("invalid"),e.classList.add("valid"),e.classList.remove("invalid"),n.classList.remove("invalid")):(o.classList.remove("valid"),o.classList.add("invalid"),e.classList.remove("valid"),e.classList.add("invalid"),n.classList.add("invalid"))}),s.addEventListener("submit",async function(i){if(i.preventDefault(),!a.test(o.value)){o.classList.add("invalid"),o.classList.remove("valid");return}const d=new FormData(s),g={email:d.get("email"),comment:d.get("message")};if(!(!g.comment||g.comment.trim()===""))try{const f=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);(await f.json()).title&&(u(),s.reset(),localStorage.removeItem("email"),localStorage.removeItem("message"),n.classList.add("invalid"))}catch{k.fire({icon:"error",title:"Oops...",text:"Something went wrong!",confirmButtonColor:"#00b068"})}}),t.addEventListener("click",l),r.addEventListener("click",function(i){i.target===r&&l()}),document.addEventListener("keydown",function(i){(i.key==="Escape"||i.key==="Esc")&&l()})});const I=document.querySelector(".js-open-menu"),q=document.querySelector(".js-close-menu"),h=document.querySelector(".mob-menu"),M=document.querySelectorAll(".mob-list a");I.addEventListener("click",C);q.addEventListener("click",y);function C(){h.classList.add("is-open")}function y(){h.classList.remove("is-open")}M.forEach(s=>{s.addEventListener("click",y)});const m=document.querySelector(".header .header-toggle"),p=document.querySelector(".mob-nav .mobile-toggle"),v=document.querySelector("link[rel='icon']"),L="/img/favicon-light.svg",w="/img/favicon-dark.svg",P=localStorage.getItem("theme")||"light";P==="dark"?(document.body.classList.add("dark-theme"),v.setAttribute("href",w),m.checked=!0,p.checked=!0):(document.body.classList.remove("dark-theme"),v.setAttribute("href",L),m.checked=!1,p.checked=!1);m.addEventListener("change",()=>b(m));p.addEventListener("change",()=>b(p));function b(s){const o=s.checked;o?(document.body.classList.add("dark-theme"),v.setAttribute("href",w),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-theme"),v.setAttribute("href",L),localStorage.setItem("theme","light")),m.checked=o,p.checked=o}
//# sourceMappingURL=index.js.map
