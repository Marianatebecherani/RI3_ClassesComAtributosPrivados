# RI 3 - Classes com Atributos Privados em JavaScript

Este projeto é um exercício de Programação Orientada a Objetos (POO) em JavaScript, parte da matéria RI 3. O foco principal é demonstrar o uso de classes com atributos privados (`#`), encapsulamento através de getters, e o gerenciamento de coleções de objetos utilizando `Set`.

## Conceitos Abordados

-   **Classes e Objetos:** Estruturação do código em classes como `Empresa`, `Cliente`, `Telefone` e `Endereco`.
-   **Atributos Privados:** Uso da sintaxe `#` para declarar atributos privados (como `#cpf` e `#cnpj`), garantindo que eles não possam ser modificados externamente após a criação do objeto.
-   **Encapsulamento:** Exposição controlada de atributos privados através de métodos `get`.
-   **Coleções com `Set`:** Utilização de `Set` para armazenar listas de objetos únicos (telefones e clientes), evitando duplicatas e facilitando a manipulação.
-   **Composição:** Relação entre as classes, onde uma `Empresa` "tem" um `Endereco` e múltiplos `Clientes`, e um `Cliente` "tem" um `Endereco` e múltiplos `Telefones`.

## Estrutura do Projeto

```
.
└── src
    └── ri3.js
```

-   `src/ri3.js`: Contém todo o código-fonte, incluindo a definição das classes, a criação das instâncias (objetos) e a lógica para gerar o relatório final no console.

## Como Executar o Projeto

Para visualizar o resultado do script, você precisará ter o Node.js instalado em sua máquina.

1.  **Clone o repositório (se ainda não o fez):**
    ```bash
    git clone https://github.com/seu-usuario/RI3_ClassesComAtributosPrivados.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd RI3_ClassesComAtributosPrivados
    ```

3.  **Execute o script usando o Node.js:**
    ```bash
    node src/ri3.js
    ```

Após a execução, um relatório detalhado da empresa e seus clientes será exibido no terminal.

## Exemplo de Saída

A execução do script irá gerar uma saída formatada no console, semelhante a esta:

```
===================================================================
                    RI 3: RELATÓRIO DA EMPRESA E CLIENTES
===================================================================
Razão Social: ABC LTDA
Nome fantasia: Mercado Online

Telefones da Empresa:
  ddd: 11 numero: 30001111
  ddd: 11 numero: 30002222

--- CLIENTES CADASTRADOS (5) ---
Nome: João
Estado: SP cidade: São José dos Campos rua: Av Andrômeda numero: 987
   ddd: 99 numero: 99999999
   ddd: 99 numero: 88888888

... (restante dos clientes)

CNPJ da Empresa: 12.345.678/0001-90
CPF do Cliente: 111.111.111-11
Razão Social: ABC LTDA
Nome Fantasia: mercado online
===================================================================
```
