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
