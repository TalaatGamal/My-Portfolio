






const container = document.getElementById("scrollContainer");
const cards = document.querySelectorAll(".card");

function updateActiveCard() {
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestCard = card;
        }
    });

    cards.forEach((card) => card.classList.remove("active"));
    if (closestCard) closestCard.classList.add("active");
}

container.addEventListener("scroll", updateActiveCard);
updateActiveCard(); 