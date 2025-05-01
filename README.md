
# URL Shortener Service

A simple URL shortener built with Express.js and MongoDB. This service allows users to shorten URLs, view recently shortened URLs, and redirect to the original URL using a shortened path.

## Features
- **Create Shortened URL**: Create a shortened version of a long URL.
- **Redirect to Original URL**: Automatically redirect to the original URL when visiting a shortened link.
- **View Recently Shortened URLs**: View the 5 most recently shortened URLs.

## API Endpoints

### 1. Test Route
**GET** `/`

Test endpoint to check if the server is up and running.

**Example Request:**
```http
GET http://localhost:8001/
```

### 2. Create Shortened URL
**POST** `/v1/api/shorten`

Create a shortened URL from a long URL.

**Request Body:**
```json
{
  "originalUrl": "https://www.bibash.info.np"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:8001/abc123"
}
```

**Example Request:**
```http
POST http://localhost:8001/v1/api/shorten
Content-Type: application/json

{
  "originalUrl": "https://www.bibash.info.np"
}
```

### 3. View Recently Shortened URLs
**GET** `/v1/api/recent-shortened`

Fetch the 5 most recently shortened URLs.

**Example Request:**
```http
GET http://localhost:8001/v1/api/recent-shortened
```

### 4. Redirect to Original URL
**GET** `/{shortId}`

Redirect to the original URL using the shortened ID.

**Example Request:**
```http
GET http://localhost:8001/WoH-hErAs
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- MongoDB (either local or a cloud instance like MongoDB Atlas)

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and define the following environment variables:

```env
PORT=8001
MONGO_URI=your_mongodb_connection_string
```

### Run the Server

Start the server with the following command:

```bash
npm start
```

The application will be available at `http://localhost:8001`.

## Project Structure

- **src/**: Main source code folder for the Express.js app.
  - **config/**: Contains database configuration (`db.config.js`).
  - **controllers/**: Contains the business logic for URL shortening and redirection (`url.controllers.js`).
  - **models/**: Contains the Mongoose schema for storing shortened URLs (`url.models.js`).
  - **routes/**: Contains the Express routes for the URL shortener (`url.routes.js`).
  - **index.js**: Main server entry point.
