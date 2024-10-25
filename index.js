/* empty css                      */import{S as l,i as d}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const f="46483266-76bdcaf2ff3adfe100a8b1f15",u="https://pixabay.com/api/";async function m(s){const r=`${u}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(r);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}catch(t){throw t}}function p(s){const r=document.getElementById("gallery");r.innerHTML="";const t=s.map(o=>`
        <a href="${o.largeImageURL}" class="gallery-item">
            <img src="${o.webformatURL}" alt="${o.tags}">
            <div class="info">
                <p>Likes: ${o.likes}</p>
                <p>Views: ${o.views}</p>
                <p>Comments: ${o.comments}</p>
                <p>Downloads: ${o.downloads}</p>
            </div>
        </a>
    `).join("");r.insertAdjacentHTML("beforeend",t),new l(".gallery a").refresh()}function i(s){d.error({title:"Error",message:s})}function y(){document.getElementById("loader").style.display="block"}function c(){document.getElementById("loader").style.display="none"}document.getElementById("search-form").addEventListener("submit",async s=>{s.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){i("Please enter a search term");return}y();try{const t=await m(r);c(),t.length===0?i("Sorry, there are no images matching your search query. Please try again!"):p(t)}catch{c(),i("Failed to fetch images. Please try again later.")}});
//# sourceMappingURL=index.js.map
