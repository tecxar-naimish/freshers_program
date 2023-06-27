
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = e.target.children[0].value
    const lastName = e.target.children[1].value
    const country = e.target.children[2].value
    const score = e.target.children[3].value
    const errorMessage = document.querySelector('.error-msg')

    if (firstName === '' || lastName === '' || country === '' || score === '') {
        errorMessage.innerHTML = "All Fields are Required";
    }
    else {
        errorMessage.innerHTML = '';

        const scoreboardContainer = document.querySelector('.main-scoreboard-wrapper');

        const scoreboardElement = document.createElement('div');
        scoreboardElement.classList.add('main-scoreboard');

        scoreboardElement.innerHTML = `
        <div>
        <p class='player-name'>${firstName} ${lastName}</p>
            <p class="time-stamp">${generateDateAndTime()}</p>
        </div>
        <p class="player-country">${country}</p>
        <p class="player-score">${score}</p>
        <div class="scoreboard-btn-container">
        <button class='btn-action'>&#x1f5d1;</button>
        <button class='btn-action'>+5</button>
                <button class='btn-action'>-5</button>
                </div>
                `
        scoreboardContainer.appendChild(scoreboardElement);
        activateBtnEventListener();
        sortScoreBoard();
    }
})

const activateBtnEventListener = () => {
    document.querySelectorAll('.scoreboard-btn-container').forEach((el) => {
        el.addEventListener('click', (e) => {
            const textContent = e.target.textContent;
            const scoreOfPlayer = e.target.parentElement.parentElement.children[2];

            if (textContent === '🗑')
                return e.target.parentElement.parentElement.remove()

            scoreOfPlayer.textContent = parseInt(scoreOfPlayer.textContent) + parseInt(textContent)

            sortScoreBoard()
        })
    })
}

activateBtnEventListener();

const sortScoreBoard = () => {
    const scoreBoardContainer = document.querySelector('.main-scoreboard-wrapper')
    const scoreBoards = document.querySelectorAll('.main-scoreboard')

    const elementsInArray = []
    scoreBoards.forEach((el) => elementsInArray.push(el))

    const sortedElementsFromArray = elementsInArray.map((el) => el).sort((a, b) => {
        const numA = parseInt(a.children[2].textContent),
            numB = parseInt(b.children[2].textContent)
        return numB - numA;
    })

    sortedElementsFromArray.forEach((el) => {
        scoreBoardContainer.append(el)
    })
}

const generateDateAndTime = () => {
    const dateObject = new Date();

    const month = dateObject.toLocaleString('default', { month: 'long' }),
        day = dateObject.getDate(),
        year = dateObject.getFullYear(),
        time = dateObject.toLocaleTimeString().slice(0, 7)

    const generatedResult = `${month} ${day},${year} ${time}`

    return generatedResult;
}