import './style.css'
import './benefitSwitcher.js'
import './localesSwitcher.js'
import BannerBackground from './img/bg.png'
import art from './img/benefits/art.png'
import styles from './img/benefits/styles.png'
import avatars from './img/benefits/avatars.png'


document.querySelector('#app').innerHTML = `
    <section class="banner">
        <img class="background" src="${BannerBackground}" alt="">
        <a class="bannerCross" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0105 11.5997L17.4165 6.19368L17.8144 6.59155L12.4084 11.9975L18 17.5892L17.5892 18L11.9975 12.4084L6.59155 17.8144L6.19368 17.4165L11.5997 12.0105L6 6.41085L6.41085 6L12.0105 11.5997Z" stroke="white" stroke-opacity="0.4" stroke-linejoin="round"/>
            </svg>
        </a>
        <h1 class="bannerTitle">Get Unlimited <br>Access</h1>
        <div class="previewBenefits">
            <div class="benefitsItem">
                <img class="benefitsBackground" src="${art}" alt="">
                <span>Unlimited Art Creation</span>
            </div>
            <div class="benefitsItem">
                <img class="benefitsBackground" src="${styles}" alt="">
                <span>Exclusive Styles</span>
            </div>
            <div class="benefitsItem">
                <img class="benefitsBackground" src="${avatars}" alt="">
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
`
