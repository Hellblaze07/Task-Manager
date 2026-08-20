const Task= require("../models/tasks.js")
const getAlltasks=(req,res) => {
    res.send('all items');
}

const createTask= async(req,res) => {
    try{
    const task= await Task.create(req.body);
    res.status(201).json({task});
    }
    catch {
        res.status(500).json({msg:error});
    }
}
const getTask= (req,res) => {
    res.json({id:req.params.id});
}
const updateTask= (req,res) => {
    res.send("update task");
}
const deleteTask= (req,res) => {
    res.send("delete task");
}

module.exports={getAlltasks,createTask,getTask,updateTask,deleteTask};