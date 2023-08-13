# Quick Start Node

Welcome to Quick Start Node, a template repository to kickstart your Node.js projects with a solid foundation and best practices.


## Project Overview

Quick Start Node provides a generic starting point for your Node.js projects, complete with a well-organized project structure, common dependencies, and essential configurations. It's designed to help you save time and ensure consistency across your projects.


## Getting Started

Follow these steps to get your project up and running:

1. Clone this repository to your local machine.
2. Navigate to the cloned directory: `cd quick-start-node`.
3. Install dependencies: `npm install`.
4. Customize the example code or remove it as needed.
5. Start the server: `npm run start`


## Usage

This template covers the basic structure and setup of a Node.js project. You can adapt it for various types of applications:

- Define your routes and controllers in the `src/routes` and `src/controllers` directories.
- Model your data and schema in the `src/models` directory.
- Utilize middleware functions in the `src/middleware` directory.
- Expand your application logic in the `index.js` file.


## Customization

- **Dependencies:** Add or remove dependencies by modifying the [package.json](package.json) file.
- **Configuration:** Adjust configuration settings in the [configs/](configs) directory. Copy all code from [.env.js.example](configs/.env.js.example) file to a new file `.env.js` in same directory and add or change the data. 
- **Scripts:** Customize scripts in the [package.json](package.json) file to match your development workflow.


## Testing and Development

- Start the development server: `npm run dev`. 
- Run unit tests: `npm run test:unit`
- Run integration tests: `npm run test:integration`
- Set up additional testing configurations in the `tests/` directory.


## Tech Stack and Dependencies Used.

- Node Js
- Express Js
- Mongo DB

For other dependencies please check [package.json](package.json) file.


## Project Structure

```plaintext
quick-start-node/
├── .github/
│   └── workflows/
│       └── build-lint-test.yml
├── configs/
│   ├── .env.js
│   └── .env.js.example
├── src/
│   ├── routes/
│   ├── models/
│   └── middlewares/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── setup.js
├── node_modules/
├── index.js
├── .gitignore
├── .eslintrc.json
├── package.json
├── README.md
└── LICENSE
```

## API Endpoints

Routes are created using `Express.js` routes. Some of them are:
- `api/users/`

## HTTP Verbs Used

- **GET** : Use this to fetch data from the DB to client
- **POST**: Use this when creating new record in DB
- **PATCH**: Use this when you partially update any entity
- **DELETE**: Use this when you are performing delete operation

## HTTP Status Codes

Some of the status codes used are: 
- `200` Used when you `get data successfully`.
- `201` Used when your `data created successfully`.
- `400` Used when there is `bad request from the client`.
- `401` Used when user is `not authenticated`.
- `403` Used when user is authenticated but do `not have permissions to access resource`.
- `404` Used when data `not found`.
- `422` Used when `payload key(s) is valid` but the data in the key(s) `are unprocessable`.
- `500` is used for `internal server error`.


## Contribution

Contributions are welcome! If you encounter issues or have improvements to suggest, please create a pull request.

Thank you for considering contributing to this project!

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/94559553?v=4" alt="Aimal Khan" width="150" height="150">
</p>

<p align="center">
  <a href="https://twitter.com/aimalexe">
    <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" width="24" height="24">
  </a>
  <a href="https://www.linkedin.com/in/aimalexe/">
    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" width="24" height="24">
  </a>
  <a href="https://github.com/aimalexe">
    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" width="24" height="24">
  </a>
  <a href="https://stackoverflow.com/users/17441065/aimal-khan">
    <img src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a" alt="Stack Overflow" width="26" height="2">
  </a>
</p>


## License

This project is licensed under the [MIT License](LICENSE).