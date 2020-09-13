"use strict";var supportsWebp=!1,img_ext="jpg",webp=new Image;if(webp.onerror=function(){supportsWebp=!1,img_ext="jpg"},webp.onload=function(){supportsWebp=!0,img_ext="webp"},webp.src="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",supportsWebp)img_ext="webp";else img_ext="jpg";var supportsScrollBehaviour="scrollBehavior"in document.documentElement.style,isMobile=/Mobi|iPhone|iPod|iPad|Android/i.test(navigator.userAgent);isMobile&&document.body.classList.add("mobile");var smoothOffset=50;function smoothScroll(e){supportsScrollBehaviour&&window.scroll({top:e,left:0,behavior:"smooth"})}function loadingContentEv(){document.body.querySelectorAll(".for-loading").forEach(function(t){t.complete||(t.classList.add("loading"),t.addEventListener("load",function(e){t.classList.remove("loading")}))})}loadingContentEv();try{document.getElementById("form-wsp-check").oninput=function(){this.checked?(document.getElementById("buy-form").querySelector(".form-wsp-num").classList.remove("d-none"),document.getElementById("buy-form").querySelector('.form-data[name="NUM"]').required=!0):(document.getElementById("buy-form").querySelector(".form-wsp-num").classList.add("d-none"),document.getElementById("buy-form").querySelector('.form-data[name="NUM"]').required=!1)}}catch(e){}var item_modal=document.getElementById("item-contact");function bindElementsToEvent(e,t,o){for(var n=0;n<o.length;n++)o[n].addEventListener(e,t)}document.body.onkeyup=function(e){if(8===e.keyCode){var t=e.target.tagName.toLowerCase();"input"==t||"textarea"==t||"contact-view"==window.history.state||"slider-view"==window.history.state||window.history.state}else 27===e.keyCode&&("contact-view"==window.history.state?hfev_close_modal(document.getElementById("item-contact")):"slider-view"==window.history.state?hfev_close_modal(document.getElementById("quickview")):"buy"==window.history.state&&hfev_close_modal(document.getElementById("buy")))},bindElementsToEvent("click",fev_modal_on,document.querySelectorAll(".modal-on")),bindElementsToEvent("click",fev_modal_off,document.querySelectorAll(".modal-off"));var hash,els_filters=document.body.querySelectorAll(".filter");function fev_phone_gtag(e){gtag("event","click",{event_category:"contact",event_action:"wsp contact"})}function fev_fixed_contact(e){e.preventDefault(),document.getElementById("fixed-modal").classList.toggle("hidden");for(var t=document.body.querySelectorAll("#fixed-msg .icon"),o=0;o<t.length;o++)t[o].classList.toggle("hidden");gtag("event","click",{event_category:"views",event_action:"floating msg"})}function fev_modal_on(e){var t=this.getAttribute("data-target"),o=document.getElementById(t);if(hash=o.id,window.location.hash=hash,window.onhashchange=function(){location.hash||hfev_close_modal(o)},o.classList.add("active"),document.documentElement.classList.add("noscroll"),"item-contact"==t){var n=this.getAttribute("data-sku");document.getElementById("input-product-id").setAttribute("value",n),n?(o.querySelector("textarea").setAttribute("placeholder","Escriba aqui su consulta por el producto"),gtag("event","click",{event_category:"views",event_action:"item contact",event_label:"sku: "+n})):o.querySelector("textarea").setAttribute("placeholder","Escriba aqui su consulta"),window.history.replaceState("contact-view","")}else if("quickview"==t){e.preventDefault(),quickview_modal(this.getAttribute("data-id")),window.history.replaceState("slider-view","")}else if("buy"==t){var i=this.getAttribute("data-id");o.querySelector("img.buy-img").setAttribute("src",this.getAttribute("data-image")+".".concat(img_ext)),buy_modal(i)}backBtn&&backBtn.classList.add("d-none")}function fev_modal_off(){hfev_close_modal(document.getElementById(this.getAttribute("data-target")))}function hfev_close_modal(e){hash=e.id,history.pushState("",document.title,window.location.pathname),e.classList.remove("active"),document.documentElement.classList.remove("noscroll")}bindElementsToEvent("click",fev_cat_filters,els_filters),bindElementsToEvent("submit",fev_main_form,document.querySelectorAll(".main-form")),bindElementsToEvent("click",fev_smooth_link,document.querySelectorAll(".smoothlink")),bindElementsToEvent("click",fev_anchor_link,document.querySelectorAll(".anchorlink")),bindElementsToEvent("click",fev_phone_gtag,document.querySelectorAll("#fixed-msg .icon"));var primary_slider=null,secondary_slider=null,mainImgLoaded=!1,primarySliderNode=document.body.querySelector(".gallery-top"),secondarySliderNode=document.body.querySelector(".gallery-thumbs"),info_node=document.body.querySelector(".html-slide").cloneNode(!0),main_node=document.body.querySelector(".template-main-slide").cloneNode(!0),mainImage_node=document.body.querySelector(".template-main-image-slide").cloneNode(!0),thumbInfo_node=document.body.querySelector(".template-thumb-slide").cloneNode(),thumb_node=document.body.querySelector(".template-thumb-slide").cloneNode(!0);function buy_modal(e){var t=data[e],o=document.getElementById("buy");o.scroll(0,0),o.querySelector(".buy-sku").innerHTML="<div>sku: ".concat(t.sku,"</div>"),1==t.stock?(o.querySelector(".stock-tag").classList.remove("stock-normal"),o.querySelector(".stock-tag").classList.add("stock-low")):(o.querySelector(".stock-tag").classList.add("stock-normal"),o.querySelector(".stock-tag").classList.remove("stock-low")),o.querySelector(".buy-price").innerHTML="Precio: $ ".concat(t.price.toLocaleString("es-es")),"DOR"==t.cat?(o.querySelector(".buy-toast.av-ship").classList.remove("d-none"),o.querySelector(".own-ship").classList.add("d-none"),o.querySelector(".with-ship").classList.remove("d-none")):(o.querySelector(".buy-toast.av-ship").classList.add("d-none"),o.querySelector(".own-ship").classList.remove("d-none"),o.querySelector(".with-ship").classList.add("d-none")),o.querySelector(".input-prod-id").value=t.sku,gtag("event","click",{event_category:"views",event_action:"buy view",event_label:"sku: "+t.sku})}function quickview_modal(e){var t=data[e],o=document.getElementById("quickview");(new Image).setAttribute("src","/images/cat/lg/".concat(t.sku,".").concat(img_ext)),document.body.querySelector(".gallery-top .swiper-wrapper").innerHTML="",document.body.querySelector(".gallery-thumbs .swiper-wrapper").innerHTML="";var n=t.price.toLocaleString("es-es");info_node.querySelector(".meta-title").innerHTML="<div><b>#"+t.sku+"</b>&nbsp;| "+t.title+"</div>",info_node.querySelector(".meta-size").innerHTML="<span>MEDIDAS</span> "+t.size+" cm",info_node.querySelector(".meta-price").innerHTML="<span>PRECIO</span> $ "+n,info_node.querySelector(".meta-text").innerHTML=t.desc,info_node.classList.remove("off");var i=[],a=[];i.push(info_node.outerHTML),thumbInfo_node.style.backgroundImage='url("/images/rsc/thumb-info.jpg")',a.push(thumbInfo_node.outerHTML),mainImage_node.querySelector("img").setAttribute("src","/images/cat/lg/".concat(t.sku,".").concat(img_ext)),i.push(mainImage_node.outerHTML),thumbInfo_node.style.backgroundImage="url(/images/cat/lg/".concat(t.sku,".").concat(img_ext,")"),a.push(thumbInfo_node.outerHTML);for(var r=0;r<t.images.length;r++){var s=t.images[r],l="/images/details/lg/".concat(t.sku,"/").concat(s.name,".").concat(img_ext);main_node.querySelector("img").setAttribute("data-src",l),i.push(main_node.outerHTML);var c="/images/thumbs/".concat(t.sku,"/").concat(s.name,".").concat(img_ext);thumb_node.querySelector(".swiper-lazy").setAttribute("data-background",c),a.push(thumb_node.outerHTML),gtag("event","click",{event_category:"views",event_action:"product pics",event_label:"sku: "+t.sku})}primary_slider||create_sliders(),mainImgLoaded=!1,primary_slider.appendSlide(i),secondary_slider.appendSlide(a),primary_slider.update(),secondary_slider.update(),primary_slider.slideTo(0,0,!1),primarySliderNode.querySelector("img").addEventListener("load",function(){secondary_slider.lazy.load();for(var e=primarySliderNode.querySelectorAll(".swiper-lazy"),t=0;t<e.length;t++){var o=e[t];o.setAttribute("src",o.getAttribute("data-src"))}}),o.querySelectorAll(".wsp-direct").forEach(function(e){if(isMobile)if(e.hasAttribute("data-sku")){var t=encodeURI("Consulta por producto ".concat(e.getAttribute("data-sku"),":"));e.setAttribute("href","whatsapp://send?phone=541140855063?text=".concat(t))}else e.setAttribute("href","whatsapp://send?phone=541140855063");else e.setAttribute("href","https://web.whatsapp.com/send?phone=541140855063");e.addEventListener("click",function(){gtag("event","click",{event_category:"contact",event_action:"wsp contact"})})})}function create_sliders(){secondary_slider=new Swiper(secondarySliderNode,{spaceBetween:6,slidesPerView:"auto",speed:200,freeMode:!0,loopedSlides:5,watchSlidesVisibility:!0,watchSlidesProgress:!0,preloadImages:!1,lazy:!0}),primary_slider=new Swiper(primarySliderNode,{spaceBetween:10,speed:200,zoom:{minRatio:1,maxRatio:1.8},loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:secondary_slider},preloadImages:!1,lazy:{loadPrevNext:!0,loadPrevNextAmount:0,loadOnTransitionStart:!0}})}document.body.querySelector(".html-slide").remove(),document.body.querySelector(".gallery-top .swiper-wrapper").innerHTML="",document.body.querySelector(".gallery-thumbs .swiper-wrapper").innerHTML="";var filters=document.querySelector(".filters");function fev_cat_filters(e){e.preventDefault();var t=this.getAttribute("name");if(window.pageYOffset<this.offsetTop-110&&smoothScroll(filters.offsetTop-smoothOffset),window.history.state!=t){for(var o=0;o<els_filters.length;o++)els_filters[o].classList.remove("active");this.classList.add("active");var n=document.getElementById("catalog");window.history.replaceState(t,""),setTimeout(function(){"SFT"!=t||window.history.state!=t||i.loaded||(n.innerHTML='<div class="loading loading-lg"></div>')},100),catPre(n,t);var i={loaded:!1,category:this,load:function(){this.loaded=!0}};loadCatalog("",n,i,t),gtag("event","click",{event_category:"views",event_action:"filter",event_label:"name: "+t})}}function catPre(e,t){e.innerHTML="","DOR"!=t&&"WIN"!=t&&"MSC"!=t||(e.appendChild(document.body.querySelector("#preItems .pre-".concat(t)).cloneNode(!0)),catEvents())}function loadCatalog(e,t,o,n){var i=new XMLHttpRequest;if(n)var a=0,r=setInterval(function(){window.history.state!=n?(i.abort(),window.clearInterval(r)):(o.loaded||40<a)&&window.clearInterval(r),a++},600);i.onreadystatechange=function(){4==i.readyState&&200==i.status&&(catPost(t,n,i.response),catEvents(),o&&o.load())},i.open("GET",e,!0),i.send()}function catPost(e,t,o){"DOR"==t||"WIN"==t||"MSC"==t?e.querySelector(".items-grid").insertAdjacentHTML("beforeend",o):e.innerHTML=o}function catEvents(){bindElementsToEvent("click",fev_modal_on,document.querySelectorAll(".modal-on")),bindElementsToEvent("click",fev_modal_off,document.querySelectorAll(".modal-off")),loadingContentEv()}var FirebaseConfig={apiKey:"AIzaSyCmNwzRFxjF2pHJraKI65KiBB_ypNXzs_k",authDomain:"tasmeil.firebaseapp.com",databaseURL:"https://tasmeil.firebaseio.com",projectId:"tasmeil",storageBucket:"tasmeil.appspot.com",messagingSenderId:"991494899144"};function fev_main_form(e){var t;e.preventDefault();for(var o=this.querySelectorAll(".form-data"),n="",i={},a=0;a<o.length;a++){var r=o[a];(r.checked||"PAYM"!=r.name&&"WSP"!=r.name)&&(i[r.name]=r.value,n+=r.value)}try{firebasePush(i)}catch(e){t=e}this.reset();var s=this.querySelector(".form-message");s||(s=document.querySelector("#item-contact .form-message")),gtag("event","submit",{event_category:"contact",event_action:"submit form",event_label:n}),t&&gtag("event","submit",{event_category:"error",event_action:"submit form",event_label:t})}function firebasePush(e){firebase.apps.length||firebase.initializeApp(FirebaseConfig),firebase.database().ref("message").push().set(e)}function fev_smooth_link(e){if("cat"==this.getAttribute("data-target")&&"GAL"==window.history.state&&document.querySelector(".filters .filter").click(),document.getElementById(this.getAttribute("data-target")))if(supportsScrollBehaviour){e.preventDefault(),smoothScroll(document.getElementById(this.getAttribute("data-target")).offsetTop-smoothOffset),gtag("event","click",{event_category:"views",event_action:"anchor link",event_label:"from "+e.target.className})}else{document.getElementById("overlay").classList.toggle("d-none"),setTimeout(function(){document.getElementById("overlay").classList.toggle("d-none")},250);var t=document.getElementById(this.getAttribute("data-target"));window.scroll(0,t.offsetTop-smoothOffset)}}function fev_anchor_link(e){if(mobMenu_off(),document.getElementById(this.getAttribute("data-target"))){e.preventDefault(),document.getElementById("overlay").classList.toggle("d-none"),setTimeout(function(){document.getElementById("overlay").classList.toggle("d-none")},250);var t=document.getElementById(this.getAttribute("data-target"));window.scroll(0,t.offsetTop-smoothOffset)}}document.querySelectorAll(".wsp-direct").forEach(function(e){isMobile?e.setAttribute("href","whatsapp://send?phone=541140855063"):e.setAttribute("href","https://web.whatsapp.com/send?phone=541140855063"),e.addEventListener("click",function(){gtag("event","click",{event_category:"contact",event_action:"wsp contact"})})});var initial_referrer=document.referrer,backBtn=document.body.querySelector(".item-page .btn.back");backBtn&&""!=initial_referrer&&!initial_referrer.match("item|galery|contact|info")&&(backBtn.classList.remove("d-none"),backBtn.onclick=function(e){e.preventDefault(),history.back(-1)});var trMenu=document.getElementById("main-nav"),menuMobWith=600,menuAllowed=!1,menuActivated=!1,lightActivated=!1;window.location.hash?setTimeout(function(){menuAllowed=!0},200):menuAllowed=!0;var mobileMenuOn=!(window.onscroll=function(e){window.pageYOffset<30&&lightActivated?(trMenu.classList.remove("light"),lightActivated=!1):30<window.pageYOffset&&!lightActivated&&(trMenu.classList.add("light"),lightActivated=!0),menuAllowed&&this.oldScroll>this.scrollY?(this.upwait=this.upwait+1,9<this.upwait&&trMenu.classList.add("on")):menuAllowed&&this.oldScroll<this.scrollY&&(this.upwait=0,trMenu.classList.remove("on")),this.oldScroll=this.scrollY}),mi=document.body.querySelector(".n-section.n-collapse");function mobMenu_on(){mi.classList.add("active"),document.documentElement.classList.add("noscroll"),mobileMenuOn=!0}function mobMenu_off(){mi.classList.remove("active"),document.documentElement.classList.remove("noscroll"),mobileMenuOn=!1}document.getElementById("menu-btn").onclick=function(){mobileMenuOn?mobMenu_off():mobMenu_on()},window.onresize=function(){mobileMenuOn&&window.innerWidth>menuMobWith&&mobMenu_off()},bindElementsToEvent("click",function(e){this.classList.toggle("active")},document.querySelectorAll(".dropdown")),bindElementsToEvent("focusout",function(e){e.relatedTarget&&e.relatedTarget.parentElement.classList.contains("menu-item")||this.parentElement.classList.remove("active")},document.body.querySelectorAll(".dropdown-toggle"));