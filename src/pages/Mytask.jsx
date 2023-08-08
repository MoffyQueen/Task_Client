import React, { useState, useEffect} from 'react'
import Task from '../components/Task'
import Loading from '../components/Loading'
import TaskHeader from '../components/TaskHeader'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Mytask = () => {
  const {
    isLoading,
    data: { tasks: Tasks },
  } = useFetch("https://taskserver-tkks.onrender.com/api/tasks");
  return (
    <div>
      <TaskHeader />
      {isLoading && <Loading />}
      <div className=" container d-flex justify-content-between align-items-center mt-5">
        <div>
          <h2>My Tasks</h2>
        </div>
        <div>
          <Link to="/create" className="text-decoration-none">
            {" "}
            <p className="add">+ Add New Tasks</p>
          </Link>
        </div>
      </div>
      <div>
        {Tasks &&
          Tasks.map((t) => {
            return <Task key={t._id} {...t} />;
          })}
      </div>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <Link to="/all" className='text-decoration-none'>
        <p className='back'>Back to Top</p>
        </Link>
      </div>
    </div>
  );
}

export default Mytask