// presentation personnage
class Survivor {
  constructor(nom, caractéristique, mort, degat, deux) {
    this.nom = nom;
    this.caractéristique = caractéristique;
    this.mort = mort;
    this.degat = degat;
    this.deux = deux;

    // afficher les personnage dans la console
    console.log(
      `${this.nom}, ${this.caractéristique}, ${this.mort} mort, ${this.degat} degat, ${this.deux} deux`
    );
  }
}

// presentation de jason le tueur
class Tueur {
  constructor(nom, hp) {
    this.nom = nom;
    this.hp = hp;
  }
  next(cible) {
    let action = Math.random();

    if (action < cible.mort) {
      // si jason tue quelqu'un
      console.log(`${cible.nom} est mort`);
      return 1;
    } else if (
      cible.mort <= action &&
      action < cible.mort + cible.degat
    ) {
      // si le survivants esquive il inflige 10 points de dégâts
      this.hp -= 10;
      console.log(`${cible.nom} a infligé 10 points de dégâts a Jason`);
      return 0;
    } else if (
      cible.mort + cible.degat <= action &&
      action < cible.mort + cible.degat + cible.deux
    ) {
      // si le survivants inglige 15 de points de dégâts à Jason, le survivants meurt
      this.hp -= 15;
      console.log(`Jason a perdu 15 de dégât mais ${cible.nom} est mort`);
      return 1;
    }
  }
}

let tueur = new Tueur("Jason", 100);

let noms = ["Charlie", "Bernard", "Michel", "Jean", "Axel"];

let characteristiques = [
  ["Pompomgirl", 0.3, 0.5, 0.2],
  ["alcoolique", 0.1, 0.2, 0.7],
  ["narcissique", 0.4, 0.1, 0.5],
  ["sportif", 0.6, 0.1, 0.3],
  ["intello", 0.2, 0.5, 0.3],
];

let survivants = [];
let mortListe = [];

for (let i = 0; i < 5; i++) {
  let nom = Math.floor(Math.random() * noms.length);
  let selection = Math.floor(Math.random() * characteristiques.length);
  survivants.push(
    new Survivor(
      noms[nom],
      characteristiques[selection][0],
      characteristiques[selection][1],
      characteristiques[selection][2],
      characteristiques[selection][3]
    )
  );
  noms.splice(nom, 1);
}

// pour lancer le jeu
console.log("Jouons un peu ensemble!");
while (tueur.hp > 0 && survivants.length != 0) {
  selection = Math.floor(Math.random() * survivants.length);
  result = tueur.next(survivants[selection]);

  // le survivants est mort
  if (result == 1) {
    mortListe.push(survivants[selection].nom);
    survivants.splice(selection, 1);
  }

  if (tueur.hp <= 0) {
    // si le tueur est mort
    if (survivants.length == 0) {
      // tous les survivants sont mort
      console.log("tous le monde est mort,rip");
    } else if (mortListe == 0) {
      // tous les survivants survive
      console.log("bien fait pour toi Jason, tous le monde a survécu");
    } else if (mortListe.length == 1) {
      // un seule survivants est mort
      console.log(`Désolé tu nous manqueras ${mortListe}`);
    } else {
      // si c'est une carnage
      console.log(`Désolé vous nous manquerez ${mortListe}`);
    }
    break;
  } else if (survivants.length == 0) {
    // Jason a tuer tous le monde
    console.log("Jason a fait un carnage");
    break;
  }
}
