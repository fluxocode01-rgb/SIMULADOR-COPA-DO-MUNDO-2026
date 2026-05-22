# 🏆 Simulador Inteligente da Copa do Mundo 2026 ⚽

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=%23323330)

> Um simulador interativo, responsivo e automatizado construído com **JavaScript Puro (Vanilla JS)** para prever os resultados da maior Copa do Mundo da história, com o novo formato de 48 seleções!

---

## 📺 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar conceitos avançados de manipulação de DOM e lógica de ramificação em árvore no Front-end. O simulador renderiza dinamicamente os **12 grupos da primeira fase** e gerencia uma estrutura complexa de mata-mata (Oitavas, Quartas, Semifinal e Final) baseada em dependência fluida de dados.

### O Grande Diferencial (Lógica de Negócio)
Diferente de simuladores engessados, este sistema conta com **Validação por Ramificação Isolada**. Isso significa que se os jogos do lado esquerdo da chave forem preenchidos, a fase seguinte daquela linha é liberada instantaneamente, sem obrigar o usuário a preencher todo o campeonato de uma vez.

---

## ✨ Funcionalidades Principais

*   **Injeção Dinâmica (Data-Driven):** Os 12 grupos e suas respectivas seleções são gerados automaticamente via JavaScript, mantendo o HTML limpo e escalável.
*   **Cálculo em Tempo Real:** Tabelas de pontuação e classificação atualizadas no exato momento da digitação do placar (sem botões de envio).
*   **Mata-Mata Inteligente:** Avanço automático das seleções classificadas para suas respectivas posições nas chaves oficiais da FIFA.
*   **UX com Efeito Dominó Reverso:** Se você alterar ou apagar o resultado de um jogo antigo, o sistema limpa e bloqueia automaticamente as fases futuras daquela ramificação para evitar dados falsos na tela.
*   **Interface Futurista:** Design moderno focado na experiência do usuário, utilizando CSS Variables, Flexbox e Grid de alta performance.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído do zero, sem o uso de frameworks (como React, Vue ou Angular) ou bibliotecas externas:

*   **HTML5:** Estrutura semântica e esqueleto dos blocos do mata-mata.
*   **CSS3:** Layout responsivo, estilização avançada, pseudo-classes (`:disabled`) e efeitos visuais em Neon.
*   **JavaScript (ES6+):** Manipulação de DOM, escutadores de eventos (`input`), loops (`forEach`), tratamento de strings e lógica condicional estruturada.

---

## 📂 Estrutura do Repositório

```text
├── index.html          # Estrutura principal e containers do mata-mata
├── style.css           # Estilização, variáveis de cores e responsividade
└── script.js           # O "cérebro" do simulador (lógica e regras do torneio)