# Russian Proverbs API

This project provides an API to retrieve russian proverbs with their translations and meanings. The API is built using NestJS and connects to a PostgreSQL database managed by Docker Compose for local deployment.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 22 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

## Setup Instructions

Follow these steps to set up the local environment for the Proverbs API.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/proverbs-api.git
cd proverbs-api
```
### 2. Install Dependencies

Install the necessary dependencies using npm or Yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a .env file in the root of the project to store your environment variables. Update the .env file with your local database credentials and other necessary configurations:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=admin
DATABASE_PASSWORD=password
DATABASE_NAME=russian_proverbs
```

### 4. Start the Database using Docker Compose

Ensure Docker is running on your machine. Start the PostgreSQL database using Docker Compose:
```bash
docker-compose up -d
```
Or navigate to jad-russian-proverb-api/docker/docker-compose.yml and start it via your IDE.

### 5. Start the Application

Start the NestJS application in development mode:
```bash
npm run start:dev
# or
yarn start:dev
```
The API will be available at http://localhost:3000.

### 6. Access the API
You can access the API endpoints using a tool like Postman, Insomnia or by navigating to the Swagger UI at http://localhost:3000/api.