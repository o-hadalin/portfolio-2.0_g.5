import"./assets/vendor-Ckm0rlor.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".contact-form"),r=document.querySelector(".contact-input");document.querySelector(".contact-btn");const s=document.querySelector(".message"),o=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;n.addEventListener("submit",function(e){e.preventDefault(),o.test(r.value)?(r.classList.add("valid"),r.classList.remove("invalid"),s.classList.remove("invalid"),s.classList.add("valid")):(r.classList.add("invalid"),r.classList.remove("valid"),s.classList.remove("valid"),s.classList.add("invalid"))})});
//# sourceMappingURL=index.js.map
