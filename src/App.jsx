import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login"; // Importing the Login component
import { AuthContext } from "./context/AuthProvider"; // Importing the authentication context
import AdminDashboard from "./components/Dashboard/AdminDashboard"; // Admin dashboard component
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"; // Employee dashboard component


const App = () => {
  // State to store the role of the logged-in user (admin or employee)
  const [user, setUser] = useState(null);

  // State to store additional data of the logged-in user (if employee)
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Accessing the authentication context for employee data
  const [userData, setUserData] = useContext(AuthContext);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData.role); // Set the user's role (admin/employee)
      setLoggedInUserData(userData.data); // Set additional user data if applicable
    }
  }, []);

  // Handles login logic for both admin and employees
  const handleLogin = (email, password) => {
    // Check if the credentials match the admin user
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    // Check if the credentials match any employee
    else if (userData?.employees && Array.isArray(userData.employees)) {
      const employee = userData.employees.find(
        (emp) => emp.email === email && emp.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser(employeeData.role); // Set role as employee
        setLoggedInUserData(employee); // Set employee-specific data
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData)); // Save employee data to localStorage
      } else {
        alert("Invalid Credentials"); // Alert if credentials don't match any employee
      }
    } else {
      alert("Invalid Credentials"); // Alert if employee data is unavailable or invalid
    }
  };


  return (
    <>
      {/* Render the Login component if no user is logged in */}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) :
        // Render the AdminDashboard if the logged-in user is an admin
        user === "admin" ? (
          <AdminDashboard changeUser={setUser} />
        ) : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  );
};

export default App; // Export the App component as the default export
