
class Cliente {
    // Declaração do atributo privado (CPF não pode mudar após criação)
    #cpf; 
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf; // Atribuição do privado
    }

    // --- Métodos de Acesso e Mutação ---

    // Getter para atributo privado (Requisito: get para atributo privado).
    get cpf() {
        return this.#cpf;
    }

    // Métodos de Caixa Alta/Baixa para atributos públicos (nome)
    nomeCaixaAlta() { return this.nome.toUpperCase(); }
    nomeCaixaBaixa() { return this.nome.toLowerCase(); }
    
    // Métodos para o Set de Telefones
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    // Método para a descrição do cliente (usado na descrição da empresa).
    detalhes() {
        let detalhesTelefones = Array.from(this.telefones).map(t => `   ${t.detalhes()}`).join('\n');
        
        // Formato exigido
        return `Nome: ${this.nome}\n${this.endereco.detalhes()}\n${detalhesTelefones}`;
    }
}

export default Cliente;