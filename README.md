# docu-cat

## Instructions
1. Clone the repository
   ```shell
   git clone https://github.com/knight-tara/docu-cat.git
   cd your-repo-name
   ```
2. Install backend dependencies
   ```shell
   cd backend
   go mod download
   ```
3. Install frontend dependencies
   ```shell
   cd ../frontend
   npm install
   ```
4. Set up the database
   ```shell
   # Ensure PostgreSQL is running!
   createdb your_database_name
   ```
5. Create a backend .env file with the below environment variables
   ```shell
   PORT=3000
   DB_URL="host=localhost user=your_username password=your_password dbname=your_database_name port=5432 sslmode=disable"
   ```
6. Create a frontend .env file with the below environment variables
   ```shell
   VITE_BACKEND_URL="http://localhost:3000"
   VITE_USERNAME="your_basic_auth_username"
   VITE_PASSWORD="your_basic_auth_password"
   ```
7. Start the backend server
   ```shell
   go run main.go
   ```
8. Start the frontend
   ```shell
   npm run dev
   ```
