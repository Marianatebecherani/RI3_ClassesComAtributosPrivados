/**
 * RI 3 - Classes com Atributos Privados (#) e Gerenciamento de Coleções (Set)
 * Matéria: Programação Orientada a Objetos (POO).
 */

// --- 1. Classes de Dados (Telefone e Endereco) ---

// As classes Telefone e Endereco não devem possuir atributos privados
class Telefone {
    constructor(ddd, numero) {  
        this.ddd = ddd;
        this.numero = numero;
    }

    // Requisito: Métodos para caixa alta/baixa em todos os atributos.
    dddCaixaAlta() { return this.ddd.toUpperCase(); }
    dddCaixaBaixa() { return this.ddd.toLowerCase(); }
    numeroCaixaAlta() { return this.numero.toUpperCase(); }
    numeroCaixaBaixa() { return this.numero.toLowerCase(); }

    // Método auxiliar para a descrição da empresa/clientes (Parte 3).
    detalhes() {
        return `ddd: ${this.ddd} numero: ${this.numero}`; // Formato exigido
    }
}

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


// --- 2. Classes Principais com Atributos Privados e Sets ---

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


// --- 3. Testes e Saída (Objetivo Parte 2) ---

// a. Crie uma empresa e atribua endereço e 2 telefones.
const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Rua Empresarial', '100');
const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-90', enderecoEmpresa);

const telEmpresa1 = new Telefone('11', '30001111');
const telEmpresa2 = new Telefone('11', '30002222');
empresa.adicionarTelefone(telEmpresa1);
empresa.adicionarTelefone(telEmpresa2);


// b. Crie cinco clientes, cada um com endereço e 2 telefones.
const cliente1 = new Cliente('João', '111.111.111-11', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '987'));
cliente1.adicionarTelefone(new Telefone('99', '99999999'));
cliente1.adicionarTelefone(new Telefone('99', '88888888'));

const cliente2 = new Cliente('Gabriel', '222.222.222-22', new Endereco('SP', 'São José dos Campos', 'Av Bacabal', '412'));
cliente2.adicionarTelefone(new Telefone('88', '77777777'));
cliente2.adicionarTelefone(new Telefone('88', '66666666'));

const cliente3 = new Cliente('Barbara', '333.333.333-33', new Endereco('SP', 'Sao Paulo', 'Av Paulista', '789'));
cliente3.adicionarTelefone(new Telefone('77', '55555555'));
cliente3.adicionarTelefone(new Telefone('77', '44444444'));

const cliente4 = new Cliente('Márcia', '444.444.444-44', new Endereco('SP', 'São José dos Campos', 'Rua Coronel Jose Monteiro', '452'));
cliente4.adicionarTelefone(new Telefone('66', '33333333'));
cliente4.adicionarTelefone(new Telefone('66', '22222222'));

const cliente5 = new Cliente('Pedro', '555.555.555-55', new Endereco('MG', 'Belo Horizonte', 'Rua Paulo Becker', '10'));
cliente5.adicionarTelefone(new Telefone('31', '911111111'));
cliente5.adicionarTelefone(new Telefone('31', '922222222'));


// c. Clientes devem ser colocados no conjunto de clientes da empresa.
empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);


// d. Geração da descrição da empresa (Objetivo Parte 3).
console.log("===================================================================");
console.log("                    RI 3: RELATÓRIO DA EMPRESA E CLIENTES");
console.log("===================================================================");
console.log(empresa.detalhes());

// Teste de acesso ao atributo privado (deve funcionar via get)
console.log(`CNPJ da Empresa: ${empresa.cnpj}`);
console.log(`CPF do Cliente: ${cliente1.cpf}`);
console.log(`Razão Social: ${empresa.razaoSocialCaixaAlta()}`);
console.log(`Nome Fantasia: ${empresa.nomeFantasiaCaixaBaixa()}`);
console.log("===================================================================");