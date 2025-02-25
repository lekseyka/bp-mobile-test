document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".benefitsButton");
    const continueButton = document.querySelector(".continueButton");

    const links = [
        "https://apple.com/",
        "https://google.com/"
    ];

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            button.dataset.link = links[index];
        });
    });

    continueButton.addEventListener("click", () => {
        const activeButton = document.querySelector(".benefitsButton.active");
        if (activeButton) {
            window.location.href = activeButton.dataset.link;
        }
    });
});