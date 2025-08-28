function Cliente(nome, celular, endereco, email) {
    this.nome = nome;
    this.celular = celular;
    this.endereco = endereco;
    this.email = email;


    this.getNome = () => this.nome;
    this.setNome = (nome) => this.nome = nome;


    this.getNomeMaiusculo = () => this.nome.toUpperCase();
    this.getNomeMinusculo = () => this.nome.toLowerCase();


    this.getDados = () => `Cliente: ${this.nome}
Celular: (${this.celular.getDDD()}) ${this.celular.getNumero()}
Endereço: ${this.endereco.getEstado()}, ${this.endereco.getCidade()}, ${this.endereco.getRua()}, ${this.endereco.getNumeroCasa()}
Email: ${this.email.getUsuario()}`;
}

function Celular(ddd, numero ) {
    this.numero = numero;
    this.ddd = ddd;

    this.getNumero = () => this.numero;
    this.setNumero = (numero) => this.numero = numero;

    this.getNumeroMaiusculo = () => this.numero.toUpperCase();
    this.getNumeroMinusculo = () => this.numero.toLowerCase();

    this.getDDD = () => this.ddd;
    this.SetDDD = (ddd) => this.ddd = ddd;
}

function Endereco(estado, cidade, rua, numeroCasa) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numeroCasa = numeroCasa;

    this.getEstado = () => this.estado;
    this.setEstado = (estado) => this.estado = estado;

    this.getCidade = () => this.cidade;
    this.setCidade = (cidade) => this.cidade = cidade;

    this.getRua = () => this.rua;
    this.setRua = (rua) => this.rua = rua;

    this.getNumeroCasa = () => this.numeroCasa;
    this.setNumeroCasa = (numeroCasa) => this.numeroCasa = numeroCasa;

    this.getEstadoMaiusculo = () => this.estado.toUpperCase();
    this.getEstadoMinusculo = () => this.estado.toLowerCase();

    this.getCidadeMaiusculo = () => this.cidade.toUpperCase();
    this.getCidadeMinusculo = () => this.cidade.toLowerCase();

    this.getRuaMaiusculo = () => this.rua.toUpperCase();
    this.getRuaMinusculo = () => this.rua.toLowerCase();

    this.getNumeroCasaMaiusculo = () => String(this.numeroCasa).toUpperCase();
    this.getNumeroCasaMinusculo = () => String(this.numeroCasa).toLowerCase();
}


function Email(usuario) {
    this.usuario = usuario;

    this.getUsuario = () => this.usuario;
    this.setUsuario = (usuario) => this.usuario = usuario;

    this.getUsuarioMaiusculo = () => this.usuario.toUpperCase();
    this.getUsuarioMinusculo = () => this.usuario.toLowerCase();
}


let celular = new Celular("11", "981345113");
let endereco = new Endereco("SP", "São Paulo","Av. Paulista", "945");
let email = new Email("lucasinacio@gmail.com");

let cliente = new Cliente("Lucas Inácio de Carvalho", celular, endereco, email);



let celular1 = new Celular("12", "981324256");
let endereco1 = new Endereco("SP", "São José dos Campos", "Descida do habibs", "3");
let email1 = new Email("anaelize@gmail.com");

let cliente1 = new Cliente("Ana Elize", celular1, endereco1, email1);



let celular2 = new Celular("13", "981765113");
let endereco2 = new Endereco("SP", "Santos", "Vila Belmiro", "3");
let email2 = new Email("laisinocencio@gmail.com");

let cliente2 = new Cliente("Lais Inocencio", celular2, endereco2, email2);



Celular.prototype.descricao = function() {
    return `DDD: ${this.ddd}\nNúmero: ${this.numero}`;
};


Endereco.prototype.descricao = function() {
    return `Rua: ${this.rua}\nNúmero: ${this.numeroCasa}\nCidade: ${this.cidade}\nEstado: ${this.estado}\n---`;
};

Cliente.prototype.descricao = function() {
    return `Informações do Cliente: ${this.nome}\n---\nTelefone: ${this.celular.descricao()}\n---\nEndereço: ${this.endereco.descricao()}`;
};

console.log(cliente.descricao());
console.log(cliente1.descricao());
console.log(cliente2.descricao());

const estrutura = [];
function receberLista(cliente, cliente1, cliente2) {
    estrutura.push(cliente, cliente1, cliente2)
    return estrutura
}
console.log(receberLista(cliente, cliente1, cliente2))
estrutura.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(estrutura)

