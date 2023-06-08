# Node.js TypeScript REST API with Express.js

This is a boilerplate project for creating a Node.js REST API using TypeScript and Express.js. It provides a basic structure and setup to help you quickly start building your own API.

## Features

- RESTful API endpoints
- TypeScript for static typing
- Express.js for handling HTTP requests
- Preconfigured with common middleware for error handling, request parsing, etc.
- Basic folder structure for controllers, models, routes, and utilities

## Requirements

Make sure you have the following software installed:

- Node.js (>= 12.x)
- npm or Yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hiromero/typescript-rest
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

## Usage

1. Build the TypeScript code:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The server will start running at `http://localhost:3000`.

3. Use an API testing tool like Postman or cURL to send HTTP requests to the API endpoints.

## Project Structure

The project follows a basic folder structure:

- `src`: Contains the TypeScript source code
  - `controllers`: Controllers for handling API requests and responses
  - `models`: Data models or entities
  - `routes`: API routes and endpoint handlers
  - `utils`: Utility functions or modules
  - `app.ts`: Entry point for the Express.js application
- `dist`: Compiled JavaScript files (generated after running the build command)
- `package.json`: Project configuration and dependencies

Feel free to modify the project structure according to your needs as your project grows.

## Configuration

The project uses a default configuration, but you can customize it by modifying the `.env` file or creating a new one based on `.env.example`. Update the file with your own environment variables, such as database connection details, API keys, or any other required configurations.

## Contributing

Contributions are welcome! If you find any issues or want to contribute new features or improvements, please create a pull request. Ensure your code follows the project's coding conventions and is thoroughly tested.

## License

This project is licensed under the [MIT License](LICENSE).
