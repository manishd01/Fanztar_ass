Mobile Factory Configurator
Project Description
At Mobile Factory Pvt Ltd., we sell configurable mobiles, and this project serves as a backend API for configuring and creating orders based on selected components such as screen type, camera type, port, OS, and body. The API ensures that each order is valid and calculates the total price.

Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/mob_factory.git
cd mob_factory
Install Dependencies:

bash
Copy code
npm install
Run the Server:

bash
Copy code
node app.js
The server will be running at http://localhost:8080.

Directory Structure
app.js: Main entry point for the Express.js server.
controllers/: Contains the order controller (orderController.js) handling order creation logic.
routes/: Defines the order routes (orderRoutes.js) for handling HTTP requests.
tests/: Includes unit tests for the project.
Code Flow
app.js: Entry point for the server. Configures Express, sets up middleware, and defines a default route (/) for testing.

routes/orderRoutes.js: Defines the /orders route, which handles POST requests for creating orders. It utilizes the orderController to process the request.

controllers/orderController.js: Contains the main logic for creating orders (createOrder function). Validates selected components, checks for duplicates, and calculates the total price.

componentsData.js: Defines the data for available components such as screen types, cameras, ports, OS, and body types.

tests/: Includes unit tests for validating the order creation logic.

Making API Requests : requests.rest
GET /:

Endpoint: http://localhost:8080
Description: Default route for testing server connectivity.
POST /orders:

Endpoint: http://localhost:8080/orders
Description: Create a new order by sending a JSON payload with selected components. See the correct and incorrect call examples in the request.rest file.
