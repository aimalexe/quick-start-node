# Quick Start Node

Welcome to Quick Start Node, a template repository to kickstart your Node.js projects with a solid foundation and best practices.


## Project Overview

Quick Start Node provides a generic starting point for your Node.js projects, complete with a well-organized project structure, common dependencies, and essential configurations. It's designed to help you save time and ensure consistency across your projects.


## Getting Started

Follow these steps to get your project up and running:

1. Clone this repository to your local machine.
2. Navigate to the cloned directory: `cd quick-start-node`.
3. Install dependencies: `npm install`.
4. Customize the [env](/env/) code or change it as needed. Copy [example.json](/env/example.json) and paste the content in three files: development.json, production.json and test.json: `cat ./env/example.json | tee ./env/development.json ./env/production.json ./env/test.json > /dev/null`. 
5. Start the server: `npm run start`


## Usage

This template covers the basic structure and setup of a Node.js project. You can adapt it for various types of applications:

- Define your routes and controllers in the `src/routes` and `src/controllers` directories.
- Model your data and schema in the `src/models` directory.
- Utilize middleware functions in the `src/middleware` directory.
- Expand your application logic in the `index.js` file.


## Customization

- **Dependencies:** Add or remove dependencies by modifying the [package.json](package.json) file.
- **Configuration:** Adjust configuration settings in the [env/](env) directory. Copy all code from [example.json](env/example.json) file to new files `development.json`, `test.json` and `production.json` in same directory and add or change the data. You can run this in in your package root also `cat ./env/example.json | tee ./env/development.json ./env/production.json ./env/test.json > /dev/null`.
- **Scripts:** Customize scripts in the [package.json](package.json) file to match your development workflow.


## Testing and Development

- Start the development server: `npm run dev`. 
- Run unit tests: `npm run test:unit`
- Run integration tests: `npm run test:integration`
- Set up additional testing configurations in the [tests](tests/) directory.


## Tech Stack and Dependencies Used.

- Node Js
- Express Js
- Mongo DB

For other dependencies please check [package.json](package.json) file.


## Project Structure

You can use these commands to print your project tress:
- **CMD**: `tree /A /F | findstr /V /C:"node_modules"`

- **POWERSHELL**: `Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*\node_modules\*" } | ForEach-Object { $_.FullName }`

- **UBUNTU (WSL)**: `tree --prune -I 'node_modules' --dirsfirst` or `tree -a -I 'node_modules|.git' --dirsfirst`

```plaintext
quick-start-node/
├── .github
│   └── workflows
│       └── build-lint-test.yml
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── env
│   ├── development.json
│   ├── example.json
│   ├── production.json
│   └── test.json
├── logs
│   ├── error.log
│   ├── uncaught-exceptions.log
│   └── unhandled-rejections.log
├── public
│   ├── data
│   │   ├── http-status-codes.js
│   │   └── programming-error-codes.js
│   ├── images
│   │   ├── avatar1.png
│   │   └── avatar2.png
│   └── styles
│       └── index.min.css
├── src
│   ├── assets
│   │   └── scss
│   │       ├── _about-us.scss
│   │       ├── _contact-us-email-template.scss
│   │       ├── _contact-us.scss
│   │       ├── _footer.scss
│   │       ├── _header.scss
│   │       ├── _home.scss
│   │       ├── _page-not-found.scss
│   │       ├── _variables.scss
│   │       └── index.scss
│   ├── configurations
│   │   ├── index.js
│   │   ├── logger.js
│   │   ├── mongo-atlas.js
│   │   ├── nodemailer.js
│   │   └── set-environment-config.js
│   ├── controllers
│   │   ├── auth-controller.js
│   │   ├── index.js
│   │   ├── pages-controller.js
│   │   ├── reset-password-controller.js
│   │   └── user-controller.js
│   ├── middlewares
│   │   ├── async-error-handler.js
│   │   ├── index.js
│   │   ├── is-authenticated-middleware.js
│   │   ├── is-valid-object-id-middleware.js
│   │   ├── log-request-info-middleware.js
│   │   ├── uncaught-errors-middleware.js
│   │   ├── use-middlewares.js
│   │   └── validate-and-sanitize-request-middleware.js
│   ├── models
│   │   ├── Temporary-Token.js
│   │   ├── User.js
│   │   └── index.js
│   ├── routes
│   │   ├── auth-route.js
│   │   ├── index.js
│   │   ├── pages-route.js
│   │   ├── reset-password-route.js
│   │   └── user-route.js
│   ├── utilities
│   │   ├── format-error.js
│   │   ├── format-response.js
│   │   ├── get-project-name.js
│   │   ├── index.js
│   │   └── string-utilities.js
│   ├── validators
│   │   ├── auth-validators.js
│   │   ├── index.js
│   │   ├── pages-validators.js
│   │   ├── reuseable-validators.js
│   │   └── user-validators.js
│   └── views
│       ├── components
│       │   ├── footer-mixin.pug
│       │   └── header-mixin.pug
│       ├── emails
│       │   └── email-template.pug
│       ├── about-us.pug
│       ├── contact-us.pug
│       ├── home.pug
│       └── page-not-found.pug
├── tests
│   ├── integration
│   │   └── routes
│   │       └── user.test.js
│   ├── unit
│   │   ├── configs
│   │   │   └── mongo-atlas.test.js
│   │   ├── middlewares
│   │   │   └── is-authenticated.test.js
│   │   └── models
│   │       └── User.test.js
│   └── setup.js
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── index.js
├── package-lock.json
└── package.json
```

## Conventions

### Naming

- **Variables**: Utilize camelCase when naming variables.
- **Files**: 
  - Apply kebab-case for file names (e.g., `is-authenticated-user.js`).
  - In cases of repetitive file names, consider appending the folder name to improve clarity and organization.
    - For example, if "user" appears in multiple places, name files as `user-route.js`, `user-controller.js`, `user-middleware.js`.
- **Classes**: 
  - Opt for PascalCase when naming classes (e.g., `User`).
  - The files containing classes should follow PascalCase + kebab-case (e.g. `User-Class.js`).

### File Organization

The project employs a meticulous folder structure to uphold a neat and methodical codebase:

- `/public`: Serves as the repository for static files.
- `/env`: Hosts environment and confidential files, catering to various environments. Files such as `development.json`, `test.json`, and `production.json` are ignored; however, an illustrative `example.json` is included.
- `/tests`: Houses test files, further categorized into:
  - `/unit`: Reflects the `/src` structure, housing unit tests.
  - `/integration`: Resonates with the `/src` layout and contains integration tests.
- `/src`: The primary source folder, home to JavaScript files and a spectrum of subfolders encompassing distinct components:
  - `/assets`: Designated for assets, including SCSS and more.
  - `/configurations`: Houses assorted settings like MongoDB, logger, and nodemailer.
  - `/controllers`: Encompasses code pertinent to route handlers.
  - `/middlewares`: Hosts middleware modules catering to application logic.
  - `/models`: Encapsulates schemas and methods tailored for database models.
  - `/routes`: Holds handler functions for diverse API endpoints.
  - `/utilities`: Features utility functions and classes.
  - `/validators`: Contains validation logic dedicated to user data.
  - `/views`: Nurtures the creation of views and components via the Pug templating engine.


## API Endpoints

Routes are created using `Express.js` routes. Some of them are:
- `/api/`
- `/api/about-us`
- `/api/contact-us`
- `/api/users/`
- `/api/users/me`
- `/api/users/:userId`
- `/api/auth/login`
- `/api/auth/logout`
- `/api/reset-password`

## HTTP Verbs Used

- **GET** : Use this to fetch data from the DB to client
- **POST**: Use this when creating new record in DB
- **PATCH**: Use this when you partially update any entity
- **DELETE**: Use this when you are performing delete operation

## HTTP Status Codes

Some of the status codes used are [see all here in a file](/public/data/http-status-codes.js):
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