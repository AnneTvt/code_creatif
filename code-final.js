//tableau de chaque mot de la phrase
let sujet = ["La cadre","Pauline","Le petit garçon","Ma pantoufle","Le sapin de Noël","Le fauteuil","L'ornithorinque","Un tapis","Mon orteil","Le carrelage","Le pigeon","Son transat","Un avion en papier","L'ourlet de mon jean","Ma carotide interne","Son lavabo","Louis Grandjean","Francfort","Le transpalette","Ma soeur"];
let verbe = ["s'enfuit","bougonne","épluchait","filme","s'agrandissait","tourne","roule","s'enroule","dirigea","découvrit","dormi","poussa","vole","juge","se cachait","tapa","flamba","s'allume","fume","a esquivé"];
let complement = ["dans la forêt","sur son radeau","au magasin","rapidement","avec sa plante","sa sœur","une pomme","un carambar","dans son lit","avec amour","doucement","avec une orange","lors du réveillon","devant la mer","en voyage","au jardin","à la cave","avec grand-père","à l'Ecole de Design","dans une boîte"];

// liste de tous les mots à afficher sur le canva
let allwords = "La cadre,Pauline,Le petit garçon,Ma pantoufle,Le sapin de Noël,Le fauteuil,L'ornithorinque,Un tapis,Mon orteil,Le carrelage,Le pigeon,Son transat,Un avion en papier,L'ourlet de mon jean,Ma carotide interne,Son lavabo,Louis Grandjean,Francfort,Le transpalette,Ma soeur,s'enfuit,bougonne,épluchait,filme,s'agrandissait,tourne,roule,s'enroule,dirigea,découvrit,dormi,poussa,vole,juge,se cachait,tapa,flamba,s'allume,fume,a esquivé,dans la forêt,sur son radeau,au magasin,rapidement,avec sa plante,sa sœur,une pomme,un carambar,dans son lit,avec amour,doucement,avec une prune,lors du réveillon,devant la mer,en voyage,au jardin,à la cave,avec grand-père,à l'Ecole de Design,dans une boîte";

// conserve tous les mots
const words = [] 

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

//changer les couleurs du texte
let color = "white";
let color1 = "white";

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Sans-serif");
    textSize(40);

    const wordsStr = allwords.split(',') //on récupère chaque mot individuellement
    // position du premier mot
    let x1 = 20
    let y1 = 60
    fill(255)
    // on répète pour chaque mot
    for (let i = 0; i < wordsStr.length; i++) {
        const wordStr = wordsStr[i] // on crée une constance qui contient le mot actuel de la boucle
        const wordStrWidth = textWidth(wordStr) // largeur du mot actuel
        const word = new Word(wordStr, x1, y1, i) //?? 
        words.push(word)
  
      x1 = x1 + wordStrWidth + textWidth(',') // ajouter à x la largeur du mot et l'espace des caractères
        // regarde si le mot suivant rentre dans le cadre, sinon
        const nextWordStrWidth = textWidth(wordsStr[i+1]) || 0
        if (x1 > width - nextWordStrWidth) {
            y1 += 40 
            x1 = 20 
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
    choisi.push(random(sujet), random(verbe), random(complement));
}

function draw() {
    background("black");
    //afficher la fonction texte = tous les mots s'affichent en blanc aléatoirement
    displayWords();
    //afficher la fonction Disappear après 3sec = le texte dispparît
    setTimeout (Disappear, 3000);
    //afficher la fonction texte = le texte s'affiche en blanc à un endroit aléatoire
    displayText();
    //afficher la fonction Etape2 après 3,2sec = le texte change de place et de couleur
    setTimeout(Etape2, 3500);
    //afficher la fonction PhraseFinale après 4,5sec = le texte change de couleur et se met dans l'ordre
    setTimeout(PhraseFinale, 4500);
    }

//fonction pour afficher le texte
function displayText(){
    for (let i=0; i<x.length; i++){
        fill(color);
        text(choisi[i],x[i],y[i]);
    }
}

//fonction pour afficher le texte
function displayWords(){
    for (let i = 0; i < words.length; i++) {
        const word = words[i] // recherche du mot
        word.update()
        word.display()
    }

}

//création de mots
class Word { 
        constructor(word, x1, y1, idx) { //requiert le mot, sa position en xy et 
            this.word = word
            this.x = x1
            this.y = y1
            //la position de la cible est la même que la position actuelle au départ
            this.tx = this.x
            this.ty = this.y
            this.idx = idx
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
            fill(color1)
            noStroke()
            text(this.word, this.x, this.y)
        }
}

function Disappear(){
  color1 = "black";
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
