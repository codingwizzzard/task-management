import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Aside from "./Aside";
import Header from "./Header";

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("dueDate");
  const [order, setOrder] = useState("asc");
  const [filters, setFilters] = useState({ title: "", status: "" });

  useEffect(() => {
    fetchTasks();
  }, [page, sortBy, order, filters]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tasks`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params: { page, limit, sortBy, order, ...filters },
      });

      setTasks(response.data.tasks || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load tasks.");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      toast.success("Task deleted successfully!");

      if (tasks.length === 1 && page > 1) {
        setPage(1);
      } else {
        fetchTasks();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete task.");
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const getStatusClass = (status) => {
    if (status === "Completed") {
      return (
        <span className="badge bg-success">
          <i className="fa-solid fa-check me-1"></i>
          Completed
        </span>
      )
    } else if (status === "Pending") {
      return (
        <span className="badge bg-warning">
          <i className="fa-solid fa-clock me-1"></i>
          Pending
        </span>
      )
    }
    return "";
  };

  return (
    <div className="dashboard-body">
      <Aside />

      <header className="dashboard-header">
        <Header />
      </header>
      <h4 className="text-center text-primary">View Tasks</h4>
      <div className="bg-white card-box p-0 border-20">
        <div className="d-flex justify-content-between align-items-center pt-25 pe-4 ps-4">
          <input
            type="text"
            name="title"
            placeholder="Search by Title"
            value={filters.title}
            onChange={handleFilterChange}
            className="form-control form-control-sm me-2"
            style={{ width: '825px' }}
          />
          <div className="d-flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-select form-select-sm"
            >
              <option value="title">Title</option>
              <option value="dueDate">Due Date</option>
            </select>
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="form-select form-select-sm"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        <div style={{ maxHeight: "calc(100vh - 300px)", overflow: "auto" }}>
          <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
            <table className="table saved-search-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Priority</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td className="p-2">
                        {getStatusClass(task.status)}
                      </td>
                      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                      <td>{task.priority}</td>
                      <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <Link to={`/task/edit/${task._id}`}>
                            <i className="fa-solid fa-pencil pt-3 text-primary" ></i>
                          </Link>
                          <button
                            onClick={() => deleteTask(task._id)}
                            className="btn btn-link text-danger"
                          >
                            <i className="fa-solid fa-trash text-danger"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No tasks found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center pb-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ms-2 btn-sm ${page === index + 1 ? "btn-primary" : "btn-outline-primary border"
                  }`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTasks;
