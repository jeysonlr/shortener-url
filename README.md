## Descrição
```


```

## Acesse aqui
Verão em produção [aqui](https://wisershortener.herokuapp.com/api)

```

```

## Documentação
Documentação [aqui](https://wisershortener.herokuapp.com/documentation)


```

```


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
http://localhost:8081/documentation

```

## Running the app

```bash

# watch mode
$ yarn start:dev
    ou
$ npm run start:dev

```

## Running tests
```bash

$ yarn test
```

### email
``
jeysonlr@gmail.com
``

## License

Nest is [MIT licensed](LICENSE).
