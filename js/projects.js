















const container = document.getElementById("scrollContainerd");
const cards = document.querySelectorAll(".cardd");

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

    cards.forEach((card) => card.classList.remove("actived"));
    if (closestCard) closestCard.classList.add("actived");
}

container.addEventListener("scroll", updateActiveCard);
updateActiveCard(); 

window.onload = function () {
    setTimeout(() => {

        const mediaQuery = window.matchMedia("(max-width: 1080px)");

        function handleScreenChange(event) {
            if (event.matches) {
              container.scrollTo({
                left: container.scrollLeft + 0,
                behavior: "smooth"
            });
            } else {
              container.scrollTo({
                left: container.scrollLeft + 550,
                behavior: "smooth"
            });
            }
        }

        handleScreenChange(mediaQuery);

        mediaQuery.addEventListener("change", handleScreenChange);




        updateActiveCard();
    },100);
};
