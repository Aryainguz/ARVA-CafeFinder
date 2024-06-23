# Full Stack Cafe Finder Application For ARVA.HEALTH

This project is a full-stack TypeScript application featuring a Next.js frontend and a Node.js/Express.js backend. The backend utilizes Node caching techniques for optimized performance. The application is hosted with the frontend on Vercel and the backend on AWS EC2.


## Technologies Used

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Node.js, Express.js, TypeScript, MongoDB
- **Deployment**: AWS EC2 (Backend), Vercel (Frontend)
- **Caching**: Node Cache

## Backend Setup

### Prerequisites

- AWS account
- Node.js and npm installed
- MongoDB instance
- AWS CLI installed and configured

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/my-fullstack-app.git
    cd my-fullstack-app/backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
PORT=3000
DATABASE_URL=mongodb://your_database_url
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

### Running the Backend

1. **Compile TypeScript**:

    ```bash
    npx tsc
    ```

2. **Start the server**:

    ```bash
    npm start
    ```

### Deploying to AWS EC2

1. **Create an EC2 instance** and SSH into it.

2. **Install Node.js and npm** on the EC2 instance.

3. **Clone the repository** on the EC2 instance and navigate to the backend directory.

4. **Install dependencies** and build the project.

5. **Set up environment variables** on the EC2 instance.

6. **Start the server** using a process manager like `pm2`.

    ```bash
    pm2 start dist/index.js
    ```

## Frontend Setup

### Prerequisites

- Vercel account
- Node.js and npm installed

### Installation

1. **Navigate to the frontend directory**:

    ```bash
    cd my-fullstack-app/frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the `frontend` directory and add the following environment variables:

```env
NEXT_PUBLIC_BACKEND_URL=http://your-backend-url
```

### Running the Frontend

1. **Start the development server**:

    ```bash
    npm run dev
    ```

## Caching Techniques

The backend uses `node-cache` to cache frequent database queries to reduce load and improve performance. 