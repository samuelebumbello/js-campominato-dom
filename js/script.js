// creazione costanti per collegarmi al container-bottone-livelli
const container = document.querySelector('.container');
const bottone = document.getElementById('bottone');
const livello = document.getElementById('liv')

//creazione array per le difficoltà livelli
const difficulty = [100, 81, 49];
const numBombs = 16;
let arrayBomb = [];
let points = 0;
const boxe = [];

bottone.addEventListener('click', function(){

    container.classList.remove('hide');
    reset();
    const numberBox = difficulty [livello.value]
    console.log(numberBox);
    arrayBomb = createBombs(numberBox);
})



/*************** FUNZIONI ***************/

function gridGenerate(numberBox) {
    const grid = document.createElement('div');
    grid.className = 'container';

    for (let i = 0; i <= numberBox; i++) {
        let box = boxCreate(numberBox);
        grid.append(box);
        
    }
    container.append(grid);

    return grid;
}

//creo box
function boxGenerate(numberBox, id) {
    let box = document.createElement('div');
    box.className = 'box'
    box.classList.add('dimBox' + numberBox)
    box.boxID = id;
    console.log(id);
    box.addEventListener('click', function() {
        console.log(this.boxID);
        this.classList.add('press');
    })

    return box;
}

// creo le bombe
function createBombs (numberBox) {
    const bomb = [];
    console.log(bomb);

    while (bomb.length < numBombs) {
        const bombGenerate = haveRandom(1, numberBox)
        if (!bomb.includes(bombGenerate)) bomb.push(bombGenerate) 
            
    }
    // add classe bomb alla grid
    for (let i = 0; i < boxe.length; i++) {
        const box = boxe[i];
        box.addEventListener('click', function() {
            if (bomb.includes(this.boxID)) {
                console.log('esploso', bomb);
                this.classList.add('bomb')
            }
        })
    }
    return bomb;
}



