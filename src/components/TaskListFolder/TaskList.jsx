import PropTypes from "prop-types";
import AcceptedTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
const TaskList = ({ data }) => {
    return (
        // height can be changed
        <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap' >

            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptedTask key={idx} data={elem}/>
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
            })}
        </div>
    )
}
TaskList.propTypes = {
    data: PropTypes.object.isRequired,  // 'data' must be an object
};
export default TaskList
