import{S as y}from"./assets/vendor-FHk8j_P3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{new Accordion(".accordion-container",{duration:300,openOnInit:[0],collapse:!0})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".contact-form"),e=document.querySelector(".contact-input"),a=document.querySelector(".contact-textarea");document.querySelector(".contact-btn");const s=document.querySelector(".confirmation-modal-overlay"),t=document.querySelector(".close-confirmation-btn"),o=document.querySelector(".message"),c=document.querySelector(".filled-icon"),f=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function p(){s.classList.add("is-open")}function m(){s.classList.remove("is-open")}localStorage.getItem("email")&&(e.value=localStorage.getItem("email")),localStorage.getItem("message")&&(a.value=localStorage.getItem("message")),e.addEventListener("input",function(){localStorage.setItem("email",e.value)}),a.addEventListener("input",function(){localStorage.setItem("message",a.value)}),e.addEventListener("blur",function(){f.test(e.value)?(e.classList.add("valid"),e.classList.remove("invalid"),o.classList.add("valid"),o.classList.remove("invalid"),c.classList.remove("invalid")):(e.classList.remove("valid"),e.classList.add("invalid"),o.classList.remove("valid"),o.classList.add("invalid"),c.classList.add("invalid"))}),n.addEventListener("submit",async function(r){if(r.preventDefault(),!f.test(e.value)){e.classList.add("invalid"),e.classList.remove("valid");return}const g=new FormData(n),u={email:g.get("email"),comment:g.get("message")};if(!(!u.comment||u.comment.trim()===""))try{const d=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);(await d.json()).title&&(p(),n.reset(),localStorage.removeItem("email"),localStorage.removeItem("message"),c.classList.add("invalid"))}catch{y.fire({icon:"error",title:"Oops...",text:"Something went wrong!",confirmButtonColor:"#00b068"})}}),t.addEventListener("click",m),s.addEventListener("click",function(r){r.target===s&&m()}),document.addEventListener("keydown",function(r){(r.key==="Escape"||r.key==="Esc")&&m()})});const S=document.querySelector(".js-open-menu"),b=document.querySelector(".js-close-menu"),v=document.querySelector(".mob-menu"),k=document.querySelectorAll(".mob-list a");S.addEventListener("click",E);b.addEventListener("click",h);function E(){v.classList.add("is-open")}function h(){v.classList.remove("is-open")}k.forEach(n=>{n.addEventListener("click",h)});const i=document.querySelector(".header .checkbox-toggle"),l=document.querySelector(".mob-nav .checkbox-toggle"),q=localStorage.getItem("theme")||"light";q==="dark"?(document.body.classList.add("dark-theme"),i.checked=!0,l.checked=!0):(document.body.classList.remove("dark-theme"),i.checked=!1,l.checked=!1);i.addEventListener("change",()=>L(i));l.addEventListener("change",()=>L(l));function L(n){const e=n.checked;e?(document.body.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light")),i.checked=e,l.checked=e}
//# sourceMappingURL=index.js.map
