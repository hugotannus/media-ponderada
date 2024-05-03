# EXERCÍCIO: Média Ponderada

Exemplo de como utilizar as linguagens html, css e javascript para criar uma
aplicação web, sem necessitar do uso de um framework.

## Instruções para **clonar** o Repositório

Em um terminal de comando, navegue até a pasta de sua preferência -- como por exemplo a pasta `~/Projetos/` -- e clone este projeto utilizando o comando:

```bash
# Para clonar o repositório usando HTTPS
git clone https://github.com/hugotannus/media-ponderada.git
```

... ou:

```bash
# Para clonar o repositório usando SSH
git clone git@github.com:hugotannus/media-ponderada.git
```

Em seguida, navegue até a pasta do repositório, remova a pasta `.git`, inicie um novo repositório...

```bash
cd media-ponderada

# Ao remover esta pasta, você estará removendo o histórico de alterações do exercício...
rm -rfv .git/

# ... para dar lugar à sua própria resolução do exercício.
git init
```

... e faça um primeiro *commit* no seu repositório local.

```bash
# Prepara todos os arquivos contidos no repositório
git add .

# Ao remover esta pasta, você estará removendo o histórico de alterações do exercício...
git commit -m "Estágio inicial do exercício."
```

Por fim, crie um novo repositório no [GitHub](https://github.com) (**sem adicionar** os arquivos `README.md` e `.gitignore`, e de preferência ***público***), e siga as instruções na tela à seguir para enviar os arquivos ao repositório recém criado na plataforma.

## Execução

A solução não requer instalação prévia, e pode ser executada:

- abrindo o arquivo `index.html` diretamente no navegador;
- criando uma instância local da aplicação com o [http-server](https://www.npmjs.com/package/http-server), ou;
- por meio do uso de extensões do VSCode, como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ou o [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server).

## Testes

Os testes podem ser executados também sem nenhuma instalação prévia. Basta abrir o arquivo `index.html`, localizado no diretório `tests/`.

Caso tenha instanciado um servidor local para a aplicação (na porta `8080`, por exemplo), basta executar os testes pela URL `http://localhost:8080/tests/index.html`.

## Referências

- [JavaScript Guide - Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Mocha - Simple, flexible, fun](https://mochajs.org/)
- [Chai Assertion Library - Installation](https://www.chaijs.com/guide/installation/#browser)
- [Chai Assertion Library - BDD](https://www.chaijs.com/api/bdd/#method_eql)
