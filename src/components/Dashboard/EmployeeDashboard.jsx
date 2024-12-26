// Importing required components and PropTypes for type-checking
import Header from "../Others/Header"
import TaskListNumbers from "../Others/TaskListNumbers"
import TaskList from "../TaskListFolder/TaskList"
import PropTypes from "prop-types";

// EmployeeDashboard component receives 'data' as a prop and displays the dashboard
const EmployeeDashboard = (props) => {

    return (
        // Main container for the dashboard with padding and background color
        <div className="p-10 bg-[#1c1c1c] h-screen ">
            {/* Passing the 'data' prop to Header component */}
            <Header changeUser={props.changeUser} data={props.data.firstname} />

            {/* Passing the 'data' prop to TaskListNumbers component for displaying task statistics */}
            <TaskListNumbers data={props.data} />

            {/* Passing the 'data' prop to TaskList component for displaying task list */}
            <TaskList data={props.data} />
        </div>
    )
}

// Type-checking 'data' prop to ensure it is an object
EmployeeDashboard.propTypes = {
    data: PropTypes.object.isRequired,  // 'data' must be an object
};

export default EmployeeDashboard;  // Exporting the component for use in other parts of the app
