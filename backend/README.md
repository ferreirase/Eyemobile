
<img alt="GoStack" src="https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/criacao_de_sites/image/cursowebportug-07_xl.png" />

<h3 align="center">
  Eyemobile - System Transactions
</h3>

<blockquote align="center">“A vida é do tamanho que você quer”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ferreirase/Eyemobile?color=%2304D361">

  <a href="https://www.linkedin.com/in/anderson-raphael-ferreira">
    <img alt="Made by Ferreira" src="https://img.shields.io/badge/made%20by-Ferreira-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ferreirase/Eyemobile/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ferreirase/Eyemobile?style=social">
  </a>
</p>

## :rocket: Sobre o projeto
É uma API de gestão de transações de cartão. Foi desenvolvida para o teste da vaga de Fullstack da empresa **[EyeMobile](https://eyemobile.com.br/)**.

### :camera: Enunciado

A empresa Cartões Ltda, oferece um serviço de meios de pagamento em cartão de débito e crédito.
Para execução do serviço, dispõe de máquinas de cartão para captura dos pagamentos e um portal para
acompanhamento dos recebíveis.
As taxas praticadas em suas operações são:
#### Débito: 2%
#### Crédito: 3%


Os estabelecimentos que contratarão os serviços da empresa Cartões Litda, receberão os pagamentos realizados
em cartão nos seguintes prazos:
#### Transações em débito: Próximo dia útil
#### Transações em crédito: Próximo dia útil após 30 corridos


*``` Você deverá criar uma API que atenda ao cenário acima nos seguintes aspectos: ```*

  1. A API deverá oferecer recurso de autenticação (basic authentication)
  2. Oferecer documentação Swagger da API
  3. Considerar dias úteis de segunda a sexta. Não há necessidade de analisar feriados
  4. Cálculo dos valores deverá ser através de arredondamentos matemáticos (2 casas)
  5. Publicar desafio no GitHub
  6. Disponibilizar desafio funcional (pode ser na nuvem ou máquina local)


Após cada transação, a máquina de cartão envia para uma API um objeto JSON similar aos
demonstrados abaixo:
``` 
{
  “nsu”: “0459356”,
  “valor”: 50.00,
  “bandeira”: “VISA”,
  “modalidade”: “credito”,
  “horario”: “2019-01-02T06:02:01-03:00”
}
{
  “nsu”: “0451456”,
  “valor”: 79.99,
  “bandeira”: “MASTERCARD”,
  “modalidade”: “debito”,
  “horario”: “2019-01-04T12:43:20-03:00”
} 

```
#### Detalhamento dos atributos:
  - nsu = Número sequencial único
  - valor = Valor bruto da transação
  - bandeira = Bandeira do cartão do consumidor (VISA, MASTERCARD, ELO, AMEX)
  - modalidade = Modalidade utilizada na transação: debito/credito
  - horario = Horário em que a transação ocorreu
  
Para esse caso, você deverá construir um endpoint, que possibilite o envio dessas informações através do
método POST.
#### Importante: A API deverá validar se os valores dos atributos:
- Não permitir valores negativos
- Não permitir valores inválidos (textos, números com 2 vírgulas, etc, datas incorretas)
- Aceitar apenas as modalidades e bandeiras descritas no cenário
#### Credenciais para acesso deste endpoint:
  - user = terminal
  - password = 123456

A API deverá fornecer um extrato, através de método GET, contendo o detalhamento de todas as
transações realizadas:
Deverá apresentar:
``` 
[
  {
  “nsu”: “0451456”,
  “valor”: 79.99,
  “liquido”: 78.39,
  “bandeira”: “MASTERCARD”,
  “modalidade”: “debito”,
  “horario”: “2019-01-04T12:43:20-03:00”,
  “disponivel”: “2019-01-07”
  },
  {...}
]
```
### Novos atributos:
  - liquido: Valor líquido a receber, já descontando as taxas
  - disponivel: Data em que a transação estará disponível para recebimento para o estabelecimento
### Credenciais para acesso deste endpoint:
  - user = portal
  - password = 123456

A API deverá fornecer uma consulta de saldo, através de método GET, contendo os valores já
disponíveis e os valores a receber, baseado na data de acionamento desta consulta:
Deverá apresentar no seguinte formato:
```
{
  “disponivel”: 0.00,
  “receber”: 0.00
}
```

### Credenciais para acesso deste endpoint:
  - user = portal
  - password = 123456

### :cd: Rodando a aplicação!

*``` Na pasta "backend/config", no arquivo "config.json", informe as credenciais de acesso ao seu banco de dados e o banco a ser utilizado. ```*

#### Subindo o servidor backend
  1. Baixar/Clonar o repositório na sua máquina;
  2. Entrar na pasta "backend", abrir o terminal na raiz da pasta e rodar "yarn" ou "npm i" para instalação das dependências do projeto;
  3. Depois, rode o comando "yarn dev:database" ou "npm run dev:database" para rodar as seeds e as migrations do sequelize;
  4. Ainda no terminal, rodar o comando "yarn dev:server" ou "npm run dev:server" para subir o servidor backend;
  5. Pronto, a aplicação está no ar e pode ser acessada na porta que foi configurada no arquivo ".env".

*``` Os endpoints e suas especificações podem ser acessadas na rota "/doc" da API. ```*

## :memo: Tecnologias Utilizadas no Projeto

| **Backend**| 
|-------------|
|  *NodeJS*    | 
|   *TypeScript*   | 
|   *Express* |
|   *Postgres*   | 
|   *Sequelize*   | 
|   *Yup*   | 
|   *Swagger*   | 
|   *JWT*   | 
|   *Bcrypt*   | 
|   *Axios* |
|   *Eslint*   | 
|   *Date-Fns*   | 
|   *Prettier*   | 



## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## :man: Author
[**_```Anderson Raphael Ferreira```_**](https://www.linkedin.com/in/anderson-raphael-ferreira/)
