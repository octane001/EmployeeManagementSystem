import React from 'react'

const AcceptedTask = ({ data }) => {
    console.log("Accepted task:", data)
    return (
        <div className='flex-shrink-0 h-[400px] w-[400px] p-5 bg-blue-400 rounded-xl flex flex-col'>
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm font-semibold">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">{data.taskTitle}</h2>
            <p className="text-base mt-2">{data.taskDescription}</p>

            {/* This will push the buttons to the bottom */}
            <div className='flex-grow'></div>

            <div className='flex justify-between mt-4 '>
                <button className='bg-emerald-600 py-2 px-2 text-sm rounded-md text-white'>Mark as Completed</button>
                <button className='bg-red-600 py-2 px-2 text-sm rounded-md text-white'>Marked as Failed</button>
            </div>
        </div>

    )
}

export default AcceptedTask
