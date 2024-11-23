import{S as L,A as w,a as E}from"./assets/vendor-0GtopXCv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{const n=new L(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:20,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2}},on:{slideChange:()=>{r()}}});o();async function o(){const t=document.getElementById("reviews-list"),e=document.getElementById("error-message");try{const s=await fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET",headers:{"Content-Type":"application/json"}});if(!s.ok)throw new Error(`Failed to fetch reviews: ${s.status}`);const a=await s.json();i(a,t),n.update()}catch(s){console.error("Error fetching reviews:",s),e.textContent="Reviews not found",e.classList.remove("hidden")}}function i(t,e){e.innerHTML="",t.forEach(s=>{const a=document.createElement("li");a.className="swiper-slide";const u=document.createElement("p");u.className="review-text",u.textContent=s.review;const l=document.createElement("div");l.className="reviewer-info";const c=document.createElement("img");c.className="review-photo",c.src=s.avatar_url,c.alt=`${s.author}'s photo`;const d=document.createElement("p");d.className="reviewer-name",d.textContent=s.author,l.appendChild(c),l.appendChild(d),a.appendChild(u),a.appendChild(l),e.appendChild(a)})}function r(){const t=document.querySelector(".swiper-button-next"),e=document.querySelector(".swiper-button-prev");t.disabled=n.isEnd,e.disabled=n.isBeginning,t.classList.toggle("disabled",n.isEnd),e.classList.toggle("disabled",n.isBeginning)}r()});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".list-projects .list-project-item"),o=document.querySelector(".load-btn"),i=3;let r=3;console.log(n);const t=()=>{for(let e=r;e<r+i;e++)n[e]&&(n[e].style.display="flex");r+=i,r>=n.length&&(o.style.display="none")};n.forEach((e,s)=>{e.style.display=s<r?"block":"none"}),o.addEventListener("click",t)});document.addEventListener("DOMContentLoaded",()=>{new w(".accordion-container",{duration:300,openOnInit:[0],collapse:!0})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".contact-form"),o=document.querySelector(".contact-input"),i=document.querySelector(".contact-textarea");document.querySelector(".contact-btn");const r=document.querySelector(".confirmation-modal-overlay"),t=document.querySelector(".close-confirmation-btn"),e=document.querySelector(".message"),s=document.querySelector(".filled-icon"),a=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function u(){r.classList.add("is-open")}function l(){r.classList.remove("is-open")}localStorage.getItem("email")&&(o.value=localStorage.getItem("email")),localStorage.getItem("message")&&(i.value=localStorage.getItem("message")),o.addEventListener("input",function(){localStorage.setItem("email",o.value)}),i.addEventListener("input",function(){localStorage.setItem("message",i.value)}),o.addEventListener("blur",function(){a.test(o.value)?(o.classList.add("valid"),o.classList.remove("invalid"),e.classList.add("valid"),e.classList.remove("invalid"),s.classList.remove("invalid")):(o.classList.remove("valid"),o.classList.add("invalid"),e.classList.remove("valid"),e.classList.add("invalid"),s.classList.add("invalid"))}),n.addEventListener("submit",async function(c){if(c.preventDefault(),!a.test(o.value)){o.classList.add("invalid"),o.classList.remove("valid");return}const d=new FormData(n),g={email:d.get("email"),comment:d.get("message")};if(!(!g.comment||g.comment.trim()===""))try{const f=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);(await f.json()).title&&(u(),n.reset(),localStorage.removeItem("email"),localStorage.removeItem("message"),s.classList.add("invalid"))}catch{E.fire({icon:"error",title:"Oops...",text:"Something went wrong!",confirmButtonColor:"#00b068"})}}),t.addEventListener("click",l),r.addEventListener("click",function(c){c.target===r&&l()}),document.addEventListener("keydown",function(c){(c.key==="Escape"||c.key==="Esc")&&l()})});const b=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu"),v=document.querySelector(".mob-menu"),k=document.querySelectorAll(".mob-list a");b.addEventListener("click",I);S.addEventListener("click",h);function I(){v.classList.add("is-open")}function h(){v.classList.remove("is-open")}k.forEach(n=>{n.addEventListener("click",h)});const m=document.querySelector(".header .checkbox-toggle"),p=document.querySelector(".mob-nav .checkbox-toggle"),q=localStorage.getItem("theme")||"light";q==="dark"?(document.body.classList.add("dark-theme"),m.checked=!0,p.checked=!0):(document.body.classList.remove("dark-theme"),m.checked=!1,p.checked=!1);m.addEventListener("change",()=>y(m));p.addEventListener("change",()=>y(p));function y(n){const o=n.checked;o?(document.body.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light")),m.checked=o,p.checked=o}
//# sourceMappingURL=index.js.map
