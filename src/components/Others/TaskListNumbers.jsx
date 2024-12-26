import PropTypes from "prop-types";
const TaskListNumbers = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='w-[45%] px-9 py-6 rounded-xl bg-blue-400' >
                <h2 className="text-5xl font-semibold">{data.taskCount.newTask}</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className='w-[45%] px-9 py-6 rounded-xl bg-green-400' >
                <h2 className="text-5xl font-semibold">{data.taskCount.completed}</h2>
                <h3 className="text-xl font-medium">Completed Task</h3>
            </div>
            <div className='w-[45%] px-9 py-6 rounded-xl bg-yellow-400' >
                <h2 className="text-5xl font-semibold">{data.taskCount.active}</h2>
                <h3 className="text-xl font-medium">Accepted Task</h3>
            </div>
            <div className='w-[45%] px-9 py-6 rounded-xl bg-red-400' >
                <h2 className="text-5xl font-semibold">{data.taskCount.failed}</h2>
                <h3 className="text-xl font-medium">Failed Task</h3>
            </div>
        </div>
    )
}
TaskListNumbers.propTypes = {
    data: PropTypes.object.isRequired,  // 'data' must be an object
};

export default TaskListNumbers
