
class Telefone {
    constructor(ddd, numero) {  
        this.ddd = ddd;
        this.numero = numero;
    }

    detalhes() {
        return `ddd: ${this.ddd} numero: ${this.numero}`; // Formato exigido
    }
}

export default Telefone