import AllTask from "../Others/AllTask"
import CreateTask from "../Others/CreateTask"
import Header from "../Others/Header"

const AdminDashboard = (props) => {

    return (
        <div className="h-screen w-full p-10 ">
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
