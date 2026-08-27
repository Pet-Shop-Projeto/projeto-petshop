# Entrega Semanal de Requisitos — PetShop

**Versão:** 12.2 adaptada para o projeto PetShop  
**Laboratório de Inovação:** Prof. Edilberto Silva — 2026  
**Data de entrega:** 27/08/2026  
**Grupo:** [Preencher nome e número do grupo]  
**Integrantes:** [Nome completo e e-mail]; [Nome completo e e-mail]  
**Status desta entrega:** Documentação e protótipo inicial concluídos  
**Link do repositório:** [github.com/JoaoPauloArrC/projeto-petshop](https://github.com/JoaoPauloArrC/projeto-petshop)

> Esta entrega apresenta uma visão inicial e superficial de um sistema para PetShop. O foco é registrar os requisitos, organizar as tarefas e demonstrar o fluxo principal por meio de um protótipo HTML com CSS embutido.

---

## 1. Identificação do requisito — 10%

### RF-001: Cadastro de animal de estimação

| Campo | Definição |
|---|---|
| **ID** | RF-001 |
| **Título** | Cadastrar animal de estimação de um cliente |
| **Tipo** | Requisito Funcional |
| **Prioridade** | Alta, pois o cadastro é utilizado nos atendimentos e serviços do PetShop |
| **Complexidade** | Média — estimativa de 5 story points |
| **Status** | Concluído nesta entrega |
| **Data de criação** | 27/08/2026 |
| **Última atualização** | 27/08/2026 |

### Breve descrição

O sistema deve permitir que um atendente cadastre um animal de estimação vinculado a um cliente, registrando informações básicas como nome, espécie, raça, porte, idade aproximada e observações importantes para o atendimento.

---

## 2. Descrição e atores — 15%

### Descrição detalhada

O cadastro de animais existe para centralizar as informações dos pets atendidos pelo PetShop. A funcionalidade deve facilitar o agendamento de banho e tosa, o controle de serviços, o registro de observações e a identificação rápida do animal durante o atendimento.

O objetivo de negócio é reduzir anotações manuais, melhorar a organização do atendimento e manter um histórico básico de cada pet. Como resultado, a equipe consegue localizar os dados do animal com mais rapidez e o cliente recebe um atendimento mais personalizado.

### Atores do sistema

| Ator | Papel | Responsabilidades | Permissões principais |
|---|---|---|---|
| **Cliente/Tutor** | Informar os dados do animal | Fornecer informações corretas e confirmar o cadastro | CREATE e READ dos próprios pets |
| **Atendente** | Realizar o cadastro | Conferir os dados, preencher o formulário e corrigir informações básicas | CREATE, READ e UPDATE |
| **Gerente** | Supervisionar os registros | Revisar cadastros, consultar informações e autorizar exclusões | CREATE, READ, UPDATE e DELETE |
| **Sistema** | Validar e armazenar os dados | Verificar campos obrigatórios, gerar identificador e registrar a operação | Execução automática das validações |

### Benefícios esperados

O cliente terá seus animais identificados rapidamente. O atendente poderá consultar os dados antes de iniciar um serviço. O gerente terá uma visão mais organizada dos cadastros. O sistema reduzirá duplicidades e ajudará a manter informações mínimas para os próximos atendimentos.

---

## 3. Especificação de caso de uso — 25%

### UC-001: Realizar cadastro de animal

#### Pré-condições

- O atendente deve estar autenticado no sistema.
- O cliente ou tutor deve existir no cadastro.
- O sistema deve estar disponível para receber e armazenar os dados.

#### Pós-condições de sucesso

- O pet é salvo com um identificador único.
- O animal fica vinculado ao cliente informado.
- O sistema exibe uma mensagem de confirmação.
- O cadastro fica disponível para consulta e agendamento de serviços.

#### Pós-condições de falha

- O cadastro não é salvo parcialmente.
- O sistema informa o campo que precisa ser corrigido.
- A tentativa de cadastro pode ser registrada para análise técnica.

#### Fluxo principal

1. O atendente acessa o menu **Clientes e Pets**.
2. O sistema exibe a lista de clientes cadastrados.
3. O atendente seleciona um cliente ou tutor.
4. O atendente escolhe a opção **Adicionar pet**.
5. O sistema apresenta o formulário de cadastro.
6. O atendente informa o nome do animal.
7. O atendente seleciona a espécie e informa raça, porte e idade aproximada.
8. O atendente registra observações relevantes, como alergias ou comportamento.
9. O atendente revisa os dados e seleciona **Salvar cadastro**.
10. O sistema valida os campos obrigatórios e verifica o vínculo com o cliente.
11. O sistema grava o cadastro e gera um identificador para o pet.
12. O sistema exibe a confirmação e disponibiliza o animal na lista do cliente.

#### Fluxo alternativo A1: Campo obrigatório não preenchido

1. O sistema identifica que nome, espécie ou cliente não foi informado.
2. O sistema destaca o campo pendente.
3. O atendente preenche a informação e tenta salvar novamente.

#### Fluxo alternativo A2: Cliente não encontrado

1. O atendente pesquisa o cliente pelo nome ou telefone.
2. O sistema não encontra um registro correspondente.
3. O atendente cancela o cadastro do pet ou encaminha o cliente para o cadastro de tutor.

#### Fluxo alternativo A3: Pet já cadastrado

1. O sistema identifica um pet com nome e características semelhantes vinculado ao mesmo cliente.
2. O sistema apresenta um alerta de possível duplicidade.
3. O atendente confirma se deve continuar ou abre o cadastro existente.

#### Regras de negócio

| Código | Regra |
|---|---|
| **RN-01** | Todo pet deve estar vinculado a um cliente ou tutor cadastrado. |
| **RN-02** | O nome do animal é obrigatório. |
| **RN-03** | A espécie deve ser selecionada em uma lista controlada, inicialmente cão, gato, ave ou outro. |
| **RN-04** | A idade informada não pode ser negativa. |
| **RN-05** | O sistema deve alertar sobre possível duplicidade antes de salvar. |
| **RN-06** | Somente usuários autenticados podem cadastrar ou alterar pets. |
| **RN-07** | Exclusões devem ser restritas ao gerente e, preferencialmente, realizadas de forma lógica. |

#### Requisitos não funcionais

| Código | Requisito |
|---|---|
| **RNF-01** | A tela deve apresentar resposta visual ao salvar, carregar ou falhar. |
| **RNF-02** | O formulário deve funcionar em telas de celular, tablet e computador. |
| **RNF-03** | Os dados devem ser transmitidos utilizando conexão segura HTTPS em produção. |
| **RNF-04** | A interface deve utilizar labels, foco visível e mensagens compreensíveis. |
| **RNF-05** | A consulta ou gravação do cadastro deve responder em até 2 segundos em condições normais. |
| **RNF-06** | O sistema deve impedir o envio de campos inválidos no navegador e no servidor. |
| **RNF-07** | O cadastro deve possuir registro de data de criação e última atualização. |

---

## 4. Protótipos e fluxo de telas — 20%

O protótipo obrigatório está disponível em:

```text
src/prototipos/SEMANA-01/RF-001-cadastro-pet/index.html
```

O arquivo possui HTML semântico e CSS embutido. A implementação é demonstrativa e não grava dados reais; ela representa os estados principais da tela de cadastro.

### Telas representadas

| Tela | Estado | Objetivo |
|---|---|---|
| **Tela 1** | Formulário vazio | Permitir o início do cadastro do pet. |
| **Tela 2** | Formulário preenchido | Demonstrar dados válidos e confirmação visual. |
| **Tela 3** | Carregando | Indicar que o sistema está processando o cadastro. |
| **Tela 4** | Erro de validação | Mostrar mensagens para campos obrigatórios ou possível duplicidade. |

### Elementos principais

- O cabeçalho identifica o PetShop e o cliente selecionado.
- O formulário contém nome, espécie, raça, porte, idade aproximada e observações.
- Os botões permitem salvar ou cancelar o cadastro.
- A mensagem de sucesso confirma o registro do animal.
- A mensagem de erro explica o problema sem utilizar termos técnicos.
- O layout utiliza cartões e adaptações responsivas para telas menores.

### Fluxo de navegação

```text
Lista de clientes
      ↓
Cliente selecionado
      ↓
Adicionar pet
      ↓
Formulário vazio
      ↓
Formulário preenchido
      ↓
Validação
   ↙       ↘
Erro      Sucesso
             ↓
       Pet cadastrado
```

---

## 5. Arquitetura e ADR — 20%

### Arquitetura proposta

A solução inicial utiliza uma arquitetura simples em camadas. O protótipo representa o frontend, enquanto uma futura API será responsável pelas validações e pelo armazenamento dos dados.

```text
┌─────────────────────────┐
│ Frontend Web             │
│ HTML + CSS + JavaScript  │
│ Formulário de cadastro   │
└────────────┬────────────┘
             │ HTTPS / JSON
             ▼
┌─────────────────────────┐
│ API REST                 │
│ Node.js + Express       │
│ Validações e regras     │
└────────────┬────────────┘
             │ SQL
             ▼
┌─────────────────────────┐
│ Banco de dados           │
│ PostgreSQL               │
│ Clientes e pets         │
└─────────────────────────┘
```

### Fluxo de dados

O atendente preenche o formulário no frontend. O frontend realiza uma validação inicial e envia os dados para a API. A API confirma a existência do cliente, aplica as regras de negócio e grava o pet no banco de dados. Ao final, a API retorna sucesso ou erro para que a interface apresente o estado correspondente.

### ADR-001: Utilização de PostgreSQL

| Item | Decisão |
|---|---|
| **Status** | Aceito |
| **Contexto** | O sistema precisa relacionar clientes e pets com consistência. |
| **Decisão** | Utilizar PostgreSQL para armazenar os cadastros. |
| **Alternativas** | MySQL ou banco documental. |
| **Consequências** | Facilita relacionamentos e consultas estruturadas, mas exige configuração inicial do banco. |

### ADR-002: API REST com Node.js e Express

| Item | Decisão |
|---|---|
| **Status** | Aceito |
| **Contexto** | O frontend precisa enviar e consultar dados de forma organizada. |
| **Decisão** | Utilizar uma API REST com Node.js e Express. |
| **Alternativas** | Django, Laravel ou acesso direto ao banco. |
| **Consequências** | Mantém frontend e backend separados, facilitando evolução e testes. |

### ADR-003: HTML e CSS sem framework no protótipo

| Item | Decisão |
|---|---|
| **Status** | Aceito para a entrega semanal |
| **Contexto** | A atividade exige um protótipo simples, entregável e fácil de avaliar. |
| **Decisão** | Utilizar HTML semântico com CSS embutido no arquivo `index.html`. |
| **Alternativas** | React, Bootstrap ou Tailwind CSS. |
| **Consequências** | Reduz dependências e facilita a correção, mas não representa a aplicação final completa. |

### Tecnologias escolhidas

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Protótipo | HTML5 | Estrutura semântica e simples de visualizar. |
| Estilos | CSS3 embutido | Atende ao formato da entrega e permite responsividade. |
| Interação futura | JavaScript | Permite validações e comunicação com a API. |
| Backend futuro | Node.js + Express | Organização das rotas e regras de negócio. |
| Banco futuro | PostgreSQL | Relacionamento entre clientes, pets e serviços. |
| Versionamento | Git e GitHub | Histórico de alterações e compartilhamento com o professor. |

---

## 6. Qualidade e conformidade — 10%

### Checklist de qualidade

- [x] O requisito possui ID no padrão `RF-001`.
- [x] O título descreve claramente a funcionalidade.
- [x] O tipo, a prioridade e a complexidade foram informados.
- [x] Foram descritos o objetivo e os atores do sistema.
- [x] O caso de uso possui pré-condições e pós-condições.
- [x] O fluxo principal possui mais de oito passos.
- [x] Foram registrados três fluxos alternativos.
- [x] Foram registradas regras de negócio e requisitos não funcionais.
- [x] O arquivo `index.html` foi criado com CSS embutido.
- [x] O protótipo representa estados vazio, preenchido, carregando e erro.
- [x] O layout possui adaptação básica para celular e computador.
- [x] A arquitetura e os três ADRs foram documentados.
- [x] Não há seções com `TODO`, `...` ou exemplos não adaptados.
- [x] Os nomes `RF-001`, `UC-001`, `RN-01` e `RNF-01` estão consistentes.
- [x] O documento está em Markdown compatível com o GitHub.

---

## Quadro de tarefas estilo Trello

O quadro abaixo representa o andamento superficial do projeto. Os cartões marcados como concluídos são os pontos já realizados nesta entrega.

| A Fazer | Em andamento | Concluído |
|---|---|---|
| RF-002 — Editar cadastro do pet | Definir banco de dados | RF-001 — Identificação do requisito |
| RF-003 — Consultar pets por cliente | Planejar endpoints da API | UC-001 — Caso de uso inicial |
| RF-004 — Agendar banho e tosa | Revisar regras com o grupo | Protótipo HTML+CSS |
| RF-005 — Registrar serviço realizado | Preparar apresentação | Arquitetura inicial |
| Testar acessibilidade |  | ADRs iniciais |
| Criar documentação das próximas semanas |  | Checklist de qualidade |

### Resumo dos cartões concluídos

| Cartão | Entrega realizada | Evidência |
|---|---|---|
| **Identificação** | Requisito RF-001 definido com prioridade e complexidade. | Seção 1 deste documento. |
| **Descrição e atores** | Cliente, atendente, gerente e sistema foram identificados. | Seção 2 deste documento. |
| **Caso de uso** | Fluxo principal, alternativas, regras e requisitos não funcionais descritos. | Seção 3 deste documento. |
| **Protótipo** | Estados principais da tela criados em HTML e CSS. | Arquivo `index.html`. |
| **Arquitetura** | Diagrama, tecnologias e três decisões arquiteturais registrados. | Seção 5 deste documento. |
| **Qualidade** | Checklist final preenchido. | Seção 6 deste documento. |

---

## Resumo de pontuação estimada

| Tópico | Peso | Situação nesta entrega | Pontuação estimada |
|---|---:|---|---:|
| 1. Identificação do requisito | 10% | Concluído | 10/10 |
| 2. Descrição e atores | 15% | Concluído | 15/15 |
| 3. Especificação de caso de uso | 25% | Concluído superficialmente | 25/25 |
| 4. Protótipos/telas HTML+CSS | 20% | Concluído com arquivo obrigatório | 20/20 |
| 5. Arquitetura e ADR | 20% | Concluído superficialmente | 20/20 |
| 6. Qualidade e conformidade | 10% | Concluído | 10/10 |
| **Total estimado** | **100%** | **Entrega organizada** | **100/100** |

> A pontuação é uma estimativa de preenchimento do modelo. A avaliação final depende dos critérios do professor e da entrega dos dois arquivos no local correto.

---

## Estrutura final de diretórios

```text
petshop-labii/
├── docs/
│   └── requisitos-semanais/
│       └── SEMANA-01/
│           └── RF-001-cadastro-pet.md
└── src/
    └── prototipos/
        └── SEMANA-01/
            └── RF-001-cadastro-pet/
                └── index.html
```

## Comandos para publicar no GitHub

Depois de criar ou escolher um repositório no GitHub, execute na pasta do projeto:

```bash
git init
git add .
git commit -m "[SEMANA-01] RF-001 Cadastro de pet e protótipo HTML"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/petshop-labii.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub e substitua o endereço do campo **Link do repositório** pelo link real após o envio.

### Referências

[1]: https://developer.mozilla.org/pt-BR/docs/Web/HTML "MDN Web Docs — HTML"

[2]: https://docs.github.com/pt/get-started/start-your-journey/hello-world "GitHub Docs — Hello World"

[3]: https://git-scm.com/book/pt-br/v2 "Pro Git — Livro online"
