# App GitHub Repos

This app is made in ReactJs and TypeScript and connects via OAuth to Github and queries user data and repositories.

## Pre-installation

Copy or rename the `example.env` file to `.env` and set the values of the environment variables.

To execute the migration and create the database tables in production, the following command must be executed:

## commands

### `npm run prepare`

prepare husky

### `npm start`

This script starts the application in production mode. It uses Turbo to run the application.

### `npm run dev`

This script starts the application in development mode. It uses Turbo to run the application with the development configuration.

### `npm run build`

This script generates an optimized version of the application ready to be deployed in production. Use Turbo to build the application.

### `npm run lint`

This script runs a linter on the source code to identify possible problems or style errors. Use Turbo to run the linter.

### `npm run commit`

This script runs git commit with commitizen to standardize commits.
