import React from 'react'
import { Link } from 'react-router-dom'

const Task = ({title, description, tags, _id}) => {
  const handleDelete = async (id) =>{
  try {
    const url = `https://taskserver-tkks.onrender.com/api/tasks/${id}`;
    const res = await fetch(url, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (data.success) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
  }
  return (
    <div className="container">
      <div className="border border-1 task-box">
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="mt-2 ps-2">
            <h4>{tags}</h4>
          </div>
          <div className=" mt-4 pt-2 pe-2 mt-lg-0 d-flex gap-4">
            <Link to={`/update/${_id}`}>
              <button className="edit-btn">Edit</button>
            </Link>

            <button className="del-btn" onClick={() => handleDelete(_id)}>
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
        <div className='liner d-flex justify-content-center align-items-center'>
          <hr className="line" />
        </div>
        <h3 className="fw-bold text-capitalize p-2">{title}</h3>
        <p className='p-2'>{description}</p>
      </div>
   
    </div>
  );
}

export default Task