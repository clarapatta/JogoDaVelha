# 🎮 Jogo da Velha em React Native

Este é um projeto de **Jogo da Velha** desenvolvido em **React Native** com **Expo**.  
O objetivo é criar uma experiência simples e divertida, com interface inspirada em um **quadro de giz**, utilizando uma paleta de cores personalizada.

---

## 📌 Funcionalidades

- 🎯 **Tabuleiro interativo** 3x3.
- 🔄 **Alternância de jogadores** entre "X" e "O".
- 🏆 **Verificação automática** de vencedor ou empate.
- 🎨 **Paleta de cores personalizada** para cada jogador e interface.
- 🧹 **Botão para reiniciar** o jogo.
- ⬅ **Botão para voltar** à tela inicial (usando `expo-router`).

---

## 🛠 Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)**
- **JavaScript (ES6+)**
- **expo-router** para navegação

---

## 🎨 Paleta de Cores

| Nome              | Código Hex |
|-------------------|------------|
| Preto Giz         | `#1C1C1C`  |
| Cinza Giz Claro   | `#DADADA`  |
| Cinza Azulado     | `#2C3E50`  |
| Giz Rosa Antigo   | `#E26A6A`  |
| Amarelo Pastel    | `#F1C40F`  |
| Verde Giz         | `#27AE60`  |

---

## 📂 Estrutura do Projeto

```
📦 projeto-jogo-da-velha
 ┣ 📜 App.js / index.js
 ┣ 📜 PInicial.js
 ┣ 📂 assets/
 ┣ 📂 node_modules/
 ┣ 📜 package.json
 ┣ 📜 README.md
```

---

## 🚀 Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/jogo-da-velha.git
   cd jogo-da-velha
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Iniciar o projeto**
   ```bash
   npx expo start
   ```

4. **Abrir no celular**
   - Instale o aplicativo **Expo Go** no seu smartphone.
   - Escaneie o QR Code gerado no terminal ou na aba do navegador.

---

## 📜 Como Jogar

1. O jogador **X** começa.
2. Toque em uma célula vazia para marcar sua jogada.
3. O jogo alterna automaticamente para o próximo jogador.
4. Quando houver um vencedor ou empate, uma mensagem será exibida.
5. Toque no botão **Resetar** para começar uma nova partida.
