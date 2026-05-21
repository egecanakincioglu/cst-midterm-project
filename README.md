# 👥 User Directory Dashboard
### Client Side Programming (CSP) Midterm Project

This is my Midterm Project for the Client Side Programming (CSP) course. It is a React web application built using **Vite**. The app fetches user data from a public API, displays them in clean cards, and allows users to add new members to the directory with form validation.

**Student Info:**
* **Name:** Egecan Akincioglu
* **Student ID:** 132492

---

## 🎯 Project Features & Requirements

* **Vite & React 18:** Developed using standard modern tools and wrapped in React's `StrictMode` for better development tracking.
* **API Integration:** Automatically fetches a list of mock users from the `jsonplaceholder` API when the application starts.
* **React Hooks:** Implemented 5 different core hooks to manage state, side-effects, and performance optimization.
* **Form Validation:** The registration form checks for empty names and ensures ratings are strictly between 1 and 5 before submitting.

---

## 🛠️ React Hooks Used & Why

1. `useState`: Used to handle dynamic data like the user list, loading screens, API errors, and form inputs.
2. `useEffect`: Used to trigger the API fetch method safely when the main page loads.
3. `useMemo`: Used to calculate the average rating of all users. It optimizes performance by avoiding recalculations unless the user list changes.
4. `useCallback`: Used to remember (memoize) the `addUser` function so it doesn't get recreated on every single render.
5. `useRef`: Used to automatically focus back on the "Name" input field right after a new user is successfully registered.

---

## 🗺️ Project Structure

* **`App.jsx`**: The main file that holds the global state, fetches the API data, calculates the average rating, and renders the other components.
* **`RegisterUser.jsx`**: A component that handles the registration form, checks if the inputs are valid, and sends the new user data to the parent state.
* **`UserCard.jsx`**: A simple display component that shows individual user details. It uses conditional rendering to show "Top Rated" or "Verified User" badges.

---

## 📦 How to Run Locally

Follow these steps to run the project on your computer:

```bash
# 1. Clone the repository
git clone [https://github.com/egecanakincioglu/csp-midterm-project](https://github.com/egecanakincioglu/csp-midterm-project)

# 2. Go to the project folder
cd csp-midterm-project

# 3. Install the dependencies
npm install

# 4. Start the local development server
npm run dev
```
