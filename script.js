const result = document.querySelector(".result");
const myScore = document.getElementById("human-score"); 
const machineScore = document.getElementById("machine-score")

let HumanScoreNumber = 0;
let MachineScoreNumber = 0;

const playHuman = (humanChoice) => {
    PlayTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    console.log(randomNumber);

    return choices[randomNumber];
}

const PlayTheGame = (human, machine) => {
    console.log('Humano:' + human + ' Máquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!";
    } else if (human === 'paper' && machine === 'rock'
        || (human === 'paper' && machine === 'scissors' || (human === 'scissors' && machine === 'paper'))) { 
            HumanScoreNumber ++;
            myScore.innerHTML = HumanScoreNumber;
            result.innerHTML = "Você ganhou !";
    } else {
        MachineScoreNumber ++
        machineScore.innerHTML = MachineScoreNumber;
        result.innerHTML = "Você perdeu !"
    }
}
