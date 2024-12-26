
const FailedTask = ({ data }) => {
    return (
        <div className='h-full flex-shrink-0 w-[400px] p-5 bg-red-400 rounded-xl'>
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm font-semibold">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">{data.taskTitle}</h2>
            <p className="text-base mt-2">
                {data.taskDescription}
            </p>
            <div className='flex-grow'></div>
            <div className='mt-2'>
                <button className='w-full bg-red-600 text-white py-2 rounded hover:bg-red-700'>Failed</button>
            </div>
        </div>
    );
};

export default FailedTask;