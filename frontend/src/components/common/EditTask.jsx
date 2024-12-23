import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Aside from "./Aside";

const EditTask = () => {
    const { id } = useParams(); // Task ID from URL
    console.log("Task ID from URL:", id);
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
        category: "",
        status: "Pending",
    });

    // Fetch the task details on component mount
    useEffect(() => {
        fetchTaskDetails();
    }, []);

    const fetchTaskDetails = async () => {
        try {
          console.log("Fetching task details for ID:", id); // Log the ID
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          console.log("Task details fetched successfully:", response.data);
          console.log(response.data)
          setTaskData(response.data);
        } catch (error) {
          console.error("Error fetching task:", error.response || error.message);
          const errorMessage = error.response?.data?.message || "Failed to fetch task details.";
          toast.error(errorMessage);
        }
      };
      
    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Format the data before sending
        const formattedData = {
            ...taskData,
            dueDate: taskData.dueDate?.slice(0, 10), // Ensure date is formatted correctly
        };

        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, formattedData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            toast.success("Task updated successfully!");
            navigate("/view-task");
        } catch (error) {
            console.error("Error updating task:", error.response || error.message);
            toast.error(error.response?.data?.message || "Failed to update task.");
        }
    };

    return (
        <div className="main-page-wrapper">
            <Aside/>

    <div className="dashboard-body">
        <div className="position-relative">
            {/* ************************ Header **************************** */}
            <header className="dashboard-header">
                <div className="d-flex align-items-center justify-content-start">
                    <h4 className="m0 d-none d-lg-block">Edit Tasks</h4>
                    {/* /.user-data */}
                </div>
            </header>
            {/* End Header */}
            <h2 className="main-title d-block d-lg-none">Add New Property</h2>
            <div className="card-box border-20 border-dark" style={{
              backgroundImage: 'url(https://zorik-wp.egenstheme.com/wp-content/themes/zorik/assets/image/standard/Background-8.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100%',
              height: 'auto',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
                <h4 className="dash-title-three text-primary">Edit Task</h4>
                <form onSubmit={handleSubmit}>
                    <div className="dash-input-wrapper mb-30">
                        <label htmlFor="title">Task Title*</label>
                        <input
                            type="text"
                            name="title"
                            value={taskData.title}
                            onChange={handleChange}
                            placeholder="Enter Task Title"
                            required
                        />
                    </div>
                    <div className="dash-input-wrapper mb-30">
                        <label htmlFor="description">Description*</label>
                        <textarea
                            className="size-lg"
                            name="description"
                            value={taskData.description}
                            onChange={handleChange}
                            placeholder="Task Description"
                            required
                        />
                    </div>

                    <div className="row align-items-end">
                        <div className="col-md-3">
                            <div className="dash-input-wrapper mb-30">
                                <label htmlFor="dueDate">Due Date*</label>
                                <input
                                    type="date"
                                    name="dueDate"
                                    value={taskData.dueDate?.slice(0, 10)} // Format the date
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dash-input-wrapper mb-30">
                                <label htmlFor="priority">Priority*</label>
                                <select
                                    className="nice-select w-100"
                                    name="priority"
                                    value={taskData.priority}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dash-input-wrapper mb-30">
                                <label htmlFor="category">Category*</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={taskData.category}
                                    onChange={handleChange}
                                    placeholder="Enter Task Category"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dash-input-wrapper mb-30">
                                <label htmlFor="status">Status*</label>
                                <select
                                    className="nice-select w-100"
                                    name="status"
                                    value={taskData.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 h-100 mb-auto mt-auto align-items-top" style={{ textAlign: 'center' }}>
                            <div className="button-group d-inline-flex align-items-center mb-auto">
                                <button
                                    type="submit"
                                    className="dash-btn-two tran3s me-3 bg-primary"
                                >
                                    Update Task
                                </button>
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
    );
};

export default EditTask;