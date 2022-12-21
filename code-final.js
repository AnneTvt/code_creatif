//définition des fonctions
//tableau des textes
let sujet = ["","","","","","","","","","","","","","","","","","","",""];
let verbe = ["s'enfuit","bougonne","épluchait","filme","s'agrandissait","tourne","roule","s'enroule","dirigea","découvrit","dormi","poussa","vole","juge","se cachait","tapa","flamba","s'allume","fume","a esquivé"];
let complement = ["dans la forêt","sur son radeau","au magasin","rapidement","avec sa plante","sa sœur","une pomme","un carambar","dans son lit","avec amour","doucement","avec une orange","lors du réveillon","devant la mer","en voyage","au jardin","à la cave","avec grand-père","à l'Ecole de Design","dans une boîte"];

//positions 
let x = [];
let y = [];
let x2 = [];
let y2 = [];

//liste (vide initialement) des termes
let choisi = [];

//changer les options de texte
let color = "white";

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Sans-serif");
    //remplir la tableau de positions aléatoirement + choisir le terme choisi
    for (let i=0; i<1; i++){
        x.push(random(0, windowWidth-50));
        y.push(random(0, windowHeight-50));
        x2.push(random(0, windowWidth));
        y2.push(random(0, windowHeight));
        choisi.push(random(verbe), random(complement));
    }
}

function draw() {
    background("black");
    //afficher la fonction texte = le texte s'affiche en blanc à un endroit aléatoire
    displayText();
    //afficher la fonction Etape2 après 1,5sec = le texte change de place et de couleur
    setTimeout(Etape2, 1500); 
    }

//fonction pour afficher le texte
function displayText(){
    fill(color);
    textSize(38);
    text(choisi,x,y);
}

//fonction pour choisir la couleur du texte et modifier sa position
function Etape2(){
    color = "#00A676";
    text(choisi,x = x2,y = y2);
}

function TextChoisi(){
    
}
