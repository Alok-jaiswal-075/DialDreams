> # Dial Dreams - Mobile Ordering Website

Dial Dreams is a mobile ordering website designed to simplify the process of browsing, ordering, and managing mobile phones for users. It offers features catering to both buyers and administrators, enhancing the overall shopping experience.

## Features

### User Functions

- **User Registration and Authentication:** Users can register securely and log in with their credentials. The platform supports two user types: 'buyer' and 'admin'.
- **Mobile Phone Catalog:** Browse through an extensive collection of mobile phones. View detailed information and apply various filters to find specific devices.
- **Order Placement:** Users can either order a single phone or add multiple phones to the cart for a consolidated checkout experience.
- **User Dashboard:** A personalized dashboard for users to manage personal information, track orders, and monitor order statuses.

### Admin Capabilities

- **Catalog Management:** Admins can add new mobile phones to the catalog, edit existing entries, or remove outdated products.
- **Order Management:** Administrators have access to modify order statuses, ensuring efficient order tracking and processing.

## Accessing the Website

The live version of Dial Dreams is accessible [here](https://dial-dreams.vercel.app/).

## Repository

The complete codebase for Dial Dreams is hosted on [GitHub](https://github.com/Alok-jaiswal-075/DialDreams).

## Local Setup

Follow these steps to set up and run the application on your local machine:

1. **Clone the Repository:**

   - Clone the repository to your local machine:
     ```
     git clone https://github.com/Alok-jaiswal-075/DialDreams.git
     ```
2. **Install Dependencies:**

   - Navigate to the `backend` folder and install backend dependencies using npm:

     ```
     cd backend
     npm install
     ```
   - Similarly, install frontend dependencies:

     ```
     cd frontend
     npm install
     ```
3. **Set Environment Variables:**

   - Inside the `backend` folder, set up environment variables for `DB_URL` (database URL) and `JWT_SECRET` (for token encryption).
4. **Configure Frontend:**

   - Open `vite.config.js` in the frontend folder.
   - Change the target to `http://localhost:3000/`.
   - Remove the following lines from the configuration:
     ```
     changeOrigin: true,
     rewrite: (path) => path.replace(/^\/api/, ''),
     ```
5. **Start the Application:**

   - Initiate both the frontend and backend servers by running:
     ```
     npm start
     ```

## Notes and Recommendations

- Ensure proper configuration of backend environment variables (such as database URL and token encryption) for the smooth functioning of the application.
- Feel free to explore and modify the codebase according to your requirements. Contributions and enhancements are always welcome!
- If you encounter any issues during setup or while using the application, please refer to the GitHub repository's issue section or contribute by reporting the problem.

---

This README aims to provide comprehensive guidance for setting up Dial Dreams locally, understanding its features, and accessing the live version. For further inquiries or assistance, reach out to the repository's maintainers or contributors.
