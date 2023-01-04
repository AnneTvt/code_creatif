const words = [] // conserve tous les mots

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)

    let allwords = "La cadre,Pauline,Le petit garçon,Ma pantoufle,Le sapin de Noël,Le fauteuil,L'ornithorinque,Un tapis,Mon orteil,Le carrelage,Le pigeon,Son transat,Un avion en papier,L'ourlet de mon jean,Ma carotide interne,Son lavabo,Louis Grandjean,Francfort,Le transpalette,Ma soeur,s'enfuit,bougonne,épluchait,filme,s'agrandissait,tourne,roule,s'enroule,dirigea,découvrit,dormi,poussa,vole,juge,se cachait,tapa,flamba,s'allume,fume,a esquivé,dans la forêt,sur son radeau,au magasin,rapidement,avec sa plante,sa sœur,une pomme,un carambar,dans son lit,avec amour,doucement,avec une prune,lors du réveillon,devant la mer,en voyage,au jardin,à la cave,avec grand-père,à l'Ecole de Design,dans une boîte";

    const wordsStr = allwords.split(',')

    textSize(12)

    // suit la position du mot
    let x = 20
    let y = 60
    fill(255)
    // sur répète pour chaque mot
    for (let i = 0; i < wordsStr.length; i++) {
        const wordStr = wordsStr[i] // mot actuel
        const wordStrWidth = textWidth(wordStr) // largeur du mot actuel
        const word = new Word(wordStr, x, y, i)
        words.push(word)
  
      x = x + wordStrWidth + textWidth(' ') // ajouter à x la largeur du mot et l'espace des caractères.
        // regarge si le mot suivant rentre dans le cadre, sinon saut à la ligne
        const nextWordStrWidth = textWidth(wordsStr[i+1]) || 0
        if (x > width - nextWordStrWidth) {
            y += 40 
            x = 20 
        }
    
    }
  
      for (let i = 0; i < words.length; i++) {
        const word = words[i] // recherche du mot
        word.spread()
      }
}


function draw() {
    background(0)

    for (let i = 0; i < words.length; i++) {
        const word = words[i] // recherche du mot
        word.update()
        word.display()
    }
}

class Word {
    constructor(word, x, y, idx) {
        this.word = word
        this.x = x
        this.y = y
        //la position de la cible est la même que la position actuelle au départ
        this.tx = this.x
        this.ty = this.y
        this.idx = idx
        this.fcolor = color(255)
    }

    spread() {
        this.tx = random(windowWidth)
        this.ty = random(windowHeight)
    }

    update() {
        //se déplace vers la cible de 10% à chaque fois
        this.x = lerp(this.x, this.tx, 0.1)
        this.y = lerp(this.y, this.ty, 0.1)
    }
    
    display() {
        fill(this.fcolor)
        noStroke()
        text(this.word, this.x, this.y)
    }
}
