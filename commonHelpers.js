import"./assets/index-f0d39515.js";import{S as c,i as m}from"./assets/vendor-9310f15c.js";const p=new c(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),t=document.querySelector(".gallery"),d=({webformatURL:a,largeImageURL:e,tags:o,likes:n,views:s,comments:l,downloads:r})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${a}" alt="${o}" data-test="${e}">
        </a>
        <div class="image-details">
           
            <div class="info-container">
                <span class="info-label">Likes:</span>
                <span class="info-value">${n}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Views:</span>
                <span class="info-value">${s}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Comments:</span>
                <span class="info-value">${l}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Downloads:</span>
                <span class="info-value">${r}</span>
            </div>
        </div>
    </li>`,f=a=>{console.log(a);const e=a.map(d).join("");t.innerHTML=e,p.refresh()},g=document.getElementById("form"),i=document.querySelector(".loader");g.addEventListener("submit",h);function h(a){a.preventDefault(),i.classList.remove("is-hidden"),t.innerHTML="";const e=a.currentTarget.elements.search.value.trim();e!==""&&u(e)}function u(a){const e="42039867-09e41a1320e593858871044dc",n=`https://pixabay.com/api/?${new URLSearchParams({key:e,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(n).then(s=>s.json()).then(s=>{console.log(s.hits),s.hits.length>0?f(s.hits):m.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040"})}).catch(s=>{console.error("Error fetching data:",s)}).finally(()=>{i.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
