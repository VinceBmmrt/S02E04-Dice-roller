// La mémoire de notre application 

let sliderValue = 5;

// #############################
// -- Les events présents sur la page --
// #############################

// Bouton "play"
document.querySelector('#play').addEventListener('click', newGame);

// Barre d'espace
document.addEventListener('keyup', spacebarHandler);

// Slider
document.querySelector('#slider').addEventListener('change', sliderHandler);

// Div#app
document.querySelector('#app').addEventListener('click', function(event) {
    console.log("Michel");
    console.log(event);
})

// #############################
// -- Les fonctions utilisées par le jeu --
// #############################


// createDice => Créé un dé dans un élément cible (targetElement) de notre page
function createDice(targetElement) {
    const diceElement = document.createElement('div');
    const imageOffset = (getRandom(1, 6) - 1) * 100; // Explication détaillée ci dessous
    diceElement.className = "dice";
    diceElement.style.backgroundPosition = `-${imageOffset}px`;
    // diceElement.classList.add("dice"); // Alternative avec classList
    const playerElement = document.getElementById(targetElement);
    playerElement.appendChild(diceElement);
}

        // Explication détaillée sur le calcul de l'image offset
        // On calcule de combien de pixel il va falloir décaler le sprite en fonction du nombre aléatoire
        // Notre sprite mesure 600px.
            // Si on veut afficher le premier dé, on ne décale rien
            // Si on veut afficher le deuxième dé, on décale de 100px
            // Si on veut afficher le troisième dé, on décale de 200px
            // etc...
        // Donc on peut faire : (résultatDuDé - 1) * 100px
        // Selon le résultat du dé, on aura :
            // Si résultatDuDé = 1 => (1-1)*100px = 0
            // Si résultatDuDé = 2 => (2-1)*100px = 100px
            // Si résultatDuDé = 3 => (3-1)*100px = 200px
            // etc...

// --------------------


// getRandom => Génère puis retourne un nombre entier aléatoire entre min et max
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
        // Pour bien comprendre getRandom(min, max)
        // (0 * (6 - 1)) + 1 = 1
        // (1 * (6 - 1)) + 1 = 6

        // (0 * (200 - 100)) + 100 = 100
        // (1 * (200 - 100)) + 100 = 200

// --------------------


// play => Lance les dés pour le joueur et le dealer
function play(nbOfDices) {
    for (let index = 0; index < Number(nbOfDices); index++) {
        createDice("player");
             
    }
    setTimeout(dealerTurn, 1500);
    
    
}

play(5)

// --------------------

function dealerTurn() {
    for (let index = 0; index < Number(sliderValue); index++) {
        createDice("dealer");
             
    } 
}

// #############################
// -- Les écouteurs d'évènements qu'on utilise --
// #############################



// newGame => Lorsque cet écouteur est déclenché, lance une nouvelle partie
function newGame(event) {
    document.querySelector('#player').innerHTML = '';
    document.querySelector('#dealer').innerHTML = '';
    play(sliderValue);
}
// --------------------



// sliderHandler => Lorsque cet écouteur est déclenché, execute la fonction play()
function sliderHandler(event) {
    console.log(event);
    sliderValue = event.target.value;
}
// --------------------


// spacebarHandler => Lorsque cet écouteur est déclenché, test si le event.key est bien la barre d'espace, si c'est le cas, on lonce une nouvelle partie
function spacebarHandler(event) {
    console.log(event.key);
    if(event.key === " ") {
        newGame();
    }
}
// --------------------

// ################
// -- Exemple d'utilisation des évennements --
// ################

// function monPremierEcouteur(event) {                     // On créé un écouteur d'évènement (event handler)
//     alert("Ca marche, on a cliqué sur le bouton");
// }

// const myButton = document.querySelector('#play');        // On sélectionne l'élément sur lequel on veut brancher cet écouteur
// myButton.addEventListener('click', monPremierEcouteur);  // On branche les deux ensemble

