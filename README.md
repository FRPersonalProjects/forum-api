<!--- # "Can be an image or gif from the project" -->

<p align="center">
  <img src="../.github/example.png" alt="Forum API">
</p>

# Forum API

A forum API built with NestJS, Prisma, and PostgreSQL. It provides user authentication, question and answer management, and user administration.

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=ts,nestjs,prisma,sqlite)](https://skillicons.dev)

## Getting Started

1. **Install dependencies**: `npm install` or `yarn`
2. **Start containers**: `docker-compose up -d`
3. **Environment variables**: Copy `.env.example` to `.env.local` and configure as needed
4. **Database setup**: `npx prisma migrate dev --name init`
5. **Start development**: `npm run start:dev`

## Contribute

1. **Clone the project**: `git clone <repository-url>`
2. **Create a feature branch**: `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature added. If there are visual changes, add a screenshot and wait for review!

## License

This software is available under the following license:

- [MIT](https://rem.mit-license.org)

## API Endpoints

Below are the main API routes. Click to expand and view their endpoints and descriptions:

<details>
  <summary><strong>User</strong></summary>

| route                         | description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| <kbd>GET /authenticate</kbd>  | Retrieves user info. See [response details](#get-auth-detail) |
| <kbd>POST /authenticate</kbd> | Authenticates user. See [request details](#post-auth-detail)  |
| <kbd>GET /user</kbd>          | Lists all users                                               |

</details>

<details>
  <summary><strong>Questions</strong></summary>

| route                      | description            |
| -------------------------- | ---------------------- |
| <kbd>GET /questions</kbd>  | Lists all questions    |
| <kbd>POST /questions</kbd> | Creates a new question |

</details>

<details>
  <summary><strong>Answers</strong></summary>

| route                    | description          |
| ------------------------ | -------------------- |
| <kbd>GET /answers</kbd>  | Lists all answers    |
| <kbd>POST /answers</kbd> | Creates a new answer |

</details>

<h3 id="get-auth-detail">GET /authenticate</h3>

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
```

## Helpful Documentation

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://github.com/iuricode/padroes-de-commits)
