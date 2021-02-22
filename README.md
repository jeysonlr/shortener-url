## Descricao

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# ATENCÃO, siga atentamente todos os passos, na sequência

## Iniciando containêrs do banco de dados e do (SGBD)
```
$ docker-compose up -d --build

```
# após instalacão e conteinêrs rodando
## Acessando sitema gerenciador de banco de dados (SGBD)
```
acesse via http://localhot:8080

utilizar as credencias utilizadas no docker-compose.yml

exemplo:
SISTEMA: postgreSQL
SERVIDOR: shortener_pgsql (nome do container utilizado no docker-compose.yml)
USUARIO: pguser (usuario e senha utilizados no docker-compose.yml)
SENHA: pgpassword (usuario e senha utilizados no docker-compose.yml)
BASE DE DADOS: nao precisa informar valor


```

## Rodando localmente a API

```bash
$ git config core.autocrlf false

$ yarn
    ou
$ npm install
```

## Documentacão com as rotas da API
```
local

http://localhost:8081/documentation

em producao

https://wisershortener.herokuapp.com/documentation
```

## primeiro popular a tabela e depois consumir os resultados

## Running the app

```bash

# watch mode
$ yarn start:dev
    ou
$ npm run start:dev

```

### email
``
jeysonlr@gmail.com
``

## License

Nest is [MIT licensed](LICENSE).
