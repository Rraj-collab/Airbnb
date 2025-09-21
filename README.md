# 🏡 Airbnb Clone

This project is a clone of the popular home-sharing platform **Airbnb**.  
It allows users to browse, book, and manage home listings.  
The application is built with a backend that handles property and user data, including functionalities for adding homes, viewing details, and managing a list of favorite properties.

---

## ✨ Features
This Airbnb clone includes the following features for managing and displaying property listings:

- **View Property Listings**: Browse a comprehensive list of available homes.
- **Property Details**: See detailed information such as price, location, and a full description for each property.
- **Add to Favorites**: Save properties to a personalized **Favorites** list for easy access later.
- **Host Functionalities**: Authenticated hosts can:
  - Add new properties with details like name, price, location, and photos.
  - Edit existing property information.
  - Remove properties from the listings.

---

## 🛠 Technology Stack
- **Backend**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/) for server-side logic.
- **Database**: [MongoDB](https://www.mongodb.com/) with the official Node.js driver for data persistence.
- **Templating Engine**: [EJS](https://ejs.co/) for dynamic HTML generation.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for modern, responsive design.

---

## 🚀 Usage
Once the server is running, you can interact with the application through these main sections:

- **Homepage**: Displays all home listings.
- **Homes List**: A dedicated page that lists all available properties for rent.
- **Favorites**: View all the properties you have marked as favorites.
---

## 🔗 API Endpoints
The application exposes a set of RESTful API endpoints to manage properties and user interactions.

### 🏠 Store Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET**  | `/`                       | Retrieves the main index page with all homes. |
| **GET**  | `/homes`                  | Fetches a list of all available homes. |
| **GET**  | `/homes/:homeId`          | Displays detailed information for a specific home. |
| **GET**  | `/favourites`             | Shows the list of homes the user has favorited. |
| **POST** | `/favourites`             | Adds a home to the user's favorites. |
| **POST** | `/favourites/delete/:homeId` | Removes a home from the user's favorites. |

### 👩‍💼 Host Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET**  | `/add-home`               | Renders the form to add a new home. |
| **POST** | `/add-home`               | Submits the data for a new home listing. |
| **GET**  | `/host-home-list`         | Displays the list of homes managed by the host. |
| **GET**  | `/edit-home/:homeId`      | Renders the form to edit an existing home's details. |
| **POST** | `/edit-home`              | Submits the updated information for a home. |
| **POST** | `/delete-home/:homeId`    | Deletes a home listing. |
