class Trajet {
  constructor() {
    this.radio = [
      ["wejden", "Anissa"],
      ["eminem", "mockinbird"],
      ["poor man's poison", "providence"],
      ["Biga*Ranx", "My Face"],
      ["JKLL", "Le Vague A L'Ame"],
    ];
    this.feux = 30;
    this.changement = 0;
  }
}

class Personnage {
  constructor() {
    this.prenom = "Nicolas";
    this.santeMental = 10;
  }
  selectionMusique(cible) {
    let random = Math.floor(Math.random() * 5);
    if (cible.radio[random][1] == "Anissa") {
      console.log(
        "la musique Anissa vient de se lancer, Nicolas change de taxi"
      );
      this.santeMental -= 1;
      cible.changement += 1;
    } else {
      console.log(`la musique ${cible.radio[random][1]} vient de se lancer sur la radio`);
    }
    cible.feux -= 1;
  }
}

let trajet = new Trajet();
let personnage = new Personnage();

while (personnage.santeMental > 0 && trajet.feux > 0) {
  personnage.selectionMusique(trajet);
  if (personnage.santeMental == 0) {
    console.log(" Nicolas n'as plus de santé mental, EXPLOSION");
    break;
  }
  if (trajet.feux == 0) {
    console.log(`Nicolas est arrivé chez lui sain et sauf, il a changé ${trajet.changement} fois de taxi`);
    break;
  }
}
