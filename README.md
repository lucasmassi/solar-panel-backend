# Challenge Orbita
Informações gerais do projeto, rotas e instalação do projeto

## Descrição das ferramentas e tecnologias utilizadas no projeto

- API RESTful desenvolvida em NodeJs
- Framework: <b>Express</b>
- Banco: <b>PostgreSQL</b>
- ORM: <b>Sequelize</b>
- Auth: <b>JWT(JsonWebToken)</b>
- Padronização de código: <b>Eslint</b> e <b>Prettier</b>, padrão AirBnb

#### Rotas e autenticação

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

Utilização do <b>Insomnia</b> para testar todas requisições, conforme imagem abaixo:
![Insomnia](https://github.com/lucasmassi/orbita-backend/blob/master/assets/images/insomnia.PNG)
![Insomnia2](https://github.com/lucasmassi/orbita-backend/blob/master/assets/images/insomnia2.PNG)
![Insomnia3](https://github.com/lucasmassi/orbita-backend/blob/master/assets/images/insomnia3.PNG)
