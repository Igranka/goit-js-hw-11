import{S as u,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(s){const o="https://pixabay.com/api/?",t="43250686-c1e1dda9f99928fc2eb99e4d5",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=o+i;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const p=document.querySelector("ul.gallery");function f(s){const o=s.map(t=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img
                src="${t.webformatURL}"
                alt="${t.tags}"
            />
            <ul class="data">
                <li>
                    <p>Likes ${t.likes}</p>
                </li>
                <li>
                    <p>Views ${t.views}</p>
                </li>
                <li>
                    <p>Comments ${t.comments}</p>
                </li>
                <li>
                    <p>Downloads ${t.downloads}</p>
                </li>
            </ul>
        </a>
    </li>`).join("");p.insertAdjacentHTML("beforeend",o),new u(".gallery-link",{captionsData:"alt",captionsDelay:250})}const m=document.querySelector(".form"),c=document.querySelector("input"),a=document.querySelector(".loader"),h=new u(".gallery-link",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",s=>{s.preventDefault(),a.classList.add("is-open"),p.innerHTML="",h.refresh();const o=c.value.trim();if(o==="")return a.classList.remove("is-open"),l.show({color:"#EF4040",progressBarColor:"rgb(181, 27, 27)",messageColor:"#FFFFFF",message:"Please enter a valid value",position:"topRight"});d(o).then(t=>{if(t.hits.length===0)return l.show({color:"#EF4040",progressBarColor:"rgb(181, 27, 27)",messageColor:"#FFFFFF",message:"Sorry! There are no images matching your search query. Please try again!",position:"topRight"});f(t.hits)}).catch(t=>{console.error(t)}).finally(()=>a.classList.remove("is-open")),c.value=""});
//# sourceMappingURL=commonHelpers.js.map
