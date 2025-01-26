# Challenge amigo secreto! ⚡⚡⚡

Este projeto é uma aplicação web interativa que permite ao usuário gerenciar uma lista de amigos e realizar um sorteio aleatório entre eles. O objetivo principal foi desenvolver e fortalecer habilidades em lógica de programação e manipulação do DOM com JavaScript.

## Funcionalidades

### 📝 Adição de Amigos
- Os usuários podem adicionar amigos à lista e mostra abaixo o nome da pessoa.
- Validações criadas para evitar números e espaços em brancos.

### ❌ Exclusão de lista
- É possível remover amigos específicos da lista de maneira dinâmica.
- A exclusão atualiza o DOM em tempo real.

### 🎲 Sorteio de Amigo
- A lógica para sortear um amigo aleatório foi desenvolvida utilizando `Math.random()` e o `Math.floor()` para calcular o índice com base na quantidade de amigos na lista.
- O nome do amigo sorteado é exibido diretamente na interface.

### ⚡ Manipulação do DOM
- Todas as operações de adição, exclusão e sorteio foram implementadas utilizando manipulação direta do DOM.
- A lista de amigos na interface é atualizada dinamicamente conforme os dados são alterados.

### ✅ Validação e Feedback
- Mensagens de erro são exibidas nos seguintes casos:
  - Tentativa de adicionar nomes inválidos.
  - Tentativa de realizar o sorteio sem nenhum amigo na lista.
- O feedback é exibido por meio de alertas e mensagens amigáveis na interface.

### 🎨 Estilo e Interatividade
- Adição de estilos básicos para melhorar a aparência e usabilidade.
- Suporte para interação via teclado:
  - Pressionar **Enter** no campo de input adiciona automaticamente um amigo.

## Tecnologias Utilizadas

- **HTML e CSS**: Para estrutura e estilização básica da aplicação.
- **JavaScript**:
  - **Manipulação do DOM**: Uso de métodos como `addEventListener`, `appendChild`, `ClassList`, `createElement`, `preventDefault` e `innerHTML`.
  - **Eventos**: Eventos `click` para interação.
  - **Lógica de sorteio**: Uso de `Math.random()` para selecionar aleatoriamente um amigo e `Math.floor()` para arrendodar.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/JeffersonGuedes/challenge-amigo-secreto_pt-main.git
