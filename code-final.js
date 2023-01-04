//définition des fonctions
//tableau des textes
let sujet = ["La cadre","Pauline","Le petit garçon","Ma pantoufle","Le sapin de Noël","Le fauteuil","L'ornithorinque","Un tapis","Mon orteil","Le carrelage","Le pigeon","Son transat","Un avion en papier","L'ourlet de mon jean","Ma carotide interne","Son lavabo","Louis Grandjean","Francfort","Le transpalette","Ma soeur"];
let verbe = ["s'enfuit","bougonne","épluchait","filme","s'agrandissait","tourne","roule","s'enroule","dirigea","découvrit","dormi","poussa","vole","juge","se cachait","tapa","flamba","s'allume","fume","a esquivé"];
let complement = ["dans la forêt","sur son radeau","au magasin","rapidement","avec sa plante","sa sœur","une pomme","un carambar","dans son lit","avec amour","doucement","avec une orange","lors du réveillon","devant la mer","en voyage","au jardin","à la cave","avec grand-père","à l'Ecole de Design","dans une boîte"];

//positions initiales du texte
let x = [];
let y = [];
//deuxième position du texte
let x2 = [];
let y2 = [];
//positions finales des mots de la phrase
let xf = [200,300,400];
let yf = [200,300,400];

//liste (vide initialement) des termes
let choisi = [];

//changer les options de texte
let color = "white";

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Sans-serif");
    textSize(12);
    let allwords = "La cadre,Pauline,Le petit garçon,Ma pantoufle,Le sapin de Noël,Le fauteuil,L'ornithorinque,Un tapis,Mon orteil,Le carrelage,Le pigeon,Son transat,Un avion en papier,L'ourlet de mon jean,Ma carotide interne,Son lavabo,Louis Grandjean,Francfort,Le transpalette,Ma soeur,s'enfuit,bougonne,épluchait,filme,s'agrandissait,tourne,roule,s'enroule,dirigea,découvrit,dormi,poussa,vole,juge,se cachait,tapa,flamba,s'allume,fume,a esquivé,dans la forêt,sur son radeau,au magasin,rapidement,avec sa plante,sa sœur,une pomme,un carambar,dans son lit,avec amour,doucement,avec une prune,lors du réveillon,devant la mer,en voyage,au jardin,à la cave,avec grand-père,à l'Ecole de Design,dans une boîte";
    const wordsStr = allwords.split(',')
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
  
      x = x + wordStrWidth + textWidth(',') // ajouter à x la largeur du mot et l'espace des caractères.
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
    
    //remplir la tableau de positions aléatoirement + choisir le terme choisi
    for (let i=0; i<3; i++){
        x.push(random(0, windowWidth-50));
        y.push(random(0, windowHeight-50));
        x2.push(random(0, windowWidth));
        y2.push(random(0, windowHeight));
    }
    choisi.push(random(verbe), random(complement));
}

function draw() {
    background("black");
    //afficher la fonction texte = le texte s'affiche en blanc à un endroit aléatoire
    displayText();
    //afficher la fonction Etape2 après 1,5sec = le texte change de place et de couleur
    setTimeout(Etape2, 1500);
    //afficher la fonction PhraseFinale après 3sec = le texte change de couleur et se met dans l'ordre
    setTimeout(PhraseFinale, 3000);
    }

//fonction pour afficher le texte
function displayText(){
    for (let i = 0; i < words.length; i++) {
        const word = words[i] // recherche du mot
        word.update()
        word.display()
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
}

//fonction pour choisir la couleur du texte et modifier sa position
function Etape2(){
    color = "#00A676";
    text(choisi,x = x2,y = y2);
}

//changer la couleur du texte et mettre la phrase dans l'ordre final
function PhraseFinale(){
    color = "#A60076";
    text(choisi, x=xf, y=yf);
}
