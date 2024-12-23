import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Aside from "./Aside";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    category: "",
    status: "Pending",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    setTaskData((prevData) => ({
      ...prevData,
      dueDate: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make API call to backend
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/tasks`, taskData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/view-task");

      // Notify success
      toast.success("Task created successfully!");
      setTaskData({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
        category: "",
        status: "Pending",
      });
    } catch (error) {
      console.error("Error:", error.response || error.message);
      toast.error(error.response?.data?.message || "Failed to create task.");
    }
  };

  return (
    <>
      <div className="main-page-wrapper">
        <Aside />
        <div className="dashboard-body" style={{ padding: '30px' }}>
          <div className="position-relative">
            {/* ************************ Header **************************** */}
            {/* <header className="dashboard-header">
              <div className="d-flex align-items-center justify-content-start">
                <h4 className="m0 d-none d-lg-block">Create Task</h4>
                
              </div>
            </header> */}
            {/* End Header */}
            <h2 className="main-title d-block d-lg-none">Add New Property</h2>
            <div className="card-box border-20" style={{
              backgroundImage: 'url(https://zorik-wp.egenstheme.com/wp-content/themes/zorik/assets/image/standard/Background-8.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100%',
              height: 'auto',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <form onSubmit={handleSubmit} style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor>Task Title*</label>
                  <input type="text" name="title" value={taskData.title} onChange={handleChange} placeholder="Enter Task Title" required />
                </div>
                <div className="dash-input-wrapper mb-30" >
                  <label htmlFor>Description*</label>
                  <textarea className="size-lg" value={taskData.description} onChange={handleChange} name="description" placeholder="Event Description" required />
                </div>

                <div className="row align-items-end">
                  <div className="col-md-3">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor>Due Date*</label>
                      <input
                        type="date"
                        name="dueDate"
                        value={taskData.dueDate}
                        onChange={handleDateChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dash-input-wrapper mb-30">
                      <label >Event Type*</label>
                      <select className="nice-select w-100" id="priority" name="priority" value={taskData.priority} onChange={handleChange} required>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor>Category*</label>
                      <input type="text" id="category" name="category" value={taskData.category} onChange={handleChange} placeholder="Enter Task Category" required />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dash-input-wrapper mb-30">
                      <label >Event Type*</label>
                      <select className="nice-select w-100" id="status" name="status" value={taskData.status} onChange={handleChange} required>
                        <option value="Pending">Pending</option>
                        {/* <option value="In Progress">In Progress</option> */}
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 h-100 mb-auto mt-auto align-items-top" style={{ textAlign: 'center' }}>
                    <div className="button-group d-inline-flex align-items-center mb-auto">
                      <button type='submit' className="dash-btn-two tran3s me-3 bg-primary">Add Task</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button className="scroll-top">
          <i className="bi bi-arrow-up-short" />
        </button>
      </div>
    </>
  )
}

export default CreateEvent  