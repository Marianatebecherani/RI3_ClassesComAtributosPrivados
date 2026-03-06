
class Empresa {
    // Declaração do atributo privado (CNPJ não deve mudar após criação)
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
        this.#cnpj = cnpj; // Atribuição do privado
    }

    // --- Métodos de Acesso e Mutação ---

    // Getter para atributo privado (Requisito: get para atributo privado).
    get cnpj() {
        return this.#cnpj;
    }
    
    // Métodos de Caixa Alta/Baixa para atributos públicos
    razaoSocialCaixaAlta() { return this.razaoSocial.toUpperCase(); }
    razaoSocialCaixaBaixa() { return this.razaoSocial.toLowerCase(); }
    nomeFantasiaCaixaAlta() { return this.nomeFantasia.toUpperCase(); }
    nomeFantasiaCaixaBaixa() { return this.nomeFantasia.toLowerCase(); }

    // Métodos para os Sets
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }
    
    // Método de descrição da Empresa e Clientes (Requisito Parte 3).
    detalhes() {
        // Detalhes da Empresa
        let output = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n\n`;

        // Descrição dos Telefones da Empresa
        output += `Telefones da Empresa:\n`;
        Array.from(this.telefones).forEach(t => {
            output += `  ${t.detalhes()}\n`;
        });
        output += `\n`;
        
        // Descrição dos Clientes (itera sobre o Set)
        output += `--- CLIENTES CADASTRADOS (${this.clientes.size}) ---\n`;
        Array.from(this.clientes).forEach(c => {
            output += `${c.detalhes()}\n\n`;
        });
        
        return output;
    }
}

export default Empresa