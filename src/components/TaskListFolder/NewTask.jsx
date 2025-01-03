

const NewTask = ({ data }) => {
  console.log('New Task: ', data)
  return (
    <div className='flex-shrink-0 h-[400px] w-[400px] p-5 bg-blue-400 rounded-xl flex flex-col'>
  <div className="flex justify-between items-center">
    <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
    <h4 className="text-sm font-semibold">{data.taskDate}</h4>
  </div>
  <h2 className="mt-5 text-3xl font-semibold">{data.taskTitle}</h2>
  <p className="text-base mt-2">{data.taskDescription}</p>

  {/* Spacer to push button to the bottom */}
  <div className='flex-grow'></div>

  <div className='mt-4'>
    <button className='w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300'>
      Accept Task
    </button>
  </div>
</div>

  )
}

export default NewTask
