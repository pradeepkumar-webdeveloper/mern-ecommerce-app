🛒 MERN Ecommerce App

A full-stack ecommerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse products, add to cart, and complete purchases with a seamless UI experience.

Show Image Show Image Show Image


🚀 Live Demo


Coming Soon




📸 Features


🔐 User Authentication (Register / Login / Logout) with JWT
🛍️ Product listing with search and filter
🛒 Add to cart, update quantity, remove items
💳 Order placement and order history
👤 User profile management
🔒 Protected routes for authenticated users
📱 Fully responsive UI (Mobile + Desktop)
🔧 Admin panel to manage products and orders



🧰 Tech Stack

LayerTechnologyFrontendReact.js, Redux, Bootstrap, CSS3BackendNode.js, Express.js, REST APIDatabaseMongoDB, MongooseAuthJWT (JSON Web Token)ToolsGit, GitHub, Postman, VS Code


📁 Project Structure

mern-ecommerce-app/
│
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page-level components
│   │   ├── redux/           # State management
│   │   └── App.js
│
├── server/                  # Node.js Backend
│   ├── controllers/         # Route handlers
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Auth middleware
│   └── server.js
│
└── README.md


⚙️ Installation & Setup

bash# Clone the repository
git clone https://github.com/pradeepFD/mern-ecommerce-app.git

# Go into the project directory
cd mern-ecommerce-app

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Create .env file in server folder
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

# Run backend
cd server
npm run dev

# Run frontend
cd client
npm start


🔑 API Endpoints

MethodEndpointDescriptionPOST/api/auth/registerRegister new userPOST/api/auth/loginLogin userGET/api/productsGet all productsGET/api/products/:idGet single productPOST/api/ordersPlace an orderGET/api/orders/myordersGet user orders


👨‍💻 Author

Pradeep Kumar S


GitHub: @pradeepFD
LinkedIn: linkedin.com/in/pradeepkumars
Email: pradeep8754491662@gmail.com



📄 License

This project is licensed under the MIT License.
