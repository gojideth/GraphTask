const Task = require('./models/task')

const resolvers = {
  Query: {
    hello: () => "Hello world",
    getAllTasks: async() =>  {
      const tasks = await Task.find();
      console.log(tasks);
      return tasks;
    }
  },

  Mutation:{
    createTask: async (_, args) =>{
      const {title, description} = args;
      const newTask = new Task({title,description})
      console.log(newTask);
      await newTask.save();
      return newTask;
    }
  }
};

module.exports = { resolvers };
