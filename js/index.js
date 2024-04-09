const cards = document.querySelectorAll('.block');
const additionalInfoTitle = document.querySelector(".additional-info__title");
let cardShowIndex = 0;

function showNextCard() {
    if (cardShowIndex < cards.length) {
        cards[cardShowIndex].classList.add("show");
        cardShowIndex++;
        setTimeout(showNextCard, 400);
    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            showNextCard();
        }
    });
});

observer.observe(additionalInfoTitle);