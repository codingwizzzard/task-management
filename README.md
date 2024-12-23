# Task Management System

## 📝 Overview
The Task Management System is a user-friendly web application designed to help you manage your tasks efficiently. It provides tools to view, create, organize, and filter tasks, ensuring optimal productivity.

## 🌟 Features
- 🔒 **User Authentication**: Secure login and logout functionality.
- ✅ **Task Management**:
  - Create new tasks with detailed descriptions.
  - View assigned tasks.
  - Filter tasks in ascending or descending order and also with title or due date.
  - Edit tasks by name or date.

## 💻 Technologies Used
- **Frontend**:
  - ⚛️ React.js
  - 🎨 Bootstrap 5
- **Routing**:
  - 🛣️ React Router DOM
- **State Management**:
  - 📊 React hooks
- **Backend**:
  - 🟢 Node.js
  - 🍃 MongoDB

## 🛠️ Installation

### Prerequisites
- 🛠️ Node.js (v14 or above)
- 📦 npm or yarn
- 🗄️ MongoDB Database

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/codingwizzzard/task-management.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-management
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Set up environment variables:
   Create a `.env` file in the backend folder and add the following:
   ```env
   MONGO_URL=<your-mongodb-connection-string>
   PORT=5000
   JWT_SECRET=<your-jwt-secret>
   SMTP_EMAIL=<your-smtp-email>
   SMTP_PASSWORD=<your-smtp-password>
   ```
   and also create a `.env` file in your frontend folder and add the following :
   ```
   REACT_APP_API_URL=<your-localhost-url-with-port> // http://localhost:(PORT-which-is-in-backend-env-folder)
   ```
6. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

The application will be available at `http://localhost:3000`.


## 🚀 Usage
1. **🔑 Sign-in**:
  - You can make your own account to login and access all the functionalities 
2. **🔑 Login**:
   - Use your credentials to log in to the system.
3. **📋 View Tasks**:
   - Navigate to the "My Tasks" section to view assigned tasks.
4. **➕ Add Tasks**:
   - Use the "Add New Tasks" section to create new tasks with details.
5. **🔃 Filter Tasks**:
   - Sort tasks in ascending or descending order by name or date.
6. **✏️ Modify Tasks**:
   - Edit existing tasks by updating their all data.
7. **🚪 Logout**:
   - Use the logout button in the sidebar to securely exit the system.


## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
