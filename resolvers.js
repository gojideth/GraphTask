const task = require('./models/task');
const Task = require('./models/task')

const resolvers = {
  Query: {
    hello: () => "Hello world",
    getAllTasks: async() =>  {
      const tasks = await Task.find();
      return tasks;
    },
    getTask: async(_,args) =>{
      const task = await Task.findById(args.id);
      return task;
    }
  },

  Mutation:{
    createTask: async (_, args) =>{
      const {title, description} = args.task;
      const newTask = new Task({title,description})
      console.log(newTask);
      await newTask.save();
      return newTask;
    },
    deleteTask: async (_, {id}) =>{
      await Task.findByIdAndDelete(id);
      return `Task with ID ${id} deleted`;
    },
    updateTask : async (_,{id, task})=>{
      const taskUpdated = await Task.findByIdAndUpdate(id, {
        $set:task
      }, {new:true})
      return taskUpdated;

    }

  }
};

module.exports = { resolvers };
