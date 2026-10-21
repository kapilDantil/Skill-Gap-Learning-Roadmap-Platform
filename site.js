"use strict";
// Public settings only. The Supabase publishable key is designed for browsers; protect data with Row Level Security. Never put a service_role or secret key in this file.
const SITE={email:"",phone:"",sbUrl:"https://kvvwogugysoebvfphykj.supabase.co",sbKey:"sb_publishable_xrJbAp_4wsITom-zQrOxgA_DBXvRnOf"};
if(location.protocol==="http:"&&!/^(localhost|127\.|\[::1\])/.test(location.hostname))location.replace("https:"+location.href.slice(5));
function ssConsent(v){try{localStorage.setItem("ss_consent",v)}catch(e){}const b=document.querySelector(".cb");if(b)b.remove();dispatchEvent(new Event("ss:consent"))}
function ssBanner(){if(document.querySelector(".cb"))return;const b=document.createElement("div");b.className="cb";b.setAttribute("role","region");b.setAttribute("aria-label","Cookie consent");b.innerHTML='<p>SkillSphere stores your profile in this browser so the app works. Optional storage is used only for cloud sync sign-in. See the <a href="privacy.html">privacy policy</a>.</p><div class="row"><button type="button" class="pri" id="cb-a">Allow optional storage</button><button type="button" id="cb-e">Essential only</button></div>';document.body.append(b);b.querySelector("#cb-a").onclick=()=>ssConsent("all");b.querySelector("#cb-e").onclick=()=>ssConsent("essential")}
document.addEventListener("DOMContentLoaded",()=>{
document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
const c=document.getElementById("contact"),bits=[];
if(SITE.email)bits.push('<a href="mailto:'+SITE.email+'">'+SITE.email+'</a>');
if(SITE.phone)bits.push('<a href="tel:'+SITE.phone.replace(/[^+\d]/g,"")+'">'+SITE.phone+'</a>');
if(c)c.innerHTML=bits.join(" &nbsp; ");
document.querySelectorAll("[data-email]").forEach(e=>{e.innerHTML=SITE.email?'<a href="mailto:'+SITE.email+'">'+SITE.email+'</a>':"";if(SITE.email)e.closest("[data-contact-line]").hidden=false});
const mb=document.getElementById("mb"),nav=document.getElementById("nav");
if(mb&&nav){mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open")){nav.classList.remove("open");mb.setAttribute("aria-expanded","false");mb.focus()}})}
document.querySelectorAll("[data-consent-open]").forEach(b=>b.onclick=ssBanner);
let v=null;try{v=localStorage.getItem("ss_consent")}catch(e){}if(!v)ssBanner()});
