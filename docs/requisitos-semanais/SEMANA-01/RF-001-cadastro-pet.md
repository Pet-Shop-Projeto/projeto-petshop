# RF-001: Cadastro de clientes dos PETs

**Versão:** 12.2  
**Laboratório de Inovação -** Prof. Edilberto Silva — 2026  
**Formato:** Markdown (será corrigido automaticamente)  
**Valor Total da Entrega:** 100%  
**Data de Entrega:** [Data]  
**Grupo:** Grupo 1 - Petshop
**Integrantes:** isabela61850856@edu.df.senac.br[Isabela Rezende]; mateus62355366@edu.df.senac.br[Mateus Alcântara]; joao60732706@edu.df.senac.br[João Paulo].

**ID:** RF-001  
**Título:** Criar novo registro de cliente no sistema e seu(s) respectivos PETs  
**Tipo:** Requisito Funcional  
**Prioridade:** ALTA (bloqueia outras funcionalidades)  
**Complexidade:** MÉDIA (estimado 5 story points)  
**Status:** EM DESENVOLVIMENTO  
**Data de Criação:** 27/08/2026  
**Última Atualização:** 27/08/2026  

**Breve Descrição:**  
O sistema deve permitir que recepcionistas cadastrem novos clientes com dados básicos (nome, email, CPF, telefone, data de nascimento) e dados do(s) PETs (idade, nome, peso, raça) para manter registro atualizado.
```

## Descrição Detalhada

**Por que este requisito existe?**  
O sistema precisa gerenciar informações de clientes e PETs para:
- Manter histórico de clientes
- Personalizar atendimento
- Gerar relatórios de ocupação
- Facilitar check-in/check-out

**Contexto do Negócio:**  
PetShop precisa registrar dados de todos os clientes que logam, coletando informações essenciais para contato e identificação do tutor e seu PETs.

---

## Atores do Sistema

### 1. Usuário (Ator Principal)
- **Papel:** se cadastrar no site/app
- **Responsabilidade:** Inserir dados corretos, validar informações
- **Permissões:** 
  - ✅ CREATE (criar novo hóspede)
  - ✅ READ (visualizar dados)
  - ❌ UPDATE (não pode editar dados de outros)
  - ❌ DELETE (não pode deletar)

### 2. GERENTE (Ator Secundário)
- **Papel:** Revisar e corrigir dados de hóspedes
- **Responsabilidade:** Supervisionar cadastros, resolver inconsistências
- **Permissões:**
  - ✅ CREATE, READ, UPDATE, DELETE

### 3. SISTEMA (Ator Automático)
- **Papel:** Validar dados, armazenar seguramente
- **Responsabilidade:** Validar formato, aplicar regras de negócio
- **Permissões:**
  - ✅ Todas operações
```
## UC-001: Realizar Cadastro de cliente/PETs

### Pré-Condições
- ✅ Usuário autenticado no sistema
- ✅ Dados de conexão disponíveis
- ✅ Banco de dados funcionando
- ✅ O usuário ou tutor deve existir no cadastro.

### Pós-Condições (Sucesso)
- ✅ Usuário registrado com ID único
- ✅ Confirmação enviada por email
- ✅ Histórico de cadastro registrado
- ✅O cadastro fica disponível para consulta e agendamento de serviços.

### Pós-Condições (Falha)
- ✅ Mensagem de erro exibida
- ✅ Dados não salvos
- ✅ Tentativa registrada em log

### Fluxo Principal
1. Recepcionista clica em "Novo cliente ou PET"
2. Sistema exibe formulário vazio
3. Recepcionista preenche nome
4. Sistema valida formato do nome
5. Recepcionista preenche email
6. Sistema valida formato do email
7. Recepcionista clica "Salvar"
8. Sistema valida todos os campos
9. Sistema salva no banco de dados
10. Sistema exibe mensagem de sucesso
11. Recepcionista vê novo cliente na lista

### Fluxo Alternativo A1: Email já cadastrado
6a.1. Sistema detecta email duplicado
6a.2. Exibe mensagem de erro
6a.3. Usuário pode tentar outro email ou ligar para suporte

### Fluxo Alternativo A2: Conexão de rede falha
8a.1. Sistema tenta 3 vezes (retry automático)
8a.2. Se falhar: exibe erro de conexão
8a.3. Usuário pode tentar novamente

### Regras de Negócio (RN)
**RN-01:** Email deve ser único no sistema
**RN-02:** CPF deve ser validado (algoritmo módulo 11)
**RN-03:** Data de nascimento não pode ser futura
**RN-04:** Telefone deve ter 11 dígitos (Brasil)
**RN-05:** Nome não pode estar vazio
**RN-06:** Dados sensíveis criptografados em repouso
**RN-07:** Histórico mantido por 5 anos

### Requisitos Não-Funcionais (RNF)
**RNF-01:** Resposta < 2 segundos
**RNF-02:** Suporta 1000+ hóspedes
**RNF-03:** Backup diário automático
**RNF-04:** Modo offline com sincronização
**RNF-05:** HTTPS obrigatório
**RNF-06:** WCAG 2.1 (acessibilidade)
```

### Mockup/Descrição das Telas

Tela 1: Novo Cadastro — Estado Inicial
```
┌────────────────────────────────────────────────────────────┐
│ ✦ PataSegura                    Clientes e pets / Novo cadastro │
├───────────────┬────────────────────────────────────────────┤
│               │                                            │
│ ▦ Visão geral │  CADASTRO DE HÓSPEDE                      │
│ ♙ Clientes    │  Novo cliente e pet                       │
│   e pets  ←   │  Preencha os dados abaixo para criar um   │
│ ▣ Hospedagens │  novo registro no sistema.                 │
│ ◷ Agenda      │                                            │
│ ▤ Relatórios  │  ① Dados do cliente ─ ② Dados do pet ─ ③ │
│               │                                            │
│               │  ┌──────────────────────────────────────┐  │
│ Ana Souza     │  │ ♙  Dados do cliente                  │  │
│ Recepcionista │  │    Informações básicas do tutor       │  │
│               │  │                                       │  │
│               │  │ Nome completo *                       │  │
│               │  │ [_______________________________]     │  │
│               │  │                                       │  │
│               │  │ E-mail *          CPF *               │  │
│               │  │ [_______________] [________________]  │  │
│               │  │                                       │  │
│               │  │ Telefone *       Data de nascimento * │  │
│               │  │ [_______________] [________________]  │  │
│               │  │                                       │  │
│               │  │ ──────────────────────────────────── │  │
│               │  │                                       │  │
│               │  │ ♥  Dados do pet                      │  │
│               │  │                                       │  │
│               │  │ PET 1                                 │  │
│               │  │ Nome *        Raça *                  │  │
│               │  │ [__________] [________________]       │  │
│               │  │                                       │  │
│               │  │ Idade *       Peso (kg) *             │  │
│               │  │ [__________] [________________]       │  │
│               │  │                                       │  │
│               │  │ [ ＋ Adicionar outro pet ]            │  │
│               │  │                                       │  │
│               │  │ 🔒 Seus dados estão protegidos.       │  │
│               │  └──────────────────────────────────────┘  │
│               │                                            │
│               │ Campos obrigatórios *     [CANCELAR]       │
│               │                            [SALVAR CADASTRO]│
└───────────────┴────────────────────────────────────────────┘
```

Tela 2: Formulário Preenchido — Validação Visual
```
┌────────────────────────────────────────────────────────┐
│ Novo cliente e pet                                     │
├────────────────────────────────────────────────────────┤
│ ① Dados do cliente ─ ② Dados do pet ─ ③ Revisão       │
│                                                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ♙  Dados do cliente                                │ │
│ │                                                    │ │
│ │ Nome completo *                                    │ │
│ │ [João da Silva____________________________]  ✓     │ │
│ │                                                    │ │
│ │ E-mail *                     CPF *                 │ │
│ │ [joao@email.com____________] ✓ [123.456.789-09] ✓ │ │
│ │                                                    │ │
│ │ Telefone *                  Data de nascimento *  │ │
│ │ [(61) 99999-9999__________] ✓ [15/05/1995_______] ✓│ │
│ │                                                    │ │
│ │ ♥  Dados do pet                                    │ │
│ │                                                    │ │
│ │ PET 1                                              │ │
│ │ Nome *            Raça *                           │ │
│ │ [Thor___________]  [Golden Retriever____________]  │ │
│ │                                                    │ │
│ │ Idade *            Peso (kg) *                    │ │
│ │ [3______________]  [12,5________________________] │ │
│ │                                                    │ │
│ │ [ ＋ Adicionar outro pet ]                         │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│                         [CANCELAR] [SALVAR CADASTRO]   │
└────────────────────────────────────────────────────────┘
```
Tela 3: Adicionando Outro Pet
┌───────────────────────────────────────────────────────┐
│ Dados do pet                                          │
├───────────────────────────────────────────────────────┤
│                                                       │
│ PET 1                                      [ × ]       │
│ Nome *          Raça *                                │
│ [Thor________]  [Golden Retriever____________]        │
│                                                       │
│ Idade *          Peso (kg) *                          │
│ [3___________]  [12,5________________________]       │
│                                                       │
│ PET 2                                      [ × ]       │
│ Nome *          Raça *                                │
│ [Luna________]  [Poodle_____________________]         │
│                                                       │
│ Idade *          Peso (kg) *                          │
│ [5___________]  [8,2_________________________]       │
│                                                       │
│ [ ＋ Adicionar outro pet ]                            │
│                                                       │
│ 🔒 Seus dados estão protegidos.                       │
│                                                       │
│ [CANCELAR]                         [SALVAR CADASTRO]   │
└───────────────────────────────────────────────────────┘
```

Tela 3: Adicionando Outro Pet
```
┌───────────────────────────────────────────────────────┐
│ Dados do pet                                          │
├───────────────────────────────────────────────────────┤
│                                                       │
│ PET 1                                      [ × ]       │
│ Nome *          Raça *                                │
│ [Thor________]  [Golden Retriever____________]        │
│                                                       │
│ Idade *          Peso (kg) *                          │
│ [3___________]  [12,5________________________]       │
│                                                       │
│ PET 2                                      [ × ]       │
│ Nome *          Raça *                                │
│ [Luna________]  [Poodle_____________________]         │
│                                                       │
│ Idade *          Peso (kg) *                          │
│ [5___________]  [8,2_________________________]       │
│                                                       │
│ [ ＋ Adicionar outro pet ]                            │
│                                                       │
│ 🔒 Seus dados estão protegidos.                       │
│                                                       │
│ [CANCELAR]                         [SALVAR CADASTRO]   │
└───────────────────────────────────────────────────────┘

Tela 4: Erro de Validação
```
┌───────────────────────────────────────────────────────┐
│ Novo cliente e pet                                    │
├───────────────────────────────────────────────────────┤
│ ① Dados do cliente                                    │
│                                                       │
│ ┌───────────────────────────────────────────────────┐ │
│ │ ♙  Dados do cliente                               │ │
│ │                                                   │ │
│ │ Nome completo *                                   │ │
│ │ [João da Silva____________________________]  ✓    │ │
│ │                                                   │ │
│ │ E-mail *                                          │ │
│ │ [joao@email_______________________________]  ❌   │ │
│ │ Informe um e-mail válido.                         │ │
│ │                                                   │ │
│ │ CPF *                                             │ │
│ │ [000.000.000-00___________________________]  ❌   │ │
│ │ Confira o CPF informado.                          │ │
│ │                                                   │ │
│ │ Telefone *                                        │ │
│ │ [(61) 99999-9999_________________________]  ✓    │ │
│ │                                                   │ │
│ │ Data de nascimento *                              │ │
│ │ [31/12/2030______________________________]  ❌    │ │
│ │ A data não pode ser futura.                       │ │
│ └───────────────────────────────────────────────────┘ │
│                                                       │
│ ⚠ Revise os campos                                   │
│ Há informações pendentes ou inválidas no formulário. │
│                                                       │
│ [CANCELAR]                         [SALVAR CADASTRO]   │
└───────────────────────────────────────────────────────┘

## Arquitetura da Solução

### Diagrama de Componentes

```
┌──────────────┐
│   Frontend   │ (HTML+CSS+JS)
│   Cadastro   │
└──────┬───────┘
       │ HTTPS
       ▼
┌──────────────────┐
│ API Rest Backend │ (Express.js)
│ POST /clientes   │
└──────┬───────────┘
       │ Validações
       ▼
┌──────────────────┐
│  PostgreSQL BD   │ (ACID Transactions)
│  Tabela: cliente 
  ou PETs
└──────────────────┘
```

### ADR-001: PostgreSQL como Banco de Dados

**Status:** ACEITO

**Contexto:** Dados de hóspedes precisam de consistência ACID e escalabilidade.

**Decisão:** Usar PostgreSQL 14+ para armazenar dados de hóspedes.

**Alternativas:**
- MySQL: Menos ACID
- MongoDB: Sem transações robustas

**Consequências:** ✅ Seguro, ✅ Escalável, ⚠️ Requer DevOps


## Tecnologias Escolhidas

| Camada | Tecnologia | Versão | Justificativa |
|--------|-----------|--------|---------------|
| Frontend | HTML5 + CSS3 + JavaScript | ES2015+ | Web padrão |
| Backend | Express.js | 4.18+ | Minimalista, rápido |
| BD | PostgreSQL | 14+ | ACID, confiável |
| Hash | bcrypt | 5+ | OWASP recomendado |
| Validação | express-validator | 7+ | Robusta |

- [x] Sem erros ortográficos (revisado)
- [x] Sem erros gramaticais
- [x] Markdown renderiza corretamente no GitHub
- [x] Código está com syntax highlighting (```language)
- [x] Diagramas ASCII art são legíveis
- [x] Nenhuma seção está com "TODO" ou "..."
- [x] Documento tem tamanho apropriado (3-5 páginas)
- [x] Referências internas consistentes (RF-XXX, UC-XXX, RN-XX, RNF-XX)
- [x] Formatação consistente (títulos, listas, espaçamento)
