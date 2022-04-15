const {connect} = require('mongoose');

const connectDB = async ()=> {
  try {
    const uri = 
    await connect("mongodb+srv://gojideth:123@cluster0.k78yn.mongodb.net/myFirstDatabase")
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error);
  }
}

module.exports = {connectDB};

//mongodb+srv://<username>:<password>@Cluster0.izmjf.mongodb.net"