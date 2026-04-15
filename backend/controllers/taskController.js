import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.find().populate("user", "email");
    } else {
      tasks = await Task.find({ user: req.user.id });
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });


    if (
      req.user.role !== "admin" &&
      task.user.toString() !== req.user.id
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    if (
      req.user.role !== "admin" &&
      task.user.toString() !== req.user.id
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    if (
      req.user.role !== "admin" &&
      task.user.toString() !== req.user.id
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};