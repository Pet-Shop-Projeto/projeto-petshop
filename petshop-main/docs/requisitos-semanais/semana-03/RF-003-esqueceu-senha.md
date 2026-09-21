# RF-003: Esqueceu a Senha

**Versão:** 1.0  
**Laboratório de Inovação -** Prof. Edilberto Silva — 2026  
**Formato:** Markdown  
**Grupo:** Grupo 1 - Petshop  
**Integrantes:** isabela61850856@edu.df.senac.br [Isabela Rezende]; mateus62355366@edu.df.senac.br [Mateus Alcantra]; joao60732706@edu.df.senac.br [João Paulo Arruda].

**ID:** RF-003  
**Título:** Recuperação de senha de usuários  
**Tipo:** Requisito Funcional  
**Prioridade:** ALTA  
**Complexidade:** BAIXA (estimado 3 story points)  
**Status:** EM DESENVOLVIMENTO  
**Data de Criação:** 20/09/2026  
**Última Atualização:** 20/09/2026

**Breve Descrição:**  
O sistema deve permitir que usuários que esqueceram sua senha iniciem o processo de recuperação informando o e-mail cadastrado no sistema.

---

## Descrição Detalhada

### Por que este requisito existe?

O sistema precisa oferecer uma forma simples para que usuários recuperem o acesso à conta quando não lembrarem da senha, evitando a necessidade de criar uma nova conta.

O recurso deve:

- Permitir a solicitação de recuperação de senha
- Validar o preenchimento do e-mail
- Verificar se o e-mail está relacionado a uma conta
- Informar o usuário sobre o resultado da solicitação
- Permitir o retorno para a tela de login

### Contexto do Negócio

O Pet Shop possui usuários que precisam acessar o sistema por meio de autenticação. Caso um usuário esqueça sua senha, ele deve conseguir iniciar o processo de recuperação a partir da opção **“Esqueceu sua senha?”** presente na tela de login.

---

## Atores do Sistema

### 1. USUÁRIO (Ator Principal)

- **Papel:** Solicitar recuperação de acesso
- **Responsabilidade:** Informar o e-mail cadastrado
- **Permissões:**
  - ✅ Solicitar recuperação de senha
  - ✅ Retornar para a tela de login

### 2. SISTEMA (Ator Automático)

- **Papel:** Processar a solicitação
- **Responsabilidade:** Validar o e-mail informado e apresentar o resultado
- **Permissões:**
  - ✅ Validar dados
  - ✅ Verificar cadastro do usuário
  - ✅ Informar o resultado da solicitação

---

## UC-003: Recuperar Senha

### Pré-Condições

- ✅ Usuário possui cadastro no sistema
- ✅ Sistema disponível
- ✅ Usuário possui acesso ao e-mail cadastrado

### Pós-Condições (Sucesso)

- ✅ Solicitação de recuperação realizada
- ✅ Instruções de recuperação disponibilizadas ao usuário
- ✅ Usuário pode retornar para a tela de login

### Pós-Condições (Falha)

- ✅ Mensagem de erro exibida
- ✅ Usuário pode corrigir o e-mail informado
- ✅ Usuário pode tentar novamente

### Fluxo Principal

1. Usuário acessa a tela de login
2. Usuário seleciona “Esqueceu sua senha?”
3. Sistema exibe a tela de recuperação
4. Usuário informa o e-mail
5. Usuário clica em “Continuar”
6. Sistema valida o campo de e-mail
7. Sistema verifica o cadastro informado
8. Sistema processa a solicitação de recuperação
9. Sistema informa que as instruções foram enviadas
10. Usuário retorna para a tela de login

### Fluxo Alternativo A1: Campo Obrigatório Não Preenchido

6a.1. Sistema identifica que o e-mail não foi informado  
6a.2. Exibe mensagem solicitando o preenchimento  
6a.3. Usuário informa o e-mail

### Fluxo Alternativo A2: E-mail Não Encontrado

7a.1. Sistema não encontra cadastro associado ao e-mail informado  
7a.2. Exibe mensagem informando que o e-mail não foi encontrado  
7a.3. Usuário pode tentar novamente

### Fluxo Alternativo A3: E-mail Inválido

6b.1. Sistema identifica formato inválido no e-mail  
6b.2. Exibe mensagem de validação  
6b.3. Usuário corrige o endereço informado

---

## Regras de Negócio (RN)

**RN-01:** O e-mail informado deve possuir formato válido.

**RN-02:** O e-mail deve estar relacionado a um usuário cadastrado no sistema.

**RN-03:** A recuperação de senha deve estar vinculada ao usuário correspondente ao e-mail informado.

**RN-04:** O sistema deve informar o usuário sobre o resultado da solicitação.

**RN-05:** O usuário deve poder retornar para a tela de login após a solicitação.

---

## Requisitos Não Funcionais (RNF)

**RNF-01:** O processo de solicitação deve apresentar resposta em tempo adequado.

**RNF-02:** A comunicação do sistema deve utilizar HTTPS.

**RNF-03:** A interface deve ser compatível com dispositivos móveis.

**RNF-04:** A interface deve apresentar mensagens claras de validação.

**RNF-05:** A recuperação deve preservar a segurança das credenciais do usuário.

**RNF-06:** A interface deve seguir os princípios de acessibilidade adotados no sistema.

---

## Mockup/Descrição das Telas

### Tela 1: Recuperação de Senha

```text
┌─────────────────────────────────────┐
│             🐾 PataSegura           │
├─────────────────────────────────────┤
│                                     │
│          Recupere sua senha         │
│                                     │
│ Digite seu e-mail para receber      │
│ as instruções de recuperação.       │
│                                     │
│ E-mail                              │
│ [____________________________]      │
│                                     │
│ [        CONTINUAR        ]         │
│                                     │
│       Voltar para o login           │
│                                     │
└─────────────────────────────────────┘
```

### Tela 2: Recuperação Solicitada

```text
┌─────────────────────────────────────┐
│             🐾 PataSegura           │
├─────────────────────────────────────┤
│                                     │
│       Verifique seu e-mail          │
│                                     │
│ Enviamos as instruções para         │
│ recuperação da sua senha.           │
│                                     │
│ [    VOLTAR PARA O LOGIN    ]       │
│                                     │
└─────────────────────────────────────┘
```

### Tela 3: E-mail Não Encontrado

```text
┌─────────────────────────────────────┐
│             🐾 PataSegura           │
├─────────────────────────────────────┤
│                                     │
│        E-mail não encontrado        │
│                                     │
│ Não encontramos uma conta associada │
│ ao e-mail informado.                │
│                                     │
│ [     TENTAR NOVAMENTE      ]       │
│                                     │
└─────────────────────────────────────┘
```

---

## Tecnologias Escolhidas

| Camada | Tecnologia | Versão | Justificativa |
|----------|-----------|---------|---------------|
| Frontend | HTML5 | Atual | Estrutura da página de recuperação |
| Estilização | CSS3 | Atual | Criação da interface visual e responsividade |
| Interatividade | JavaScript | ES6+ | Validação de formulários e interação com o usuário |
| Backend | Python | 3.12+ | Processamento das regras de negócio e recuperação de acesso |

### Justificativa da Arquitetura

- **HTML5** para desenvolver a estrutura da tela de recuperação.
- **CSS3** para manter a identidade visual do PataSegura e adaptar a interface a diferentes dispositivos.
- **JavaScript** para validações e interações do formulário, incluindo a transição entre a tela de recuperação e a confirmação da solicitação.
- **Python** para implementar as regras de negócio no backend.

### Arquitetura Atualizada

```text
┌──────────────┐
│   Frontend   │
│    HTML5     │
│    CSS3      │
│ JavaScript   │
└──────┬───────┘
       │
       │ Requisições
       ▼
┌──────────────────┐
│     Python       │
│    Backend       │
│ Recuperação      │
│     de senha     │
└──────────────────┘
```

---

## ADR-005: Recuperação de Senha por E-mail

**Status:** ACEITO

**Contexto:** O sistema precisa permitir que usuários que esqueceram a senha iniciem o processo de recuperação sem precisar criar uma nova conta.

**Decisão:** Utilizar o e-mail cadastrado como informação inicial para identificar a conta e iniciar o processo de recuperação.

**Alternativas:**

- Recuperação por telefone
- Recuperação presencial pelo gerente
- Criação de uma nova conta

**Consequências:**

- ✅ Processo simples para o usuário
- ✅ Reaproveitamento do e-mail já cadastrado
- ✅ Integração com o fluxo de login existente
- ✅ Melhora a continuidade de acesso ao sistema
