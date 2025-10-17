
const gameInfo = document.querySelector("[data-game-info]");
const actionBtn = document.querySelector("[data-action-btn]");
const container = document.querySelector("[data-container]");

const generateRandomNumber = () => Math.ceil(Math.random() * 6);

actionBtn.addEventListener("click", () => {
    render();
})

const render = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    container.innerHTML= "";

    container.insertAdjacentHTML("beforeend", `
        <svg class="dice dice-green">
        <use href="sprites.svg#Green${player1}"></use>
        </svg>

        <svg class="dice dice-blue">
        <use href="sprites.svg#Blue${player2}"></use>
        </svg>
        `)

        if (player1 === player2){
            gameInfo.textContent = "Ничья)))";
            gameInfo.style.color = "#363636"
        }else if(player1 > player2) {
            gameInfo.textContent = "Победил зеленый";
            gameInfo.style.color = "#0f8b61"
        }else{
            gameInfo.textContent = "Победил синий";
            gameInfo.style.color = "#2838a3"
        }
}
render();