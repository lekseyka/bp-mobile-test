document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang") || "en";

    try {
        const response = await fetch(`./locales/${lang}.json`);
        if (!response.ok) throw new Error("Файл языка не найден");

        const translations = await response.json();

        switch (lang) {
            case 'de':
            case 'fr':
            case 'ja':
            case 'pt':
                document.querySelector(".banner").classList.add("responsiveLanguage");
                break;
        }

        document.querySelector(".bannerTitle").innerHTML = translations['Get Unlimited <br>Access'];
        document.querySelector(".previewBenefits .benefitsItem:nth-child(1) span").innerHTML = translations['Unlimited Art <br>Creation'];
        document.querySelector(".previewBenefits .benefitsItem:nth-child(2) span").innerHTML = translations['Exclusive <br>Styles'];
        document.querySelector(".previewBenefits .benefitsItem:nth-child(3) span").innerHTML = translations['Magic Avatars <br>With 20% Off'];
        document.querySelector(".benefitsButtonsWrapper .bestOfferButton .yearlyPreview .buttonTitle").innerHTML = translations['YEARLY ACCESS'];
        document.querySelector(".benefitsButtonsWrapper .bestOfferButton .yearlyPreview .yearlyCost").innerHTML = translations['Just {{price}} per year'];
        document.querySelector(".benefitsButtonsWrapper .benefitsButton:nth-child(2) .weeklyCost").innerHTML = translations['{{price}} <br>per week'];
        document.querySelector(".benefitsButtonsWrapper .bestOfferButton .weeklyCost").innerHTML = translations['{{price}} <br>per week'];
        document.querySelector(".benefitsButtonsWrapper .benefitsButton:nth-child(2) .yearlyPreview .buttonTitle").innerHTML = translations['WEEKLY ACCESS'];
        document.querySelector(".bestOfferButtonText .backgroundWrapper span").innerHTML = translations['BEST OFFER'];
        document.querySelector(".continueButton span").innerHTML = translations['Continue'];
        document.querySelector(". .navigationItem:nth-child(1)").innerHTML = translations['Terms of Use'];
        document.querySelector(". .navigationItem:nth-child(2)").innerHTML = translations['Privacy Policy'];
        document.querySelector(". .navigationItem:nth-child(3)").innerHTML = translations['Restore'];

    } catch (error) {
        console.error("Ошибка загрузки языкового файла:", error);
    }
});