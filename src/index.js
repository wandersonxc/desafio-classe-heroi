class Heroi {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack;

    switch (this.type.toLowerCase()) {
      case "mago":
        attack = "magia";
        break;
      case "guerreiro":
        attack = "espada";
        break;
      case "monge":
        attack = "artes marciais";
        break;
      case "ninja":
        attack = "shuriken";
        break;
      default:
        attack = "um ataque fatal";
    }

    console.log(`O ${this.type} atacou usando ${attack}.`);
  }
}


const heroi1 = new Heroi("Spike", 150, "Mago");
heroi1.attack();

const heroi2 = new Heroi("Spartan", 87, "Guerreiro");
heroi2.attack(); 

const heroi3 = new Heroi("King", 60, "Monge");
heroi3.attack(); 

const heroi4 = new Heroi("Naruto", 35, "Ninja");
heroi4.attack();