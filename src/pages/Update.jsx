import React, { useEffect, useState} from 'react'
import HeaderTwo from '../components/HeaderTwo'
import { useParams } from 'react-router-dom';
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const redirect = useNavigate();

  const { taskId} = useParams()

  const url = `https://taskserver-tkks.onrender.com/api/tasks/${taskId}`;
  const getTask = async () =>{
    const res = await fetch(url)
    const {task} = await res.json()
    setIsLoading(false)
    setTitle(task.title);
    setDescription(task.description)
    setTags(task.tags);
  }

  useEffect(() => {
    getTask();
  }, [taskId]);

  const handleUpdate = async (e) =>{
    e.preventDefault()
    try {
      const res = await fetch(url, {
       method: 'PATCH',
       headers: {
        "Content-Type":"application/json"
       },
       body: JSON.stringify({title, description, tags})
      })
      const data = await res.json()
      if (data.success){
        toast.success('Goal edited successfully')
        redirect('/all')
      } else {
        toast.error("error occured while updating, try again")
      }
    } catch (error) {
      console.log(error);
    }
  } 
  return (
    <div>
      <HeaderTwo />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <h3>Edit task</h3>
          <form onSubmit={handleUpdate}>
            <ToastContainer />
            <div>
              <label className="title">
                <legend className="Task-header">Task Title:</legend>
              </label>
              <fieldset>
                <input
                  type="text"
                  className="title-input ps-2"
                  placeholder="E.g Project Defense, Assignment ..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </fieldset>
            </div>

            <div>
              <label className="title">
                <legend className="Task-header ">Description:</legend>
              </label>
              <fieldset>
                <textarea
                  className="area ps-2"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </fieldset>
            </div>

            <div>
              <label>
                <legend className="Task-header">Tags:</legend>
              </label>
              <fieldset>
                <input
                  type="text"
                  className="title-input ps-2"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </fieldset>
            </div>

            <div>
              <button className="form-done mt-5">Done</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update