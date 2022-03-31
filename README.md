<p align="center">
   <img src=".github/logo.svg" alt="Logo" />
</p>
<h3 align="center">
   Next Level Week Together 👨🏻‍🚀 🚀
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/tinellin/nlw06-letmeask?color=525dcb">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tinellin/nlw06-letmeask?color=525dcb">
  	
  <img alt="Made by Enzo Tinelli" src="https://img.shields.io/badge/made%20by-Enzo Tinelli-%2304D361?color=525dcb">
	
  
  <a href="https://github.com/tinellin/nlw06-letmeask/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tinellin/nlw06-letmeask?color=525dcb">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=525dcb">
</p>


<h1 align="center">
    <img alt="Letmeask" src=".github/screen.svg" />
</h1>

</br>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 💡 Conteúdos abordados
- React
- React Hooks
- Context API's
- Animações com o Framer Motion
- CSS-in-TS com Styled-components
- Uso do Realtime Database e Authentication do Firebase para Autenticação e Atualização em tempo real dos dados

## 🚀 Como executar

### 🔥 Firebase

- Assumindo que você já tenha uma conta Google, utilize-a para acessar o [Firebase](https://firebase.google.com/).
- Siga as instruções no site do Firebase e crie um projeto.
- <strong>Acesse a visão geral do projeto</strong>. No menu lateral, clique em <strong> Authentication </strong> e depois no botão <strong> Primeiros Passos</strong>.
- No menu <strong> Provedores de login </strong> escolha o provedor do Google para autenticação ativando-o e colocando seu e-mail como o de suporte.
- No menu lateral, acesse o Realtime Database e clique em no botão <strong> Criar banco de dados</strong>.
- Escolha o local (pode deixar o padrão: us-central1), inicie as regras de segurança no <strong> modo bloqueado.</strong> e clique no botão <strong> Ativar</strong>.
- Acesse o menu <strong>Regras</strong>. No campo de digitar as regras, apague as padrões e copie e cole as seguintes regras:

```bash
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
        },
        "likes": {
          ".read": true,
         ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)"
        },
        "answers": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
        },
      }
    }
  }
}
```
- Clique no botão publicar para ativar as regras.


### ⚙️ Dependências

- Tenha o NodeJS instalado em sua máquina. Caso não tenha instalado, acesse: [NodeJS](https://nodejs.org/en/)
- Clone e abra a pasta do projeto ou faça o download.
- Caso clone, execute em seu terminal:

```bash
$ git clone https://github.com/tinellin/nlw06-letmeask.git
$ cd nlw06-letmeask
```

### 🔑 Variáveis Ambiente

- Com o download feito e o projeto aberto faça:
- Crie um arquivo ```.env.local``` no diretório raiz do projeto.
- Copie as variáveis do arquivo ```.env.example``` e cole no ```.env.local```.
- No <strong>Firebase</strong> do seu projeto faça: 
  - No menu lateral do seu projeto clique na ⚙️ (engrenagem) e em <strong> Configurações do projeto</strong>.
  - No menu <strong> Seus Aplicativos</strong> adicione o Firebase ao seu app da Web clicando no ícone ```</>```.
  - Coloque o apelido do app, não marque a opção de Firebase Hosting, e clique em <strong> Registrar app</strong>.
  - Em ```const firebaseConfig``` copie somente o valor de cada chave e cole, sequencialmente, em seu arquivo ```.env.local```.
  - Feito isso, as variáveis ambientes estão configuradas!

### 💻 Inicializar o App

- Instale as dependências necessárias, executando em seu terminal na pasta do projeto: ```yarn``` ou ```npm run```
- Pronto! Agora você pode iniciar o app, executando: ```yarn start``` ou ```npm start```

- O app estará disponível localmente no seu navegador pelo endereço http://localhost:3000.

## 💻 Projeto

Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.

## 🚀 Algumas features a mais

- Os administradores das salas podem responder as perguntas via texto e os usuários podem visualizá-la.
- Utilização de Modals para alguns eventos disparados pelo usuário.
- Algumas mudanças na estilização.
- Mudanças na estruturação das pastas e organização dos arquivos.

## 📋 Licença

Este projeto esta sob a [MIT license](./LICENSE) para mais detalhes.

## 🔖 Layout

Você pode visualizar o Layout do projeto através do link abaixo:

- [Layout Web](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate) 

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).

Feito com ❤️ por Enzo Tinelli
