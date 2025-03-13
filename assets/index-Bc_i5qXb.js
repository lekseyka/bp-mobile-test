(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".benefitsButton"),s=document.querySelector(".continueButton"),r=["https://apple.com/","https://google.com/"];i.forEach((e,t)=>{e.addEventListener("click",()=>{i.forEach(n=>n.classList.remove("active")),e.classList.add("active"),e.dataset.link=r[t]})}),s.addEventListener("click",()=>{const e=document.querySelector(".benefitsButton.active");e&&(window.location.href=e.dataset.link)})});document.addEventListener("DOMContentLoaded",async()=>{const s=new URLSearchParams(window.location.search).get("lang")||"en";try{const r=await fetch(`./locales/${s}.json`);if(!r.ok)throw new Error("Файл языка не найден");const e=await r.json();switch(s){case"de":case"fr":case"ja":case"pt":document.querySelector(".banner").classList.add("responsiveLanguage");break}document.querySelector(".bannerTitle").innerHTML=e["Get Unlimited <br>Access"],document.querySelector(".previewBenefits .benefitsItem:nth-child(1) span").innerHTML=e["Unlimited Art <br>Creation"],document.querySelector(".previewBenefits .benefitsItem:nth-child(2) span").innerHTML=e["Exclusive <br>Styles"],document.querySelector(".previewBenefits .benefitsItem:nth-child(3) span").innerHTML=e["Magic Avatars <br>With 20% Off"],document.querySelector(".benefitsButtonsWrapper .bestOfferButton .yearlyPreview .buttonTitle").innerHTML=e["YEARLY ACCESS"],document.querySelector(".benefitsButtonsWrapper .bestOfferButton .yearlyPreview .yearlyCost").innerHTML=e["Just {{price}} per year"],document.querySelector(".benefitsButtonsWrapper .benefitsButton:nth-child(2) .weeklyCost").innerHTML=e["{{price}} <br>per week"],document.querySelector(".benefitsButtonsWrapper .bestOfferButton .weeklyCost").innerHTML=e["{{price}} <br>per week"],document.querySelector(".benefitsButtonsWrapper .benefitsButton:nth-child(2) .yearlyPreview .buttonTitle").innerHTML=e["WEEKLY ACCESS"],document.querySelector(".bestOfferButtonText .backgroundWrapper span").innerHTML=e["BEST OFFER"],document.querySelector(".continueButton span").innerHTML=e.Continue,document.querySelector(". .navigationItem:nth-child(1)").innerHTML=e["Terms of Use"],document.querySelector(". .navigationItem:nth-child(2)").innerHTML=e["Privacy Policy"],document.querySelector(". .navigationItem:nth-child(3)").innerHTML=e.Restore}catch(r){console.error("Ошибка загрузки языкового файла:",r)}});const a="/assets/bg-D8-oEf-b.png",c="/assets/art-3bzKaaJ9.png",l="/assets/styles-nMkbIWUn.png",u="/assets/avatars-BD781t2L.png";document.querySelector("#app").innerHTML=`
    <section class="banner">
        <img class="background" src="${a}" alt="">
        <a class="bannerCross" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0105 11.5997L17.4165 6.19368L17.8144 6.59155L12.4084 11.9975L18 17.5892L17.5892 18L11.9975 12.4084L6.59155 17.8144L6.19368 17.4165L11.5997 12.0105L6 6.41085L6.41085 6L12.0105 11.5997Z" stroke="white" stroke-opacity="0.4" stroke-linejoin="round"/>
            </svg>
        </a>
        <h1 class="bannerTitle">Get Unlimited <br>Access</h1>
        <div class="previewBenefits">
            <div class="benefitsItem">
                <img class="benefitsBackground" src="${c}" alt="">
                <span>Unlimited Art Creation</span>
            </div>
            <div class="benefitsItem">
                <img class="benefitsBackground" src="${l}" alt="">
                <span>Exclusive Styles</span>
            </div>
            <div class="benefitsItem">
                <img class="benefitsBackground" src="${u}" alt="">
                <span>Magic Avatars With 20% Off</span>
            </div>
        </div>
        <div class="accessChoice">
            <div class="benefitsButtonsWrapper">
                <button class="benefitsButton bestOfferButton">
                    <div class="yearlyPreview">
                        <span class="buttonTitle">Yearly access</span>
                        <span class="yearlyCost">Just $39.99 per year</span>
                    </div>
                    <div>
                        <span class="weeklyCost">$0.48<br>per week</span>
                    </div>
                    <div class="bestOfferButtonText">
                        <div class="backgroundWrapper">
                            <span>Best Offer</span>
                        </div>
                    </div>
                    <div class="gradientLine"></div>
                </button>
                <button class="benefitsButton">
                    <div class="yearlyPreview">
                        <span class="buttonTitle">Weekly access</span>
                    </div>
                    <div>
                        <span class="weeklyCost">$0.48<br>per week</span>
                    </div>
                </button>
            </div>
            <button class="continueButton">
                <span>Continue</span>
            </button>
        </div>
        <footer class="footerNavigation">
            <a class="navigationItem" href="#">Terms of Use</a>
            <a class="navigationItem" href="#">Privacy Policy</a>
            <a class="navigationItem" href="#">Restore</a>
        </footer>
    </section>
`;
