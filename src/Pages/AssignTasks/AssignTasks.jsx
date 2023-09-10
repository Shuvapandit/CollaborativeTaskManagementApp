import React, { useEffect, useState } from "react";

function Task({
  title,
  description,
  dueDate,
  priority,
  assignedTo,
  status,
  onStatusChange,
}) {
  const handleStatusChange = (e) => {
    onStatusChange(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">Description: {description}</p>
      <p className="text-gray-600">Due Date: {dueDate}</p>
      <p className="text-gray-600">Priority: {priority}</p>
      <p className="text-gray-600">Assigned To: {assignedTo}</p>
      <div className="mb-2">
        <label>Status:</label>
        <select
          name="status"
          value={status}
          onChange={handleStatusChange}
          className="ml-2 p-2 rounded-lg shadow-sm"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}

function AssignTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    assignedTo: "",
    status: "In Progress", // Default status
  });
  // Define a function to save tasks to localStorage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      assignedTo: "",
      status: "In Progress", // Reset status for the next task
    });
    // Save tasks to localStorage after adding a new task
    saveTasksToLocalStorage([...tasks, newTask]);
  };

  // Custom sorting function
  const customSort = (a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  };

  // Sort the tasks by priority
  const sortedTasks = [...tasks].sort(customSort);

  // Team members array (you can replace this with your team members' names)
  const teamMembers = ["Team Member 1", "Team Member 2", "Team Member 3"];

  const handleStatusChange = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
    // Save tasks to localStorage after updating the status
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Assign Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 rounded-lg mb-2 shadow-sm"
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          required
          className="w-full p-2 rounded-lg mb-2 shadow-sm"
        ></textarea>
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
          required
          className="w-full p-2 rounded-lg mb-2 shadow-sm"
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
          required
          className="w-full p-2 rounded-lg mb-2 shadow-sm"
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          name="assignedTo"
          value={newTask.assignedTo}
          onChange={handleInputChange}
          required
          className="w-full p-2 rounded-lg mb-2 shadow-sm"
        >
          <option value="">Assign To</option>
          {teamMembers.map((member, index) => (
            <option key={index} value={member}>
              {member}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Add Task
        </button>
      </form>
      <div className="mt-5">
        {sortedTasks.map((task, index) => (
          <Task
            key={index}
            {...task}
            onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
          />
        ))}
      </div>
    </div>
  );
}

export default AssignTasks;
