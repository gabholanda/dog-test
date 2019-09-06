# Como inicializar a API

1. Crie um arquivo na pasta dog-hero-test/config com o nome de local_env.yml
2. Dentro deste arquivo coloque por exemplo "ORIGIN: 'http://localhost:3000'" para a permissão do CORS
3. Digite 'bundle install' no terminal e em seguida 'rails db:migrate' na pasta dog-hero-test
4. Por último utilize o comando 'rails server' para inicializar a API

# Como inicializar o React

1. Crie um arquivo chamado '.env' na raiz da pasta 'dog-hero-react' com as informações de exemplo:

PORT=3000
REACT_APP_API_URL:http://localhost:5000/api  <= URL que o React irá acessar para pegar a API
REACT_APP_URL:http://localhost:3000 <= URL do próprio React

2. No terminal digite 'npm install' estando na pasta 'dog-hero-react
3. Por último digite 'npm start' e tudo já deve funcionar normalmente

# Passos para o Desenvolvimento

- Primeiro de tudo estudei Ruby através de um curso da Udemy para ter a base miníma para tentar realizar o projeto.
- Visto em que o curso utilizava apenas o modelo MVC eu fui em busca do modelo API na internet.
- Depois de tempos pesquisando comecei a montar meu Rails API only.
- Utilizando scaffolding para o banco de dados criei meu modelo MER.
- Pesquisei intensamente como se faz autenticação com o Bcrypt e JWT, mas fracassei e acabei removendo do código.
- Após desistir de fazer a autenticação por conta do tempo fui fazer o front-end com o React.
- Utilizei do hooks para um código mais legível e do axios para fazer as requests http.
- Por fim finalizei o projeto de forma incompleta, resultado final é uma API que só te ajuda a ter listas de coisas.

# Pontos importantes

1. Eu nunca imaginei que aprender uma linguagem como Ruby do zero fosse tão fácil, apesar de minhas frustrações e fracasso.
2. Rails tem muitos middlewares ao qual requerem tempo para ler e entender, por conta disso estou meio perdido quanto ao fluxo que o Rails percorre na API.
3. Esse projeto foi interessante e desafiador e eu com certeza o faria de novo.
4. Infelizmente não deu tempo de dar deploy no Heroku.
5. Dei meu melhor e aguardo o feedback =).