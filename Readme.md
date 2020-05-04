# CRUD para Cadastro de Funcionários 

## Para executar o projeto siga as instruções:

É necessário ter instaldo em sua máquina o node e o "yarn" ou "npm".

Caso não tenha, siga as instruções(os passos a seguir são para máquinas que possuem SO Linux):
Para instalar o node, digite no terminal:

`` curl -sL https://deb.nodesource.com/setup_10.x ``

``` sudo apt install nodejs```


Para instalar o npm, digite no terminal:
npm install npm@latest -g

1 -------------------------  CONFIGURAÇÃO DO BACKEND -----------------------------------

Abra o terminal na pasta "Backend":
-Digite no terminal:
npm install

- Vá para a seção "CONFIGURAÇÃO DO BANCO"

- Após conseguir executar a configuração do banco, faça:
- No terminal, digite:

knex migrate:latest 

(caso nao funcione este comando, tente instalar novamente o knex, com este comando: 
sudo npm install knex -g), e execute novamente:

knex migrate:latest

- Após finalizada as migrations execute no terminal:

npm start

-Isso irá startar o servidor

2 -------------------------  CONFIGURAÇÃO DO FRONTEND -----------------------------------
Após isso, abra outro terminal na pasta "Frontend":
-Digite no terminal:
npm install

- Depois, digite:
npm start

-Isso irá startar o frontend da aplicação

3 ---------------------------   CONFIGURAÇÃO DO BANCO --------------------------------------------------
- A configuração do Postgres:
-Usuário: postgres
-Senha: 123456
-Porta: 5432

Caso queira alterar para executar em sua máquina:
- É necessário criar um banco local em sua máquina, para isso tenha o postgreSql instalado

- Caso ja tenha,no terminal digite:
- psql -d postgres
- Após entrar no postgres, digite:
- CREATE DATABASE db

- Após a criação do database, siga os proximos passos.

- Abra a pasta "Backend"
- Abra o arquivo "knexfile.js"
- Faça as alterações nas propriedades: port, user, password (Com as suas configurações do seu banco)


