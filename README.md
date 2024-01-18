
# Projeto Food Explorer 

#### Visite o deploy:
https://sval-food-explorer.netlify.app/


## Sobre o projeto
Este projeto representa o desafio final concluído durante o curso oferecido pela Rocketseat, centrado exclusivamente no frontend. O sistema integra funcionalidades de login para usuários comuns e administradores. Os usuários comuns têm a capacidade de visualizar uma lista de pratos, adicionar itens ao carrinho de compras, explorar detalhes específicos de um prato, selecionar a quantidade desejada e pesquisar na lista de pratos disponíveis.

Os administradores, por sua vez, têm permissões ampliadas, permitindo não apenas a visualização, mas também a criação, edição e exclusão de pratos. Esta funcionalidade proporciona uma gestão completa do cardápio.


## Layout Web
![project-preview](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWtlbXpranQzamE0aWhnc2hrZmdwZnhrdHhnMjk0Z2ltaGEyYWtmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BaIVY3IjRQ95hgFWXE/giphy.gif)


### Layout Mobile
![Mobile 1](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGVta2wzemNmaTdnY3l4azdoMHNjdGp2a2FpMmdoZWhxdGZseWM2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mfy6ENsQHPJQylGYys/giphy.gif)
## Funcionalidades

#### Principais recursos para usuários comuns:

- Explorar e adicionar pratos ao carrinho de compras.
- Visualizar detalhes abrangentes sobre um prato específico.
- Selecionar a quantidade desejada de um item.
- Realizar pesquisas eficientes na lista de pratos disponíveis.


#### Funcionalidades exclusivas para administradores:

- Gerenciar completamente o cardápio, incluindo criação, edição e exclusão de pratos.
- Visualizar uma lista completa de pratos disponíveis.


## Tecnologia utilizada

#### Front-end
- React
- Styled Components
- Toast

## Implantação em produção
- Front end web: Netlify


## Como executar o projeto

```bash
# clonar repositório
   git clone git@github.com:balvesD3v/food-explorer-frontend.git

# instale as dependencias 
    npm install 

# inicie o projeto
    npm run dev
```

## Alterar função de usuário
- Você pode acessar a aplicação como admin, entrando com email "admin" e senha "1"
- Ou pode criar um novo usuário e mudar alterar sua role no banco de dados

### Siga os passos abaixo para alterar a role

```bash
# clonar repositório
  git clone git@github.com:balvesD3v/food-explorer.git

# instale as dependencias 
    npm install 

# Usando o beekeeper conecte-se com a database
    src/database/database.db

# Caso o banco de dados não exista
    npm run migrate
```
## Autor

- [@balvesD3v](https://github.com/balvesD3v)
- [@paulobarbosacode](https://www.linkedin.com/in/paulobarbosacode/)

