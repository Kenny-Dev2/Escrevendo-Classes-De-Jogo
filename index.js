class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  
  atacar() {
    const ataques = {
      'mago': 'usou magia',
      'guerreiro': 'usou espada',
      'monge': 'usou artes marciais',
      'ninja': 'usou shuriken'
    };
  
    const ataque = ataques[this.tipo] || 'usou um ataque desconhecido';
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
  
// Exemplos de uso
const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
const heroi3 = new Heroi("Liu Kang", 35, "monge");
const heroi4 = new Heroi("Naruto", 17, "ninja");
  
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
  