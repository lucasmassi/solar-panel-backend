# Solar Panel Backend
Informações gerais do projeto, rotas e instalação do projeto

## Descrição das ferramentas e tecnologias utilizadas no projeto

- API RESTful desenvolvida em NodeJs
- Framework: <b>Express</b>
- Banco: <b>PostgreSQL</b>
- ORM: <b>Sequelize</b>
- Auth: <b>JWT(JsonWebToken)</b>
- Padronização de código: <b>Eslint</b> e <b>Prettier</b>, padrão AirBnb

### Rotas e autenticação

<b>POST</b> - ```/users``` - Cadastro do usuário, exemplo abaixo:

```json
{
  "name": "Lucas Massi",
  "email": "lucasmassi18@gmail.com",
  "state": "CA",
  "password": "123456"
}

// Retorno esperado
{
  "id": 2,
  "name": "Lucas Massi",
  "email": "lucasmassi19@gmail.com",
  "state": "CA"
}
```
<b>PUT</b> - ```/users``` - Atualização dos dados do usuário, exemplo abaixo:

```json
{
  "email": "lucasmassi19@gmail.com",
  "oldPassword": "123456",
  "password": "1234567",
  "confirmPassword": "1234567"
}

// Retorno esperado após atualizar, não é necessário atualizar a senha, mas neste exemplo estamos atualizando a senha
{
  "id": 2,
  "name": "Lucas Massi",
  "email": "lucasmassi19@gmail.com",
  "state": "CA"
}
```

<b>POST</b> - ```/sessions``` - Rota de autenticação, exemplo abaixo:

```json
{
  "email": "lucasmassi19@gmail.com",
  "password": "123456"
}

// Retorno esperado
{
  "user": {
    "id": 2,
    "name": "Lucas Massi",
    "email": "lucasmassi19@gmail.com",
    "state": "CA"
  },
  "token": "TOKEN SERÁ GERADO AQUI"
}
```

<b>GET</b> - ```/panels``` - Listagem dos painéis solares, retorno esperado abaixo:

```json
[
  {
    "formatted_installation": "Day 21 of Dec, 2015",
    "id": 1,
    "installation_date": "2015-12-22T00:00:00.000Z",
    "system_size": 4.725,
    "zip_code": 91913,
    "state": "CA",
    "cost": 494.3319052
  },
  {
    "formatted_installation": "Day 28 of Dec, 2015",
    "id": 5,
    "installation_date": "2015-12-29T00:00:00.000Z",
    "system_size": 5.775,
    "zip_code": 92069,
    "state": "CA",
    "cost": 604.1834397
  },
  ...
]
```

<b>GET</b> - ```/panels/graphic/:userId``` - Listagem das somas de instalações por ano para exibir no gráfico.

<b>GET</b> - ```/panels/largerMonths/:userId``` - Listagem das 3 maiores instalações no ano.

<b>GET</b> - ```/panels/maxCost/:userId``` - Exibição da instalação com maior custo e o cep.

<b>GET</b> - ```/panels/totalInstallation/:userId``` - Exibição do total de instalações do estado do usuário.

Utilização do <b>Insomnia</b> para testar todas requisições.

## Instalando o projeto
<b>Docker</b> - Utilizei o docker para subir um banco de dados PostgreSQL, deixarei o comando abaixo para parâmetro de conexão
```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Após dar o ```git clone``` do projeto seguir os passos abaixo:

<b>Npm</b> - Utilizei o Npm como gerenciador de pacotes
```
npm install

// Para rodar o projeto, utilizei o nodemon para atualizar automático ao identificar uma modificação, pode ser visto no package.json
npm run dev
```

<b>Env</b> - Me baseio nas configs do ```.env``` para conexões no banco e outras coisas. Duplicar o arquivo ```.env.exemple``` com suas informações de banco, abaixo o exemplo do meu ```.env```:
```
APP_URL=http://localhost:3333
NODE_ENV=development

#Auth

APP_SECRET=22a24f9666637f75297f50c75affc907

# Database

DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=orbita
```

<b>Secret</b> - Para a autenticação JWT eu utilizo uma palavra secreta para gerar um MD5, que será o meu ```APP_SECRET```, no exemplo acima eu deixei o meu Secret caso precisarem utilizar é muito simples, entrar em um site de gerador de MD5 e colocar uma palavra aleatória ou um conjunto de palavras, pegar o código ```MD5``` gerado e colocar na variável de ambiente ```APP_SECRET```. 
> Obs: esta chave é apenas utilizada como uma segunda forma de segurança na geração do ```Token``` principal, que será gerado pela lib ```jsonwebtoken```.

<b>Migrations</b> - Como eu utilizo migrations para gerar minhas tabelas e seeds no banco, pode ser executado alguns comandos com o ```sequelize-cli``` instalado no projeto. 
> Importante ressaltar a não exclusão do arquivo ```.sequelizerc``` no projeto pois é com ele que faço os apontamentos para as pastas corretas de migrations, seeds, config e models do projeto

Antes de executar as migrations, baixar [ESTE ARQUIVO](https://drive.google.com/file/d/16d8l0Lk9_2wiax8KQndy9IYZHFc-BGDk/view?usp=sharing) e colar no diretório ```src > database > sqls >```, arquivo muito grande para dar um commit.

Abaixo os comandos para gerar as tabelas no banco já conectado com o ```docker start``` no container do postgres utilizado:
```
// Para gerar a migration
npx sequelize-cli db:migrate

// Para derrubar a migration
npx sequelize-cli db:migrate:undo

// Para gerar as seeds
npx sequelize-cli db:seed:all

```
Para mais informações consultar a documentação do [PostgreSQL](https://sequelize.org/master/manual/migrations.html)

### Testes
Implementei alguns testes apenas, e ele utiliza as variáveis de ambientes do arquivo  ```.env.test``` com o ```Jest```, comando para rodar é o ```$ npm run test```.

Acredito que seja o suficiente para rodarem a aplicação, vou deixar um link onde listo algumas libs que costumo utilizar nos projetos:
[Bibliotecas que funcionam muito bem em NodeJs](https://github.com/lucasmassi/help-node-summary)

Qualquer dúvida estou a disposição para explicar minha estruturação, mas acredito que seja bem fácil de entender.
