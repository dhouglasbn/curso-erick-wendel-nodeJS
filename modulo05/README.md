# comandos para trabalhar com POSTGRES e MONGODb

## ---- DOCKER

sudo docker ps => processos que estão rodando na minha máquina

sudo docker exec -it postgres /bin/bash => entrar no container e rodar comandos la dentro

## ---- POSTGRES

=> baixar imagem e rodar o serviço do postgres

sudo docker run \
    --name `nome da porta` \
    -e POSTGRES_USER=`nome do usuário` \
    -e POSTGRES_PASSWORD=`senha` \
    -e POSTGRES_DB=`nome da db` \
    -p `comando externo`:`porta interna` \
    `-d para rodar em segundo plano` \ 
    `nome da dbsql`

```
sudo docker run \
    --name postgres \
    -e POSTGRES_USER=dhouglas \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \ => nome do banco
    -p 5432:5432 \
    -d \
    postgres
```

=> criar a interface do postgres na porta 8080 para gerenciar meu banco

sudo docker run \
    --name `adminer é o serviço da interface` \
    -p `comando externo`:`porta interna` \
    --link `nome da imagem`:`serviço que ta rodando na minha maquina` \
    `-d para rodar em segundo plano` \
    `nome do serviço`

```
sudo docker run \
    --name adminer \
    -p 8080:8080 \ => comando externo:porta interna
    --link postgres:postgres \ => nome da imagem:serviço que ta rodando na minha maquina
    -d \
    adminer
```

## ---- MONGODB

=> baixar imagem e rodar o serviço do mongodb passando :4 para definir que vai usar a versão 4 do mongo

```
sudo docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4 
```

=> criar a interface do mongo para rodar na porta 3000 e gerenciar meu banco

```
sudo docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient
```

=> criar usuário para manusear a db na interface


```
sudo docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('heroes').createUser({user: 'dhouglas', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'heroes'}]})"
```
