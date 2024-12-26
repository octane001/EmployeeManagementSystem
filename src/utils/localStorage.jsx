const employees = [
    {
        "id": 1,
        "email": "e@e.com",
        "password": "123",
        "firstname": "Aarav",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Project Proposal Completion",
                "taskDescription": "Finalize the detailed project proposal, including objectives, scope, and timeline, and submit it to the team lead for approval.",
                "taskDate": "2024-12-24",
                "category": "Project Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Budget Review",
                "taskDescription": "Analyze the project budget for potential cost-saving opportunities and ensure all financial aspects are covered.",
                "taskDate": "2024-12-20",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Feedback Meeting",
                "taskDescription": "Organize and attend a meeting with the client to gather detailed feedback on the current project status.",
                "taskDate": "2024-12-25",
                "category": "Client Relations"
            }
        ],
        "taskCount": { "active": 2, "newTask": 2, "completed": 1, "failed": 0 }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstname": "Ishita",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Marketing Materials Preparation",
                "taskDescription": "Develop visually engaging and informative marketing materials for the upcoming product launch.",
                "taskDate": "2024-12-24",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting Coordination",
                "taskDescription": "Plan, schedule, and conduct a meeting to align the team on project progress and next steps.",
                "taskDate": "2024-12-22",
                "category": "Team Management"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Project Report Writing",
                "taskDescription": "Compile a comprehensive project report, including progress updates, challenges, and next steps.",
                "taskDate": "2024-12-26",
                "category": "Documentation"
            }
        ],
        "taskCount": { "active": 2, "newTask": 2, "completed": 1, "failed": 0 }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstname": "Kabir",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "User Feedback Analysis",
                "taskDescription": "Examine and categorize user feedback to identify key areas for product improvement and enhancement.",
                "taskDate": "2024-12-24",
                "category": "Research"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Website Content Update",
                "taskDescription": "Revise and update website content to improve clarity and user engagement.",
                "taskDate": "2024-12-25",
                "category": "Web Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "App Bug Fixes",
                "taskDescription": "Identify and resolve critical bugs in the mobile application to enhance performance and user experience.",
                "taskDate": "2024-12-22",
                "category": "App Development"
            }
        ],
        "taskCount": { "active": 2, "newTask": 2, "completed": 1, "failed": 0 }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstname": "Ananya",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Code Review Completion",
                "taskDescription": "Thoroughly review code submissions for quality assurance, adherence to standards, and potential improvements.",
                "taskDate": "2024-12-21",
                "category": "Code Review"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "New Feature Development",
                "taskDescription": "Design and implement a new feature in the application to enhance user functionality.",
                "taskDate": "2024-12-24",
                "category": "App Development"
            }
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstname": "Vedika",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "App Interface Design",
                "taskDescription": "Create an intuitive and visually appealing design for the new application interface.",
                "taskDate": "2024-12-24",
                "category": "UI/UX Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Feature Testing",
                "taskDescription": "Perform rigorous testing of the newly implemented app features to ensure functionality and reliability.",
                "taskDate": "2024-12-22",
                "category": "App Testing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Demo Preparation",
                "taskDescription": "Develop and rehearse a professional demo showcasing app features and capabilities for the client.",
                "taskDate": "2024-12-26",
                "category": "Client Relations"
            }
        ],
        "taskCount": { "active": 2, "newTask": 2, "completed": 1, "failed": 0 }
    }
];

const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    "firstname": "Admin"
};


// Function to set employee and admin data in localStorage
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees)); // Stores employees array in localStorage
    localStorage.setItem('admin', JSON.stringify(admin)); // Stores admin object in localStorage
};

// Function to get employee and admin data from localStorage
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')); // Retrieves and parses employees data from localStorage
    const admin = JSON.parse(localStorage.getItem('admin')); // Retrieves and parses admin data from localStorage

    // Returning employees and admin data for use in the application
    return { employees, admin };
};