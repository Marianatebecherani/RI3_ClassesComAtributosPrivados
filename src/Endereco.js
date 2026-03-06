
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    // Requisito: Métodos para caixa alta/baixa em todos os atributos.
    estadoCaixaAlta() { return this.estado.toUpperCase(); }
    estadoCaixaBaixa() { return this.estado.toLowerCase(); }
    cidadeCaixaAlta() { return this.cidade.toUpperCase(); }
    cidadeCaixaBaixa() { return this.cidade.toLowerCase(); }
    ruaCaixaAlta() { return this.rua.toUpperCase(); }
    ruaCaixaBaixa() { return this.rua.toLowerCase(); }
    // Número não se aplica

    // Método auxiliar para a descrição da empresa/clientes (Parte 3).
    detalhes() {
        return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}`; // Formato exigido [cite: 157]
    }
}

export default Endereco