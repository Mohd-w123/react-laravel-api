## Project Overview
This project is a web application built using React on the frontend and Laravel on the backend. It aims to provide a user management system where users can be created, viewed, updated, and deleted.

## Features

- **User Management:** Create, view, update, and delete users.
- **Role Management:** Assign roles to users (e.g., Administrator, Editor, Author, Subscriber).
- **Responsive Design:** The application is designed to be responsive and accessible across different devices and screen sizes


## Technologies Used

1. **Frontend:**
- React: JavaScript library for building user interfaces.
- React Router: For client-side routing within the application.
- Axios: HTTP client for making API requests to the backend.
- Bootstrap: Frontend framework for styling and layout.

2. **Backend:**
- Laravel: PHP framework for building web applications.
- MySQL: Relational database management system used for storing user data.

## .env file configuration for laravel

```bash
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:y/DLegWq6/2FO6dZsIdDFkbrsRCIj8n+fJ3VY0MYx0w=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=8889
DB_DATABASE='backend'
DB_USERNAME='root'
DB_PASSWORD='root'

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```


# Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

```bash 
git clone https://github.com/Mohd-w123/react-laravel-api.git
```

2. Navigate to the project directory:

```bash
cd your-project
```

3. Install dependencies for frontend:

```bash
npm install
``` 


4. Install dependencies for backend:

```bash
cd backend
composer install
```

4. Set up the database:

Create a MySQL database and configure the database credentials in the .env file of the Laravel backend.
Run migrations to create database tables:

```bash
php artisan migrate
```

5. Start the backend server:

```bash
php artisan serve
```

6. Start the frontend server:

```bash
npm start
```

Access the application in your browser at http://localhost:3000.

6. Start the backend server:
```bash
php artisan serve
```


Access the application in your browser at http://localhost:8000.


## Project Output :

![alt text](https://raw.githubusercontent.com/Mohd-w123/react-laravel-api/main/home.png)

![alt text](https://raw.githubusercontent.com/Mohd-w123/react-laravel-api/main/create.png)

![alt text](https://raw.githubusercontent.com/Mohd-w123/react-laravel-api/main/edit.png)
