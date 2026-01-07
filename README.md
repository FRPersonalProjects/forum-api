<!--- # "Can be an image or gif from the project"

<p align="center">
  <img src="../.github/example.png" alt="Forum API">
</p>-->

# Forum API

The goal of this project is to practice and deepen backend development concepts such as authentication, CRUD operations, data validation, and entity relationships through an API for user management and forum resources (questions and answers).

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=ts,nestjs,prisma,sqlite)](https://skillicons.dev)

## Getting Started

1. **Install dependencies**: `npm install`
<!---2. **Start containers**: `docker-compose up -d`-->
2. **Environment variables**: Copy `.env.example` to `.env.local` and configure as needed
3. **Database setup**: `npx prisma migrate dev --name init`
4. **Start development**: `npm run start:dev`

## Contribute

1. **Clone the project**: `git clone <https://github.com/FRPersonalProjects/forum-api.git>`
2. **Create a feature branch**: `git checkout -b feature/NAME`
3. **Follow commit patterns**
4. **Open a Pull Request explaining the problem solved or feature added. If there are visual changes, add a screenshot and wait for review!**

<!---## License

This software is available under the following license:

- [MIT](https://rem.mit-license.org)-->

## API Endpoints

Below are the API routes. Click to expand and view their endpoints and descriptions:

<details>
  <summary><strong>User</strong></summary>

| route                       | description                       |
| --------------------------- | --------------------------------- |
| <kbd>POST /user</kbd>       | Create a new user                 |
| <kbd>GET /user/:id</kbd>    | Get user by ID (auth required)    |
| <kbd>PATCH /user/:id</kbd>  | Update user by ID (auth required) |
| <kbd>DELETE /user/:id</kbd> | Delete user by ID (auth required) |

</details>

<details>
  <summary><strong>Auth</strong></summary>

| route                        | description |
| ---------------------------- | ----------- |
| <kbd>POST /auth/signin</kbd> | User login  |

</details>

<details>
  <summary><strong>Questions</strong></summary>

| route                            | description                           |
| -------------------------------- | ------------------------------------- |
| <kbd>POST /questions</kbd>       | Create a new question (auth required) |
| <kbd>GET /questions</kbd>        | List all questions (auth required)    |
| <kbd>GET /questions/:id</kbd>    | Get question by ID (auth required)    |
| <kbd>PATCH /questions/:id</kbd>  | Update question by ID (auth required) |
| <kbd>DELETE /questions/:id</kbd> | Delete question by ID (auth required) |

</details>

<details>
  <summary><strong>Answers</strong></summary>

| route                                | description                                  |
| ------------------------------------ | -------------------------------------------- |
| <kbd>POST /answers/:questionId</kbd> | Create answer for a question (auth required) |
| <kbd>GET /answers</kbd>              | List all answers (auth required)             |
| <kbd>GET /answers/:id</kbd>          | Get answer by ID (auth required)             |
| <kbd>PATCH /answers/:id</kbd>        | Update answer by ID (auth required)          |
| <kbd>DELETE /answers/:id</kbd>       | Delete answer by ID (auth required)          |

</details>

<!---<h3 id="get-auth-detail">GET /authenticate</h3>

**RESPONSE**

```json
{
  ...
}
```

<h3 id="post-auth-detail">POST /authenticate</h3>

**REQUEST**

```json
{
  ...
}
```

**RESPONSE**

```json
{
  ...
}
```-->

## Helpful Documentation

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://github.com/iuricode/padroes-de-commits)
